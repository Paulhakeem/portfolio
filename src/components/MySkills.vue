<script setup>
import Projects from "./Projects.vue";
</script>
<template>
  <div class="grid md:grid-cols-2 my-6 mx-6 gap-2 mt-20 sm:grid-cols-2 select-none">
    <div class="mx-6 ">
      <h3 class="text-xl font-semibold tracking-wider text-gray-400">Checkout -</h3>
      <div class="">
        <p class="text-3xl font-semibold tracking-wider text-green-500">
          My skills
        </p>
      </div>
      <p class="text-gray-500 pt-2">
        These are the skills I now possess, but as technology is constantly
        evolving, I look forward to learning more.
      </p>
      <div class="flex flex-wrap gap-4 md:gap-4 pt-4">
        <div>
          <img class="w-14 mx-2" src="../assets/word.svg" />
          <p class="text-gray-500 text-sm">WordPress</p>
        </div>
        <div>
          <img class="w-14 mx-2" src="../assets/html.svg" />
          <p class="text-gray-500 pl-4">HTML</p>
        </div>
        <div>
          <img class="w-14 mx-2" src="../assets/css.svg" />
          <p class="text-gray-500 pl-6">CSS</p>
        </div>
        <div>
          <img class="w-14 mx-2" src="../assets/tailwindcss.svg" />
          <p class="text-gray-500 pr-2">Tailwindcss</p>
        </div>
        <div>
          <img class="w-14 mx-2" src="../assets/js.svg" />
          <p class="text-gray-500 pl--1">JavaScript</p>
        </div>
        <div>
          <img class="w-14 mx-2" src="../assets/vue.svg" />
          <p class="text-gray-500 pl-4">Vue.js</p>
        </div>
         <div>
          <img class="w-14 mx-2" src="../assets/nuxt.png" />
          <p class="text-gray-500 pl-4">Nuxt.js</p>
        </div>
        <div>
          <img class="w-14 mx-2" src="../assets/firebase.svg" />
          <p class="text-gray-500 pl-2">Firebase</p>
        </div>
        <div>
          <img class="w-14 mx-2" src="../assets/adobei.svg" />
          <p class="text-gray-500 pl-1">Illustrator</p>
        </div>
        <div>
          <img class="w-14 mx-2" src="../assets/adobep.svg" />
          <p class="text-gray-500 pl-3">Photoshop</p>
        </div>
      </div>
    </div>

    <div class="float-right">
      <img src="../assets/icon.png"  />
    </div>
  </div>

  <Projects />
</template>
