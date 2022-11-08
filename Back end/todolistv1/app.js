const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
var path = require('path')


let items = [];
let workItems = [];

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    let day = date.getDate();
    res.render('list', {listTitle: day, newListItems: items});
});

app.get('/work', (req, res) => {
    res.render('list', {listTitle: "Work", newListItems: workItems});
});

app.get('/news', (req, res) => {
    res.render('about');
});


app.post('/', (req, res) => {
    let item = req.body.item;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }
});








app.listen(3000, () => {
    console.log('Server started on port 3000');
});