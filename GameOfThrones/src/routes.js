import Carousel from './actions/carousel'
import Chat from './actions/chat'

export const routes = [
  { path: 'initial', payload: 'hi', action: Carousel },
  { path: 'chat', text: /.*/, action: Chat },
]
