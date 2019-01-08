import SpriteSheet from 'Rpg/SpriteSheet/SpriteSheet'

interface Source {
  spriteSheet: SpriteSheet
}

class Source {
  constructor(spriteSheet: SpriteSheet) {
    this.spriteSheet = spriteSheet
  }

  slice = (x: number, y: number) => {
    return x + y
  }
}

export default Source
