const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/todo-list'

// const DB_URL='mongodb+srv://diana9422120:diana9422120@cluster1.dclikdj.mongodb.net/todo-list'

const db = mongoose.connect(DB_URL);

module.exports = db;