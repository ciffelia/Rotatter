process.on('unhandledRejection', (err) => {
  console.error(err)
  process.exit(1)
})

const path = require('path')
const Rotatter = require('./Rotatter')

const config = {
  twitter: {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  },
  iconPath: path.join(__dirname, '../assets/icon.png')
}

const rotatter = new Rotatter(config)

rotatter.run()
