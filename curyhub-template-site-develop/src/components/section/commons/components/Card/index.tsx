import { styled } from "../../../../../../theme/stitches.config"

export const CardsWrapper = styled('div', {
    gap: '24px 18px',

    variants: {
      alignment: {
        vertical: {
          alignContent: 'flex-start',
          display: 'flex',
          flexDirection: 'column'
        },
        
        horizontal: {
          alignContent: 'center',
          display: 'flex'
        }
      }
    }
})

export const CardComponent = styled('div', {
    display: 'flex',
    height: '320px',

    variants: {
        size: {
            sm:{
                width: '388px'
            },
            lg:{
                width: '586px'
            },
        },

        flexSize:{
            1:{
                flexGrow: 1
            },
            
            2: {
                flexGrow: 2
            }
        }
    }
})

export const CardDepoimentoComponent = styled('div',{
    alignContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px 0',
    padding: '8px',
    maxWidth: '300px',
    width: '100%'
})