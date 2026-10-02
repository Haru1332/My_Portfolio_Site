import type { Metadata } from "next";
import Image from "next/image";
import { Gowun_Dodum, Jua } from "next/font/google";
import { AutoVideo } from "@/components/products/AutoVideo";
import { FeatureTabs, type FeatureTab } from "@/components/products/FeatureTabs";
import { labProducts } from "@/content/lab";
import { assetPath } from "@/lib/asset-path";
import styles from "@/components/products/product.module.css";

const jua = Jua({ subsets: ["latin"], weight: "400", variable: "--font-jua", display: "swap" });
const gowun = Gowun_Dodum({ subsets: ["latin"], weight: "400", variable: "--font-gowun", display: "swap" });

export const metadata: Metadata = {
  title: "쏙쏙 — 흩어진 파일을 제자리에 | Haru Lab",
  description: "이름 정리, 폴더 분류, 중복 정리, 파일 변환까지. 미리보기와 되돌리기를 지원하는 Windows 파일 정리 프로그램.",
};

const media = (name: string) => `/assets/products/sokssok/${name}`;
const betaMail = labProducts.find((product) => product.id === "sokssok")!.mail;

const tabs: FeatureTab[] = [
  { id: "scan", label: "폴더 고르기", title: "폴더 고르기", description: "폴더 안의 사진·영상·문서를 바로 파악합니다", video: media("home.mp4"), poster: media("home-poster.jpg") },
  { id: "rename", label: "이름 정리", title: "이름 정리", description: "‘KakaoTalk_’, ‘(1)’ 같은 군더더기를 한 번에 지웁니다", video: media("rename.mp4"), poster: media("rename-poster.jpg") },
  { id: "sort", label: "폴더로 분류", title: "폴더로 분류", description: "종류·연도·월 기준으로 폴더를 나눕니다", video: media("sort.mp4"), poster: media("sort-poster.jpg") },
  { id: "dupes", label: "중복 · 버전", title: "중복 · 버전", description: "중복 파일과 여러 버전 파일을 하나로 정리합니다", video: media("ver.mp4"), poster: media("ver-poster.jpg") },
];

const trust = ["실행 전 미리보기", "언제든 되돌리기", "오프라인 동작", "간편 설치"];

const principles = [
  { icon: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 100-6 3 3 0 000 6z", title: "미리보기 후 실행", text: "바뀔 결과를 확인한 뒤에만 실행됩니다." },
  { icon: "M3 12a9 9 0 109-9M3 4v5h5", title: "실행 취소", text: "휴지통으로 보낸 파일까지 되돌릴 수 있습니다." },
  { icon: "M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6zM9.5 12.5l2 2 3.5-4", title: "보호 폴더 제외", text: "시스템 폴더와 클라우드 전용 파일은 자동으로 건너뜁니다." },
  { icon: "M4 5h16v11H4zM8 20h8M12 16v4", title: "오프라인 동작", text: "파일이 외부로 전송되지 않습니다." },
];

export default function SokssokPage() {
  return (
    <div className={`${styles.page} ${styles.sok} ${jua.variable} ${gowun.variable}`} id="top">
      <div className={styles.subnav}>
        <a href="#top" className={styles.subnavName}><Image src={assetPath(media("icon.svg"))} alt="" width={22} height={22} className={styles.productIcon} />쏙쏙</a>
        <nav aria-label="쏙쏙 메뉴">
          <a href="#how">작동 방식</a>
          <a href="#features">기능</a>
          <a href="#principles">안전</a>
          <a href={betaMail} className={styles.navCta}>베타 신청</a>
        </nav>
      </div>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.badge}>
              <Image src={assetPath(media("icon.svg"))} alt="" width={22} height={22} className={styles.productIcon} />
              쏙쏙 · Windows 베타
            </p>
            <h1>흩어진 파일을<br /><em>제자리에 쏙쏙</em></h1>
            <p className={styles.lead}>이름 정리, 폴더 분류, 중복 정리까지 클릭 몇 번이면 끝납니다.</p>
            <div className={styles.ctas}>
              <a href={betaMail} className={styles.primary}>베타 신청하기</a>
              <a href="#how" className={styles.ghost}>작동 방식 보기 →</a>
            </div>
          </div>
          <div className={`${styles.frame} ${styles.heroFrame}`}>
            <div className={styles.frameBar} aria-hidden="true"><i /><i /><i /></div>
            <AutoVideo src={media("tour.mp4")} poster={media("tour-poster.jpg")} label="이름 정리, 폴더 분류, 중복 찾기 화면 녹화" className={styles.media} />
          </div>
        </section>

        <ul className={styles.trust} aria-label="핵심 특징">
          {trust.map((item) => <li key={item}>{item}</li>)}
        </ul>

        <section className={styles.section} id="how" aria-labelledby="how-title">
          <p className={styles.eyebrow}>작동 방식</p>
          <h2 id="how-title">폴더만 고르면 됩니다</h2>
          <FeatureTabs tabs={tabs} />
        </section>

        <section className={styles.section} id="features" aria-labelledby="features-title">
          <p className={styles.eyebrow}>기능</p>
          <h2 id="features-title">더 많은 기능</h2>
          <div className={styles.bento}>
            <article className={styles.card}>
              <div className={styles.cardText}>
                <h3>자동 감시</h3>
                <p>새로 받은 파일을 규칙에 따라 자동으로 정리합니다.</p>
              </div>
              <Image src={assetPath(media("card-watch.png"))} alt="자동 감시 설정과 감시 규칙 화면" width={834} height={520} className={`${styles.cardMedia} ${styles.cardMediaNatural}`} />
            </article>
            <article className={styles.card}>
              <div className={styles.cardText}>
                <h3>파일 변환</h3>
                <p>이미지·영상·문서 형식을 원본 그대로 두고 변환합니다.</p>
              </div>
              <Image src={assetPath(media("card-convert.png"))} alt="이미지 형식 변환 화면" width={820} height={460} className={`${styles.cardMedia} ${styles.cardMediaNatural}`} />
            </article>
          </div>
        </section>

        <section className={styles.section} id="principles" aria-labelledby="principles-title">
          <p className={styles.eyebrow}>안전</p>
          <h2 id="principles-title">내 파일은 안전하게</h2>
          <div className={styles.principles}>
            {principles.map((item) => (
              <div key={item.title} className={styles.principle}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d={item.icon} /></svg>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Windows 베타를 사용해 보세요</h2>
          <a href={betaMail} className={styles.primaryLight}>베타 신청하기</a>
        </section>
      </main>

    </div>
  );
}
