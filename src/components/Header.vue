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
        <a
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          href="#"
          >Paul</a
        ><button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onclick="toggleNavbar('example-collapse-navbar')"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden bg-blueGray-800"
        id="example-collapse-navbar"
      >
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
          <li class="inline-block relative">
            <a
              class="text-gray-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            >
              My Projects
            </a>
            <!--  -->
          </li>
          <li class="inline-block relative">
            <a
              class="text-gray-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            >
              My Graphics
            </a>
            <!--  -->
          </li>
          
          <li class="flex items-center">
            <a
              class="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              href="https://www.creative-tim.com/product/notus-js?ref=njs-index"
              target="_blank"
            >
              <i class="fas fa-arrow-alt-circle-down"></i> Contact Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
@media only screen and (max-width: 600px) {
}
</style>
