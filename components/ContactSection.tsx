"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/content/portfolio";
import styles from "@/app/page.module.css";

export function ContactSection() {
  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setToast("이메일 주소가 복사되었습니다.");
    } catch {
      setToast("복사하지 못했습니다. 이메일 주소를 직접 선택해 주세요.");
    }

    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2400);
  }

  return (
    <section className={styles.contactSection} id="contact" aria-labelledby="contact-title">
      <p className={styles.kicker} id="contact-title"><span>07</span> Contact</p>
      <button className={styles.contactMail} type="button" onClick={copyEmail} aria-label={`${profile.email} 클립보드에 복사`}>
        <strong>{profile.nameKo}</strong>
        <span>{profile.nameEn}</span>
        <small>{profile.email}</small>
        <span className={styles.contactCopyCue} aria-hidden="true">Copy email <i>→</i></span>
      </button>
      <a className={styles.githubLink} href={profile.github} target="_blank" rel="noreferrer">
        GitHub <span>{profile.github.replace("https://", "")}</span>
      </a>
      <div className={styles.rightsNotice}>
        <span>Notice</span>
        <p>본 사이트에 소개된 작업물은 모두 본인이 직접 참여하거나 제작한 콘텐츠입니다.<br />비공개 실무 프로젝트는 담당 역할과 범위만 요약해 소개합니다.</p>
      </div>
      <a className={styles.backToTop} href="#profile" aria-label="맨 위로 이동">
        <span aria-hidden="true">↑</span>
        <small aria-hidden="true">Top</small>
      </a>
      {toast && <div className={styles.contactToast} role="status" aria-live="polite" aria-atomic="true">{toast}</div>}
    </section>
  );
}
