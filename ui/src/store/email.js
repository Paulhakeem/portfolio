import { defineStore } from "pinia";
import axios from "axios";

export const useEmailStore = defineStore("email", () => {
  const sendEmail = async (from, subject, message) => {
    await axios
      .post("http://localhost:5000/send-email", {from, subject, message })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { sendEmail };
});
