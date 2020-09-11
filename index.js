const converteFileToText = require("./src/converteFileToText");

const app = require('express')();

app.post('/', function (req, res) {
    converteFileToText()
    res.send('hello world')
})

app.listen(3000)