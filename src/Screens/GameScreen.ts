import { Screen } from 'Rpg/Screen'
import Player from '../Player'
import { GAME_WIDTH, GAME_HEIGHT } from '../constants'
import AnimatedSpriteSheet from 'Rpg/SpriteSheet/AnimatedSpriteSheet'
import { Direction } from 'Rpg/common/enum/direction'

const gameScreen = new Screen({
  name: 'GAME',
  dimensions: [GAME_WIDTH, GAME_HEIGHT]
})

const spriteSheet = new AnimatedSpriteSheet({
  src: 'http://allacrost.org/wiki/images/e/ea/Sprite_laila_run.png',
  dimensions: [6, 4],
  directions: {
    DOWN: 0,
    RIGHT: 3,
    LEFT: 2,
    UP: 1
  },
  idleCoords: {
    [Direction.LEFT]: 0,
    [Direction.RIGHT]: 0,
    [Direction.UP]: 0,
    [Direction.DOWN]: 0
  }
})

const player = new Player({
  position: [16, 16],
  width: 46,
  height: 64,
  topSpeed: 2,
  spriteSheet
})

gameScreen.put(player)

export default gameScreen
