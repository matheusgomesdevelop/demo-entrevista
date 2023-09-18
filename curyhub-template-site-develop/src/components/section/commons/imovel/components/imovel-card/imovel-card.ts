import { styled } from "../../../../../../../theme/stitches.config";

export const ImovelCardWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.25)",
  height: "100%",
  maxHeight: "493px",
  maxWidth: "284px",
  width: "100%",
});

export const ImovelCardInfosWrapper = styled("div", {
  alignContent: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: "18px 0",

  padding: "20px 18px",
});

export const ImovelReleaseTag = styled("div", {
  alignContent: "center",
  display: "flex",
  justifyContent: "center",

  background: "#484848",
  borderRadius: '4px',
  color: "#FFFFFF",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "19.07px",
  maxWidth: "200px",
  padding: "8px 4px",
  width: "fit-content",
});

export const ImovelInfoWrapper = styled("div", {
  alignContent: "flex-start",
  display: "flex",
  flexDirection: "column",

  variants: {
    gapSize: {
      sm: { gap: "8px 0" },
      md: { gap: "18px 0" },
    },
    alignment: {
      horizontal: {
        alignContent: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }   
    }
  },
});

export const ImovelInfo = styled('div', {
    alignContent: 'center',
    display: 'flex',
    justifyContent: 'flex-start',

    variants: {
      gapSize: {
        sm: {
          gap: '0 10px',
        },
        md: {
          gap: '0 10px',
        },
      }
    }
})
