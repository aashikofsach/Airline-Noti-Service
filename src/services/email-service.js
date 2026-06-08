const {TicketRepository} = require("../repositories");
const { mailSender } = require("../config");

const ticketRepository = new TicketRepository();

async function sendEmail(mailFrom, mailTo, subject, text) {
  try {
    const info = await mailSender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: subject,
      text: text,
    });

    return info;
  } catch (error) {
    console.log("error while sending the email", error);
    throw error;
  }
}

async function createTicket(data) {
  try {
    const response = await ticketRepository.create(data);
    return response;
  } catch (error) {
    console.log("error while creating Ticket");
    throw error;
  }
}

async function getPendingEmails() {
  try {
    const response = await ticketRepository.getPendingEmails();
    return response;
  } catch (error) {
    console.log("here we are in getpendingEmail function");
    throw error;
  }
}

module.exports = {
  sendEmail,
  createTicket,
  getPendingEmails,
};
