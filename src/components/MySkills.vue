<script setup>
import Projects from "./Projects.vue";
</script>
<template>
  <div id="skills" class="flex justify-center my-6 px-6 gap-12 mt-20 select-none">
    <div class="mx-6 ">
      <h3 class="text-xl font-semibold tracking-wider text-gray-300">Checkout -</h3>
      <div class="">
        <p class="text-3xl font-semibold tracking-wider text-green-500">
          My skills
        </p>
      </div>
      <p class="text-gray-400 pt-2">
        These are the skills I now possess, but as technology is constantly
        evolving, I look forward to learning more.
      </p>
      <div class="flex flex-wrap gap-4 md:gap-4 pt-4">
        <div class="text-center justify-center">
          <img class="w-14 mx-2" src="../assets/adobei.svg" />
          <p class="text-gray-400">Illustrator</p>
        </div>
        <div class="text-center justify-center">
          <img class="w-14 mx-2" src="../assets/adobep.svg" />
          <p class="text-gray-400">Photoshop</p>
        </div>
        <div>
          <img class="w-14 mx-2" src="../assets/word.svg" />
          <p class="text-gray-400 text-sm">WordPress</p>
        </div>
        <div class="text-center justify-center">
          <img class="w-14 mx-2" src="../assets/html.svg" />
          <p class="text-gray-400">HTML</p>
        </div>
        <div class="text-center justify-center">
          <img class="w-14 mx-2" src="../assets/css.svg" />
          <p class="text-gray-400">CSS</p>
        </div>
        <div class="text-center justify-center">
          <img class="w-14 mx-2" src="../assets/tailwindcss.svg" />
          <p class="text-gray-400">Tailwindcss</p>
        </div>
        <div class="text-center justify-center">
          <img class="w-14 mx-2" src="../assets/js.svg" />
          <p class="text-gray-400">JavaScript</p>
        </div>
        <div class="text-center justify-center">
          <img class="w-14 mx-2" src="../assets/vue.svg" />
          <p class="text-gray-400">Vue.js</p>
        </div>
         <div class="text-center justify-center">
          <img class="w-14 mx-2" src="../assets/nuxt.png" />
          <p class="text-gray-400">Nuxt.js</p>
        </div>
        <div class="text-center justify-center">
          <img class="w-14 mx-2" src="../assets/firebase.svg" />
          <p class="text-gray-400">Firebase</p>
        </div>
        
      </div>
    </div>

    <div class="float-right">
      <img src="../assets/icon.png"  />
    </div>
  </div>

  <Projects />
</template>
