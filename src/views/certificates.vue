<template>
  <div>
    <RouterLink to="/portfolio">
      <button
        class="mx-4 mt-6 bg-gradient-to-r from-blue-500 via-ogray-500 to-green-500 text-white rounded-md p-2 w-22 text-lg uppercase hover:animate-bounce"
      >
        go back
      </button>
    </RouterLink>

    <div id="certificates"
      class="flex flex-wrap mx-6 space-x-6 lg:flex p-5 scroll-smooth justify-center"
    >
      <div id="box" class="text-lg p-10 w-96">
        <div class="text-center">
          <img src="../assets/cert/cert.jpg" alt="" class="w-96" />
        </div>
        <div class="pt-3">
          <h1 class="text-blue-500 font-semibold">
            Programming with JavaScript
          </h1>
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/BSDX46S4GW5E"
            target="_blank"
          >
            <button id="button"
              class="mt-6 bg-gradient-to-r from-blue-500 via-ogray-500 to-green-500 text-white rounded-md p-2 w-80 text-lg uppercase hover:animate-bounce"
            >
              Open
            </button>
          </a>
        </div>
      </div>

      <div id="box" class="text-lg p-10 w-96">
        <div class="text-center">
          <img src="../assets/cert/coursera.jpg" alt="" class="w-96" />
        </div>
        <div class="pt-3">
          <h1 class="text-blue-500 font-semibold">
            Introduction to Front-End Development
          </h1>
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/M4LQS2M73MAC"
            target="_blank"
          >
            <button id="button"
              class="bg-gradient-to-l from-blue-500 via-ogray-500 to-green-500 text-white rounded-md p-2 w-80 text-lg mt-3 uppercase hover:animate-bounce"
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
import { RouterLink } from "vue-router";
</script>
