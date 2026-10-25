import Image from "next/image";
import type { ServiceReader } from "@/content/portfolio";
import { assetPath } from "@/lib/asset-path";
import styles from "@/app/page.module.css";

export function ServiceReaders({ readers }: { readers: ServiceReader[] }) {
  return (
    <aside className={styles.readers} aria-label="세 가게">
      <p className={styles.readersKicker}>Three Shops · 세 자매의 가게</p>
      <ul>
        {readers.map((reader) => (
          <li key={reader.id} className={styles.reader}>
            <div className={styles.readerImage}>
              <Image src={assetPath(reader.image)} alt={`${reader.role}`} fill sizes="88px" />
            </div>
            <div className={styles.readerInfo}>
              <small>
                {reader.shop} · {reader.role}
                {reader.status && <span className={styles.readerSoon}>{reader.status}</span>}
              </small>
              <h3>{reader.name}</h3>
              <p>{reader.line}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
