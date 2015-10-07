var compression = require('compression');
var express = require('express');
var app = express();
var logger = require('morgan');

app.use(logger);
app.use(compression("" + __dirname + "/dist"));
app.listen(process.env.PORT || 9000);
