require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require("../models/user");
const jwt = require('jsonwebtoken');

module.exports = {
    getAllUser: async (req, res) => {
        try {
            const users = await User.find({}, "-__v")

            res.json({
                message: "succes to get data",
                data: users
            })
        } catch (error) {
            console.log(error);
        }
    },

    getUserByID: async (req, res) => {
        const id = req.params

        try {
            const user = await User.findById(id);
            res.status(200).json({
                message: "succes to get data",
                data: user
            })
        } catch (error) {
            res.status(400).json({
                message: "failed to get data"
            })
        }
    },

    register: (req, res) => {
        const data = req.body

        const saltRounds = 10
        const hash = bcrypt.hashSync(data.password, saltRounds);
        data.password = hash

        const user = new User(data)

        user.save()

        res.json({
            message: "successfully added data",
        })
    },

    login: async (req, res) => {
        const data = req.body
        const user = await User.findOne({ email: data.email })
        const checkPwd = bcrypt.compareSync(data.password, user.password)
        const token = jwt.sign({ user }, process.env.SECRET_KEY)

        if (checkPwd) {
            res.header('auth', token).json({
                message: "login succes",
                token
            })
        } else {
            res.json({
                message: "failed login",
            })
        }
    }
}