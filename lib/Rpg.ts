import ScreenManager from './Screen/ScreenManager'
import { Screen } from './Screen'

type GameConfig = {
  dimensions: number[]
  screens: Screen[]
}

class Rpg {
  dimensions: number[]
  screenManager: ScreenManager
  started = false

  constructor(config: GameConfig) {
    const { dimensions, screens } = config
    this.dimensions = dimensions
    this.screenManager = new ScreenManager(this.dimensions, screens)
    document.body.style.backgroundColor = '#333'
  }

  start = () => {
    this.screenManager.render()
    requestAnimationFrame(this.start)
  }
}

export default Rpg
