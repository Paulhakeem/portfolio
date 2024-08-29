<script setup>
import Contacts from "./Contacts.vue"
</script>

<template>
  <div>
    <section
      class="justify-center content-center place-content-center px-auto mb-20"
    >
      <div class="">
        <h1
          class="text-center font-semibold text-2xl text-purple-600 tracking-wider"
        >
          My Projects
        </h1>
      </div>

      <div class="project flex flex-wrap justify-center px-6 gap-6 p-5 m-auto">
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
                class="bg-gradient-to-r from-blue-500 via-ogray-500 to-purple-600 text-white rounded-md p-2 w-80 text-lg mt-3 uppercase hover:animate-bounce"
              >
                view
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
                class="bg-gradient-to-l from-blue-500 via-ogray-500 to-purple-600 text-white rounded-md p-2 w-80 text-lg mt-3 uppercase hover:animate-bounce"
              >
               view
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
                class="bg-gradient-to-r from-blue-500 via-ogray-500 to-purple-600 text-white rounded-md p-2 w-80 text-lg mt-3 uppercase hover:animate-bounce"
              >
                view
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="justify-center text-center">
        <RouterLink to="/projects">
          <button
            class="bg-gradient-to-br from-blue-500 via-ogray-500 to-purple-600 text-white rounded-md p-2 size-60 text-lg mt-3 uppercase hover:animate-bounce"
          >
            More
            <i class="fa-solid fa-circle-chevron-right"></i>
          </button>
        </RouterLink>
      </div>
    </section>

    <!-- contact section -->
  <Contacts/>
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
