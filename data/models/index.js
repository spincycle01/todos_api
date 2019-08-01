const mongoose = require('mongoose');
//set debug mode to true to see what is happening at any given point
mongoose.set('debug', true);

const dbURL = 'mongodb://localhost/todo-api';
mongoose.connect(dbURL);

//allow us to use promise syntax (.then and .catch)
mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
