import { AiContentSection } from "@/components/AiContentSection";
import { AiWorksSection } from "@/components/AiWorksSection";
import { CareerSection } from "@/components/CareerSection";
import { CompositionSection } from "@/components/CompositionSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollProgress } from "@/components/ScrollProgress";
import { WorksSection } from "@/components/WorksSection";
import { aiProjects, compositionChannel, contentChannels, soundProjects } from "@/content/portfolio";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.grain} aria-hidden="true" />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <CareerSection />
        <AiWorksSection
          id="ai-works"
          index="03"
          kicker="AI · AX Works"
          heading="AI · AX 작업"
          subtitle="실무 중 발견한 비효율을 바탕으로 개인적으로 기획·개발한 프로젝트입니다. 일부는 실제 제작 공정에 도입되었고, 일부는 회사에 제안한 단계이며, 회사의 공식 대외 발표 자료가 아닙니다."
          countLabel={<>AI · AX<br />Case Studies</>}
          projects={aiProjects}
        />
        <AiContentSection id="ai-content" index="04" channels={contentChannels} />
        <CompositionSection id="composition" index="05" channel={compositionChannel} />
        <WorksSection
          id="sound-works"
          index="06"
          kicker="Sound Design Works"
          heading="사운드 디자인 작업"
          countLabel={<>Full Sound<br />Design</>}
          projects={soundProjects}
          track="sound"
        />
        <ContactSection />
      </main>
    </>
  );
}
