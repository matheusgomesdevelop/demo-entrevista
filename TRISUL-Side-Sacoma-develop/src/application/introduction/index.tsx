//IMAGES
import simbol from "../../../public/images/simbol3D.svg";
import simbol2 from "../../../public/images/simbol3D2.png";

import PolygonBar from "@/common/components/PolygonBar";
import styles from "./style.module.scss";
import Image from "next/image";

export const Introduction = () => {
  return (
    <section id="introduction" className={styles.introduction}>
      {/* <iframe
        src="https://www.youtube.com/embed/_4KdEMP1jgo?autoplay=1&loop=1&rel=0&mute=1&showinfo=0&color=white&iv_load_policy=3&playlist=_4KdEMP1jgo&hd=1"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        height={"100%"}
      ></iframe> */}
      <video id="video" width="100%" controls={false} autoPlay muted loop>
          <source src="https://vids.agenciamop.com.br/YT_ALTA.mov" type="video/mp4"/>
      </video>

      <div className={styles.introduction__simbol}>
        <Image src={simbol2} alt="Trisul" style={{ height: 349 }} />
      </div>

      <div className={styles.introduction__container}>
        <div className={styles.introduction__container_introduction_text}>
          <strong>
            2 <span>e</span> 3 DORMS. <span>(SUÍTE)</span>
          </strong>
          <span>VARANDA GOURMET*</span>
          <span>VAGA*</span>

          <div className={styles.introduction__container_introduction_text__price}>
            <p>Parcelas a partir de</p>
            <strong>
              R$ 559<span>,00**</span>
            </strong>
          </div>
        </div>
      </div>

      {/* Polygon button */}
      <PolygonBar barLeftColor="#474749" barRightColor="#474749" href={"#infos"} falseBar={false}>
        <Image src={"/grafismos/arrow-transparent.svg"} width={52} height={26} alt={""} />
      </PolygonBar>
      {/* Polygon button */}
    </section>
  );
};
