import type { Metadata } from "next";
import Image from "next/image";
import { AutoVideo } from "@/components/products/AutoVideo";
import { GraphDemo } from "@/components/products/GraphDemo";
import { FeatureTabs, type FeatureTab } from "@/components/products/FeatureTabs";
import { labProducts } from "@/content/lab";
import { assetPath } from "@/lib/asset-path";
import styles from "@/components/products/product.module.css";

export const metadata: Metadata = {
  title: "이음 — 내 노트에서 시작하는 콘텐츠 제작 | Haru Lab",
  description: "옵시디언 노트와 외부 자료를 근거로 주제 추천, 대본 작성, YouTube·Instagram 댓글 관리까지."
};

const media = (name: string) => `/assets/products/creator/${name}`;
const betaMail = labProducts.find((product) => product.id === "ieum")!.mail;

const tabs: FeatureTab[] = [
  { id: "topics", label: "주제 찾기", description: "내 채널에 맞는 주제를 추천받으세요", video: media("topics.mp4"), poster: media("topics-poster.jpg") },
  { id: "research", label: "리서치", description: "인용문이 원문과 맞는지 자동으로 확인합니다", video: media("research.mp4"), poster: media("research-poster.jpg") },
  { id: "script", label: "대본", description: "구간별 대사와 화면 구성까지 대본 초안을 만듭니다", video: media("script.mp4"), poster: media("script-poster.jpg") },
  { id: "comments", label: "댓글 답글", description: "댓글마다 내 말투로 답글 초안을 준비합니다", video: media("comments.mp4"), poster: media("comments-poster.jpg") },
];

const trust = ["YouTube · Instagram 연동", "출처 자동 대조", "승인 후 게시", "추가 요금 없음"];

const principles = [
  { icon: "M9 12l2 2 4-4M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z", title: "근거 확인", text: "출처가 없는 수치는 따로 표시합니다." },
  { icon: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0", title: "승인 후 게시", text: "모든 답글은 확인을 거쳐야 게시됩니다." },
  { icon: "M6 11h12v10H6zM8 11V7a4 4 0 018 0v4", title: "공식 API 연동", text: "YouTube·Instagram 공식 API만 사용합니다." },
  { icon: "M4 7h16v10H4zM4 11h16M8 15h3", title: "추가 요금 없음", text: "사용 중인 Claude·ChatGPT 구독으로 동작합니다." },
];

export default function IeumPage() {
  return (
    <div className={styles.page} id="top">
      <div className={styles.subnav}>
        <a href="#top" className={styles.subnavName}><span className={styles.subnavDot} aria-hidden="true" />이음</a>
        <nav aria-label="이음 메뉴">
          <a href="#demo">체험</a>
          <a href="#how">작동 방식</a>
          <a href="#assistant">앱 비서</a>
          <a href="#features">기능</a>
          <a href="#principles">신뢰</a>
          <a href={betaMail} className={styles.navCta}>베타 신청</a>
        </nav>
      </div>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.badge}><span /> 이음 · 베타</p>
            <h1>내 노트에서 시작하는<br /><em>콘텐츠 제작</em></h1>
            <p className={styles.lead}>옵시디언 노트와 외부 자료를 근거로 주제를 고르고, 대본을 쓰고, 댓글에 답하세요.</p>
            <div className={styles.ctas}>
              <a href={betaMail} className={styles.primary}>베타 신청하기</a>
              <a href="#how" className={styles.ghost}>작동 방식 보기 →</a>
            </div>
          </div>
          <div className={`${styles.frame} ${styles.heroFrame}`}>
            <div className={styles.frameBar} aria-hidden="true"><i /><i /><i /></div>
            <AutoVideo src={media("tour.mp4")} poster={media("tour-poster.jpg")} label="주제 찾기, 리서치, 대본, 댓글 답글 화면 녹화" className={styles.media} />
          </div>
        </section>

        <ul className={styles.trust} aria-label="핵심 특징">
          {trust.map((item) => <li key={item}>{item}</li>)}
        </ul>

        <section className={styles.section} id="demo" aria-labelledby="demo-title">
          <p className={styles.eyebrow}>미리 보기</p>
          <h2 id="demo-title">주제를 고르면 내 노트에서 근거를 찾습니다</h2>
          <GraphDemo />
        </section>

        <section className={styles.section} id="how" aria-labelledby="how-title">
          <p className={styles.eyebrow}>작동 방식</p>
          <h2 id="how-title">기획부터 업로드까지</h2>
          <FeatureTabs tabs={tabs} />
        </section>

        <section className={styles.section} id="assistant" aria-labelledby="assistant-title">
          <p className={styles.eyebrow}>앱 비서</p>
          <h2 id="assistant-title">내 노트를 아는 AI 비서</h2>
          <div className={styles.spotlight}>
            <div className={styles.frame}>
              <div className={styles.frameBar} aria-hidden="true"><i /><i /><i /></div>
              <AutoVideo src={media("chat-vault.mp4")} poster={media("chat-vault-poster.jpg")} label="앱 비서가 내 옵시디언 노트에서 근거를 찾아 답하는 화면 녹화" className={styles.media} />
            </div>
            <ul className={styles.spotPoints}>
              <li><i className={styles.dotSearch} aria-hidden="true" /><strong>노트 기반 답변</strong><span>옵시디언 볼트에서 관련 노트를 찾아 답합니다.</span></li>
              <li><i className={styles.dotUsed} aria-hidden="true" /><strong>참고한 노트 표시</strong><span>답변에 쓰인 노트를 바로 확인할 수 있습니다.</span></li>
              <li><i className={styles.dotLock} aria-hidden="true" /><strong>폴더별 접근 설정</strong><span>AI가 읽을 폴더를 직접 지정합니다.</span></li>
            </ul>
          </div>
        </section>

        <section className={styles.section} id="features" aria-labelledby="features-title">
          <p className={styles.eyebrow}>기능</p>
          <h2 id="features-title">업로드 준비도 한 번에</h2>
          <div className={styles.bento}>
            <article className={`${styles.card} ${styles.cardWide}`}>
              <div className={styles.cardText}>
                <h3>지식 그래프</h3>
                <p>노트 간 연결을 한눈에 확인하세요.</p>
              </div>
              <AutoVideo src={media("graph-crop.mp4")} poster={media("graph-crop-poster.jpg")} label="지식 그래프 화면 녹화" className={styles.cardMedia} />
            </article>
            <article className={styles.card}>
              <div className={styles.cardText}>
                <h3>발행 전 점검</h3>
                <p>출처 없는 수치와 과장 표현을 게시 전에 잡아냅니다.</p>
              </div>
              <Image src={assetPath(media("card-check.png"))} alt="올리기 전 확인 목록과 채울 칸 화면" width={640} height={400} className={styles.cardMedia} />
            </article>
            <article className={styles.card}>
              <div className={styles.cardText}>
                <h3>업로드 패키지</h3>
                <p>제목, 썸네일 문구, 설명란을 한 번에 준비합니다.</p>
              </div>
              <Image src={assetPath(media("card-titles.png"))} alt="제목 후보와 썸네일 문구 화면" width={640} height={400} className={styles.cardMedia} />
            </article>
            <article className={styles.card}>
              <div className={styles.cardText}>
                <h3>Instagram 댓글</h3>
                <p>YouTube 댓글과 같은 화면에서 관리합니다.</p>
              </div>
              <Image src={assetPath(media("card-instagram.png"))} alt="Instagram 댓글 답글 초안 화면" width={740} height={462} className={styles.cardMedia} />
            </article>
          </div>
        </section>

        <section className={styles.section} id="principles" aria-labelledby="principles-title">
          <p className={styles.eyebrow}>신뢰</p>
          <h2 id="principles-title">안심하고 맡기세요</h2>
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
          <h2>지금 베타로 시작하세요</h2>
          <a href={betaMail} className={styles.primaryLight}>베타 신청하기</a>
        </section>
      </main>

    </div>
  );
}
