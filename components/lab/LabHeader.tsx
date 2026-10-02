"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { contactMail, labHome, labProducts } from "@/content/lab";
import { assetPath } from "@/lib/asset-path";
import styles from "@/components/lab/lab.module.css";

/** Site-wide Haru Lab bar shared by the home and every product page. */
export function LabHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a href={assetPath(labHome)} className={styles.brand}>
          <span className={styles.logo} aria-hidden="true">H</span>
          Haru Lab
        </a>
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="lab-menu"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" />
        </button>
        <nav id="lab-menu" className={styles.menu} data-open={open} aria-label="Haru Lab 메뉴">
          {labProducts.map((product) => (
            <a
              key={product.id}
              href={assetPath(product.href)}
              aria-current={pathname?.startsWith(product.href.replace(/\/$/, "")) ? "page" : undefined}
              onClick={close}
            >
              {product.name}
            </a>
          ))}
          <a href={assetPath("/")} className={styles.portfolioLink} onClick={close}>포트폴리오</a>
          <a href={contactMail} className={styles.headerCta} onClick={close}>문의하기</a>
        </nav>
      </div>
    </header>
  );
}
