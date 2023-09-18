//IMAGES
import zoomIcon from "../../../public/icons/zoomIcon.svg";
import map from "../../../public/images/map.svg";
import pinIcon from "../../../public/icons/pinLocal.svg";
import ArrowRight from "../../../public/icons/arrowRight.svg"

//STYLE
import styles from "./style.module.scss";

//CORE HELPERS
import Image from "next/image";

//COMPONENTS
import { ButtonOpenModal, SolidBackgroundButton } from "@/common/components/Button";
import { useState } from "react";
import { MapModal } from "../modal/map-modal";
import Modal from "@/common/components/Modal";

export const Location = () => {
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);

  return (
    <>
      <section id="location" className={styles.location}>
        <div className={styles.location__container}>
          <div className={styles.location__container_index}>
            <div className={styles.location__container_groceries_around}>
              <h3>serviços,</h3>
              <h3>comércios,</h3>
              <h3>lazer,</h3>
              <h3>cultura,</h3>
              <h3>hospitais,</h3>
              <h3>parques e</h3>
              <h3>mobilidade.</h3>
              <h1>TUDO AO SEU LADO.</h1>
              <a onClick={() => setIsMapOpen(true)}>
                  VEJA COMO CHEGAR
                  <Image src={ArrowRight} alt="Right Arrow" />
              </a>
              <div className={styles.location__container_location}>
                <Image src={pinIcon} alt="Location Icon" />
                <p>
                  <strong>Rua do Lago, 216 </strong> - Ipiranga - São Paulo
                </p>
              </div>
            </div>
          </div>
          <div className={styles.location__container_map}>
            <figure>
              <Image src={map} alt="Sacoma map" height={644} className={styles.location__container_map_image}/>
              <figcaption onClick={() => setIsMapOpen(true)}>
                <Image src={zoomIcon} alt="zoom icon" height={28} width={28}/>
              </figcaption>
            </figure>
          </div>
          
          <div className={styles.location__container_quadrado}></div>
        </div>
      </section>

      {isMapOpen && (
        <Modal open={isMapOpen} onClose={() => setIsMapOpen(false)}>
          <MapModal setIsOpen={setIsMapOpen} />
        </Modal>
      )}
    </>
  );
};
