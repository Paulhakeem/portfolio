<script setup>
import Projects from "./Projects.vue";
</script>
<template>
  <div
    id="skills"
    class="flex justify-center my-6 px-6 gap-12 pt-20 select-none"
  >
    <div class="mx-6">
      <div id="moreheading">
        <h3 class="text-xl font-semibold tracking-wider text-gray-300">
          Checkout -
        </h3>
        <p class="text-3xl font-semibold tracking-wider text-green-500">
          My skills
        </p>
      </div>
      <p class="text-gray-400 pt-2">
        These are the skills I now possess, but as technology is constantly
        evolving, I look forward to learning more.
      </p>
      <div class="flex flex-wrap gap-4 md:gap-4 pt-4 m-auto">
        <div>
          <img class="w-10 mx-auto" src="../assets/adobei.svg" />
          <p class="text-gray-400 text-sm">Illustrator</p>
        </div>
        <div>
          <img class="w-10 mx-auto" src="../assets/adobep.svg" />
          <p class="text-gray-400 text-sm">Photoshop</p>
        </div>
        <div>
          <img class="w-10 mx-auto" src="../assets/word.svg" />
          <p class="text-gray-400 text-sm">WordPress</p>
        </div>
        <div>
          <img class="w-10 mx-auto" src="../assets/html.svg" />
          <p class="text-gray-400 text-sm">HTML</p>
        </div>
        <div>
          <img class="w-10 mx-auto" src="../assets/css.svg" />
          <p class="text-gray-400">CSS</p>
        </div>
        <div>
          <img class="w-10 mx-auto" src="../assets/tailwindcss.svg" />
          <p class="text-gray-400 text-sm">Tailwindcss</p>
        </div>
        <div>
          <img class="w-10 mx-auto" src="../assets/js.svg" />
          <p class="text-gray-400 text-sm">JavaScript</p>
        </div>
        <div>
          <img class="w-10 mx-auto" src="../assets/vue.svg" />
          <p class="text-gray-400 text-sm">Vue.js</p>
        </div>
        <div>
          <img class="w-10 mx-auto" src="../assets/nuxt.png" />
          <p class="text-gray-400 text-sm">Nuxt.js</p>
        </div>
        <div>
          <img class="w-10 mx-auto" src="../assets/firebase.svg" />
          <p class="text-gray-400 text-sm">Firebase</p>
        </div>
        <div>
          <img class="w-32 mx-auto" src="../assets/mongo.png" />
        </div>
      </div>
    </div>

    <div class="float-right">
      <img src="../assets/icon.png" />
    </div>
  </div>

  <Projects />
</template>
