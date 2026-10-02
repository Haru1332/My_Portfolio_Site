import { profile } from "@/content/portfolio";

export const labHome = "/lab/";

export function betaMail(subject: string) {
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`;
}

export const contactMail = betaMail("[Haru Lab] 문의");

export type LabProduct = {
  id: "creator-assistant" | "sokssok";
  name: string;
  href: string;
  platform: string;
  tagline: string;
  description: string;
  points: string[];
  image: string;
  imageSize: [number, number];
  imageAlt: string;
  /** Second screen for the product list, so it doesn't repeat the hero. */
  detailImage: string;
  mail: string;
};

export const labProducts: LabProduct[] = [
  {
    id: "creator-assistant",
    name: "크리에이터 도우미",
    href: "/lab/creator-assistant/",
    platform: "웹앱 · 베타",
    tagline: "혼자 하는 크리에이터의 제작팀",
    description: "주제 추천부터 자료 조사, 대본, 댓글 답글까지. 유튜브 제작 과정을 한곳에서 관리하세요.",
    points: ["채널 맞춤 주제 추천", "출처 자동 대조", "YouTube·Instagram 댓글 관리"],
    image: "/assets/products/creator/tour-poster.jpg",
    imageSize: [1280, 800],
    imageAlt: "크리에이터 도우미 제작 보드 화면",
    detailImage: "/assets/products/creator/research-poster.jpg",
    mail: betaMail("[크리에이터 도우미] 베타 신청"),
  },
  {
    id: "sokssok",
    name: "쏙쏙",
    href: "/lab/sokssok/",
    platform: "Windows · 베타",
    tagline: "흩어진 파일을 제자리에",
    description: "흩어진 파일의 이름을 정리하고 폴더별로 분류하세요. 실행 전 미리보기와 되돌리기를 지원합니다.",
    points: ["파일 이름 일괄 정리", "날짜·종류별 폴더 분류", "중복 파일 정리"],
    image: "/assets/products/sokssok/tour-poster.jpg",
    imageSize: [1100, 720],
    imageAlt: "쏙쏙 이름 정리 화면",
    detailImage: "/assets/products/sokssok/sort-poster.jpg",
    mail: betaMail("[쏙쏙] Windows 베타 신청"),
  },
];
