import SpriteSheet from 'Rpg/SpriteSheet/SpriteSheet'
import Entity from 'Rpg/Entity/Entity'
import ControllableEntity from 'Rpg/Entity/ControllableEntitiy'
import AnimatedSpriteSheet from 'Rpg/SpriteSheet/AnimatedSpriteSheet'

interface RendererInitializers {
  name: string
  dimensions: number[]
}

class Renderer {
  ctx: CanvasRenderingContext2D
  constructor(params: RendererInitializers) {
    const {
      name,
      dimensions: [width, height]
    } = params
    const canvas = document.createElement('canvas')
    const body = document.getElementsByTagName('body')[0]
    canvas.setAttribute('id', name)
    canvas.setAttribute('width', `${width}`)
    canvas.setAttribute('height', `${height}`)
    canvas.style.border = '1px solid'
    canvas.style.position = 'absolute'
    body.append(canvas)

    this.ctx = canvas.getContext('2d')
  }

  renderAnimatedSpriteSheet = (
    spriteSheet: AnimatedSpriteSheet,
    entity: ControllableEntity
  ) => {
    this.ctx.drawImage(
      spriteSheet.image,
      spriteSheet.tileWidth * entity.animationTick,
      spriteSheet.tileHeight * spriteSheet.directions[entity.facing],
      spriteSheet.tileWidth,
      spriteSheet.tileHeight,
      entity.position[0],
      entity.position[1],
      entity.width,
      entity.height
    )
  }
}

export default Renderer
