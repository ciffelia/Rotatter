const Jimp = require('jimp')
const Twit = require('twit')

class Rotatter {
  constructor () {
    this.twit = new Twit({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    })

    this.minutelyTask = this.minutelyTask.bind(this)
  }

  start () {
    this.count = 0
    setInterval(this.minutelyTask, 1000 * 60)
  }

  jimpToPngBuf (jimpImage) {
    return new Promise((resolve, reject) => {
      jimpImage.getBuffer(Jimp.MIME_PNG, (err, buf) => {
        if (err) reject(err)
        else resolve(buf)
      })
    })
  }

  async minutelyTask () {
    const jimpImage = await Jimp.read('./icon.png')

    this.count++
    const deg = (this.count * 6) % 360

    jimpImage.rotate(deg, false)

    const pngBufRotated = await this.jimpToPngBuf(jimpImage)
    const pngB64Rotated = pngBufRotated.toString('base64')

    await this.twit.post('account/update_profile_image', {
      image: pngB64Rotated,
      include_entities: false,
      skip_status: true
    })
  }
}

module.exports = Rotatter
