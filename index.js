const app = require('express')();

app.post('/', function (req, res) {
    res.send('hello world')
})

app.listen(3000)