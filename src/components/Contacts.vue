<template>
  <div>
    <div
      class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg shadow-lg mb-6 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32"
    >
      <div class="flex flex-col justify-between">
        <div class="space-y-2 pt-2">
          <h2
            id="contact"
            class="text-4xl font-bold leadi lg:text-3xl text-blue-500"
          >
            Let's have Chat!🤗
          </h2>
          <div class="pt-6">
            <div class="flex gap-4">
              <i
                class="fa-solid fa-phone text-xl pt-2 rotate-20 text-blue-500"
              ></i>
              <div class="text-gray-500">
                <p>+254 792 857 288</p>
                <p>+254 759 732 432</p>
              </div>
            </div>

            <div class="flex gap-4 pt-3">
              <i
                class="fa-solid fa-envelope text-xl pt-2 rotate-20 text-blue-500"
              ></i>
              <div class="text-gray-500">
                <p>paulnyamawi18@gmail.com</p>
                <p>poltechnology01@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <!-- <img src="../assets/call.png" alt="" class="w-72" /> -->
      </div>

      <form
        ref="form"
        action="https://formspree.io/f/xqkrkzdz"
        @submit.prevent="sendMessage"
        class="space-y-6"
      >
        <div>
          <label for="name" class="text-sm text-gray-400">Full name</label>
          <input
            v-model="formRef.name"
            name="user_name"
            type="text"
            placeholder=""
            class="w-full p-3 rounded bg-gray-200 outline-none hover:outline-1 hover:outline-blue-500 text-gray-800"
          />
          <div
            class="input-errors"
            v-for="error of v$.name.$errors"
            :key="error.$uid"
          >
            <p class="error-msg text-red-500 italic">{{ error.$message }}</p>
          </div>
        </div>
        <div>
          <label for="email" class="text-sm text-gray-400">Email</label>
          <input
            v-model="formRef.email"
            name="user_email"
            type="email"
            class="w-full p-3 rounded bg-gray-200 outline-none hover:outline-1 hover:outline-blue-500 text-gray-800"
          />
          <div
            class="input-errors"
            v-for="error of v$.email.$errors"
            :key="error.$uid"
          >
            <p class="error-msg text-red-500 italic">{{ error.$message }}</p>
          </div>
        </div>
        <div>
          <label for="message" class="text-sm text-gray-400">Message</label>
          <textarea
            v-model="formRef.message"
            name="message"
            rows="3"
            class="w-full p-3 rounded bg-gray-200 outline-none hover:outline-1 hover:outline-blue-500 text-gray-800"
          ></textarea>
          <div
            class="input-errors"
            v-for="error of v$.message.$errors"
            :key="error.$uid"
          >
            <p class="error-msg text-red-500 italic">{{ error.$message }}</p>
          </div>
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
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useToast } from "vue-toastification";
import axios from "axios";
import emailjs from "@emailjs/browser";
const { VITE_SERVICE_ID, VITE_EMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

const toast = useToast();
const serviceID = ref(VITE_SERVICE_ID);
const templateID = ref(VITE_EMPLATE_ID);
const publicID = ref(VITE_PUBLIC_KEY);


const formRef = ref({
  name: "",
  email: "",
  message: "",
});

const rules = computed(() => {
  return {
    name: { required, minLength: minLength(5) },
    email: { required, email },
    message: { required },
  };
});

const v$ = useVuelidate(rules, formRef);

const sendMessage = async (e) => {
  const result = await v$.value.$validate();
  if (result) {
    emailjs.sendForm(serviceID.value, templateID.value ,e.target, publicID.value,{
     name: formRef.name,
     email: formRef.email,
     message: formRef.message
    });
    return toast.success("Email sent!", {
      timeout: 2000,
    });
  } else {
    return toast.error("Email Not Sent!", {
      timeout: 2000,
    });
  }
};
</script>
