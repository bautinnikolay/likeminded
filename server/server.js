const express = require('express')
const bodyParser = require('body-parser')
const sess = require('express-session')

const app = express()

app.disable('x-powered-by')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(sess({
  secret: 'verytopsecretword',
  resave: false,
  saveUninitialized: true,
  cookie: { expires: new Date(Date.now() + 9000000000) }
}))

app.listen(80, () => {
    console.log("Server started at port 80")
})

module.exports = {app}