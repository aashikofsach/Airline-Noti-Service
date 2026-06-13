const { PORT } = require("./config");
const express = require("express");
const amqplib = require("amqplib");
const {EmailService} = require("./services/")

async function queueConnection() {
  try {
    const connection = await amqplib.connect("amqp://localhost");
    const channel = await connection.createChannel();

    await channel.assertQueue("noti-queue");
    // setInterval(() => {
    //              channel.sendToQueue("noti-queue", Buffer.from("Something to do "))

    // }, 1000);

    await channel.consume("noti-queue", (data) => {
      console.log(` hi ${Buffer.from(data.content)}`);
      const object = JSON.parse(Buffer.from(data.content));

      EmailService.sendEmail(ServerConfig.GMAIL_ADD , object.recepientEmail , object.subject , object.text)

      channel.ack(data);
    });
  } catch (error) {
    console.log(
      "errror during connection to rabbit MQ from notification service",
      error,
    );
  }
}

const apiRoutes = require("./routes");
const { ServerConfig, logger, mailSender } = require("./config");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`The server is running on the PORT: ${ServerConfig.PORT}`);
  queueConnection();

  // try {

  // const info = await mailSender.sendMail({
  //     from : ServerConfig.GMAIL_ADD,
  //     to : "aashish.kumar@mobcoder.com",
  //     subject : "testing nodemailer",
  //     text : "Hello world",
  //     html : "<h1> Html content </h1>"

  // })

  // console.log("Info after sending the email", info)

  // } catch (error) {
  //     console.log("error while sending the email", error)

  // }
});
