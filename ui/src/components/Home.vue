<template>
  <div
    class="bg-[#24253b] text-gray-300 select-none m-auto max-w-md justify-center text-center my-6 rounded-xl w-full"
  >
    <div class="flex justify-center py-4">
      <img
        src="../assets/profile/profile.jpg"
        alt="profile image"
        class="m-auto w-64 h-64 rounded-full object-cover"
      />
    </div>

    <div>
      <h5
        class="text-purple-600 first-letter:uppercase font-black text-2xl"
      >
        hello!
      </h5>
      <div
        class="first-letter:uppercase text-gray-300 bg-gradient-to-br from-blue-500 via-ogray-500 to-purple-600 p-1.8 w-64 m-auto rounded-sm"
      >
        <h1 class="text-2xl">Am Paul Nyamawi</h1>
      </div>

      <div class="py-2">
        <p
          class="text-md font-sans font-medium"
        >
          Frontend Web Developer
        </p>
      </div>
    </div>

    <!-- social media -->
    <div class="flex gap-2 justify-center">
      <div>
        <a
          href="https://www.linkedin.com/in/paul-nyamawi-9244b924b/"
          target="_blank"
        >
          <button
            class="text-purple-600 text-lg rounded-md w-full p-2 tracking-wider hover:animate-bounce"
          >
            <i class="fa-brands fa-linkedin text-2xl"></i>
          </button>
        </a>
      </div>

      <div>
        <a href="https://twitter.com/Hakeemi20" target="_blank">
          <button
            class="text-purple-600 text-lg rounded-md w-full p-2 tracking-wider hover:animate-bounce"
          >
            <i class="fa-brands fa-square-twitter text-2xl"></i>
          </button>
        </a>
      </div>

      <div>
        <a href="https://github.com/Paulhakeem" target="_blank">
          <button
            class="text-purple-600 text-lg rounded-md w-full p-2 tracking-wider hover:animate-bounce"
          >
            <i class="fa-brands fa-github text-2xl"></i>
          </button>
        </a>
      </div>

      <div>
        <a href="https://www.instagram.com/coderpaul18/" target="_blank">
          <button
            class="text-purple-600 text-lg rounded-md w-full p-2 tracking-wider hover:animate-bounce"
          >
            <i class="fa-brands fa-square-instagram text-2xl"></i>
          </button>
        </a>
      </div>
    </div>

    <!-- portfolio -->
    <div class="pb-10">
      <RouterLink to="/portfolio">
        <a
          href="#_"
          class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden text-purple-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
        >
          <span
            class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gradient-to-br from-purple-600 to-blue-500 group-hover:h-full"
          ></span>
          <span
            class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
          >
            <svg
              class="w-5 h-5 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span
            class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
          >
            <svg
              class="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span
            class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white"
            >Check Out My Portfolio</span
          >
        </a>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
