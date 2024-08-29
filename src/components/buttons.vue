<template>
  <div id="button" class="flex justify-between gap-8 mt-4 px-2">
    <RouterLink to="/certificates">
      <div class="relative inline-block text-lg group">
        <span
          class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white"
        >
          <span
            class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"
          ></span>
          <span
            class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"
          ></span>
          <span class="relative">Certificates</span>
        </span>
        <span
          class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gradient-to-br to-purple-600 from-blue-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </div>
    </RouterLink>

    <dark-mode />

    <RouterLink to="/graphics">
      <div class="relative inline-block text-lg group">
        <span
          class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white"
        >
          <span
            class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"
          ></span>
          <span
            class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"
          ></span>
          <span class="relative">My Designs</span>
        </span>
        <span
          class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gradient-to-br to-purple-600 from-blue-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </div>
      <!-- <button
        class="bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 p-1.5 rounded-md text-white uppercase tracking-wider w-36 hover:shadow-lg hover:animate-bounce"
      >
        my graphics
      </button> -->
    </RouterLink>
  </div>
</template>

<script setup>
import darkMode from "../components/darkMode.vue";
</script>
