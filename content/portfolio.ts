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
    noteTag: "개인 프로젝트 · 실무 도입",
    summary:
      "오디오 제작 실무 중 사운드 PD와 엔지니어가 반복적으로 수행하는 공정을 발견해 개인적으로 기획·개발한 툴킷입니다. Python 기반 도구와 AI 코딩 어시스턴트로 단계별 자동화했고, 완성 후 실제 제작 공정에 도입해 사용했습니다. 회사의 공식 제작 시스템이 아닌 개인이 만든 보조 도구이며, 원고와 녹음본 같은 민감한 제작 데이터가 외부로 나가지 않도록 로컬 실행을 기본 원칙으로 두었습니다.",
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
    thumbnail: "/assets/pipeline/onscript-annotation.png",
    gallery: [
      "/assets/pipeline/onair-scheduler.png",
      "/assets/pipeline/onscript-annotation.png",
      "/assets/pipeline/oncue-dashboard.png",
    ],
    galleryLabels: ["OnAir · 스케줄 관리", "OnScript · 원고 정본화", "OnCue · 초벌 자동 편집"],
    noteTag: "개인 기획 · 회사 제안",
    summary:
      "제작 현장에서 겪은 비효율을 바탕으로 개인적으로 기획한 6단계 AX 파이프라인 제안입니다. 소싱부터 오디오북 초벌 편집, BGM·효과음·목소리 변환까지 이어지는 프로세스를 설계해 회사에 제안했고, 아직 공식 도입된 시스템은 아닙니다. 그중 OnAir(스케줄·현황) · OnScript(원고 정본화) · OnCue(초벌 자동 편집) 3단계는 상세 설계와 프로토타입 개발까지 개인적으로 완료했고, 인력·장비·구독료 예산안까지 포함한 승인 요청서를 작성했습니다.",
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
      "생성형 AI 영상 도구가 막 등장했던 초기에, 일본어권을 타깃으로 직접 기획한 동물 캐릭터 숏폼 콘텐츠입니다. 캐릭터 설정과 대사 기획부터 AI 영상 생성, 편집, 업로드까지 전 과정을 혼자 운영했습니다.",
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
      "생활 정보와 시사 이슈를 짧게 정리해 훑어보는 한국형 숏폼 콘텐츠입니다. 대본 작성부터 AI 이미지 생성, 편집, 업로드까지 동일한 포맷으로 반복하며 양산형 숏폼 제작 파이프라인을 실험했습니다.",
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
      "피아노 기반 자작곡을 작곡·연주하며 화성과 다이내믹을 다루는 감각을 쌓고 있습니다. 이 감각은 보이스·효과음·배경음악의 균형을 판단하는 데 그대로 이어집니다.",
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
