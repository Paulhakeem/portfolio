import { defineStore } from "pinia";
import { ref } from "vue";

export const useEmailStore = defineStore("email", () => {
  const nodemailer  = require("nodemailer")
  const senderEmail = ref('')

  const sendEmail = async(Option) => {
    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 25,
      auth: {
        user: '3802eafdc897f1',
        pass: 'bcbfadd76ddcc7'
      }
    })

    const emailOption = {
      from: senderEmail.value,
      to: Option.email,
      subject: Option.subject,
      text: Option.message
    }

    await transporter.sendMail(emailOption)
  }

  return{
    sendEmail,
    senderEmail,
    senderMessage
  }
});
