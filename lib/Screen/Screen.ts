import Entity from 'Rpg/Entity/Entity'
import { Renderer } from 'Rpg/Renderer'

interface IScreen {
  name: string
  dimensions: number[]
}

class Screen {
  name: string
  entities: Entity[] = []
  dimensions: number[]
  private renderer: Renderer

  constructor(params: IScreen) {
    const { name, dimensions } = params
    this.name = name
    this.dimensions = dimensions
    this.renderer = new Renderer({
      name,
      dimensions
    })
  }

  put = (entity: Entity) => {
    this.entities = [...this.entities, entity]
  }

  render = () => {
    const [w, h] = this.dimensions
    this.renderer.ctx.clearRect(0, 0, w, h)
    this.entities.forEach(entity => entity.draw(this.renderer))
  }
}

export default Screen
