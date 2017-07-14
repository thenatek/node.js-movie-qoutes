const express = require('express')
const app = express()

app.get('/', function (reg, res) {
	res.send(movieQuotes.random())
})

app.listen(3000, function () {
	console.log('Running on port 3000')
})

const movieQuotes = require ('movie-quotes');
    movieQuotes.random();


