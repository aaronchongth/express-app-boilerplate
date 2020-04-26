const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;

const routes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', routes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
