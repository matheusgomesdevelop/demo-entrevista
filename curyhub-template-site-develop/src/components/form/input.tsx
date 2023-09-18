import { styled } from "../../../theme/stitches.config";

export const InputStyled = styled("input", {
  width: "100%",
  height: "27px",
  background: "none",
  border: "none",
  borderBottom: "1px solid $secundaria",
  fontSize: "$md",
  fontWeight: "$light",
  borderRadius: "0",
  color: "$highContrasText",
  fontFamily: "$nunitoSans",
  padding: "18px 5px",
  outline: "0",
  transition: "0.3s",

  "@tablet": {
    maxWidth: "260px",
  },

  "&::placeholder": {
    opacity: "1",
    color: "$highContrasText",
  },

  "&:focus": {
    borderColor: "$hoveredSolidBg",
  },

  variants: {
    variant: {
      radio: {
        padding: "0",
        width: "17px",
        height: "17px",
        appearance: "none",
        borderRadius: "100%",
        background: "$uiBg",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        outline: "1px solid $solidBg",
        border: "none",

        "&:after": {
          content: "",
          width: "5px",
          height: "5px",
          display: "inline",
          background: "none",
          borderRadius: "100%",
          position: "relative",
        },

        "&:checked": {
          background: "$solidBg",

          "&:after": {
            content: "",
            background: "$subBg",
          },
        },
      },
    },
  },
});

export const SelectStyled = styled("select", {
  minWidth: "48px",
  minHeight: "22px",
  background: "none",
  outline: "0",
  border: "none",
  borderBottom: "1px solid $solidBg",
  color: "$highContrasText",
  letterSpacing: "0",
  fontWeight: "300",
  padding: "6px",
  fontSize: "16px",
  opacity: "1",
  position: "relative",
  appearance: "none",
  zIndex: 2,
  paddingRight: "20px",

  "&:placeholder": {
    fontWeight: "400",
  },
});

export const LabelInputStyled = styled("label", {
  display: "flex",
  alignItems: "center",
  position: "relative",
  fontWeight: "400",
  gap: "12px",
  cursor: "pointer",

  variants: {
    variant: {
      data: {
        width: "max-content",

        "&::after": {
          content: "⌄",
          display: "flex",
          alignItems: "center",
          position: "absolute",
          color: "$solidBg",
          fontSize: "32px",
          top: "-62%",
          right: "0",
          padding: "0",
          gap: "2px",
          zIndex: "1",
        },
      },
      radio: {
        "&::after": {
          display: "none",
        },
      },
    },
  },
});

export const InputStyledMessage = styled("p", {
  fontSize: "14px",
  margin: "7px 0",
  fontWeight: "light",

  variants: {
    variant: {
      error: {
        color: "$solidBg",
      },
    },
  },
});

export const InputLabelMessage = styled("label", {
  fontSize: "10px",
  color: "$hoveredSolidBg",
  fontWeight: "400",
});
