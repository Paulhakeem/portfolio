<template>
  <div>
    <Header />
    <div
      class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 pt-20 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32"
    >
      <div class="flex flex-col justify-between">
        <div class="space-y-2 pt-2">
          <h2
            id="contact"
            class="text-3xl font-medium lg:text-3xl text-blue-500"
          >
            Let's have Chat!🤗
          </h2>
          <div class="pt-6">
            <div class="flex gap-4">
              <i
                class="fa-solid fa-phone text-xl pt-2 rotate-20 text-blue-500"
              ></i>
              <div class="text-gray-500">
                <a href="tel:+254 792 857 288">
                  <p>+254 792 857 288</p>
                </a>
                <a href="tel:+254 759 732 432">
                  <p>+254 759 732 432</p>
                </a>
               
              </div>
            </div>

            <div class="flex gap-4 pt-3">
              <i
                class="fa-solid fa-envelope text-xl pt-2 rotate-20 text-blue-500"
              ></i>
              <div class="text-gray-500">
                
                  <a href="mailto:paulnyamawi18@gmail.com"
                    >
                    <p class="cursor-pointer">paulnyamawi18@gmail.com</p>
                    </a
                  >
                <a href="mailto:poltechnology01@gmail.com">
                  <p>poltechnology01@gmail.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form
        ref="form"
        action="https://formspree.io/f/xqkrkzdz"
        @submit.prevent="sendMessage"
        class="space-y-6"
      >
        <div>
          <label for="name" class="text-sm text-gray-400">Your Email:</label>
          <input
            v-model="from"
            type="email"
            class="w-full p-3 rounded bg-gray-200 outline-none hover:outline-1 hover:outline-blue-500 text-gray-800"
            required
          />
        </div>
        <div>
          <label for="email" class="text-sm text-gray-400">Subject:</label>
          <input
            v-model="subject"
            type="text"
            class="w-full p-3 rounded bg-gray-200 outline-none hover:outline-1 hover:outline-blue-500 text-gray-800"
            required
          />
        </div>
        <div>
          <label for="message" class="text-sm text-gray-400">Message:</label>
          <textarea
            v-model="text"
            rows="3"
            class="w-full p-3 rounded bg-gray-200 outline-none hover:outline-1 hover:outline-blue-500 text-gray-800"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-gradient-to-l from-blue-600 via-purple-600 to-blue-600 w-full p-3 text-sm font-bold tracking-wider uppercase rounded text-white cursor-pointer hover:animate-bounce"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Header from "../components/Header.vue";
import { useToast } from "vue-toastification";

import { useEmailStore } from "../store/email.js";

const toast = useToast();
const data = useEmailStore();

const from = ref("");
const subject = ref("");
const text = ref("");

const sendMessage = async () => {
  await data
    .sendEmail(from.value, subject.value, text.value)
    .then((result) => {
      return toast.success("Email sent!", {
        timeout: 2000,
      });
    })
    .catch((err) => {
      return toast.error("Email Not sent!", {
        timeout: 2000,
      });
    });
};
</script>
