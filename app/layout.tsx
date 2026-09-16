import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans-kr",
  display: "swap",
});

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "김현수 — Sound Designer · AI/AX Portfolio",
  description: "사운드 디자이너 김현수의 게임·오디오드라마 사운드 작업과 AI·AX 엔지니어링 경력을 소개하는 포트폴리오입니다.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} ${notoSerifKR.variable}`}>
      <body>{children}</body>
    </html>
  );
}
