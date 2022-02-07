var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var seedRouter = require('./routes/seed');

const { connectDB } = require('./db-connect');
const { getDriver } = require('./neo4j/neo4j-connect');

var app = express();

connectDB();
getDriver();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/seed', seedRouter);

module.exports = app;
