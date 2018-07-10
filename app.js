const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var varietals = require('./routes/varietals');
var regions = require('./routes/regions');
var logger = require("morgan")


app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());

app.get('/', function(req, res, next){
    res.sendStatus(200);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/varietals', varietals);
app.use('/regions', regions);


module.exports = app;
