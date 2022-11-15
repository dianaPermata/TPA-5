const express = require("express");
const app = express();
require('dotenv').config();
const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
    const token = req.headers('authorization');
    if (!token) return res.status(400).json({
        status: res.statusCode,
        message: "access not allowed"
    })
    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verified
        console.log(verify);
    } catch (err) {
        res.status(400).json({
            message: "invalid token"
        })
    }
    next()
}
module.exports = verify