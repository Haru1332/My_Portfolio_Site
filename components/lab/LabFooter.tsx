import { contactMail, labHome, labProducts } from "@/content/lab";
import { profile } from "@/content/portfolio";
import { assetPath } from "@/lib/asset-path";
import styles from "@/components/lab/lab.module.css";

export function LabFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <a href={assetPath(labHome)} className={styles.brand}>
            <span className={styles.logo} aria-hidden="true">H</span>
            Haru Lab
          </a>
        </div>
        <div className={styles.footerCol}>
          <p>제품</p>
          {labProducts.map((product) => <a key={product.id} href={assetPath(product.href)}>{product.name}</a>)}
        </div>
        <div className={styles.footerCol}>
          <p>고객 지원</p>
          <a href={contactMail}>문의하기</a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© 2026 Haru Lab. All rights reserved.</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
    </footer>
  );
}
