import Entity, { IEntity } from './Entity'
import {
  Vector2x1,
  vector2Add,
  vector2Subtract,
  vector2Multiply,
  vector2Unit,
  vector2IsZero,
  vectorToDirection
} from 'Rpg/math/vector'
import { Direction } from 'Rpg/common/enum/direction'
import { Renderer } from 'Rpg/Renderer'

import AnimatedSpriteSheet from 'Rpg/SpriteSheet/AnimatedSpriteSheet'

export interface IControllableEntity extends IEntity {
  topSpeed: number
}

type DirectionMap = {
  [key: string]: Vector2x1
}

const directions: DirectionMap = {
  LEFT: [-1, 0],
  UP: [0, -1],
  RIGHT: [1, 0],
  DOWN: [0, 1]
}

abstract class ControllableEntity extends Entity {
  topSpeed: number = 2
  acceleration: number = 0.5
  velocity: [number, number] = [0, 0]
  direction: [number, number] = [0, 0]
  position: [number, number] = [0, 0]
  facing: Direction = Direction.DOWN
  animationInterval = 0
  animationTick = 0

  constructor(config: IControllableEntity) {
    super(config)
    this.topSpeed = config.topSpeed
  }

  stop = (direction: Direction) => {
    this.direction = vector2Unit(
      vector2Subtract(this.direction, directions[direction])
    )
  }

  move = (direction: Direction) => {
    this.direction = vector2Unit(
      vector2Add(this.direction, directions[direction])
    )
  }

  handleAnimation = () => {
    if (vector2IsZero(this.direction)) {
      if (this.animationInterval >= 1000) {
        this.animationInterval = 0
        this.animationTick = (this.animationTick + 1) % this.spriteSheet.columns
      } else {
        this.animationInterval += 100
      }
    } else {
      this.animationTick = (this.spriteSheet as AnimatedSpriteSheet).idleCoords[
        this.facing
      ]
    }
  }

  draw = (renderer: Renderer) => {
    this.handleAnimation()

    this.facing = vectorToDirection(this.direction) || this.facing

    this.velocity = vector2Add(
      this.velocity,
      vector2Multiply(this.direction, this.acceleration)
    )
    this.position = vector2Add(this.position, this.velocity)
    this.velocity = vector2Multiply(this.velocity, 0.9)

    this.shape(renderer)
  }

  abstract shape: (renderer: Renderer) => void
}

export default ControllableEntity
