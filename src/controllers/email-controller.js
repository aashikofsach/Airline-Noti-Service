const {EmailService} = require("../services/");

async function createTicket(req, res) {
  try {
    const response = await EmailService.createTicket({
      subject: req.body.subject,
      content: req.body.content,
      recepientEmail: req.body.recepientEmail,
    //   status: req.body.status,
    });

    return res.status(201).json(response);
  } catch (error) {
    console.log("error from createTicket from email controller", error);
    return res.status(500).json(error)

  }
}

module.exports = {
  createTicket,
};
