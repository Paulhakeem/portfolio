const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST",
};

app.use(cors(corsOptions));

dotenv.config("./env");

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
    <h1>
      USER SUBJECT: ${subject}
    </h2>
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
        status: "fail",
        text: "something went wrong",
      });
    } else {
      res.status(200).json({
        status: "success",
        text: `Email sent:` + info.response,
      });
    }
  });
});

app.listen(5000, () => {
  console.log("server is running...");
});
