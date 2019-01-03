import Screen from './Screen'

class ScreenManager {
  screens: Screen[]
  dimensions: number[]

  constructor(dimensions: number[], initialScreens: Screen[]) {
    this.dimensions = dimensions
    this.screens = initialScreens
  }

  render = () => {
    this.screens.forEach(screen => screen.render())
  }
}

export default ScreenManager
