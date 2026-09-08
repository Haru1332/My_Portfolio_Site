import type { Track } from "@/content/portfolio";
import styles from "@/app/page.module.css";

const trackLabel: Record<Track, string> = { ai: "AI", sound: "Sound" };

export function TrackBadge({ tracks }: { tracks: Track[] }) {
  return (
    <span className={styles.trackBadge}>
      {tracks.map((track) => <span key={track} data-track={track}><i />{trackLabel[track]}</span>)}
    </span>
  );
}
