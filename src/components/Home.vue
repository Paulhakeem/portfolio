<template>
  <div
    class="bg-[#24253b] text-gray-300 select-none m-auto max-w-md justify-center text-center my-6 border-2 border-gradient-to-l from-blue-500 via-ogray-500 to-green-500 rounded-xl w-full"
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
        class="bg-gradient-to-br from-blue-500 via-ogray-500 to-green-500 bg-clip-text text-transparent first-letter:uppercase font-black text-2xl"
      >
        hello!
      </h5>
      <div
        class="first-letter:uppercase text-gray-300 bg-gradient-to-br from-blue-500 via-ogray-500 to-green-500 p-1.8 w-64 m-auto rounded-sm"
      >
        <h1 class="text-2xl">Am Paul Nyamawi</h1>
      </div>

      <div class="py-2">
        <p
          class="bg-gradient-to-br from-blue-500 via-ogray-500 to-green-500 bg-clip-text text-transparent text-lg font-sans font-medium"
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
            class="text-blue-400 text-lg rounded-md w-full p-2 tracking-wider hover:animate-bounce"
          >
            <i class="fa-brands fa-linkedin text-2xl"></i>
          </button>
        </a>
      </div>

      <div>
        <a href="https://twitter.com/Hakeemi20" target="_blank">
          <button
            class="text-blue-400 text-lg rounded-md w-full p-2 tracking-wider hover:animate-bounce"
          >
            <i class="fa-brands fa-square-twitter text-2xl"></i>
          </button>
        </a>
      </div>

      <div>
        <a href="https://github.com/Paulhakeem" target="_blank">
          <button
            class="text-blue-400 text-lg rounded-md w-full p-2 tracking-wider hover:animate-bounce"
          >
            <i class="fa-brands fa-github text-2xl"></i>
          </button>
        </a>
      </div>

      <div>
        <a href="https://www.instagram.com/coderpaul18/" target="_blank">
          <button
            class="text-blue-400 text-lg rounded-md w-full p-2 tracking-wider hover:animate-bounce"
          >
            <i class="fa-brands fa-square-instagram text-2xl"></i>
          </button>
        </a>
      </div>
    </div>

    <!-- portfolio -->
    <div class="mb-4">
      <RouterLink to="/portfolio">
      <button
        class="bg-gradient-to-br from-blue-500 via-ogray-500 to-green-500 bg-clip-text text-transparent hover:underline hover:text-blue-500 active:text-blue-500"
      >
        Check Out My Portfolio
        <i class="fa-solid fa-arrow-right"></i>
      </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
