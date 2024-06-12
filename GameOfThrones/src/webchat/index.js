import { COLORS } from './constants'
import BotIcon from '../assets/stark.png'
import { CustomTrigger } from './custom-trigger'

export const webchat = {

    onOpen: app => {
        app.clearMessages()
        app.addUserPayload('hi')
    },
  
    theme: {
        customTrigger: CustomTrigger,
        style: {
            fontFamily: '"Helvetica Neue",Arial,sans-serif',
            width: 370,
            borderRadius: 10,
            background: COLORS.MAIN_COLOR,
            lineHeight: 1.3,
          },
          header: {
            image: BotIcon,
            title: 'Jon Snow',
            style: {
              background: COLORS.PRIMARY_COLOR,
            },
          },
          brand: {
            color: COLORS.PRIMARY_COLOR,
            image: BotIcon,
          },
          triggerButton: {
            image: BotIcon,
          },
          
          button: {
            style: {
              color: 'black',
              background: COLORS.MESSAGE_COLOR,
            },
            hoverBackground: COLORS.MESSAGE_COLOR,
            hoverTextColor: 'black',
        },
          
        
        message: {
            bot: {
                blobTick: false,
                blobWidth: '255px',
                imageStyle: {
                  alignItems: 'flex-end',
                },
                style: {
                  border: 'none',
                  color: 'black',
                  borderRadius: '7px',
                  background: COLORS.MESSAGE_COLOR,
                  boxShadow: '1px -1px 6px rgba(0, 0, 0, 0.3)',
                },
              },
        },
      }
  }