import { ReactNode } from "react";

// Styles
import styles from "./index.module.scss";

// Componetns
import { IconButton } from "../Button";

interface IPoligonBar {
  barLeftColor: string;
  barRightColor: string;
  href: string;
  children: ReactNode;
  falseBar?: boolean;
}

export default function PolygonBar({ barLeftColor, barRightColor, href, children, falseBar }: IPoligonBar) {
  return (
    <>
      <div className={styles.polygon}>
        <div className={styles.polygon__left} style={{ background: barLeftColor }}></div>
        <a href={href}>
          <IconButton>{children}</IconButton>
        </a>
        <div className={styles.polygon__right} style={{ background: barRightColor }}></div>
      </div>

      {falseBar && <div className={styles.polygon__falseBar}></div>}
    </>
  );
}
