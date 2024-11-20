<template>
  <div>
    <buttons />
    <div
      class="project flex flex-wrap px-6 gap-6 lg:flex p-5 scroll-smooth justify-center m-auto"
    >
      <div id="box" class="text-lg p-10 rounded-lg shadow-lg w-96">
        <div class="text-center">
          <img src="../assets/medusa.png" alt="" class="w-96" />
        </div>
        <div class="pt-3">
          <h1 class="text-blue-500 font-semibold">Online Store</h1>
          <p class="text-pretty text-gray-400 text-md">
            Medusa is an online store
          </p>
          <div class="img flex gap-4 my-8">
            <img src="../assets/vue.svg" alt="vue logo" class="w-8" />
            <img src="../assets/js.svg" alt="javascript logo" class="w-8" />
            <img
              src="../assets/tailwindcss.svg"
              alt="tailwindcss logo"
              class="w-8"
            />
            <img src="../assets/firebase.svg" alt="firebase logo" class="w-8" />
          </div>
          <a href="https://medusa-sooty-nine.vercel.app/" target="_blank">
            <button
              class="bg-gradient-to-r from-blue-500 via-ogray-500 to-purple-600 text-white rounded-md p-2 w-80 text-lg mt-3 uppercase hover:animate-bounce"
            >
              Open
            </button>
          </a>
        </div>
      </div>


      <div id="box" class="text-lg p-10 rounded-lg shadow-lg w-96">
        <div class="text-center">
          <img src="../assets/website.png" alt="" class="w-96" />
        </div>
        <div class="pt-3">
          <h1 class="text-blue-500 font-semibold">Website</h1>
          <p class="text-pretty text-gray-400 text-md">Simple website</p>
          <div class="img flex gap-4 my-8">
            <img src="../assets/vue.svg" alt="vue logo" class="w-8" />
            <img src="../assets/js.svg" alt="javascript logo" class="w-8" />
            <img
              src="../assets/tailwindcss.svg"
              alt="tailwindcss logo"
              class="w-8"
            />
          </div>
          <a href="https://code-with-paul.vercel.app/" target="_blank">
            <button
              class="bg-gradient-to-r from-blue-500 via-ogray-500 to-purple-600 text-white rounded-md p-2 w-80 text-lg mt-3 uppercase hover:animate-bounce"
            >
              Open
            </button>
          </a>
        </div>
      </div>


      <div id="box" class="text-lg p-10 rounded-lg shadow-lg w-96">
        <div class="text-center">
          <img src="../assets/weatherv1.png" alt="" class="w-96" />
        </div>
        <div class="pt-3">
          <h1 class="text-blue-500 font-semibold">Weather App v1</h1>
          <p class="text-pretty text-gray-400 text-md text-balance">
            Local weather app used by searching a city or a country to get the
            real time weather of the place
          </p>
          <div class="img flex gap-4">
            <img src="../assets/vue.svg" alt="vue logo" class="w-8" />
            <img src="../assets/js.svg" alt="javascript logo" class="w-8" />
            <img
              src="../assets/tailwindcss.svg"
              alt="tailwindcss logo"
              class="w-8"
            />
          </div>
          <a href="https://local-weather-app-red.vercel.app/" target="_blank">
            <button
              class="bg-gradient-to-r from-blue-500 via-ogray-500 to-purple-600 text-white rounded-md p-2 w-80 text-lg mt-3 uppercase hover:animate-bounce"
            >
              Open
            </button>
          </a>
        </div>
      </div>


      <div id="box" class="text-lg p-10 rounded-lg shadow-lg w-96">
        <div class="text-center">
          <img src="../assets/Capture.png" alt="" class="w-96" />
        </div>
        <div class="pt-3">
          <h1 class="text-blue-500 font-semibold">Dolph</h1>
          <p class="text-pretty text-gray-400 text-md">
            Is car rental landing page
          </p>
          <div class="img flex gap-4 my-3.5">
            <img src="../assets/nuxt.png" alt="vue logo" class="w-8" />
            <img src="../assets/js.svg" alt="javascript logo" class="w-8" />
            <img
              src="../assets/tailwindcss.svg"
              alt="tailwindcss logo"
              class="w-8"
            />
            <img src="../assets/firebase.svg" alt="firebase logo" class="w-8" />
          </div>
          <a href="https://dolph-seven.vercel.app/" target="_blank">
            <button
              class="bg-gradient-to-r from-blue-500 via-ogray-500 to-purple-600 text-white rounded-md p-2 w-80 text-lg mt-3 uppercase hover:animate-bounce"
            >
              Open
            </button>
          </a>
        </div>
      </div>


          <div id="box" class="text-lg p-10 rounded-lg shadow-lg w-96">
        <div class="text-center">
          <img src="../assets/dragger.png" alt="" class="w-96" />
        </div>
        <div class="pt-3">
          <h1 class="text-blue-500 font-semibold">Drag and Drop</h1>
          <p class="text-pretty text-gray-400 text-md">
            Simple drag and drop project
          </p>
          <div class="img flex gap-4 my-3.5">
            <img src="../assets/nuxt.png" alt="vue logo" class="w-8" />
            <img src="../assets/js.svg" alt="javascript logo" class="w-8" />
            <img
              src="../assets/tailwindcss.svg"
              alt="tailwindcss logo"
              class="w-8"
            />
             <img
              src="../assets/firebase.svg"
              alt="firebase logo"
              class="w-8"
            />
          </div>
          <a
            href="https://dropper-lilac.vercel.app/"
            target="_blank"
          >
            <button
              class="bg-gradient-to-r from-blue-500 via-ogray-500 to-purple-600 text-white rounded-md p-2 w-80 text-lg mt-3 uppercase hover:animate-bounce"
            >
              Open
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import buttons from "../components/buttons.vue";
</script>
