<script setup>
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useToast } from "vue-toastification";

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
      class="justify-center content-center place-content-center mx-auto mb-36"
    >
      <div class="">
        <h1
          class="text-center font-semibold text-2xl text-blue-500 tracking-wider"
        >
          My Projects
        </h1>
      </div>

      <div
        class="flex ml-6 mr-6 space-x-6 lg:flex p-5 snap-proximity snap-x overflow-scroll touch-pan-x scroll-smooth hover:scroll-auto snap-normal"
      >
        <div class="text-lg text-center p-10 rounded-lg shadow-lg">
          <div class="snap-center">
            <div class="text-xl font-semibold pb-2">
              <h1 class="text-gray-400">Expense Tracker</h1>
            </div>
            <img src="../assets/todo1.jpg" class="w-48" />
          </div>
          <a href="https://budget-app-eight-puce.vercel.app/" target="_blank">
            <button
              class="bg-blue-500 text-white rounded-md p-2 w-48 text-lg mt-10 uppercase hover:animate-bounce"
            >
              visit
            </button>
          </a>
        </div>
        <div class="text-lg text-center p-10 shadow-lg">
          <div class="snap-center">
            <div class="text-xl font-semibold pb-2">
              <h1 class="text-gray-400">Realtime Weather App</h1>
            </div>
            <img src="../assets/weather.jpg" class="48" />
          </div>
          <a href="https://local-weather-app-red.vercel.app/" target="_blank">
            <button
              class="bg-blue-500 text-white rounded-md p-2 w-48 text-lg mt-3 uppercase hover:animate-bounce"
            >
              Visit
            </button>
          </a>
        </div>
        <div class="text-lg text-center p-10 rounded-lg shadow-lg">
          <div class="snap-center">
            <div class="text-xl font-semibold">
              <h1 class="text-gray-400">Realtime Twitter</h1>
              <span class="italic text-blue-500 font-thin text-xs"
                >ongoing</span
              >
            </div>
            <img src="../assets/twitter.jpg" class="w-52" />
          </div>
          <a href="https://twitter-clone-gray-nu.vercel.app/" target="_blank">
            <button
              class="bg-blue-500 text-white rounded-md p-2 w-48 text-lg uppercase mt-4 hover:animate-bounce"
            >
              Visit
            </button>
          </a>
        </div>

        <div class="text-lg text-center p-10 rounded-lg shadow-lg">
          <div class="snap-center">
            <div class="text-xl font-semibold pb-2">
              <h1 class="text-gray-400">Movie App</h1>
            </div>
            <img src="../assets/movie.jpg" class="w-56" />
          </div>
          <a href="https://movie-nu-nine.vercel.app/" target="_blank">
            <button
              class="bg-blue-500 text-white rounded-md p-2 w-48 text-lg uppercase mt-14 hover:animate-bounce"
            >
              Visit
            </button>
          </a>
        </div>

        <div class="text-lg text-center p-10 rounded-lg space-y-4 shadow-lg">
          <div class="snap-center">
            <div class="text-xl font-semibold pb-2">
              <h1 class="text-gray-400">Simple Website</h1>
            </div>
            <img src="../assets/web.jpg" class="w-56" />
          </div>
          <a href="https://code-with-paul.vercel.app/" target="_blank">
            <button
              class="bg-blue-500 text-white rounded-md p-2 w-48 text-lg uppercase mt-10 hover:animate-bounce"
            >
              Visit
            </button>
          </a>
        </div>

        <div class="text-lg text-center p-10 rounded-lg space-y-4 shadow-lg">
          <div class="snap-center">
            <div class="text-xl font-semibold pb-2">
              <h1 class="text-gray-400">Movie Version II</h1>
            </div>
            <img src="../assets/horror.jpg" class="w-48" />
          </div>
          <a href="https://pre-movies.vercel.app/" target="_blank">
            <button
              class="bg-blue-500 text-white rounded-md p-2 w-48 text-lg uppercase mt-10 hover:animate-bounce"
            >
              Visit
            </button>
          </a>
        </div>

        <div class="text-lg text-center p-10 rounded-lg space-y-4 shadow-lg">
          <div class="snap-center">
            <div class="text-xl font-semibold pb-2">
              <h1 class="text-gray-400">Medusa Online Store</h1>
              <span class="italic text-blue-500 font-thin text-xs"
                >ongoing</span
              >
            </div>
            <img src="../assets/j4.jpg" class="w-72 mt-12" />
          </div>
          <a href="https://medusa-sooty-nine.vercel.app/" target="_blank">
            <button
              class="bg-blue-500 text-white rounded-md p-2 w-48 text-lg uppercase mt-8 hover:animate-bounce"
            >
              Visit
            </button>
          </a>
        </div>

        <div class="text-lg text-center p-10 rounded-lg space-y-4 shadow-lg">
          <div class="snap-center">
            <div class="text-xl font-semibold pb-2">
              <h1 class="text-gray-400">RealTime Todo</h1>
            </div>
            <img src="../assets/rt.jpg" class="w-52" />
          </div>
          <a href="https://realtime-todo-inky.vercel.app/" target="_blank">
            <button
              class="bg-blue-500 text-white rounded-md p-2 w-48 text-lg uppercase mt-10 hover:animate-bounce"
            >
              Visit
            </button>
          </a>
        </div>

        <div class="text-lg text-center p-10 rounded-lg space-y-4 shadow-lg">
          <div class="snap-center">
            <div class="text-xl font-semibold pb-2">
              <h1 class="text-gray-400">Note Book</h1>
            </div>
            <img src="../assets/notebook.jpg" class="w-full mt-8" />
          </div>
          <a href="https://notebook-azure-delta.vercel.app/" target="_blank">
            <button
              class="bg-blue-500 text-white rounded-md p-2 w-48 text-lg uppercase mt-16 hover:animate-bounce"
            >
              Visit
            </button>
          </a>
        </div>
      </div>
    </section>

    <!-- contact section -->

    <div
      class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg shadow-lg mb-6 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32"
    >
      <div class="flex flex-col justify-between">
        <div class="space-y-2">
          <h2 class="text-4xl font-bold leadi lg:text-3xl text-blue-500">
            Let's have Chat!🤗
          </h2>
          <div class="dark:text-gray-400"></div>
        </div>
        <img src="../assets/call.png" alt="" class="w-72" />
      </div>

      <form @submit.prevent="sendMessage" class="space-y-6">
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
