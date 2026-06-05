const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  GMAIL_ADD: process.env.GMAIL_ADD,
  GMAIL_KEY: process.env.GMAIL_KEY,
};
