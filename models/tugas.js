const mongoose = require('mongoose');
const { Schema } = mongoose

const tugasSchema = new Schema({
    title: String,
    isDone: Boolean,
    user: {
        type: mongoose.ObjectId,
        ref: "User"
    }
})

const Task = mongoose.model("Task", tugasSchema)

module.exports = Task