const nodemailer = require("nodemailer");

// const { ServerConfig } = require("../config/");
const ServerConfig = require("./server-config");

const mailSender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ServerConfig.GMAIL_ADD,
    pass: ServerConfig.GMAIL_KEY,
  },
});

module.exports = mailSender;
