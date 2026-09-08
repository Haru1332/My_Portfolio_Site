export type Track = "ai" | "sound";

export type HighlightGroup = {
  track: Track;
  label: string;
  items: string[];
};

export type Career = {
  id: "willa" | "netmarble" | "traum";
  tabLabel: string;
  tabPeriod: string;
  period: string;
  company: string;
  role: string;
  tracks: Track[];
  description: string;
  highlightGroups: HighlightGroup[];
  tags: string[];
};

export type Project = {
  id: string;
  order: string;
  title: string;
  shortTitle: string;
  category: string;
  role: string;
  tracks: Track[];
  youtubeUrl?: string;
  thumbnail?: string;
  gallery?: string[];
  galleryLabels?: string[];
  summary?: string;
  confidential?: boolean;
  confidentialNote?: string;
  featured?: boolean;
  tools?: ToolkitTool[];
};

export const careers: Career[] = [
  {
    id: "willa",
    tabLabel: "INFLUENTIAL",
    tabPeriod: "2026",
    period: "2026.03 — 2026.08",
    company: "인플루엔셜 · 윌라",
    role: "오디오 엔지니어 · AX 프로젝트 리더",
    tracks: ["sound", "ai"],
    description:
      "오디오북과 오디오드라마의 녹음 디렉팅부터 보이스 편집, 후반 검수까지 제작 전 과정을 이끌며, 반복 공정을 AI 도구로 자동화하는 AX 파이프라인을 함께 구축했습니다.",
    highlightGroups: [
      {
        track: "sound",
        label: "Recording & Direction",
        items: [
          "오디오북·오디오드라마 성우 캐스팅 검토부터 녹음 연출, 편집, 후반 검수까지 작품 단위 제작을 총괄했습니다.",
          "장르, 캐릭터 성격, 장면 분위기, 대사의 감정선에 맞춰 성우의 톤·호흡·속도·리듬을 조율했습니다.",
          "보이스·효과음·배경음악의 밸런스를 설계해 오디오드라마의 장면 몰입도를 높였습니다.",
        ],
      },
      {
        track: "ai",
        label: "AX Pipeline",
        items: [
          "Reaper 스크립트와 로컬 ASR·LLM 모델을 활용해 반복 검수, 컷 편집, 자료 정리 공정을 자동화했습니다.",
          "바이브코딩과 AI 코딩 에이전트로 업무 효율화 애플리케이션을 직접 개발해 제작 안정성을 높였습니다.",
        ],
      },
    ],
    tags: ["Voice Direction", "Mix · QC", "AX Automation"],
  },
  {
    id: "netmarble",
    tabLabel: "NETMARBLE",
    tabPeriod: "2021—26",
    period: "2021.10 — 2026.02",
    company: "넷마블 컴퍼니",
    role: "AI 오디오 엔지니어",
    tracks: ["ai"],
    description:
      "게임 개발 전용 음성 AI 파이프라인을 구축하고, 생성형 음성 모델(TTS·VC·Singing Voice)의 품질을 분석해 연구진에게 개선 방향을 제시했습니다.",
    highlightGroups: [
      {
        track: "ai",
        label: "AI R&D & Production",
        items: [
          "기획팀·사업부·계열사 사운드팀과 협업해 게임 장르별 음성 AI 도입 솔루션을 제안하고 구축했습니다.",
          "모델 출력물의 기계음, 아티팩트, 발음 불안정, 톤 일관성 저하를 청감·스펙트로그램 기준으로 진단해 연구 방향성을 제시했습니다.",
          "음색·피치·속도·감정 표현 파라미터를 튜닝해 AI 성우와 가상 캐릭터 보이스에 페르소나를 부여했습니다.",
          "Figma로 음성 AI 서비스 UI/UX를 설계하고 Flutter 프론트엔드 구조를 이해해 개발팀과 소통했습니다.",
        ],
      },
    ],
    tags: ["TTS · VC", "Model QC", "Persona Design", "Figma · Flutter"],
  },
  {
    id: "traum",
    tabLabel: "TRAUM S&C",
    tabPeriod: "2019",
    period: "2019.06 — 2019.12",
    company: "트라움에스앤씨",
    role: "오디오 엔지니어",
    tracks: ["sound"],
    description:
      "클래식 공연, 기업 행사, 웨딩 등 다양한 라이브 환경에서 FOH 믹싱과 음향 시스템 운영을 담당했습니다.",
    highlightGroups: [
      {
        track: "sound",
        label: "Live Sound Operating",
        items: [
          "라움아트센터에서 클래식 공연·재즈 콘서트·대규모 예식의 FOH 믹싱과 음향 인프라를 구축·운영했습니다.",
          "홀 특성에 맞춘 스피커 튜닝과 시그널 플로우 점검으로 무결점 사운드 환경을 조성했습니다.",
          "외부 기술팀과의 정합성을 조율하는 기술 PM 역할을 겸했습니다.",
        ],
      },
    ],
    tags: ["FOH Mixing", "System Tuning", "Live Ops"],
  },
];

export const capabilities = {
  practice: ["Sound Design", "Voice Direction", "Model QC", "Persona Design", "AX Automation"],
  tools: [
    "Reaper",
    "Pro Tools",
    "Claude Code · Codex CLI",
    "Python · PDF Parser · OCR",
    "fast-whisper · WhisperX",
    "Figma",
  ],
};

export type ToolkitTool = {
  icon: string;
  name: string;
  description: string;
  tags: string[];
  screenshot?: string;
};

export const productionToolkit: ToolkitTool[] = [
  {
    icon: "📄",
    name: "원고 도우미",
    description:
      "PDF 원고를 파싱하고 OCR로 보완해 캐릭터별 대사를 추출합니다. 하이라이트·밑줄을 인식해 성우 비용용 글자 수를 산출하고, 위치 정보를 바탕으로 Reaper에 캐릭터별 빈 아이템을 미리 배치합니다.",
    tags: ["PDF Parser", "OCR", "Reaper API"],
  },
  {
    icon: "🎙️",
    name: "오디오 도우미",
    description:
      "fast-whisper·WhisperX로 녹음본을 분석해 원고 도우미가 추출한 대사와 실제 녹음 구간을 매핑합니다. 원고 대비 오독 체크까지 함께 수행해 1차 검수와 컷 편집 기준을 빠르게 확보합니다.",
    tags: ["fast-whisper", "WhisperX", "Reaper Edit Auto"],
  },
  {
    icon: "👑",
    name: "순위 도우미",
    description:
      "여러 도서 사이트의 주간 순위를 한 번에 수집해 제작 후보 탐색과 시장 흐름 파악을 돕습니다.",
    tags: ["Web Crawler"],
  },
  {
    icon: "✍️",
    name: "프롬프트 도우미",
    description:
      "편하게 입력한 자연어 요청을 로컬 SLM이 읽고 Markdown·XML·순서형 지시문으로 정리해, AI 도구에 익숙하지 않은 동료도 원하는 조건을 정확히 전달할 수 있도록 돕습니다.",
    tags: ["Local SLM", "Ollama"],
  },
];

export const aiProjects: Project[] = [
  {
    id: "willa-toolkit",
    order: "01",
    title: "월라 업무 지원 툴킷",
    shortTitle: "월라 업무 지원 툴킷",
    category: "Internal Tool Suite",
    role: "Tool Design · Python Development",
    tracks: ["ai"],
    thumbnail: "/assets/toolkit/willa-toolkit-hub.png",
    summary:
      "오디오 제작 현장에서 사운드 PD와 엔지니어가 반복적으로 수행하는 공정을 직접 관찰하고, Python 기반 도구와 AI 코딩 어시스턴트로 단계별 자동화한 사내 제작 지원 툴킷입니다. 원고와 녹음본 같은 민감한 제작 데이터가 외부로 나가지 않도록 로컬 실행을 기본 원칙으로 두었습니다.",
    tools: productionToolkit,
    featured: true,
  },
  {
    id: "reaper-recording-automation",
    order: "02",
    title: "Reaper 녹음 세션 자동화 스크립트",
    shortTitle: "Reaper 녹음 세션 자동화",
    category: "DAW Scripting",
    role: "Lua · Python Scripting",
    tracks: ["ai"],
    thumbnail: "/assets/toolkit/reaper-track-placement.png",
    gallery: ["/assets/toolkit/reaper-track-placement.png", "/assets/toolkit/reaper-full-timeline.png"],
    galleryLabels: ["캐릭터별 트랙 배치", "전체 타임라인"],
    summary:
      "오디오북 녹음 세션을 위해 Reaper 내부에서 동작하는 Lua·Python 스크립트를 직접 개발했습니다. 원고를 파싱하고 어노테이션으로 캐릭터를 구분해 트랙을 나누고, 각 대사 위치에 빈 아이템을 미리 배치합니다. 녹음이 진행되면 해당 아이템이 실제 녹음 파일로 자동 교체되고, 아직 녹음되지 않은 빈 아이템들은 뒤로 자동 밀려나며 정렬을 유지합니다. 이 밖에도 여러 리퍼 편의 기능을 스크립트로 구현해 적용했습니다.",
  },
  {
    id: "welaaon-ax-pipeline",
    order: "03",
    title: "WelaaaON — 사운드 제작 AX 파이프라인 제안",
    shortTitle: "WelaaaON AX 파이프라인",
    category: "AX Pipeline Proposal",
    role: "Pipeline Design · Prototype Development",
    tracks: ["ai"],
    thumbnail: "/assets/pipeline/onscript-annotation.jpg",
    gallery: [
      "/assets/pipeline/onair-scheduler.jpg",
      "/assets/pipeline/onscript-annotation.jpg",
      "/assets/pipeline/oncue-dashboard.jpg",
    ],
    galleryLabels: ["OnAir · 스케줄 관리", "OnScript · 원고 정본화", "OnCue · 초벌 자동 편집"],
    summary:
      "소싱부터 오디오북 초벌 편집, BGM·효과음·목소리 변환까지 이어지는 6단계 AX 파이프라인을 설계해 회사에 제안했습니다. 그중 OnAir(스케줄·현황) · OnScript(원고 정본화) · OnCue(초벌 자동 편집) 3단계는 상세 설계와 프로토타입 개발까지 직접 완료했고, 인력·장비·구독료 예산안까지 포함한 승인 요청서를 작성했습니다.",
  },
  {
    id: "cinematic-trailer-redesign",
    order: "04",
    title: "Generative AI 100% 활용 — 시네마틱 트레일러 사운드 리디자인",
    shortTitle: "시네마틱 트레일러 사운드 리디자인",
    category: "Generative Audio R&D",
    role: "AI Voice · Sound Design · Mix",
    tracks: ["ai", "sound"],
    youtubeUrl: "https://youtu.be/tyBvB5WCNko",
  },
];

export const soundProjects: Project[] = [
  {
    id: "phantom-blade-zero",
    order: "01",
    title: "Phantom Blade Zero 사운드 리디자인",
    shortTitle: "Phantom Blade Zero",
    category: "Game Cinematic",
    role: "Action Sound Redesign",
    tracks: ["sound"],
    youtubeUrl: "https://youtu.be/dRxXNE8teko",
    featured: true,
  },
  {
    id: "sc2-legacy-of-the-void",
    order: "02",
    title: "StarCraft II: Legacy of the Void 사운드 리디자인",
    shortTitle: "StarCraft II: Legacy of the Void",
    category: "SF Cinematic",
    role: "Sound Redesign",
    tracks: ["sound"],
    youtubeUrl: "https://youtu.be/-zhcZbsXWa8",
  },
  {
    id: "sc2-heart-of-the-swarm",
    order: "03",
    title: "StarCraft II: Heart of the Swarm 사운드 리디자인",
    shortTitle: "StarCraft II: Heart of the Swarm",
    category: "SF Cinematic",
    role: "Sound Redesign",
    tracks: ["sound"],
    youtubeUrl: "https://youtu.be/SEyCsww-y5c",
  },
];

export const composition = {
  channel: "별수아",
  url: "https://youtube.com/@byeolsua",
  note: "피아노 기반 자작곡을 작곡·연주하며 화성과 다이내믹을 다루는 감각을 쌓고 있습니다. 이 감각은 보이스·효과음·배경음악의 균형을 판단하는 데 그대로 이어집니다.",
};

export const profile = {
  nameKo: "김현수",
  nameEn: "Hyeonsu Kim",
  roleLine: "Sound Designer · AI/AX",
  email: "haru.info.official@gmail.com",
  github: "https://github.com/Haru1332",
};
