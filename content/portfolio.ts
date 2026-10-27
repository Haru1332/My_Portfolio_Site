export type Track = "ai" | "sound";

export type HighlightGroup = {
  track: Track;
  label: string;
  items: string[];
};

export type Career = {
  id: "goodmona" | "willa" | "netmarble" | "robot" | "traum";
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
  noteTag?: string;
  /** Main features, shown as a short list under the summary. */
  features?: AppFeature[];
  /** Tech stack, shown as small tags. */
  stack?: string[];
  /** Internal path to a product page, e.g. "/lab/ieum/". */
  productUrl?: string;
  /** External link to a hands-on demo, opened in a new tab. */
  demoUrl?: string;
  /** Company-owned live site, linked (never copied or embedded). Opens in a new tab. */
  siteUrl?: string;
  /** Text-only cover drawn with this site's own styles, used instead of screenshots of company work. */
  cover?: ProjectCover;
};

export type ProjectCover = {
  look: "sticker" | "hud";
  lines: string[];
  chips: string[];
  caption: string;
};

export type AppFeature = {
  name: string;
  description: string;
};

export const careers: Career[] = [
  {
    id: "goodmona",
    tabLabel: "GOODMONA",
    tabPeriod: "2026~",
    period: "2026.10 ~ 재직 중",
    company: "굿모나의원",
    role: "AX 및 AI 자동화 담당 (1인)",
    tracks: ["ai"],
    description: "직접 만든 병원 업무 통합 시스템 도입과 확장, 콘텐츠 기획용 AI 에이전트 팀, 직원 인트라넷 개발",
    highlightGroups: [
      {
        track: "ai",
        label: "Hospital AX System",
        items: [
          "입사 2주 만에 실무 도입, 전 직원이 매일 사용",
          "진료 사진을 환자와 방문일별로 자동 분류하고 시술 전후를 비교하는 화면 개발",
          "상담 녹음 받아쓰기와 요약 자동화",
          "환자 정보가 병원 밖으로 나가지 않도록 로컬 AI로 처리하는 보안 구조 설계",
          "설치형 배포, 매일 자동 백업, 원클릭 업데이트, 사용자별 권한, 활동 기록",
        ],
      },
      {
        track: "ai",
        label: "AI Agent Workflow",
        items: [
          "주제 발굴부터 리서치, 기획, 대본 초안까지 역할별 AI 에이전트로 나눈 콘텐츠 기획 워크플로 개발",
          "평가 세트를 직접 만들어 프롬프트와 모델을 점수로 비교해 선택",
        ],
      },
      {
        track: "ai",
        label: "Intranet",
        items: [
          "연차 결재, 공지, 권한별 위키, 음성으로 요청하는 AI 비서 개발",
          "경영진이 진행 상황과 도입 기준을 보는 개발 노트 운영",
        ],
      },
    ],
    tags: ["Hospital AX", "Local AI", "AI Agents", "Intranet"],
  },
  {
    id: "willa",
    tabLabel: "INFLUENTIAL",
    tabPeriod: "2026",
    period: "2026.03 ~ 2026.08",
    company: "인플루엔셜 (윌라)",
    role: "AX 담당 (사운드 엔지니어 겸임, 1인)",
    tracks: ["ai", "sound"],
    description: "오디오북, 오디오드라마 제작 공정 자동화(AX)와 녹음 연출과 후반 제작 담당",
    highlightGroups: [
      {
        track: "sound",
        label: "Recording & Direction",
        items: [
          "오디오북, 비문학 콘텐츠, 웹소설 기반 오디오드라마의 녹음 및 후반 제작",
          "성우 캐스팅 검토, 녹음 연출, 테이크 관리, 보이스 편집, 후반 검수까지 작품 단위 제작 담당",
          "장르, 캐릭터, 장면 감정선에 맞춘 성우 톤, 호흡, 속도, 리듬 디렉팅",
          "협회, 비협회 성우 녹음 세션 진행, 성우별 연기 방향 및 작품별 보이스 톤 정리",
          "Reaper 기반 보이스 편집, 효과음과 배경음악 밸런스 조정, 믹싱",
        ],
      },
      {
        track: "sound",
        label: "Session & Production Management",
        items: [
          "작품별 녹음 일정, 성우 스케줄, 편집 공정 진행 상황 관리",
          "재녹음, 수정 요청 시 제작 담당자와 편집 공정 간 커뮤니케이션 조율",
          "녹음, 편집, 검수 흐름이 끊기지 않도록 작품 단위 진행 관리(사운드 PM 역할)",
        ],
      },
      {
        track: "ai",
        label: "AX Pipeline",
        items: [
          "입사 한 달 만에 제작 도구를 만들어 에디터와 엔지니어가 실제 제작에 사용",
          "오디오 도우미: 음성 인식(fast-whisper, WhisperX)으로 녹음본과 원고를 대조해 다르게 읽은 구간 자동 표시",
          "원고 도우미: PDF 원고에서 캐릭터별 대사 추출(OCR 보완), 성우 비용 산정용 글자 수 자동 집계",
          "Reaper 녹음 세션 자동화 스크립트(Lua, Python): 캐릭터별 트랙 분리, 대사 위치마다 녹음 자리 자동 배치",
          "프롬프트 도우미(로컬 LLM Ollama), 도서 사이트 주간 순위를 모으는 순위 도우미",
          "원고와 녹음 파일이 외부로 나가지 않도록 모든 도구를 로컬에서 실행",
        ],
      },
      {
        track: "ai",
        label: "AX Pipeline Proposal",
        items: [
          "WelaaaON AX 파이프라인 기획: 작품 소싱부터 초벌 편집, BGM, 효과음, 목소리 변환까지 6단계 설계",
          "제작 현황 관리, 원고 정본화, 초벌 자동 편집 프로토타입 3종 개발",
          "인력, 장비, 구독료 예산 승인 요청서 작성",
        ],
      },
    ],
    tags: ["AX Automation", "Local ASR, LLM", "Voice Direction", "Sound PM"],
  },
  {
    id: "netmarble",
    tabLabel: "NETMARBLE",
    tabPeriod: "2021~26",
    period: "2021.10 ~ 2026.02",
    company: "넷마블 컴퍼니",
    role: "R&D센터 생성형 AI팀 음성파트, AI 오디오 엔지니어 (계약직 → 정규직 전환)",
    tracks: ["ai", "sound"],
    description: "게임 개발용 음성 AI 적용 지원, 생성형 음성 모델 품질 분석, 음성 AI 서비스 기획 담당",
    highlightGroups: [
      {
        track: "ai",
        label: "AI Solution & Tech Bridge",
        items: [
          "기획팀, 사업부, 계열 개발사 7곳 사운드팀과 협업해 장르별(RPG, 캐주얼 등) 음성 AI 활용 방안 제안 및 적용 지원",
          "기획 초기 단계용 AI 가이드 보이스 지원, 성우 녹음 전 캐릭터 톤, 연출 검토 환경 마련",
          "R&D 기술의 게임 개발 적용을 위한 가이드 및 기술 문서 작성, 현업 적용 회의에서 활용법과 파라미터 노하우 안내",
        ],
      },
      {
        track: "ai",
        label: "Model QC & R&D Feedback",
        items: [
          "TTS, VC, Singing Voice 모델 결과물의 청감과 스펙트로그램 기반 품질 분석",
          "기계음, 아티팩트, 발음 불안정, 위상 왜곡, 톤 일관성 저하 등 문제 유형화 및 연구진 피드백",
          "상용화 기준 사운드 품질(QC) 기준 수립",
          "SOTA 모델과 자체 모델 청감 비교, 다국어 TTS, Singing Voice 결과의 언어별 발음, 음색, 감정 일관성 비교",
          "학습용 음성 데이터 품질 검수와 라벨링 기준 수립, Singing Voice용 보컬 데이터 MIDI 직접 작업",
        ],
      },
      {
        track: "sound",
        label: "Voice Design & Directing",
        items: [
          "가상 성우 약 80명을 한국어, 일본어, 영어로 제작, 캐릭터 콘셉트부터 대사 톤, 감정, 말버릇까지 설계",
          "계열사 코웨이 요청으로 한국어, 영어 가상 성우 제작",
          "게임 캐릭터 성우 녹음 디렉팅, 일본어 녹음 세션 진행, 테이크 선별 및 후반 작업",
          "가상 아이돌 MAVE: 원본 음성 녹음과 디렉팅부터 데이터셋, 라벨링, 파인튜닝 VC, TTS 결과물 제작, 소속사 납품까지 전담",
        ],
      },
      {
        track: "ai",
        label: "Service Planning & UI/UX",
        items: [
          "사내 음성 AI 웹 서비스와 애플리케이션 기획, 사용자 시나리오 및 기능 요구사항 설계",
          "Figma로 UI/UX 및 와이어프레임 설계, 개발팀과 구현 방향 협의",
          "Flutter를 독학해 프론트엔드 직접 구현",
        ],
      },
    ],
    tags: ["TTS, VC", "Model QC", "Persona Design", "Figma, Flutter"],
  },
  {
    id: "robot",
    tabLabel: "ROBOT SPORTS",
    tabPeriod: "2018~20",
    period: "2018.10 ~ 2019.03, 2019.12 ~ 2020.12",
    company: "(사)대한로봇스포츠협회, 국제로봇올림피아드위원회",
    role: "기획 및 운영",
    tracks: ["sound"],
    description: "국제로봇올림피아드 기획과 운영, 신규 종목 매뉴얼과 사운드, 대회 중계, 홍보 영상 제작",
    highlightGroups: [
      {
        track: "sound",
        label: "Planning",
        items: [
          "국제로봇올림피아드 기획 및 예산 편성, 종목 연구 및 규정 확립",
          "국가지원사업, 연구사업 유치를 위한 기획서 작성과 프레젠테이션",
          "대회 유치를 위한 지자체 커뮤니케이션, 대회 문제(미션) 출제",
        ],
      },
      {
        track: "sound",
        label: "Operation",
        items: [
          "오프라인 대회 운영, 진행요원, 기록, 심판진 관리와 교육",
          "협회 및 대회 CS, 참가자 관리",
        ],
      },
      {
        track: "sound",
        label: "Media & Sound",
        items: [
          "신규 종목 \"AI 축구\" 매뉴얼 작성과 사운드 담당, 온라인 대회 중계 시스템(OBS) 구성",
          "대회 홈페이지 운영, 홍보 영상 제작(영상과 사운드)",
        ],
      },
    ],
    tags: ["Event Planning", "Operation", "OBS Broadcast", "Video, Sound"],
  },
  {
    id: "traum",
    tabLabel: "TRAUM S&C",
    tabPeriod: "2019",
    period: "2019.06 ~ 2019.11",
    company: "트라움에스앤씨",
    role: "오디오 엔지니어",
    tracks: ["sound"],
    description: "라움아트센터 공연, 예식, 컨벤션 음향, 조명, 영상 운영 담당",
    highlightGroups: [
      {
        track: "sound",
        label: "Live Sound",
        items: [
          "클래식, 재즈 공연, 기업 행사, 대규모 예식 FOH 믹싱 및 운영",
          "홀 특성에 맞춘 스피커 튜닝, 음향 장비 유지보수, 시그널 플로우 점검",
        ],
      },
      {
        track: "sound",
        label: "Lighting & Video",
        items: [
          "행사 연출에 맞춘 조명 프로그래밍 및 영상 송출 운영",
          "장비 오류, 신호 끊김 등 현장 트러블슈팅",
        ],
      },
      {
        track: "sound",
        label: "Technical PM",
        items: [
          "외부 음향팀 투입 시 센터 시스템과의 연동 검토 및 시그널 플로우 관리",
          "클라이언트, 외부 대행사 사전 기술 미팅, 장비, 인력 운용 계획 조율",
        ],
      },
    ],
    tags: ["FOH Mixing", "System Tuning", "Live Ops"],
  },
];

export const capabilities = {
  practice: ["AX Automation", "Model QC", "Persona Design", "Voice Direction", "Sound Design"],
  tools: [
    "Reaper, Pro Tools, Logic Pro",
    "Premiere Pro, CapCut",
    "Claude Code, Codex",
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
      "PDF 원고에서 캐릭터별 대사를 뽑습니다(OCR 보완). 하이라이트와 밑줄을 인식해 성우 비용 산정용 글자 수를 세고, Reaper에 캐릭터별 빈 아이템을 미리 배치합니다.",
    tags: ["PDF Parser", "OCR", "Reaper API"],
  },
  {
    icon: "🎙️",
    name: "오디오 도우미",
    description:
      "fast-whisper와 WhisperX로 녹음본을 분석해 원고의 대사와 실제 녹음 구간을 연결하고, 원고와 다르게 읽은 부분을 표시합니다. 1차 검수와 컷 편집에 씁니다.",
    tags: ["fast-whisper", "WhisperX", "Reaper Edit Auto"],
  },
  {
    icon: "👑",
    name: "순위 도우미",
    description:
      "여러 도서 사이트의 주간 순위를 한 번에 모아, 제작할 작품을 고를 때 참고합니다.",
    tags: ["Web Crawler"],
  },
  {
    icon: "✍️",
    name: "프롬프트 도우미",
    description:
      "평소 말로 적은 요청을 로컬 SLM이 Markdown, XML 형식의 지시문으로 바꿉니다. AI 도구에 익숙하지 않은 동료도 쓸 수 있게 만들었습니다.",
    tags: ["Local SLM", "Ollama"],
  },
];

export const aiProjects: Project[] = [
  {
    id: "willa-toolkit",
    order: "01",
    title: "윌라 업무 지원 툴킷",
    shortTitle: "윌라 업무 지원 툴킷",
    category: "Internal Tool Suite",
    role: "Tool Design, Python Development",
    tracks: ["ai"],
    thumbnail: "/assets/toolkit/willa-toolkit-hub.png",
    noteTag: "개인 프로젝트, 실무 도입",
    summary:
      "사운드 PD와 엔지니어가 매번 손으로 하던 작업을 줄이려고 만든 Python 도구 모음입니다. AI 코딩 어시스턴트로 개발했고, 실제 제작에 도입해 썼습니다. 원고와 녹음본이 외부로 나가지 않도록 모두 로컬에서 실행됩니다.",
    tools: productionToolkit,
    featured: true,
  },
  {
    id: "reaper-recording-automation",
    order: "02",
    title: "Reaper 녹음 세션 자동화 스크립트",
    shortTitle: "Reaper 녹음 세션 자동화",
    category: "DAW Scripting",
    role: "Lua, Python Scripting",
    tracks: ["ai"],
    thumbnail: "/assets/toolkit/reaper-full-timeline.png",
    gallery: ["/assets/toolkit/reaper-full-timeline.png", "/assets/toolkit/reaper-track-placement.png"],
    galleryLabels: ["전체 타임라인", "캐릭터별 트랙 배치"],
    summary:
      "오디오북 녹음 세션용 Reaper 스크립트(Lua, Python)입니다. 원고의 어노테이션으로 캐릭터를 구분해 트랙을 나누고, 대사 위치마다 빈 아이템을 미리 놓습니다. 녹음하면 빈 아이템이 녹음 파일로 바뀌고, 남은 아이템은 뒤로 밀려 순서가 유지됩니다. 그 밖의 편의 기능도 스크립트로 만들어 썼습니다.",
  },
  {
    id: "welaaon-ax-pipeline",
    order: "03",
    title: "WelaaaON: 사운드 제작 AX 파이프라인 제안",
    shortTitle: "WelaaaON AX 파이프라인",
    category: "AX Pipeline Proposal",
    role: "Pipeline Design, Prototype Development",
    tracks: ["ai"],
    thumbnail: "/assets/pipeline/onscript-annotation.png",
    gallery: [
      "/assets/pipeline/onair-scheduler.png",
      "/assets/pipeline/onscript-annotation.png",
      "/assets/pipeline/oncue-dashboard.png",
    ],
    galleryLabels: ["OnAir: 스케줄 관리", "OnScript: 원고 정본화", "OnCue: 초벌 자동 편집"],
    noteTag: "개인 기획, 회사 제안",
    summary:
      "소싱부터 오디오북 초벌 편집, BGM, 효과음, 목소리 변환까지 이어지는 6단계 AX 파이프라인을 설계해 회사에 제안했습니다. 이 중 OnAir(스케줄, 현황), OnScript(원고 정본화), OnCue(초벌 자동 편집)는 프로토타입까지 만들었고, 인력, 장비, 구독료 예산을 담은 승인 요청서도 작성했습니다.",
  },
  {
    id: "cinematic-trailer-redesign",
    order: "04",
    title: "Generative AI 100% 활용: 시네마틱 트레일러 사운드 리디자인",
    shortTitle: "시네마틱 트레일러 사운드 리디자인",
    category: "Generative Audio R&D",
    role: "AI Voice, Sound Design, Mix",
    tracks: ["ai", "sound"],
    noteTag: "개인 음성 AI R&D 프로젝트",
    youtubeUrl: "https://youtu.be/tyBvB5WCNko",
  },
];

// 재직 중 업무로 만든 회사 공식 채용 페이지. 권리는 회사에 있으므로 그림·코드를 옮기지 않고
// 공개된 주소로만 연결한다(사용자 근로계약 제10조·제13조, 2026-10-27).
export const landingProjects: Project[] = [
  {
    id: "goodmona-brand-pm-recruit",
    order: "01",
    title: "굿모나 커머스팀 브랜드 PM 채용 랜딩페이지",
    shortTitle: "브랜드 PM 채용 랜딩페이지",
    category: "Recruiting Landing Page",
    role: "Planning, Design, Development, Interaction",
    tracks: ["ai"],
    noteTag: "재직 중 1인 제작, 회사 공식 페이지",
    summary:
      "샴푸 상품기획 브랜드 PM 채용공고에서 연결되는 랜딩페이지입니다. 지원 과정을 레트로 픽셀 게임처럼 구성해, 타이틀 화면부터 월드맵, 미니게임, 참가 신청까지 한 편의 게임을 하듯 읽히게 했습니다. 기획부터 디자인, 개발, 채용공고 이미지까지 혼자 만들었습니다.",
    features: [
      { name: "게임 HUD", description: "스크롤할수록 위 메뉴의 레벨과 경험치 막대가 오르고, 구역에 들어설 때 레벨업 알림" },
      { name: "월드맵", description: "데스크톱은 화면을 고정한 채 캐릭터가 길을 따라 걷는 가로 진행, 휴대폰은 세로 목록" },
      { name: "대화 연출", description: "대사가 한 줄씩 타자로 나오고, 사진이 픽셀 캐릭터로 바뀌는 변환 장면" },
      { name: "미니게임과 지원", description: "끌리는 쪽을 고르면 스탯이 쌓이는 6문항 테스트, 어디서 눌러도 그 자리에 뜨는 지원 팝업" },
    ],
    stack: ["HTML", "CSS", "JavaScript", "GSAP", "Lenis", "Galmuri", "Cloudflare Pages"],
    siteUrl: "https://goodmona-team.pages.dev/shampoo/",
    cover: { look: "hud", lines: ["Brand PM", "Press Start"], chips: ["LV 1", "LV 100"], caption: "Recruiting Page 01" },
  },
  {
    id: "goodmona-marketing-recruit",
    order: "02",
    title: "굿모나 마케팅팀 채용 랜딩페이지",
    shortTitle: "마케팅팀 채용 랜딩페이지",
    category: "Recruiting Landing Page",
    role: "Planning, Design, Development, Interaction",
    tracks: ["ai"],
    noteTag: "재직 중 1인 제작, 회사 공식 페이지",
    summary:
      "마케터 채용공고에서 연결되는 랜딩페이지입니다. 병원 채널의 활기를 장난스럽고 개성 있는 무드로 풀었습니다. 첫 화면의 숫자 영상과 끌어서 옮기는 스티커, 스크롤에 따라 바뀌는 구역 색으로 팀의 분위기를 먼저 보여 줍니다. 기획부터 디자인, 개발, 채용공고 이미지까지 혼자 만들었습니다.",
    features: [
      { name: "첫 화면 모션", description: "영상 가운데에서 스티커가 튀어나와 자리를 잡고, 데스크톱에서는 직접 끌어서 옮길 수 있음" },
      { name: "스크롤 연출", description: "구역마다 바탕색이 바뀌고, 이력서가 적히다 빨리감기되는 장면을 스크롤에 맞춰 재생" },
      { name: "참여형 게임", description: "채널 영상 두 개 중 더 많이 본 쪽을 고르는 3문제 감 테스트" },
      { name: "모바일과 접근성", description: "휴대폰은 가벼운 영상과 이미지, 고정 장면 대신 자동 재생. 동작 줄이기 설정이면 정지 화면" },
    ],
    stack: ["HTML", "CSS", "JavaScript", "GSAP", "Lenis", "HyperFrames", "Cloudflare Pages"],
    siteUrl: "https://goodmona-team.pages.dev/",
    cover: { look: "sticker", lines: ["Marketing", "Team"], chips: ["Drag", "Scroll", "Motion", "Play"], caption: "Recruiting Page 02" },
  },
];

export const appProjects: Project[] = [
  {
    id: "ieum",
    order: "01",
    title: "이음: 내 지식 기반 콘텐츠 제작 앱",
    shortTitle: "이음",
    category: "Web App, AI Content Workflow",
    role: "Planning, Design, Development",
    tracks: ["ai"],
    thumbnail: "/assets/apps/creator-topics.png",
    gallery: [
      "/assets/apps/creator-topics.png",
      "/assets/apps/creator-research.png",
      "/assets/apps/creator-script.png",
      "/assets/apps/creator-publish-check.png",
      "/assets/apps/creator-reply-review.png",
    ],
    galleryLabels: ["주제 찾기", "리서치와 출처 대조", "유튜브 대본", "발행 전 점검", "댓글 답글 검토"],
    noteTag: "개인 프로젝트, 개발 중",
    summary:
      "옵시디언에 쌓아 온 내 노트와 외부 자료를 근거로 주제 찾기, 자료 조사, 대본, 댓글 답글을 하나로 묶은 웹앱입니다. 유튜브 채널을 혼자 운영하며 버거웠던 일을 덜려고 만들었습니다. AI가 가져온 인용문은 출처 원문과 대조하고, 게시 전에는 사람이 확인하도록 했습니다.",
    features: [
      { name: "주제 → 리서치 → 대본", description: "주제 추천, 인용문 원문 대조, 대본, 블로그, 쇼츠 초안 작성" },
      { name: "지식 그래프와 앱 비서", description: "옵시디언 노트 그래프, 노트를 참고해 답하는 AI 비서" },
      { name: "댓글 답글", description: "YouTube, Instagram 댓글 답글 초안, 승인 후 공식 API로 게시" },
    ],
    stack: ["Next.js", "TypeScript", "SQLite", "Claude Code, Codex 엔진"],
    productUrl: "/lab/ieum/",
  },
  {
    id: "sokssok",
    order: "02",
    title: "쏙쏙: Windows 파일과 폴더 정리 앱",
    shortTitle: "쏙쏙",
    category: "Desktop App, Windows",
    role: "Planning, Design, Development",
    tracks: ["ai"],
    thumbnail: "/assets/apps/sokssok-home.png",
    gallery: [
      "/assets/apps/sokssok-home.png",
      "/assets/apps/sokssok-rename.png",
      "/assets/apps/sokssok-sort.png",
      "/assets/apps/sokssok-ver.png",
    ],
    galleryLabels: ["폴더 스캔", "이름 정리 미리보기", "다단계 폴더 분류", "중복, 버전 묶음"],
    noteTag: "개인 프로젝트, 실사용 중",
    summary:
      "다운로드, 사진 폴더에 쌓인 파일과 'KakaoTalk_', '(1)', '_복사본'처럼 지저분한 이름을 정리하려고 만든 Windows 앱입니다. 실행 전에 결과를 미리 보여 주고, 실행한 작업은 되돌릴 수 있습니다. 설치 파일로 만들어 직접 쓰고 있습니다.",
    features: [
      { name: "이름 정리와 폴더 분류", description: "반복 문구 일괄 삭제, 종류, 날짜, 키워드 기준 다단계 분류" },
      { name: "중복, 버전 묶음", description: "같은 파일, 화질만 다른 사진, '최종, 진짜최종' 같은 버전 정리" },
      { name: "변환, 자동 감시, 되돌리기", description: "이미지, 영상, 문서 변환, 감시 폴더 자동 정리, 모든 실행 되돌리기" },
    ],
    stack: ["Tauri 2", "React", "Rust", "TypeScript"],
    productUrl: "/lab/sokssok/",
  },
];

export const serviceProjects: Project[] = [
  {
    id: "haedalbyeol",
    order: "01",
    title: "해·달·별: AI 사주, 타로, 별자리 상담 웹 서비스",
    shortTitle: "해·달·별",
    category: "Web Service, AI Reading",
    role: "Planning, Design, Development",
    tracks: ["ai"],
    thumbnail: "/assets/apps/haedalbyeol-main.jpg",
    gallery: [
      "/assets/apps/haedalbyeol-main.jpg",
      "/assets/apps/haedalbyeol-tarot.jpg",
      "/assets/apps/haedalbyeol-astro.jpg",
    ],
    galleryLabels: ["메인, 세 가게", "월화 타로: 카드 뽑기와 웹툰 풀이", "유화 별자리: 생일 입력과 웹툰 풀이"],
    noteTag: "개인 프로젝트, 출시 준비 중",
    summary:
      "세 상담사가 같은 골목에서 사주, 타로, 별자리 가게를 여는 운세 웹 서비스입니다. 월화 타로는 손님이 직접 뽑은 카드로, 유화 별자리는 생일, 태어난 시간, 장소로 계산한 출생 차트로 AI 풀이를 만들어 웹툰과 총정리 보고서로 보여 줍니다. 혜화 사주는 개발 중입니다. 체험판은 실제 AI로 미리 받아 둔 풀이를 그대로 보여 줍니다.",
    features: [
      { name: "카드 뽑기 → 웹툰 풀이", description: "직접 고른 카드로 질문 8개를 풀고, 장면과 대사가 있는 웹툰과 총정리 보고서로 정리" },
      { name: "출생 차트 계산", description: "행성 위치와 하우스는 NASA JPL DE440 천체력으로 코드가 계산하고, AI는 그 표를 근거로 풀이" },
      { name: "결제 전 AI 0번", description: "카드 뽑기와 정보 입력까지는 AI 없이, 결제 뒤에만 AI 풀이를 만드는 구조로 설계" },
    ],
    stack: ["JavaScript", "Node.js", "Claude", "NASA JPL DE440"],
    demoUrl: "https://haru1332.github.io/haedalbyeol-demo/",
  },
];

export type ServiceReader = {
  id: string;
  /** Shop label, e.g. "해의 가게". */
  shop: string;
  name: string;
  role: string;
  line: string;
  image: string;
  /** Shown as a small note when the shop is not open yet. */
  status?: string;
};

/** The three shops of 해·달·별, shown beside the service card. */
export const serviceReaders: ServiceReader[] = [
  {
    id: "hyehwa",
    shop: "해의 가게",
    name: "혜화 사주",
    role: "맏언니 혜화",
    line: "햇살 드는 한옥 방에서 태어난 날과 시로 명식을 세우고, 한 해의 흐름과 타고난 결을 풀어 줍니다.",
    image: "/assets/apps/haedalbyeol-face-hyehwa.webp",
    status: "개발 중",
  },
  {
    id: "wolhwa",
    shop: "달의 가게",
    name: "월화 타로",
    role: "둘째 월화",
    line: "고민을 고르면 오늘 볼 질문 8개를 정하고, 질문마다 78장 중에서 직접 카드를 뽑아 웹툰과 총정리 보고서로 읽어 줍니다.",
    image: "/assets/apps/haedalbyeol-face-wolhwa.webp",
  },
  {
    id: "yuhwa",
    shop: "별의 가게",
    name: "유화 별자리",
    role: "막내 유화",
    line: "태어난 날의 하늘을 펼친 출생 차트에서 별을 하나씩 이어 가며 서양 점성술로 읽어 줍니다. 태어난 시간을 몰라도 볼 수 있습니다.",
    image: "/assets/apps/haedalbyeol-face-yuhwa.webp",
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

export type ContentVideo = {
  title: string;
  url: string;
  format: "롱폼" | "숏폼";
  note?: string;
};

export type Album = {
  title: string;
  cover: string;
  /** YouTube video URL for this track. Omit until the real link is known — the tile then shows without a play affordance. */
  url?: string;
};

type ChannelBase = {
  id: string;
  name: string;
  handle: string;
  url: string;
  avatar: string;
  language: string;
  aiScope: string;
  role: string;
  description: string;
  stat: string;
  /** Year the channel's first content went up, e.g. "2025". Omit when not relevant. */
  since?: string;
};

export type Channel =
  | (ChannelBase & { mediaLayout: "chips"; videos: ContentVideo[] })
  | (ChannelBase & { mediaLayout: "marquee"; albums: Album[] });

export const contentChannels: Channel[] = [
  {
    id: "momomaru",
    name: "모모마루 (もも丸)",
    handle: "@momomaru_channel",
    url: "https://www.youtube.com/@momomaru_channel/",
    avatar: "/assets/content/momomaru-avatar.jpg",
    language: "일본어",
    since: "2025",
    aiScope: "영상 생성 AI 활용, 음성은 보이스 체인저",
    role: "기획, AI 영상 생성, 편집, 채널 운영",
    description:
      "생성형 AI 영상 도구가 나온 초기에 시작한 일본어 동물 캐릭터 채널입니다. 캐릭터 설정, 대사, AI 영상 생성, 편집, 업로드를 혼자 했습니다.",
    stat: "롱폼 2개, 숏폼 4개(롱폼 발췌)",
    mediaLayout: "chips",
    videos: [
      {
        title: "【フル】会社員あるある｜エレベーターで上司と二人きりはムリすぎww",
        url: "https://www.youtube.com/watch?v=xNJ82NYkKNg",
        format: "롱폼",
      },
      {
        title: "給料の前日のボクの姿！残高ゼロでだいぴんち！？半額で逆転するボク！",
        url: "https://www.youtube.com/watch?v=caYIAHKs0OQ",
        format: "롱폼",
      },
      { title: "上司と二人きりとかムリムリww", url: "https://www.youtube.com/shorts/ENKYfiyrNVE", format: "숏폼" },
      { title: "退勤直前のボク、テンション高すぎww", url: "https://www.youtube.com/shorts/WUJNWyQ4Gq4", format: "숏폼" },
      {
        title: "給料日前のボク🐿️半額シールで生き延びる🍙",
        url: "https://www.youtube.com/shorts/uDyYe3E85Eo",
        format: "숏폼",
      },
      { title: "かわいすぎ…おにぎりモモマル🐿️🍙", url: "https://www.youtube.com/shorts/eLt5MHs9CGU", format: "숏폼" },
    ],
  },
  {
    id: "noe-ddaeryeo-bakgi",
    name: "뇌에 때려박기",
    handle: "@뇌에때려박기",
    url: "https://www.youtube.com/@뇌에때려박기",
    avatar: "/assets/content/noe-ddaeryeo-bakgi-avatar.jpg",
    language: "한국어",
    since: "2025",
    aiScope: "음성과 영상 전체 AI 생성",
    role: "기획, 대본, AI 이미지 생성, 편집, 채널 운영",
    description:
      "생활 정보와 시사 이슈를 짧게 정리하는 숏폼 채널입니다. 같은 포맷으로 대본, AI 이미지, 편집, 업로드를 반복하며 숏폼을 빠르게 만드는 방식을 시험했습니다.",
    stat: "숏폼 56개",
    mediaLayout: "chips",
    videos: [
      {
        title: "열사병 이렇게 막아야 합니다!",
        url: "https://www.youtube.com/shorts/z5mSAAhPIak",
        format: "숏폼",
        note: "조회수 2.1천회",
      },
      {
        title: "미국 관세 협상, 결국 어떻게 되는 거죠?",
        url: "https://www.youtube.com/shorts/TD4rgamq22o",
        format: "숏폼",
        note: "조회수 1.2천회",
      },
      {
        title: "전기요금 깎아준다면서… 나만 못 받는다고?",
        url: "https://www.youtube.com/shorts/3YXc-nv1qQo",
        format: "숏폼",
        note: "조회수 1천회",
      },
    ],
  },
];

export const compositionChannel: Channel = {
    id: "byeolsua",
    name: "별수아",
    handle: "@byeolsua",
    url: "https://youtube.com/@byeolsua",
    avatar: "/assets/composition/byeolsua-logo.jpg",
    language: "피아노 연주곡",
    aiScope: "작곡, 편곡, 연주는 직접, 커버 아트만 AI 생성",
    role: "작곡, 연주, 커버 아트 디렉션",
    description:
      "피아노 자작곡을 작곡하고 연주해 올리는 채널입니다.",
    stat: "자작곡 45곡",
    mediaLayout: "marquee",
    albums: [
      { title: "가시는 듯 돌아오소서", cover: "/assets/composition/albums/album-01.jpg", url: "https://youtu.be/6SGG_6fu5Do" },
      { title: "검은 고양이는 달에게 말을 걸었다", cover: "/assets/composition/albums/album-02.jpg", url: "https://youtu.be/BDpyt--wTkM" },
      { title: "계절이 돌고 돌아도", cover: "/assets/composition/albums/album-03.jpg", url: "https://youtu.be/TDCeYNpWbLA" },
      { title: "곰인형의 하루", cover: "/assets/composition/albums/album-04.jpg", url: "https://youtu.be/kBP15PmTMk8" },
      { title: "기다림의 끝에서", cover: "/assets/composition/albums/album-05.jpg", url: "https://youtu.be/LRg0IodsFP4" },
      { title: "꿈을 찾아 가고 있어", cover: "/assets/composition/albums/album-06.jpg", url: "https://youtu.be/P_6QWIaqaxk" },
      { title: "너가 보고싶은 밤", cover: "/assets/composition/albums/album-07.jpg", url: "https://youtu.be/-BXnuOsRZB8" },
      { title: "너를 그리다", cover: "/assets/composition/albums/album-08.jpg", url: "https://youtu.be/VS4i_M53cd8" },
      { title: "너에게 가는 건 아직 용기가 필요해", cover: "/assets/composition/albums/album-09.jpg", url: "https://youtu.be/GHqvbrbsk9c" },
      { title: "마지막 세게의 새벽", cover: "/assets/composition/albums/album-10.jpg", url: "https://youtu.be/28L_sq-oWvE" },
      { title: "마지막 순간에 홀로 서다", cover: "/assets/composition/albums/album-11.jpg", url: "https://youtu.be/BiB4TGDDiXo" },
      { title: "메리크리스마스, 너는 옆에 없지만", cover: "/assets/composition/albums/album-12.jpg", url: "https://youtu.be/CgBn3u1MvRo" },
      { title: "모든 날이 아름답길", cover: "/assets/composition/albums/album-13.jpg", url: "https://youtu.be/Dhov4ldoD-o" },
      { title: "발레리나를 떠나간 장난감 병정", cover: "/assets/composition/albums/album-14.jpg", url: "https://youtu.be/2-cubzbBq_s" },
      { title: "벚꽃이 흩날리던 날", cover: "/assets/composition/albums/album-15.jpg", url: "https://youtu.be/lgLTvk7khGQ" },
      { title: "별 하나 그리고 밤", cover: "/assets/composition/albums/album-16.jpg", url: "https://youtu.be/TlyWf61r0bg" },
      { title: "별을 따라 가는 곳 마다", cover: "/assets/composition/albums/album-17.jpg", url: "https://youtu.be/CAjv36B7700" },
      { title: "별의 노래", cover: "/assets/composition/albums/album-18.jpg", url: "https://youtu.be/tUVgDBqr8fk" },
      { title: "봄이 오기 전에", cover: "/assets/composition/albums/album-19.jpg", url: "https://youtu.be/uqEXb0h83U8" },
      { title: "사랑이 떠난 빈자리에 남아", cover: "/assets/composition/albums/album-20.jpg", url: "https://youtu.be/HkcOoJwKAtw" },
      { title: "시간 여행자", cover: "/assets/composition/albums/album-21.jpg", url: "https://youtu.be/yBdndndiLUk" },
      { title: "안녕! 크리스마스", cover: "/assets/composition/albums/album-22.jpg", url: "https://youtu.be/dnAaqyX-Gzg" },
      { title: "어느 여름 끝에", cover: "/assets/composition/albums/album-23.jpg", url: "https://youtu.be/cVKETZZrRNg" },
      { title: "어둠을 걷는 아이", cover: "/assets/composition/albums/album-24.jpg", url: "https://youtu.be/r3dst6NUhJk" },
      { title: "어서와요! 마녀의집", cover: "/assets/composition/albums/album-25.jpg", url: "https://youtu.be/EVJHvZxOy7g" },
      { title: "오늘 하루도 수고했어", cover: "/assets/composition/albums/album-26.jpg", url: "https://youtu.be/EMoqd-kb6tc" },
      { title: "이 겨울은 가도 그대, 떠나지 마세요", cover: "/assets/composition/albums/album-27.jpg", url: "https://youtu.be/NY0025QmnMQ" },
      { title: "잊혀지지 않는 것들", cover: "/assets/composition/albums/album-28.jpg", url: "https://youtu.be/vCVoZxJC6wI" },
      { title: "장난감 병정을 사랑한 발레리나", cover: "/assets/composition/albums/album-29.jpg", url: "https://youtu.be/bMs2RhHWILk" },
      { title: "지난 날, 아름답게 슬픈", cover: "/assets/composition/albums/album-30.jpg", url: "https://youtu.be/XXWMsB1m-SU" },
      { title: "크리스마스 이브니까", cover: "/assets/composition/albums/album-31.jpg", url: "https://youtu.be/j0npfYW2iRI" },
      { title: "크리스마스의 밤", cover: "/assets/composition/albums/album-32.jpg", url: "https://youtu.be/ge7GmV6K6HM" },
      { title: "흐르는 달빛 아래", cover: "/assets/composition/albums/album-33.jpg", url: "https://youtu.be/ShzVWArTLIQ" },
      { title: "그날 밤, 달은 울고 있었어", cover: "/assets/composition/albums/album-34.jpg", url: "https://youtu.be/NJUw8JG4KCg" },
      { title: "너에게 이별을 말했어", cover: "/assets/composition/albums/album-35.jpg", url: "https://youtu.be/b-ik6OALfbY" },
      { title: "달이 잠기던 밤의 끝에서", cover: "/assets/composition/albums/album-36.jpg", url: "https://youtu.be/cuezkvnI4YI" },
      { title: "시간이 지나도 잊지 않을게", cover: "/assets/composition/albums/album-37.jpg", url: "https://youtu.be/4cNgkZYZT6U" },
      { title: "혼자 남은 방, 차가운 온기", cover: "/assets/composition/albums/album-38.jpg", url: "https://youtu.be/N-3GTUudIis" },
      { title: "비밀의 정원", cover: "/assets/composition/albums/album-39.jpg", url: "https://youtu.be/69svdQA4hQw" },
      { title: "겨울소리", cover: "/assets/composition/albums/album-40.jpg", url: "https://youtu.be/45MgUO8aGWg" },
      { title: "시간의 성소, 별의 기록실", cover: "/assets/composition/albums/album-41.jpg", url: "https://youtu.be/qsiE2Djty48" },
      { title: "달빛 정령의 회랑", cover: "/assets/composition/albums/album-42.jpg", url: "https://youtu.be/XdQnPVNyXDI" },
      { title: "월화마을 입구, 벚꽃나루", cover: "/assets/composition/albums/album-43.jpg", url: "https://youtu.be/OvvtoeDLZzY" },
      { title: "멀어지는 것들", cover: "/assets/composition/albums/album-44.jpg", url: "https://youtu.be/mgNAI-FzzKs" },
      { title: "그때, 우리가 꿈꾸던 것", cover: "/assets/composition/albums/album-45.jpg", url: "https://youtu.be/3tFxGUa6ZtQ" },
    ],
};

export const profile = {
  nameKo: "김현수",
  nameEn: "Hyeonsu Kim",
  roleLine: "AI/AX, Sound Designer",
  email: "haru.info.official@gmail.com",
  github: "https://github.com/Haru1332",
};
