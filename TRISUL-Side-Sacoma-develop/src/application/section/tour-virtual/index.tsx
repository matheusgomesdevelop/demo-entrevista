import { TituloSecao } from "@/common/components/Typography/Title";
import styles from "./index.module.scss";

export default function SectionTour() {
  return (
    <section className={styles.l_tour} id="section-tour">
      <div className={styles.l_tour__container}>
        <TituloSecao type={"white"}>TOUR VIRTUAL</TituloSecao>

        <iframe src="https://my.matterport.com/show/?m=xh2DpABkUNV" frameBorder="0"></iframe>
      </div>
    </section>
  );
}
