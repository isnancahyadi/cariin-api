"use strict";
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cariin.job22@gmail.com",
    pass: process.env.KEY,
  },
});

module.exports = transporter;
