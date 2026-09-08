import { CareerSection } from "@/components/CareerSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PracticeSection } from "@/components/PracticeSection";
import { ScrollProgress } from "@/components/ScrollProgress";
import { WorksSection } from "@/components/WorksSection";
import { aiProjects, soundProjects } from "@/content/portfolio";
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
        <WorksSection
          id="ai-works"
          index="03"
          kicker="AI · AX Works"
          heading="AI · AX 작업"
          countLabel={<>AI · AX<br />Engineering</>}
          projects={aiProjects}
          track="ai"
        />
        <WorksSection
          id="sound-works"
          index="04"
          kicker="Sound Design Works"
          heading="사운드 디자인 작업"
          countLabel={<>Full Sound<br />Design</>}
          projects={soundProjects}
          track="sound"
        />
        <PracticeSection />
        <ContactSection />
      </main>
    </>
  );
}
