<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-800"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <RouterLink
          to="/portfolio"
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          >Paul</RouterLink
        >
        <!-- OPEN MENU -->
        <button
          @click="tongleMenu"
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>

      <!-- LARGE DEVICE -->
      <div class="lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none hidden">
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
          <li class="inline-block relative">
            <RouterLink
              to="/projects"
              class="text-gray-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            >
              My Projects
            </RouterLink>
            <!--  -->
          </li>
          <li class="inline-block relative">
            <RouterLink
              to="/graphics"
              class="text-gray-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            >
              My Graphics
            </RouterLink>
            <!--  -->
          </li>

          <li class="flex items-center">
            <RouterLink
              to="/contact-me"
              class="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            >
              <i class="fa-solid fa-headset pr-1.5 text-md"></i>Contact Me
            </RouterLink>
          </li>
        </ul>
      </div>


      <!-- SMALL DEVICE -->
      <div
        v-if="menu"
        class="lg:flex flex-grow items-center bg-gray-600 lg:bg-opacity-0 lg:shadow-none"
      >
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
          <li class="inline-block relative">
            <RouterLink
              to="/projects"
              class="text-gray-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            >
              My Projects
            </RouterLink>
            <!--  -->
          </li>
          <li class="inline-block relative">
            <RouterLink
              to="/graphics"
              class="text-gray-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            >
              My Graphics
            </RouterLink>
            <!--  -->
          </li>

          <li class="flex items-center">
            <RouterLink
              to="/contact-me"
              class="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            >
              <i class="fa-solid fa-headset pr-1.5 text-md"></i>Contact Me
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const menu = ref(false);

const tongleMenu = () => {
  menu.value = !menu.value;
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
}
</style>
