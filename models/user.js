const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
    nama: String,
    email: {
        type: String,
        required: true
    },
    password: String,
})

const User = mongoose.model("User", userSchema)
module.exports = User