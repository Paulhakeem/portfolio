<template>
    <div id="button" class="flex justify-between gap-8 mt-4 px-4">
      <RouterLink to="/certificates">
        <button
          class="bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 p-1.5 rounded-md text-white uppercase tracking-wider w-36 hover:shadow-lg hover:animate-bounce"
        >
          Certificates
        </button>
      </RouterLink>

      <dark-mode/>

      <RouterLink to="/graphics">
        <button
          class="bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 p-1.5 rounded-md text-white uppercase tracking-wider w-36 hover:shadow-lg hover:animate-bounce"
        >
          my graphics
        </button>
      </RouterLink>
    </div>
</template>

<script setup>
import darkMode from "../components/darkMode.vue"
</script>