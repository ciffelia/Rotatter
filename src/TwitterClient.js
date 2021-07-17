const Twitter = require('twitter-lite')

class TwitterClient {
  constructor (config) {
    this.twitter = new Twitter(config)
  }

  async verifyConfig () {
    await this.twitter.get('account/verify_credentials')
  }

  async updateIcon (iconBuffer) {
    await this.twitter.post('account/update_profile_image', {
      image: iconBuffer.toString('base64'),
      include_entities: false,
      skip_status: true
    })
  }
}

module.exports = TwitterClient
