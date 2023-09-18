import { styled } from "../../../../../../theme/stitches.config";

export const ImageComponent = styled("img", {
    borderRadius: '90px',
    height: '178px', 
    width: '178px',

    variants: {
        size: {
            noBorder: {
                borderRadius: '0px',
            },
            sm: {
                border: '30px',
                height: '60px',
                width: '60px',
            },
            md: {
                borderRadius: '0px',
                height: '195px',
                width: '340px',
            },
            lg: {
                borderRadius: '0px',
                height: '149px',
                width: '177px',
            },
            xl: {
                borderRadius: '0px',
                height: '280px',
                width: '565px',
            },
            slide: {
                borderRadius: '0px',
                height: '267px',
                width: '335px'                
            },
            post:{
                borderRadius: '0px',
                height: '400px',
                width: '280px'
            },
            icon: {
                borderRadius: '0px',
                height: '24px',
                width: '24px'
            },
            borderTop: {
                borderRadius: '8px 8px 0 0'
            }
        }
    }
})
