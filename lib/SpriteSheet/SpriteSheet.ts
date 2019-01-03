export interface ISpriteSheet {
  src: string
  dimensions: [number, number]
}

class SpriteSheet {
  src: string
  rows: number
  columns: number
  image: CanvasImageSource
  tileWidth: number
  tileHeight: number

  constructor(params: ISpriteSheet) {
    const {
      src,
      dimensions: [rows, columns]
    } = params

    this.src = src

    this.rows = rows
    this.columns = columns

    const image = new Image()
    image.src = this.src
    this.image = image
    const { naturalWidth, naturalHeight } = image

    this.tileWidth = naturalWidth / rows
    this.tileHeight = naturalHeight / columns
  }
}

export default SpriteSheet
