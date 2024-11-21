<script setup>
</script>
<template>
  <div class="container border border-1 border-gray-500 rounded-md p-6 justify-center items-center max-w-3xl m-auto my-8">
    <div class="text-center">
      <p class="text-2xl font-medium tracking-wider text-gray-400">
        Tech stack/tools:
      </p>
    </div>
    <div class="flex flex-wrap gap-4 md:gap-4 pt-4 m-auto justify-center">
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

  <!-- <Projects /> -->

  
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  #skills {
    flex-wrap: wrap;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  #skills {
    flex-wrap: wrap;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  #skills {
    flex-wrap: nowrap;
  }
}
</style>
