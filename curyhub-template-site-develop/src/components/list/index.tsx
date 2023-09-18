import { styled } from "../../../theme/stitches.config";

export const ListStyled = styled("ul", {
  display: "flex",
  listStyle: "none",
  flexWrap: "wrap",
  marginTop: "40px",
  maxWidth: "560px",

  variants: {
    list: {
      modalList: {
        justifyContent: "space-between",
        marginTop: "0px",
        marginBottom: "50px",
        overflowY: "auto",
        maxHeight: "85%",
        maxWidth: "100%",

        "& li": {
          width: "100%",
          display: "flex",
          height: "24px",
          marginTop: "12px",

          "@tabletUp": {
            width: "33.333%",
            marginTop: "30px",
          },

          "& p": {
            marginLeft: "12px",
            fontSize: "18px",
            fontWeight: "$light",
            color: "$highConstraText",

            "& strong": {
              marginRight: "5px",
            },
          },
        },
      },
    },
  },
});

export const ListChildStyled = styled("li", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  height: "24px",
  fontSize: "16px",

  "&:not(:nth-last-child(1))": {
    marginBottom: "20px",
  },

  "&:not(:nth-child(-n + 3))": {
    display: "none",
  },

  "@tablet": {
    width: "50%",

    "&:not(:nth-child(-n + 3))": {
      display: "flex",
    },
  },

  "& p": {
    paddingLeft: "0px",
  },

  variants: {
    list: {
      modalList: {
        "&:not(:nth-child(-n + 3))": {
          display: "flex",
        },
      },
    },
  },
});
