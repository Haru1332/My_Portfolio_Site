import type { Metadata } from "next";
import Image from "next/image";
import { contactMail, labProducts } from "@/content/lab";
import { assetPath } from "@/lib/asset-path";
import styles from "@/components/lab/lab.module.css";

export const metadata: Metadata = {
  title: "Haru Lab | 이음 · 쏙쏙",
  description: "내 노트로 콘텐츠를 만드는 이음과 Windows 파일 정리 프로그램 쏙쏙. 지금 베타로 사용해 보세요.",
};

export default function LabHomePage() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <p className={styles.heroBadge}><span /> 베타 오픈</p>
        <h1>영상 기획부터<br /><em>파일 정리까지</em></h1>
        <p className={styles.heroLead}>번거로운 작업은 줄이고, 중요한 일에 집중하세요.</p>
        <div className={styles.heroCtas}>
          <a href="#products" className={styles.primary}>제품 보기</a>
          <a href={contactMail} className={styles.ghost}>문의하기 →</a>
        </div>
        <div className={styles.showcase}>
          {labProducts.map((product) => (
            <a key={product.id} href={assetPath(product.href)} className={styles.showcaseItem} data-product={product.id}>
              <div className={styles.frame}>
                <div className={styles.frameBar} aria-hidden="true"><i /><i /><i /></div>
                <Image src={assetPath(product.image)} alt={product.imageAlt} width={product.imageSize[0]} height={product.imageSize[1]} className={styles.frameMedia} priority />
              </div>
              <span className={styles.showcaseLabel}>{product.name} <span aria-hidden="true">→</span></span>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.section} id="products" aria-labelledby="products-title">
        <p className={styles.eyebrow}>제품</p>
        <h2 id="products-title">필요한 도구를 골라 보세요</h2>
        <div className={styles.productList}>
          {labProducts.map((product) => (
            <article key={product.id} className={styles.productCard} data-product={product.id}>
              <div className={styles.productText}>
                <p className={styles.productPlatform}>{product.platform}</p>
                <h3>{product.name}</h3>
                <p className={styles.productTagline}>{product.tagline}</p>
                <p className={styles.productDesc}>{product.description}</p>
                <ul>
                  {product.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <div className={styles.productCtas}>
                  <a href={assetPath(product.href)} className={styles.productPrimary}>자세히 보기</a>
                  <a href={product.mail} className={styles.productGhost}>베타 신청</a>
                </div>
              </div>
              <a href={assetPath(product.href)} className={styles.productMedia} tabIndex={-1} aria-hidden="true">
                <Image src={assetPath(product.detailImage)} alt="" width={product.imageSize[0]} height={product.imageSize[1]} className={styles.frameMedia} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.contact} id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">지금 베타로 사용해 보세요</h2>
        <p>신청하시면 이용 방법을 메일로 보내 드립니다.</p>
        <div className={styles.contactCtas}>
          {labProducts.map((product) => (
            <a key={product.id} href={product.mail} className={styles.contactButton}>{product.name} 베타 신청</a>
          ))}
        </div>
      </section>
    </main>
  );
}
