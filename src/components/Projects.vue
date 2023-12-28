<script setup>
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useToast } from "vue-toastification";
import { RouterLink } from "vue-router";

const toast = useToast();

// or with options

const senderDetails = ref({
  username: "",
  email: "",
  message: "",
});

const rules = computed(() => {
  return {
    username: { required, minLength: minLength(5) },
    email: { required, email },
    message: { required },
  };
});

const v$ = useVuelidate(rules, senderDetails);

const sendMessage = async () => {
  const result = await v$.value.$validate();
  if (result) {
    return toast.success("message sent!", {
      timeout: 2000,
    });
  } else {
    return toast.error("message NOT sent!", {
      timeout: 2000,
    });
  }
};
</script>

<template>
  <div>
    <section
      class="justify-center content-center place-content-center px-auto mb-20"
    >
      <div class="">
        <h1
          class="text-center font-semibold text-2xl text-blue-500 tracking-wider"
        >
          My Projects
        </h1>
      </div>

      <div class="project flex flex-wrap justify-center px-6 space-x-6 p-5">
        <div id="box" class="text-lg p-10 rounded-lg shadow-lg w-96">
          <div class="text-center">
            <img src="../assets/AI.png" alt="" class="w-96" />
          </div>
          <div class="pt-3">
            <h1 class="text-blue-500 font-semibold">AI-car-Landing Page</h1>
            <p class="text-pretty text-gray-400 text-md">
              A.I. Car Assistant Landing page design using Nuxt.js
            </p>
            <div class="img flex gap-4 my-4">
              <img src="../assets/nuxt.png" alt="nuxt logo" class="w-10" />
              <img
                src="../assets/tailwindcss.svg"
                alt="tailwindcss logo"
                class="w-8"
              />
            </div>
            <a href="https://ai-car-six.vercel.app/" target="_blank">
              <button
                class="bg-gradient-to-r from-blue-500 via-ogray-500 to-green-500 text-white rounded-md p-2 w-80 text-lg mt-3 uppercase hover:animate-bounce"
              >
                Open
              </button>
            </a>
          </div>
        </div>

        <div id="box" class="text-lg p-10 rounded-lg shadow-lg w-96">
          <div class="text-center">
            <img src="../assets/tracker.png" alt="" class="w-96" />
          </div>
          <div class="pt-3">
            <h1 class="text-blue-500 font-semibold">Expense Tracker</h1>
            <p class="text-pretty text-gray-400 text-md text-pretty">
              This app is designed to help you know how much money you spend in
              your day to day activates.
            </p>
            <div class="img flex gap-4">
              <img src="../assets/nuxt.png" alt="nuxt logo" class="w-10" />
              <img
                src="../assets/firebase.svg"
                alt="firebase logo"
                class="w-8"
              />
              <img src="../assets/js.svg" alt="javascript logo" class="w-8" />
            </div>
            <a href="https://budget-app-eight-puce.vercel.app/" target="_blank">
              <button
                class="bg-gradient-to-l from-blue-500 via-ogray-500 to-green-500 text-white rounded-md p-2 w-80 text-lg mt-3 uppercase hover:animate-bounce"
              >
                Open
              </button>
            </a>
          </div>
        </div>

        <div id="box" class="text-lg p-10 rounded-lg shadow-lg w-96">
          <div class="text-center">
            <img src="../assets/notebook.png" alt="" class="w-96" />
          </div>
          <div class="pt-3">
            <h1 class="text-blue-500 font-semibold">Notebook</h1>
            <p class="text-pretty text-gray-400 text-md">
              Simple Realtime Notebook
            </p>
            <div class="img flex gap-4 my-8">
              <img src="../assets/vue.svg" alt="vue logo" class="w-8" />
              <img
                src="../assets/firebase.svg"
                alt="firebase logo"
                class="w-8"
              />
              <img src="../assets/js.svg" alt="javascript logo" class="w-8" />
            </div>
            <a href="https://notebook-azure-delta.vercel.app/" target="_blank">
              <button
                class="bg-gradient-to-r from-blue-500 via-ogray-500 to-green-500 text-white rounded-md p-2 w-80 text-lg mt-3 uppercase hover:animate-bounce"
              >
                Open
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="justify-center text-center">
        <RouterLink to="/projects">
          <button
            class="bg-gradient-to-br from-blue-500 via-ogray-500 to-green-500 text-white rounded-md p-2 size-60 text-lg mt-3 uppercase hover:animate-bounce"
          >
            More
            <i class="fa-solid fa-circle-chevron-right"></i>
          </button>
        </RouterLink>
      </div>
    </section>

    <!-- contact section -->

    <div
      class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg shadow-lg mb-6 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32"
    >
      <div class="flex flex-col justify-between">
        <div class="space-y-2 pt-2">
          <h2 id="contact" class="text-4xl font-bold leadi lg:text-3xl text-blue-500">
            Let's have Chat!🤗
          </h2>
          <div class="pt-6">
            <div class="flex gap-4">
              <i class="fa-solid fa-phone text-xl pt-2 rotate-20 text-blue-500"></i>
              <div class="text-gray-500">
                <p>+254 792 857 288</p>
                <p>+254 759 732 432</p>
              </div>
            </div>

            <div class="flex gap-4 pt-3">
              <i class="fa-solid fa-envelope text-xl pt-2 rotate-20 text-blue-500"></i>
              <div class="text-gray-500">
                <p>paulnyamawi18@gmail.com</p>
                <p>poltechnology01@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <!-- <img src="../assets/call.png" alt="" class="w-72" /> -->
      </div>

      <form action="https://formspree.io/f/xqkrkzdz" @submit.prevent="sendMessage" class="space-y-6">
        <div>
          <label for="name" class="text-sm text-gray-400">Full name</label>
          <input
            v-model="senderDetails.username"
            id="name"
            type="text"
            placeholder=""
            class="w-full p-3 rounded bg-gray-200 outline-none hover:outline-1 hover:outline-blue-500 text-gray-800"
          />
          <div
            class="input-errors"
            v-for="error of v$.username.$errors"
            :key="error.$uid"
          >
            <p class="error-msg text-red-500 italic">{{ error.$message }}</p>
          </div>
        </div>
        <div>
          <label for="email" class="text-sm text-gray-400">Email</label>
          <input
            v-model="senderDetails.email"
            id="email"
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
            v-model="senderDetails.message"
            id="message"
            rows="3"
            placeholder="NOT WORKING YET!! AM STILL WORKING ON IT"
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
          class="bg-gradient-to-l from-blue-600 via-green-500 to-blue-600 w-full p-3 text-sm font-bold tracking-wider uppercase rounded text-white cursor-pointer hover:animate-bounce"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<style>
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}

.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>
