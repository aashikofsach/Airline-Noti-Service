const {PORT} = require("./config");
const express = require('express');
const apiRoutes = require("./routes")
const {ServerConfig , logger , mailSender} = require("./config");


const app = express() ;
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use("/api", apiRoutes)



app.listen(ServerConfig.PORT , async () => {
    console.log(`The server is running on the PORT: ${ServerConfig.PORT}`) ;

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

})

