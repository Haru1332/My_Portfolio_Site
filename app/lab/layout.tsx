import { LabFooter } from "@/components/lab/LabFooter";
import { LabHeader } from "@/components/lab/LabHeader";
import styles from "@/components/lab/lab.module.css";

export default function LabLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.shell} data-light-page>
      <LabHeader />
      {children}
      <LabFooter />
    </div>
  );
}
