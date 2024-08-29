<script setup>
import MySkills from "./MySkills.vue";
</script>
<template>
  <main>
    <div
      class="text-center pt-28 flex gap-8 space-x-4 flex-wrap justify-center items-center m-auto"
    >
      <div id="moreheading" class="space-y-4 text-left">
        <h2 class="text-3xl font-semibold tracking-wider mr-4 text-gray-400">
          My Awesome <br />
          <span class="text-purple-600">Services</span>
        </h2>
        <a href="https://wa.link/38fuqe" target="_blank">
          <a
            href="#_"
            class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
          >
            <span
              class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"
            ></span>
            <span class="relative"> WhatsApp Me</span>
          </a>
        </a>
      </div>

      <div class="flex justify-center flex-wrap gap-4 m-auto text-center">
        <div class="relative mx-4">
          <div
            class="absolute -inset-0.5 rounded-md bg-gradient-to-br from-blue-500 via-ogray-500 to-purple-600 opacity-75 blur"
          ></div>
          <div
            class="relative h-64 w-64 items-center justify-center rounded-lg bg-slate-900 text-slate-300"
          >
            <i class="fa-solid fa-code text-blue-500 fa-4x pt-2 mb-4"></i>
            <p class="text-lg font-sans font-semibold text-gray-400">
              Website development
            </p>
            <p class="text-sm pt-2 ml-2 mr-2 text-gray-400">
              I design and develop high-end, custom-designed websites and web
              applications that will help you meet your growth, revenue, and
              profit objectives.
            </p>
          </div>
        </div>

        <div class="relative mx-4">
          <div
            class="absolute -inset-0.5 rounded-md bg-gradient-to-br from-blue-500 via-ogray-500 to-purple-600 opacity-75 blur"
          ></div>
          <div
            class="relative h-64 w-64 items-center justify-center rounded-lg bg-slate-900 text-slate-300"
          >
            <i class="fa-solid fa-pen-nib fa-4x text-blue-500 pt-2 mb-4"></i>
            <p class="text-lg font-sans font-semibold text-gray-400">
              Graphic Design
            </p>
            <p class="text-sm pt-2 ml-2 mr-2 text-gray-400">
              I design and create logos and other graphics designs that will
              appeal to your customer and it will be unique and recognizable.
            </p>
          </div>
        </div>

        <div class="relative mx-4">
          <div
            class="absolute -inset-0.5 rounded-md bg-gradient-to-br from-blue-500 via-ogray-500 to-purple-600 opacity-75 blur"
          ></div>
          <div
            class="relative h-64 w-64 items-center justify-center rounded-lg bg-slate-900 text-slate-300"
          >
            <i class="fa-solid fa-bullhorn fa-4x text-blue-500 pt-2 mb-4"></i>
            <p class="text-lg font-sans font-semibold text-gray-400">
              Social Media Marketing
            </p>
            <p class="text-sm pt-2 ml-2 mr-2 text-gray-400">
              I can manage social media marketing and help you put strategic
              social media content and/or social ads in front of the online
              users. This gives your business valuable, extensive and target
              exposure..
            </p>
          </div>
        </div>
      </div>
    </div>
    <MySkills />
  </main>
</template>
