"use client";

import { useState } from "react";
import styles from "@/components/products/product.module.css";

type Kind = "사진" | "문서" | "영상";
/** A file name split into kept text and junk that the cleanup removes. */
type DemoFile = { kind: Kind; parts: Array<string | { junk: string }> };

const files: DemoFile[] = [
  { kind: "사진", parts: [{ junk: "KakaoTalk_" }, "20250312_142233.jpg"] },
  { kind: "문서", parts: ["기획안", { junk: "_최종_진짜최종(2)" }, ".docx"] },
  { kind: "영상", parts: ["녹화_2025-03-10", { junk: " (2)" }, ".mp4"] },
  { kind: "사진", parts: ["IMG_0423", { junk: " (1)" }, ".jpg"] },
  { kind: "문서", parts: ["견적서", { junk: " - 복사본" }, ".pdf"] },
  { kind: "사진", parts: ["스크린샷 2025-03-14", { junk: "_복사본" }, ".png"] },
  { kind: "영상", parts: [{ junk: "KakaoTalk_" }, "Video_20250311.mp4"] },
  { kind: "문서", parts: ["회의록", { junk: "(1)" }, ".hwp"] },
];

const kinds: Kind[] = ["사진", "문서", "영상"];
const cleanName = (file: DemoFile) => file.parts.filter((part) => typeof part === "string").join("");

function FileIcon({ kind }: { kind: Kind }) {
  return <i className={styles.sokFileIcon} data-kind={kind} aria-hidden="true" />;
}

/** Try-it-yourself cleanup: messy names → cleaned names → sorted into folders → undo. */
export function SokDemo() {
  const [phase, setPhase] = useState<"messy" | "renamed" | "sorted">("messy");

  const action = {
    messy: { label: "이름 정리하기", next: "renamed" as const },
    renamed: { label: "폴더로 분류하기", next: "sorted" as const },
    sorted: { label: "되돌리기", next: "messy" as const },
  }[phase];

  const status = {
    messy: "다운로드 폴더 · 파일 8개",
    renamed: "이름 8개를 정리했습니다",
    sorted: "폴더 3개로 분류했습니다",
  }[phase];

  return (
    <div className={styles.sokDemo} data-phase={phase}>
      <div className={styles.sokDemoBar}>
        <p aria-live="polite"><span className={styles.sokDemoDot} />{status}</p>
        <button type="button" className={phase === "sorted" ? styles.sokDemoUndo : styles.sokDemoButton} onClick={() => setPhase(action.next)}>
          {action.label}
        </button>
      </div>

      {/* Both layouts are always rendered in the same grid cell, so the box keeps the taller one's height
          and the page never jumps. Remounting the visible layer (key) replays its entrance animation. */}
      <div className={styles.sokStage}>
        <ul key={`list-${phase === "sorted"}`} className={styles.sokList} data-hidden={phase === "sorted"} aria-hidden={phase === "sorted"}>
          {files.map((file, index) => (
            <li key={index} style={{ "--i": index } as React.CSSProperties}>
              <FileIcon kind={file.kind} />
              <span className={styles.sokName}>
                {file.parts.map((part, partIndex) =>
                  typeof part === "string" ? part : <span key={partIndex} className={styles.sokJunk}>{part.junk}</span>,
                )}
              </span>
              <small>{file.kind}</small>
            </li>
          ))}
        </ul>
        <div key={`folders-${phase === "sorted"}`} className={styles.sokFolders} data-hidden={phase !== "sorted"} aria-hidden={phase !== "sorted"}>
          {kinds.map((kind, folderIndex) => {
            const inFolder = files.filter((file) => file.kind === kind);
            return (
              <div key={kind} className={styles.sokFolder} style={{ "--i": folderIndex } as React.CSSProperties}>
                <p className={styles.sokFolderName}><span className={styles.sokFolderIcon} aria-hidden="true" />{kind} <small>{inFolder.length}</small></p>
                <ul>
                  {inFolder.map((file, index) => (
                    <li key={cleanName(file)} style={{ "--i": folderIndex * 2 + index + 1 } as React.CSSProperties}>
                      <FileIcon kind={file.kind} />{cleanName(file)}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <p className={styles.sokSummary}>정리 기록에 저장했습니다. 되돌리기를 누르면 원래 이름과 위치로 돌아갑니다.</p>
        </div>
      </div>
    </div>
  );
}
