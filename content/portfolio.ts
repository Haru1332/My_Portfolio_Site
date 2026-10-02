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
  noteTag?: string;
  /** Main features, shown as a short list under the summary. */
  features?: AppFeature[];
  /** Tech stack, shown as small tags. */
  stack?: string[];
  /** Internal path to a product page, e.g. "/lab/creator-assistant/". */
  productUrl?: string;
};

export type AppFeature = {
  name: string;
  description: string;
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
      "오디오북·오디오드라마의 녹음 디렉팅, 보이스 편집, 후반 검수를 맡았고, 반복되는 제작 작업을 AI 도구로 자동화했습니다.",
    highlightGroups: [
      {
        track: "sound",
        label: "Recording & Direction",
        items: [
          "오디오북·오디오드라마 성우 캐스팅 검토부터 녹음 연출, 편집, 후반 검수까지 작품 단위 제작을 총괄했습니다.",
          "장면과 캐릭터에 맞춰 성우의 톤, 호흡, 속도를 디렉팅했습니다.",
          "오디오드라마의 보이스, 효과음, 배경음악 밸런스를 잡았습니다.",
        ],
      },
      {
        track: "ai",
        label: "AX Pipeline",
        items: [
          "Reaper 스크립트와 로컬 ASR·LLM으로 검수, 컷 편집, 자료 정리를 자동화했습니다.",
          "AI 코딩 에이전트로 제작에 쓰는 업무 도구를 직접 개발했습니다.",
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
      "게임 개발용 음성 AI 파이프라인을 만들고, 생성형 음성 모델(TTS·VC·Singing Voice)의 품질을 평가해 연구팀에 개선점을 전달했습니다.",
    highlightGroups: [
      {
        track: "ai",
        label: "AI R&D & Production",
        items: [
          "기획팀, 사업부, 계열사 사운드팀과 함께 게임별 음성 AI 도입안을 만들고 적용했습니다.",
          "모델 출력의 기계음, 아티팩트, 발음 불안정, 톤 흔들림을 청취와 스펙트로그램으로 찾아 연구팀에 피드백했습니다.",
          "음색, 피치, 속도, 감정 파라미터를 조정해 AI 성우와 가상 캐릭터의 목소리 설정을 잡았습니다.",
          "음성 AI 서비스 화면을 Figma로 설계하고, Flutter 개발팀과 구현 방식을 맞췄습니다.",
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
      "클래식 공연, 기업 행사, 웨딩 현장의 FOH 믹싱과 음향 시스템 운영을 맡았습니다.",
    highlightGroups: [
      {
        track: "sound",
        label: "Live Sound Operating",
        items: [
          "라움아트센터에서 클래식·재즈 공연과 대규모 예식의 FOH 믹싱, 음향 시스템 세팅을 맡았습니다.",
          "홀 특성에 맞춰 스피커를 튜닝하고 시그널 플로우를 점검했습니다.",
          "외부 기술팀과 협업을 조율하는 기술 PM 역할도 맡았습니다.",
        ],
      },
    ],
    tags: ["FOH Mixing", "System Tuning", "Live Ops"],
  },
];

export const capabilities = {
  practice: ["Sound Design", "Voice Direction", "Model QC", "Persona Design", "AX Automation"],
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
      "PDF 원고에서 캐릭터별 대사를 뽑습니다(OCR 보완). 하이라이트·밑줄을 인식해 성우 비용 산정용 글자 수를 세고, Reaper에 캐릭터별 빈 아이템을 미리 배치합니다.",
    tags: ["PDF Parser", "OCR", "Reaper API"],
  },
  {
    icon: "🎙️",
    name: "오디오 도우미",
    description:
      "fast-whisper·WhisperX로 녹음본을 분석해 원고의 대사와 실제 녹음 구간을 연결하고, 원고와 다르게 읽은 부분을 표시합니다. 1차 검수와 컷 편집에 씁니다.",
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
      "평소 말로 적은 요청을 로컬 SLM이 Markdown·XML 형식의 지시문으로 바꿉니다. AI 도구에 익숙하지 않은 동료도 쓸 수 있게 만들었습니다.",
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
    noteTag: "개인 프로젝트 · 실무 도입",
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
    role: "Lua · Python Scripting",
    tracks: ["ai"],
    thumbnail: "/assets/toolkit/reaper-full-timeline.png",
    gallery: ["/assets/toolkit/reaper-full-timeline.png", "/assets/toolkit/reaper-track-placement.png"],
    galleryLabels: ["전체 타임라인", "캐릭터별 트랙 배치"],
    summary:
      "오디오북 녹음 세션용 Reaper 스크립트(Lua·Python)입니다. 원고의 어노테이션으로 캐릭터를 구분해 트랙을 나누고, 대사 위치마다 빈 아이템을 미리 놓습니다. 녹음하면 빈 아이템이 녹음 파일로 바뀌고, 남은 아이템은 뒤로 밀려 순서가 유지됩니다. 그 밖의 편의 기능도 스크립트로 만들어 썼습니다.",
  },
  {
    id: "welaaon-ax-pipeline",
    order: "03",
    title: "WelaaaON — 사운드 제작 AX 파이프라인 제안",
    shortTitle: "WelaaaON AX 파이프라인",
    category: "AX Pipeline Proposal",
    role: "Pipeline Design · Prototype Development",
    tracks: ["ai"],
    thumbnail: "/assets/pipeline/onscript-annotation.png",
    gallery: [
      "/assets/pipeline/onair-scheduler.png",
      "/assets/pipeline/onscript-annotation.png",
      "/assets/pipeline/oncue-dashboard.png",
    ],
    galleryLabels: ["OnAir · 스케줄 관리", "OnScript · 원고 정본화", "OnCue · 초벌 자동 편집"],
    noteTag: "개인 기획 · 회사 제안",
    summary:
      "소싱부터 오디오북 초벌 편집, BGM·효과음·목소리 변환까지 이어지는 6단계 AX 파이프라인을 설계해 회사에 제안했습니다. 이 중 OnAir(스케줄·현황), OnScript(원고 정본화), OnCue(초벌 자동 편집)는 프로토타입까지 만들었고, 인력·장비·구독료 예산을 담은 승인 요청서도 작성했습니다.",
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

export const appProjects: Project[] = [
  {
    id: "creator-assistant",
    order: "01",
    title: "크리에이터 도우미 — 1인 크리에이터 콘텐츠 제작 앱",
    shortTitle: "크리에이터 도우미",
    category: "Web App · AI Content Workflow",
    role: "Planning · Design · Development",
    tracks: ["ai"],
    thumbnail: "/assets/apps/creator-topics.png",
    gallery: [
      "/assets/apps/creator-topics.png",
      "/assets/apps/creator-research.png",
      "/assets/apps/creator-script.png",
      "/assets/apps/creator-publish-check.png",
      "/assets/apps/creator-reply-review.png",
    ],
    galleryLabels: ["주제 찾기", "리서치 · 출처 대조", "유튜브 대본", "발행 전 점검", "댓글 답글 검토"],
    noteTag: "개인 프로젝트 · 개발 중",
    summary:
      "유튜브 채널을 운영하면서 혼자 하기 버거웠던 주제 찾기, 자료 조사, 대본, 댓글 답글을 하나로 묶은 웹앱입니다. AI가 가져온 인용문은 출처 원문과 대조하고, 게시 전에는 사람이 확인하도록 했습니다.",
    features: [
      { name: "주제 → 리서치 → 대본", description: "주제 추천, 인용문 원문 대조, 대본·블로그·쇼츠 초안 작성" },
      { name: "지식 그래프 · 앱 비서", description: "옵시디언 노트 그래프, 노트를 참고해 답하는 AI 비서" },
      { name: "댓글 답글", description: "YouTube·Instagram 댓글 답글 초안, 승인 후 공식 API로 게시" },
    ],
    stack: ["Next.js", "TypeScript", "SQLite", "Claude Code · Codex 엔진"],
    productUrl: "/lab/creator-assistant/",
  },
  {
    id: "sokssok",
    order: "02",
    title: "쏙쏙 — Windows 파일·폴더 정리 앱",
    shortTitle: "쏙쏙",
    category: "Desktop App · Windows",
    role: "Planning · Design · Development",
    tracks: ["ai"],
    thumbnail: "/assets/apps/sokssok-home.png",
    gallery: [
      "/assets/apps/sokssok-home.png",
      "/assets/apps/sokssok-rename.png",
      "/assets/apps/sokssok-sort.png",
      "/assets/apps/sokssok-ver.png",
    ],
    galleryLabels: ["폴더 스캔", "이름 정리 미리보기", "다단계 폴더 분류", "중복 · 버전 묶음"],
    noteTag: "개인 프로젝트 · 실사용 중",
    summary:
      "다운로드·사진 폴더에 쌓인 파일과 'KakaoTalk_', '(1)', '_복사본'처럼 지저분한 이름을 정리하려고 만든 Windows 앱입니다. 실행 전에 결과를 미리 보여 주고, 실행한 작업은 되돌릴 수 있습니다. 설치 파일로 만들어 직접 쓰고 있습니다.",
    features: [
      { name: "이름 정리 · 폴더 분류", description: "반복 문구 일괄 삭제, 종류·날짜·키워드 기준 다단계 분류" },
      { name: "중복 · 버전 묶음", description: "같은 파일, 화질만 다른 사진, '최종·진짜최종' 같은 버전 정리" },
      { name: "변환 · 자동 감시 · 되돌리기", description: "이미지·영상·문서 변환, 감시 폴더 자동 정리, 모든 실행 되돌리기" },
    ],
    stack: ["Tauri 2", "React", "Rust", "TypeScript"],
    productUrl: "/lab/sokssok/",
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
    aiScope: "영상 생성 AI 활용 · 음성은 보이스 체인저",
    role: "기획 · AI 영상 생성 · 편집 · 채널 운영",
    description:
      "생성형 AI 영상 도구가 나온 초기에 시작한 일본어 동물 캐릭터 채널입니다. 캐릭터 설정, 대사, AI 영상 생성, 편집, 업로드를 혼자 했습니다.",
    stat: "롱폼 2개 · 숏폼 4개(롱폼 발췌)",
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
    aiScope: "음성·영상 전체 AI 생성",
    role: "기획 · 대본 · AI 이미지 생성 · 편집 · 채널 운영",
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
    aiScope: "작곡·편곡·연주는 직접, 커버 아트만 AI 생성",
    role: "작곡 · 연주 · 커버 아트 디렉션",
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
  roleLine: "Sound Designer · AI/AX",
  email: "haru.info.official@gmail.com",
  github: "https://github.com/Haru1332",
};
