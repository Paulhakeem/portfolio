<template>
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
</template>

<script setup>
import { useToast } from "vue-toastification";
import { api } from "../utils/instance.js";
import { ref } from "vue";

const toast = useToast();

const from = ref("");
const subject = ref("");
const text = ref("");

const sendMessage = async () => {
  try {
    const res = await api.post(
      "/send-email",
      from.value,
      subject.value,
      text.value
    );
    toast.success(res.data.statusMessage);
    
  } catch (error) {
    const errorMessage = error.response.data.statusMessage || error.message;
    toast.error(errorMessage);
  }
};
</script>
