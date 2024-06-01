import { defineStore } from "pinia";
import { ref } from "vue";
import nodemailer from "nodemailer";

export const useEmailStore = defineStore("email", () => {
  const senderEmail = ref("");

  const sendEmail = async (Option) => {
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 25,
      auth: {
        user: "3802eafdc897f1",
        pass: "bcbfadd76ddcc7",
      },
    });

    const emailOption = {
      from: "Testing<support@movies.com>",
      to: Option.email,
      subject: Option.subject,
      text: Option.message,
    };

    transporter.sendMail(emailOption, () => {
      if (error) {
        console.log(error);
      } else {
        console.log("email send");
      }
    });
  };

  return {
    sendEmail,
    senderEmail,
  };
});
