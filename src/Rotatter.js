const Icon = require('./Icon')
const TwitterClient = require('./TwitterClient')
const sleep = require('./sleep')

class Rotatter {
  constructor (config) {
    this.twitterClient = new TwitterClient(config.twitter)
    this.icon = new Icon(config.iconPath)
  }

  async run () {
    await this.twitterClient.verifyConfig()
    await this.icon.load()

    while (true) {
      await this.updateProfile()
      await sleep(1000 * 60)
    }
  }

  async updateProfile () {
    const angle = 45 - new Date().getMinutes() * 6
    const rotatedIcon = await this.icon.rotated(angle)

    await this.twitterClient.updateIcon(rotatedIcon)
  }
}

module.exports = Rotatter
