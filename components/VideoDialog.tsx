"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { getYouTubeEmbedUrl } from "@/lib/youtube";
import styles from "@/app/page.module.css";

export type VideoDialogHandle = { open: (title: string, url: string) => void };

type ActiveVideo = { title: string; url: string };

export const VideoDialog = forwardRef<VideoDialogHandle>(function VideoDialog(_props, ref) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<ActiveVideo | null>(null);

  useImperativeHandle(ref, () => ({
    open(title: string, url: string) {
      setActive({ title, url });
      window.requestAnimationFrame(() => dialogRef.current?.showModal());
    },
  }));

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => setActive(null);
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  const embedUrl = active ? getYouTubeEmbedUrl(active.url) : null;

  return (
    <dialog
      ref={dialogRef}
      className={styles.channelVideoDialog}
      aria-label={active?.title ?? "영상 재생"}
      onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}
    >
      <button className={styles.dialogClose} type="button" onClick={() => dialogRef.current?.close()} aria-label="닫기">
        닫기 <span>×</span>
      </button>
      <div className={styles.channelVideoFrame}>
        {embedUrl && (
          <iframe
            src={embedUrl}
            title={active?.title}
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
      {active && <p className={styles.channelVideoTitle}>{active.title}</p>}
    </dialog>
  );
});
