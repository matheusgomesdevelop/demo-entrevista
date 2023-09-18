//IMAGES
import ArrowRight from "../../../../public/icons/arrowRight.svg";
import closeModal from "../../../../public/icons/closeModal.png";
import DarkArrowRight from "../../../../public/icons/darkArrowRight.svg";

//CORE HELPERS
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

//STYLES
import styles from "./style.module.scss";
import Link from "next/link";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  className?: string;
}
interface IAnchorProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  label?: string;
  className?: string;
  href: string;
  onClick?: () => void;
}

export const UnderlineButton = ({ label }: IButtonProps) => {
  return (
    <button className={styles.underline_button_container}>
      <div className={styles.underline_button_container__icon_content}>
        <Image src={DarkArrowRight} alt="Right Arrow" />
      </div>
      <span className={styles.underline_button_container__label_content}>{label}</span>
    </button>
  );
};

export const SolidBackgroundButton = ({ label, className  }: IButtonProps) => {
  return (
      <button className={`${styles.solid_background_button_container} ${className}`}>
        <span className={styles.solid_background_button_container__label_content}>{label}</span>
        <div className={styles.solid_background_button_container__icon_background}>
          <Image src={ArrowRight} alt="Right Arrow" />
        </div>
      </button>
  );
};

export const SolidBackgroundLink = ({ label, className, href }: IAnchorProps) => {
  return (
    <Link className={`${styles.solid_background_button_container} ${className}`} href={href} target="_blank">
      <span className={styles.solid_background_button_container__label_content}>{label}</span>
      <div className={styles.solid_background_button_container__icon_background}>
        <Image src={ArrowRight} alt="Right Arrow" />
      </div>
    </Link>
  );
};

export const IconButton = ({ label, children }: IButtonProps) => {
  return <button className={styles.iconButton}>{children}</button>;
};

export const ButtonOpenModal = ({onClick}: IButtonProps) => {
  return (
      <button className={styles.openModal}>
        <Image width={83} height={83} src={"/icons/openModal.png"} alt={""} />
      </button>
  );
};

export const ButtonStyled = ({}: IButtonProps) => {
  return (
    <button className={styles.styled_button}>
      <Image src={closeModal} alt={"Close modal icon"} />
    </button>
  );
};

export const GreenButtonOpenModal = ({ className }: IButtonProps) => {
  return (
    <button className={`${styles.openModal} ${className}`}>
      <Image width={40} height={40} src={"/icons/greenOpenModal.png"} alt={""} />
    </button>
  );
};

export const RoundButton = ({ className }: IButtonProps) => {
  return <button className={`${styles.round_button} ${className}`}>OK</button>;
};
