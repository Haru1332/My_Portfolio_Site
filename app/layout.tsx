import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김현수 — Sound Designer · Voice AI Portfolio",
  description: "사운드 디자이너 김현수의 게임·오디오드라마 사운드 작업과 음성 AI 엔지니어링 경력을 소개하는 포트폴리오입니다.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
