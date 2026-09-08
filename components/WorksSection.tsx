"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import type { Project, Track } from "@/content/portfolio";
import { assetPath } from "@/lib/asset-path";
import { getYouTubeEmbedUrl, getYouTubeThumbnailUrl } from "@/lib/youtube";
import styles from "@/app/page.module.css";

const trackLabel: Record<Track, string> = { ai: "AI", sound: "Sound" };

function projectThumbnail(project: Project) {
  if (project.thumbnail) return project.thumbnail;
  if (project.youtubeUrl) return getYouTubeThumbnailUrl(project.youtubeUrl) ?? undefined;
  return undefined;
}

function TrackBadge({ tracks }: { tracks: Track[] }) {
  return (
    <span className={styles.trackBadge}>
      {tracks.map((track) => <span key={track} data-track={track}><i />{trackLabel[track]}</span>)}
    </span>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const thumbnail = projectThumbnail(project);

  if (!thumbnail) {
    return (
      <span className={`${styles.projectVisual} ${styles.pendingVisual}`} aria-hidden="true">
        <span className={styles.pendingWave}>{Array.from({ length: 8 }, (_, index) => <i key={index} />)}</span>
        <span className={styles.pendingLock}>🔒</span>
      </span>
    );
  }

  const isRemote = thumbnail.startsWith("http");

  return (
    <span className={styles.projectVisual} aria-hidden="true">
      {isRemote
        ? <Image src={thumbnail} alt="" fill unoptimized sizes={project.featured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 33vw, 33vw"} />
        : <Image src={assetPath(thumbnail)} alt="" fill sizes={project.featured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 33vw, 33vw"} />}
      {project.youtubeUrl && <span className={styles.play}>▶</span>}
    </span>
  );
}

type WorksSectionProps = {
  id: string;
  index: string;
  kicker: string;
  heading: string;
  countLabel: ReactNode;
  projects: Project[];
  track: Track;
};

export function WorksSection({ id, index, kicker, heading, countLabel, projects, track }: WorksSectionProps) {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => {
      setIsOpen(false);
      lastTrigger.current?.focus();
    };
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  function openProject(project: Project, event: MouseEvent<HTMLElement>) {
    setActiveProject(project);
    setIsOpen(true);
    lastTrigger.current = event.currentTarget;
    window.requestAnimationFrame(() => dialogRef.current?.showModal());
  }

  const embedUrl = activeProject.youtubeUrl ? getYouTubeEmbedUrl(activeProject.youtubeUrl) : null;
  const dialogThumbnail = projectThumbnail(activeProject);

  return (
    <section className={styles.workSection} id={id} data-track={track} aria-labelledby={`${id}-title`}>
      <header className={styles.sectionHeader}>
        <div>
          <p className={styles.kicker}><span>{index}</span> {kicker}</p>
          <h2 id={`${id}-title`}>{heading}</h2>
        </div>
        <div className={styles.count}><strong>{String(projects.length).padStart(2, "0")}</strong><span>{countLabel}</span></div>
      </header>

      <div className={styles.projectGrid} data-count={projects.length}>
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className={`${styles.projectCard} ${project.featured ? styles.featuredCard : styles.secondaryCard}`}
            aria-label={`${project.title} 상세 보기`}
            onClick={(event) => openProject(project, event)}
          >
            <ProjectVisual project={project} />
            <span className={styles.projectInfo}>
              <small>{project.category}</small>
              <strong>{project.shortTitle}</strong>
              <span>{project.role}</span>
              {project.tracks.length > 1 && <TrackBadge tracks={project.tracks} />}
              {project.confidential && <em className={styles.confidentialTag}>Confidential</em>}
            </span>
          </button>
        ))}
      </div>

      <dialog ref={dialogRef} className={styles.projectDialog} aria-labelledby={`${id}-dialog-title`} onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
        <div className={styles.dialogLayout}>
          <button className={styles.dialogClose} type="button" onClick={() => dialogRef.current?.close()} aria-label="상세 닫기">닫기 <span>×</span></button>
          <div className={styles.dialogVisual}>
            {isOpen && embedUrl ? (
              <iframe
                src={embedUrl}
                title={`${activeProject.title} YouTube 영상`}
                allow="autoplay; encrypted-media; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : dialogThumbnail ? (
              <div className={styles.dialogImage}>
                <Image
                  src={dialogThumbnail.startsWith("http") ? dialogThumbnail : assetPath(dialogThumbnail)}
                  alt=""
                  fill
                  unoptimized={dialogThumbnail.startsWith("http")}
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
            ) : (
              <div className={styles.dialogFallback}>
                <span className={styles.dialogLockIcon} aria-hidden="true">🔒</span>
                <p>{activeProject.confidentialNote ?? "비공개 프로젝트로 상세 자료를 제공하지 않습니다."}</p>
              </div>
            )}
          </div>
          <div className={styles.dialogInfo}>
            <div className={styles.dialogTitle}>
              <p className={styles.kicker}><span>{activeProject.order}</span> {kicker}</p>
              <h2 id={`${id}-dialog-title`}>{activeProject.title}</h2>
              {activeProject.tracks.length > 1 && <TrackBadge tracks={activeProject.tracks} />}
            </div>
            <div className={styles.dialogMeta}>
              <dl>
                <div><dt>Type</dt><dd>{activeProject.category}</dd></div>
                <div><dt>Scope</dt><dd>{activeProject.role}</dd></div>
              </dl>
              {activeProject.confidential && dialogThumbnail && (
                <p className={styles.dialogNote}>{activeProject.confidentialNote}</p>
              )}
              {activeProject.youtubeUrl && (
                <a className={styles.dialogPlay} href={activeProject.youtubeUrl} target="_blank" rel="noreferrer">YouTube에서 열기 <span>↗</span></a>
              )}
            </div>
          </div>
        </div>
      </dialog>
    </section>
  );
}
