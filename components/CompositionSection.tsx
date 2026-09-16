"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Channel } from "@/content/portfolio";
import { assetPath } from "@/lib/asset-path";
import { VideoDialog, type VideoDialogHandle } from "@/components/VideoDialog";
import styles from "@/app/page.module.css";

const KEY_COUNT = 24;
const MARQUEE_SECONDS_PER_ITEM = 2.6;

export function CompositionSection({ id, index, channel }: { id: string; index: string; channel: Channel }) {
  const dialogRef = useRef<VideoDialogHandle>(null);
  if (channel.mediaLayout !== "marquee") return null;

  const marqueeAlbums = [...channel.albums, ...channel.albums];
  const duration = `${(channel.albums.length * MARQUEE_SECONDS_PER_ITEM).toFixed(1)}s`;

  return (
    <section className={styles.compositionSection} id={id} aria-labelledby={`${id}-title`}>
      <div className={styles.compositionKeys} aria-hidden="true">
        {Array.from({ length: KEY_COUNT }, (_, i) => <i key={i} data-sharp={[1, 3, 6, 8, 10].includes(i % 12) ? "true" : undefined} />)}
      </div>
      <div className={styles.compositionLayout}>
        <div className={styles.compositionContent}>
          <p className={styles.kicker}><span>{index}</span> Composition</p>
          <h2 id={`${id}-title`}>{channel.name}</h2>
          <p className={styles.compositionSubtitle}>YouTube Channel · Piano · Self-composed</p>
          <p className={styles.channelAiScope}>{channel.aiScope}</p>
          <p className={styles.compositionText}>{channel.description}</p>
          <p className={styles.compositionStat}>{channel.stat}</p>
          <a className={styles.compositionLink} href={channel.url} target="_blank" rel="noreferrer">
            유튜브 채널 방문 <span>↗</span>
          </a>
        </div>
        <a
          className={styles.compositionLogo}
          href={channel.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${channel.name} 유튜브 채널 방문`}
        >
          <Image src={assetPath(channel.avatar)} alt={`${channel.name} 로고`} fill sizes="(max-width: 1024px) 140px, 240px" />
        </a>
      </div>

      <div className={styles.compositionAlbums}>
        <div className={styles.compositionAlbumsTrack} style={{ "--marquee-duration": duration } as React.CSSProperties}>
          {marqueeAlbums.map((album, i) => {
            const isDuplicate = i >= channel.albums.length;
            return (
              <button
                key={`${album.cover}-${i}`}
                type="button"
                className={styles.compositionAlbumCover}
                onClick={album.url ? () => dialogRef.current?.open(album.title, album.url!) : undefined}
                disabled={!album.url}
                aria-label={album.url ? `${album.title} 재생` : album.title}
                aria-hidden={isDuplicate || undefined}
                tabIndex={isDuplicate ? -1 : undefined}
              >
                <Image src={assetPath(album.cover)} alt="" fill sizes="140px" loading="eager" />
                <em>{album.title}</em>
                {album.url && <span className={styles.contentVideoPlay} aria-hidden="true">▶</span>}
              </button>
            );
          })}
        </div>
      </div>

      <VideoDialog ref={dialogRef} />
    </section>
  );
}
