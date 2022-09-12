import { JSBlock } from './js-block'
import { TimerBlock } from './timer-block'
import { JS_CREATING_DATE } from '../core/constants/setting'

export default class App {
  #jsBlock
  #timerBlock

  constructor() {
    this.#jsBlock = new JSBlock()
    this.#timerBlock = new TimerBlock(JS_CREATING_DATE)
  }

  run() {
    const jsBlockHTML = this.#jsBlock.render()
    const timerBlockHTML = this.#timerBlock.render()
    document.body.append(jsBlockHTML, timerBlockHTML)
  }
}

// export function createFunc() {
//   console.log('createFunc')
// }
