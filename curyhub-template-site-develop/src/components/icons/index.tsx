import { EnvelopeClosedIcon, CheckIcon } from "@radix-ui/react-icons";
import { BsArrowRight, BsArrowLeft, BsInstagram } from "react-icons/bs";
import { GiExpand, GiPalmTree, GiPawHeart, GiPartyPopper } from "react-icons/gi";
import { FaShareAlt, FaCar, FaSwimmingPool } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { TbAdjustmentsHorizontal, TbElevator } from "react-icons/tb";
import { MdOutlineBedroomChild, MdOutlineOutdoorGrill } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { styled } from "../../../theme/stitches.config";

export const Icon = styled("img", {
  minWidth: "17px",
  minHeight: "15px",
});

export const InstagramIcon = styled(BsInstagram,{
  color: "$solidBg"
});

export const IconEnvelopeClosedStyled = styled(EnvelopeClosedIcon, {
  color: "$solidBg",
});

export const IconArrowRightStyled = styled(BsArrowRight, {
  color: "$solidBg",
});
export const IconArrowLeftStyled = styled(BsArrowLeft, {
  color: "$solidBg",
});

export const IconCheckStyled = styled(CheckIcon, {
  color: "$solidBg",
});

export const IconExpandStyled = styled(GiExpand, {
  color: "$highContrasText",
});

export const IconShareStyled = styled(FaShareAlt, {
  color: "$hoveredUiBorder",
});

export const IconLeftStyled = styled(FiChevronLeft, {
  color: "$solidBg",
});

export const IconRightStyled = styled(FiChevronRight, {
  color: "$solidBg",
});

export const SolidIconLeftStyled = styled(FiChevronLeft, {
  color: "#000000",
});

export const SolidIconRightStyled = styled(FiChevronRight, {
  color: "#000000",
});
// Diferenciais
export const IconLocationStyled = styled(ImLocation, {
  color: "$solidBg",
});

export const IconTreeStyled = styled(GiPalmTree, {
  color: "$solidBg",
});

export const IconCarStyled = styled(FaCar, {
  color: "$solidBg",
});

export const IconElevadorStyled = styled(TbElevator, {
  color: "$solidBg",
});

export const IconDormStyled = styled(MdOutlineBedroomChild, {
  color: "$solidBg",
});

export const IconPiscinaStyled = styled(FaSwimmingPool, {
  color: "$solidBg",
});

export const IconChurrasqueiraStyled = styled(MdOutlineOutdoorGrill, {
  color: "$solidBg",
});

export const IconJogosStyled = styled(CgGames, {
  color: "$solidBg",
});

export const IconPetCareStyled = styled(GiPawHeart, {
  color: "$solidBg",
});

export const IconBrinquedotecaStyled = styled(HiOutlinePuzzlePiece, {
  color: "$solidBg",
});

export const IconFestatecaStyled = styled(GiPartyPopper, {
  color: "$solidBg",
});

export const IconFilterStyled = styled(TbAdjustmentsHorizontal, {
  color: "$solidBg"
})
