const Jimp = require('jimp')

class Icon {
  constructor (filePath) {
    this.filePath = filePath
  }

  async load () {
    this.image = await Jimp.read(this.filePath)
  }

  async rotated (angle) {
    return this.image
      .clone()
      .rotate(angle, false)
      .getBufferAsync(Jimp.MIME_PNG)
  }
}

module.exports = Icon
