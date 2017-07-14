const express = require('express')
const app = express()

app.get('/', function (reg, res) {
	res.send(movieQuotes.random())
})

app.listen(3000, function () {
	console.log(movieQuotes.random())
})
