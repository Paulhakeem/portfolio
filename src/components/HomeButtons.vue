<template>
  <main id="buttons" class="flex pt-12 gap-16 px-4">
    <div>
      <a
        href="#_"
        class="px-5 py-2.5 relative rounded group text-white font-medium inline-block"
      >
        <span
          class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"
        ></span>
        <span
          class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"
        ></span>
        <span
          class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"
        ></span>
        <span
          class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"
        ></span>
        <span class="relative">Read My CV</span>
      </a>
    </div>

    <!-- download -->
    <a
      href="/src/assets/cv/cv.jpg" download="DevPaulCv.jpg"
      class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
    >
      <span
        class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"
      ></span>
      <span class="relative group-hover:text-white">Download CV</span>
    </a>
  </main>
</template>

<script setup></script>

<style scoped>
@media only screen and (max-width: 600px) {

}
</style>
