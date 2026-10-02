import localFont from "next/font/local";
import { CursorLight } from "@/components/lab/CursorLight";
import { LabFooter } from "@/components/lab/LabFooter";
import { LabHeader } from "@/components/lab/LabHeader";
import styles from "@/components/lab/lab.module.css";

// One preloaded file per weight (2,350 everyday Hangul + Latin) instead of hundreds of unicode-range slices,
// so text doesn't re-render as new sections scroll into view on a first visit.
const pretendard = localFont({
  src: [
    { path: "./fonts/Pretendard-Regular.subset.woff2", weight: "400" },
    { path: "./fonts/Pretendard-SemiBold.subset.woff2", weight: "600" },
    { path: "./fonts/Pretendard-Bold.subset.woff2", weight: "700" },
  ],
  variable: "--font-lab",
  display: "swap",
});

export default function LabLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${styles.shell} ${pretendard.variable}`} data-light-page>
      <LabHeader />
      {children}
      <LabFooter />
      <CursorLight />
    </div>
  );
}
