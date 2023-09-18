import { styled } from "@stitches/react";
import Image from "next/image";
import { ReactNode } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./style.module.scss";

interface IIconProps {
  icon: string;
  iconHeight?: number;
  iconWidth?: number;
  label: string;
  title?: string;
  preTitle?: string;
  children?: ReactNode;
}

const IconWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px 0",
  cursor: "pointer",
  color: "#FFFFFF",
  maxWidth: "200px",
});

const BenefitsIconWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px 0",
  cursor: "pointer",
  color: "#FFFFFF",
});

export const Icon = ({ icon, label, iconHeight, iconWidth, children }: IIconProps) => {
  return (
    <IconWrapper>
      <Image src={icon} alt={label} height={iconHeight} width={iconWidth} />
      <div className={styles.icon_title}>{children}</div>
      <p>{label}</p>
    </IconWrapper>
  );
};

export const BenefitsIcon = ({ icon, label, iconHeight, iconWidth, children }: IIconProps) => {
  return (
    <BenefitsIconWrapper>
      <Image src={icon} alt={label} height={iconHeight} width={iconWidth} />
      <h2 className={styles.icon_title}>{children}</h2>
      <p style={{textAlign: "justify", wordBreak: "break-word", wordSpacing:"-2.5px"}}>{label}</p>
    </BenefitsIconWrapper>
  );
};

export const SolidBackgroundIcon = ({ icon, label, title, iconHeight, iconWidth, preTitle }: IIconProps) => {
  return (
    <IconWrapper>
      <div className={styles.solid_background}>
        <Image src={icon} alt={label} height={iconHeight} width={iconWidth} />
      </div>
      {preTitle && <p>{preTitle}</p>}
      {title && <span className={styles.icon_title}>{title}</span>}
      <p>{label}</p>
    </IconWrapper>
  );
};

export const IconLeftStyled = styled(FiChevronLeft, {
  color: "#000000",
});

export const IconRightStyled = styled(FiChevronRight, {
  color: "#000000",
});
