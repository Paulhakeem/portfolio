import { defineStore } from "pinia";
import axios from "axios";

export const useEmailStore = defineStore("email", () => {
  const sendEmail = async (from, subject, text) => {
    const userEmail = await axios
      .post("http://localhost:5000/send-email", {from, subject, text })
      .then((result) => {
        console.log(userEmail);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { sendEmail };
});
