import Rpg from 'Rpg/Rpg'
import { GAME_WIDTH, GAME_HEIGHT } from './constants'
import gameScreen from './Screens/GameScreen'

const game = new Rpg({
  dimensions: [GAME_WIDTH, GAME_HEIGHT],
  screens: [gameScreen]
})

export default game
