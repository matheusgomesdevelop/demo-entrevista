import { styled } from "@stitches/react";

export const Text = styled("p", {
    color: "#FFFFFF",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "14.4px",
    letterSpacing: "0.3px",

    variants:{
        type:{
            midSpaced:{
                lineHeight: "18px"
            },
            highSpaced: {
                lineHeight: "21.6px"
            },
            midSizeDark:{
                color: "#504F4B",
                fontSize: "18px",
                lineHeight: "26px",
                letterSpacing: "0.35px"                
            },
            midSize:{
                fontSize: "18px",
                lineHeight: "26px",
                letterSpacing: "0.35px"                
            }
        }
    }
})