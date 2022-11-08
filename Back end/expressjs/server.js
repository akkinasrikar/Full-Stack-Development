const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/contact', function(req, res) {
    res.send('Contact me at: akkinasrikar@gmail.com');
});

app.get('/about', function(req, res) {
    res.send('My name is Srikar Akkina');
});

app.listen(3000,function() {
    console.log('Server is running on port 3000');
});