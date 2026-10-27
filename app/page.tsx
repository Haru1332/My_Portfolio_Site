import { AiContentSection } from "@/components/AiContentSection";
import { AiWorksSection } from "@/components/AiWorksSection";
import { CareerSection } from "@/components/CareerSection";
import { CompositionSection } from "@/components/CompositionSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ServiceReaders } from "@/components/ServiceReaders";
import { WorksSection } from "@/components/WorksSection";
import { aiProjects, appProjects, landingProjects, compositionChannel, contentChannels, serviceProjects, serviceReaders, soundProjects } from "@/content/portfolio";
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
          id="ai-services"
          index="03"
          kicker="Personal AI Services (Coming Soon)"
          heading="개인 AI 서비스 개발"
          subtitle="타로, 점성술, 사주 상담 서비스를 직접 기획하고 개발하고 있습니다. 아직 출시 전이라, 실제 AI로 미리 받아 둔 결과로 만든 체험판을 열어 볼 수 있습니다."
          countLabel={<>AI<br />Services</>}
          projects={serviceProjects}
          aside={<ServiceReaders readers={serviceReaders} />}
        />
        <AiWorksSection
          id="apps"
          index="04"
          kicker="Personal Apps"
          heading="개인 앱 개발"
          subtitle="평소 불편했던 작업을 해결하려고 만든 앱입니다. 기획, 디자인, 개발을 혼자 했고 개발에는 Claude Code를 썼습니다."
          countLabel={<>Personal<br />Apps</>}
          projects={appProjects}
          link={{ href: "/lab/", label: "Haru Lab 사이트 보기" }}
        />
        <AiWorksSection
          id="ai-works"
          index="05"
          kicker="AI/AX Works"
          heading="AI/AX 작업"
          subtitle="실무에서 반복되던 작업을 줄이려고 개인적으로 기획하고 개발한 프로젝트입니다. 회사의 공식 자료는 아닙니다."
          countLabel={<>AI/AX<br />Case Studies</>}
          projects={aiProjects}
        />
        <AiWorksSection
          id="landing"
          index="06"
          kicker="Recruiting Landing Pages"
          heading="채용 랜딩페이지"
          subtitle="굿모나의원 재직 중 업무로 만든 회사 공식 채용 페이지입니다. 사람인과 잡코리아 채용공고에서 이 페이지로 연결됩니다. 페이지와 이미지의 권리는 회사에 있어, 여기서는 만든 내용만 소개하고 실제 페이지는 링크로 엽니다."
          countLabel={<>Landing<br />Pages</>}
          projects={landingProjects}
        />
        <AiContentSection id="ai-content" index="07" channels={contentChannels} />
        <CompositionSection id="composition" index="08" channel={compositionChannel} />
        <WorksSection
          id="sound-works"
          index="09"
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
