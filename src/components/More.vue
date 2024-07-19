<script setup>
import MySkills from "./MySkills.vue";

</script>
<template>
  <main>
    <div
    class="text-center pt-28 flex space-y-8 space-x-4 flex-wrap justify-center items-center m-auto"
  >
    <div id="moreheading" class="space-y-4 text-left">
      <h2 class="text-3xl font-semibold tracking-wider mr-4 text-gray-400 ">
        My Awesome <br />
        <span class="text-green-500">Services</span>
      </h2>
      <p class="text-md tracking-tighter text-gray-400">
        I Provide Wide Range Of Digital Services
      </p>
      <a href="https://wa.link/38fuqe" target="_blank">
        <button
          class="bg-gradient-to-br from-blue-600 via-green-500 to-blue-600 rounded-full mt-4 p-4 text-white w-40 shadow-xl hover:bg-white hover:text-blue-500 hover:animate-bounce"
        >
          WhatsApp Me
        </button>
      </a>
    </div>

    <div class="flex justify-center flex-wrap gap-6 m-auto text-center">
      
       <div class="relative mx-4">
        <div
          class="absolute -inset-0.5 rounded-md bg-gradient-to-br from-blue-500 via-ogray-500 to-green-500 opacity-75 blur"
        ></div>
        <div
          class="relative h-64 w-64 items-center justify-center rounded-lg bg-slate-900 text-slate-300"
        >
         <i class="fa-solid fa-code text-blue-500 fa-4x pt-2 mb-4"></i>
        <p class="text-lg font-sans font-semibold text-gray-400">Website development</p>
        <p class="text-sm pt-2 ml-2 mr-2 text-gray-400">
          I design and develop high-end, custom-designed websites and web
          applications that will help you meet your growth, revenue, and profit
          objectives.
        </p>
        </div>
      </div>
     
        <div class="relative mx-4">
        <div
          class="absolute -inset-0.5 rounded-md bg-gradient-to-br from-blue-500 via-ogray-500 to-green-500 opacity-75 blur"
        ></div>
        <div
          class="relative h-64 w-64 items-center justify-center rounded-lg bg-slate-900 text-slate-300"
        >
         <i class="fa-solid fa-pen-nib fa-4x text-blue-500 pt-2 mb-4"></i>
        <p class="text-lg font-sans font-semibold text-gray-400">Graphic Design</p>
        <p class="text-sm pt-2 ml-2 mr-2 text-gray-400">
          I design and create logos and other graphics designs that will appeal
          to your customer and it will be unique and recognizable.
        </p>
        </div>
      </div>

        <div class="relative mx-4">
        <div
          class="absolute -inset-0.5 rounded-md bg-gradient-to-br from-blue-500 via-ogray-500 to-green-500 opacity-75 blur"
        ></div>
        <div
          class="relative h-64 w-64 items-center justify-center rounded-lg bg-slate-900 text-slate-300"
        >
        <i class="fa-solid fa-bullhorn fa-4x text-blue-500 pt-2 mb-4"></i>
        <p class="text-lg font-sans font-semibold text-gray-400">Social Media Marketing</p>
        <p class="text-sm pt-2 ml-2 mr-2 text-gray-400">
          I can manage social media marketing and help you put strategic social
          media content and/or social ads in front of the online users. This
          gives your business valuable, extensive and target exposure..
        </p>
        </div>
      </div>
    </div>
  </div>
  <MySkills />
  </main>
</template>
