import { styled } from "../../../theme/stitches.config";

export const SectionWrapperStyled = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "$apoio",
  padding: "44px 50px",
});

export const SectionWrapperBgStyled = styled("section", {
  display: "flex",
  width: "100%",
  padding: "44px 0",
  background: "$uiBg",
  position: "relative",
  margin: "0 auto",
  paddingTop: "20px",

  "@mobile": {
    marginTop: "32px",
  },
});

export const SectionBgStyled = styled("section", {
  width: "100%",
  padding: "44px 50px",
  background: "$uiBg",
  marginTop: "20px",
});

export const SectionContentStyled = styled("div", {
  width: "100%",
  maxWidth: "1080px",
  padding: "40px 20px",
  paddingBottom: "0",
  margin: "0 auto",

  "@desktop": {
    paddingLeft: "0",
    paddingRight: "0",
  },
});

export const NoStyleWrapper = styled("div", {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  
  variants: {
    size: {
      mobile: {
        padding: '40px 40px 32px 40px',
      },
      desktop: {
        padding: '44px 50px'
      },
      vertical: {
        alignContent: 'center',
        display: 'flex',
        flexDirection: 'column',
      },
      noFlex: {
        display: 'block'
      }
    }
  }
})

export const SectionWrapper = styled('div', {
  width: '100%',

  variants: {
    size: {
      sm: {
        maxWidth: '960px'
      },
      default: {
        maxWidth: '1360px',
      }
    }
  }
})
