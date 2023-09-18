import { IconButton, SolidBackgroundLink } from "@/common/components/Button";
import Image from "next/image";
import pinIcon from "../../../../public/icons/blackPinLocal.svg";
import { Dispatch, SetStateAction } from "react";
import styles from "./style.module.scss";

interface IModalMap {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const MapModal = ({ setIsOpen }: IModalMap) => {
  return (
    <>
      <div className={styles.formMap}>
        <header className={styles.formMap__header}>
          <Image
            width={152}
            height={60}
            src={"/images/logoSideSacoma.png"}
            alt={""}
          />
          <IconButton>
            <Image
              width={32}
              height={32}
              src={"/icons/close.png"}
              alt={""}
              onClick={() => setIsOpen(false)}
            />
          </IconButton>
        </header>
        <div className={styles.formMap__container}>
          <div
            className={
              styles.formMap__button_container
            }>
            <SolidBackgroundLink 
              href="https://www.google.com/maps/place/R.+do+Lago,+216+-+Vila+Nair,+S%C3%A3o+Paulo+-+SP,+04280-000/@-23.603985,-46.6077913,17z/data=!4m6!3m5!1s0x94ce5b908d0c2e19:0xe69f189ff7210ec8!8m2!3d-23.6039604!4d-46.6059245!16s%2Fg%2F11c259z90c"
              label="VEJA COMO CHEGAR"
              className={
                styles.formMap__button
              }
            />
            <div
              className={
                styles.formMap__location
              }>
              <Image src={pinIcon} alt="Location Icon" />
              <p>
                <strong>Rua do Lago, 216 </strong> -
                Ipiranga - São Paulo
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
