const app = require('express')()
const Twit = require('twit')
require('dotenv').config()

var T = new Twit({
    consumer_key: `${process.env.CONSUMER_KEY}`,
    consumer_secret: `${process.env.CONSUMER_SECRET}`,
    access_token: `${process.env.ACCESS_TOKEN}`,
    access_token_secret: `${process.env.ACCESS_TOKEN_SECRET}`,
    timeout_ms: 60*1000,
    strictSSL: true
})

// top trends
app.get('/toptrends', (req, res) => {

    T.get('https://api.twitter.com/1.1/trends/place.json?id=1', (err, data, response) => {
        console.log(data)
    })

    res.send().status(200)
})

app.listen(4002, () => {console.log('Backend executando na porta 4002')})