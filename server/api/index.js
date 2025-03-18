const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require('cors')

const app = express();
dotenv.config("./env");
app.use(bodyParser.json());


app.use(cors({origin: 'https://dev-paul-portfolio.vercel.app'}))

app.post("/send-email", (req, res) => {
  const { from, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.HOST,
    port: process.env.PORT_NUMBER,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  const emailTemplate = `
  <div>
    <h5>
      USER SUBJECT: ${subject}
    </h5>
    <p>
      ${message}
    </p>
  </div>  
  `

  const mailOption = {
    from: process.env.USER_EMAIL,
    to: process.env.USER_EMAIL,
    subject: `YOU GOT EMAIL FROM ${from}`,
    html: emailTemplate
  };

  transporter.sendMail(mailOption, (err, info) => {
    if (err) {
      res.status(500).json({
        statusCode: 500,
        statusMessage: "something went wrong",
      });
    } else {
      res.status(200).json({
        statusCode: 200,
        statusMessage: "Message Sent Successfull!",
      });
    }
  });
});

app.listen(5000, () => {
  console.log("server is running...");
});
