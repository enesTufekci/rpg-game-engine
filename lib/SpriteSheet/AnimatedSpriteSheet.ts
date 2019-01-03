import SpriteSheet, { ISpriteSheet } from './SpriteSheet'
import { Direction } from 'Rpg/common/enum/direction'

export interface IAnimatedSpriteSheet extends ISpriteSheet {
  directions?: {
    [key: string]: number
  }
  idleCoords: { [key in Direction]: number }
}

class AnimatedSpriteSheet extends SpriteSheet {
  facing: Direction
  directions: { [key: string]: number }
  idleCoords: { [key in Direction]: number }
  constructor(params: IAnimatedSpriteSheet) {
    super(params)
    this.directions = params.directions
    this.idleCoords = params.idleCoords
  }
}

export default AnimatedSpriteSheet
