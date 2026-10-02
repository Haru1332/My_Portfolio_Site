import { AiContentSection } from "@/components/AiContentSection";
import { AiWorksSection } from "@/components/AiWorksSection";
import { CareerSection } from "@/components/CareerSection";
import { CompositionSection } from "@/components/CompositionSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollProgress } from "@/components/ScrollProgress";
import { WorksSection } from "@/components/WorksSection";
import { aiProjects, appProjects, compositionChannel, contentChannels, soundProjects } from "@/content/portfolio";
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
          id="apps"
          index="03"
          kicker="Personal Apps"
          heading="개인 앱 개발"
          subtitle="평소 불편했던 작업을 해결하려고 만든 앱입니다. 기획, 디자인, 개발을 혼자 했고 개발에는 Claude Code를 썼습니다."
          countLabel={<>Personal<br />Apps</>}
          projects={appProjects}
          link={{ href: "/lab/", label: "Haru Lab 사이트 보기" }}
        />
        <AiWorksSection
          id="ai-works"
          index="04"
          kicker="AI · AX Works"
          heading="AI · AX 작업"
          subtitle="실무에서 반복되던 작업을 줄이려고 개인적으로 기획·개발한 프로젝트입니다. 회사의 공식 자료는 아닙니다."
          countLabel={<>AI · AX<br />Case Studies</>}
          projects={aiProjects}
        />
        <AiContentSection id="ai-content" index="05" channels={contentChannels} />
        <CompositionSection id="composition" index="06" channel={compositionChannel} />
        <WorksSection
          id="sound-works"
          index="07"
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
