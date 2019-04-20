const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const options = {
    useNewUrlParser: true,
    user: "",
    pass: ""
}

mongoose.connect('', options)

module.exports = {mongoose}