const express = require('express')
const app = express()
const movieQuotes = require ('movie-quotes');
    movieQuotes.random();

app.get('/', function (reg, res) {
	res.send(movieQuotes.random())
})

app.listen(3000, function () {
	console.log('Running on port 3000')
})




