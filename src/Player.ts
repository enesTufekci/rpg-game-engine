import ControllableEntity, {
  IControllableEntity
} from 'Rpg/Entity/ControllableEntitiy'

import Keyboard from 'Rpg/Input/Keyboard'
import { Renderer } from 'Rpg/Renderer'
import AnimatedSpriteSheet from 'Rpg/SpriteSheet/AnimatedSpriteSheet'

class Player extends ControllableEntity {
  constructor(config: IControllableEntity) {
    super(config)
    Keyboard.down(this.move)
    Keyboard.up(this.stop)
  }

  shape = (renderer: Renderer) => {
    renderer.renderAnimatedSpriteSheet(
      this.spriteSheet as AnimatedSpriteSheet,
      this
    )
  }
}

export default Player
