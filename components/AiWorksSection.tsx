"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/content/portfolio";
import { assetPath } from "@/lib/asset-path";
import { getYouTubeEmbedUrl, getYouTubeThumbnailUrl } from "@/lib/youtube";
import { TrackBadge } from "@/components/TrackBadge";
import styles from "@/app/page.module.css";

type AiWorksSectionProps = {
  id: string;
  index: string;
  kicker: string;
  heading: string;
  countLabel: React.ReactNode;
  projects: Project[];
};

export function AiWorksSection({ id, index, kicker, heading, countLabel, projects }: AiWorksSectionProps) {
  return (
    <section className={styles.workSection} id={id} data-track="ai" aria-labelledby={`${id}-title`}>
      <header className={styles.sectionHeader}>
        <div>
          <p className={styles.kicker}><span>{index}</span> {kicker}</p>
          <h2 id={`${id}-title`}>{heading}</h2>
        </div>
        <div className={styles.count}><strong>{String(projects.length).padStart(2, "0")}</strong><span>{countLabel}</span></div>
      </header>

      <div className={styles.caseStudyList}>
        {projects.map((project) => <CaseStudyItem key={project.id} project={project} />)}
      </div>
    </section>
  );
}

function CaseStudyItem({ project }: { project: Project }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const images = project.gallery ?? (project.thumbnail ? [project.thumbnail] : []);
  const isMulti = images.length > 1;
  const embedUrl = project.youtubeUrl ? getYouTubeEmbedUrl(project.youtubeUrl) : null;
  const videoThumb = project.youtubeUrl ? getYouTubeThumbnailUrl(project.youtubeUrl) : null;

  return (
    <article className={styles.caseStudyItem}>
      <div className={`${styles.caseStudyMedia} ${isMulti ? styles.caseStudyMediaMulti : ""}`}>
        {embedUrl ? (
          isPlaying ? (
            <iframe
              src={embedUrl}
              title={`${project.title} YouTube 영상`}
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className={styles.caseStudyPlayThumb}
              onClick={() => setIsPlaying(true)}
              aria-label={`${project.title} 영상 재생`}
            >
              {videoThumb && <Image src={videoThumb} alt="" fill unoptimized sizes="(max-width: 1024px) 100vw, 66vw" />}
              <span className={styles.play}>▶</span>
            </button>
          )
        ) : (
          images.map((src, i) => (
            <div key={src} className={styles.caseStudyMediaItem}>
              <Image src={assetPath(src)} alt="" fill sizes="(max-width: 1024px) 100vw, 66vw" />
              {project.galleryLabels?.[i] && <span className={styles.caseStudyMediaLabel}>{project.galleryLabels[i]}</span>}
            </div>
          ))
        )}
      </div>
      <div className={styles.caseStudyInfo}>
        <small>{project.category}</small>
        <h3>{project.title}</h3>
        <span className={styles.caseStudyRole}>{project.role}</span>
        {project.tracks.length > 1 && <TrackBadge tracks={project.tracks} />}
        {project.summary && <p className={styles.caseStudySummary}>{project.summary}</p>}
        {project.tools && (
          <div className={styles.caseStudyTools}>
            {project.tools.map((tool) => (
              <div key={tool.name} className={styles.caseStudyToolChip}>
                <p className={styles.caseStudyToolHead}><span aria-hidden="true">{tool.icon}</span><strong>{tool.name}</strong></p>
                <p>{tool.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
