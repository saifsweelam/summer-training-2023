const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'static')));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.render('index.html');
})

app.post('/', (req, res, next) => {
    res.json(req.body);
})

app.listen(3000, () => console.log("Working on port 3000"));
