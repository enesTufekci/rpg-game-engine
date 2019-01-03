import { Renderer } from 'Rpg/Renderer'
import { Vector2x1 } from 'Rpg/math/vector'
import SpriteSheet from 'Rpg/SpriteSheet/SpriteSheet'
import AnimatedSpriteSheet from 'Rpg/SpriteSheet/AnimatedSpriteSheet'

interface Dimensions {
  width: number
  height: number
}

export interface IEntity extends Dimensions {
  position: [number, number]
  spriteSheet?: SpriteSheet | AnimatedSpriteSheet
}

abstract class Entity {
  position: Vector2x1
  width: number
  height: number
  spriteSheet?: SpriteSheet | AnimatedSpriteSheet
  constructor(config: IEntity) {
    const { position, width, height, spriteSheet } = config
    this.position = position
    this.width = width
    this.height = height
    this.spriteSheet = spriteSheet
  }
  abstract draw: (renderer: Renderer) => void
}

export default Entity
