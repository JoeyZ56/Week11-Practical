const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    complete: Boolean,
    Date: Date
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo