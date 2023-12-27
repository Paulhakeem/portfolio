<script setup>
import MySkills from "./MySkills.vue";
</script>
<template>
  <div
    class="text-center pt-28 flex space-y-8 space-x-4 flex-wrap justify-center items-center"
  >
    <div class="space-y-4 text-left">
      <h2 class="text-3xl font-semibold tracking-wider mr-4 text-gray-400">
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

    <div class="flex justify-center flex-wrap gap-6">
      
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

        <div class="relative px-4">
        <div
          class="absolute -inset-0.5 rounded-md bg-gradient-to-br from-blue-500 via-ogray-500 to-green-500 opacity-75 blur"
        ></div>
        <div
          class="relative h-64 w-64 items-center justify-center rounded-lg bg-slate-900 text-slate-300"
        >
        <i class="fa-solid fa-bullhorn fa-4x text-blue-500 pt-2 mb-4"></i>
        <p class="text-lg font-sans font-semibold text-gray-400">Digital Marketing</p>
        <p class="text-sm pt-2 ml-2 mr-2 text-gray-400">
          I can manage social media marketing and help you put strategic social
          media content and/or social ads in front of the online users. This
          gives your business valuable, extensive and target exposure..
        </p>
        </div>
      </div>
    </div>
  </div>

  <div class="grid md:grid-cols-2 my-6 gap-2 text-center mt-28">
    <div class="ml-6 rounded-full justify-center">
      <img src="../assets/cat.png" alt="" class="profile w-full" />
    </div>

    <div class="ml-10 mr-10 text-center select-none">
      <div class="bg-gradient-to-tl from-blue-600 via-green-500 to-blue-600 h-4 w-4 rounded-full justify-center"></div>
      <p
        class="text-lg font-sans font-semibold text-blue-500 uppercase tracking-wider"
      >
        Some Info -
      </p>
      <div id="more" class="pt-8 px-2">
        <p class="text-left text-gray-400">
          I am a front-end web developer based out of Kenya. I enjoy combining
          logic and design to produce appealing, usable websites and
          applications. I provide both design and development services for
          websites or online applications. I frequently use HTML, Tailwindcss,
          JavaScript, Vue.js and Nuxt.js, but I have no trouble learning new frameworks
          or languages. I feel at ease creating on the front end.
        </p>
        <br />
        <p class="text-left text-gray-400">
          I strongly use these standards when creating online projects, which
          gives my work both originality and scalability.
        </p>
      </div>

      <div class="flex flex-wrap justify-center text-center pt-10 gap-6">
       
  <div class="relative">
        <div
          class="absolute -inset-0.5 rounded-md bg-gradient-to-br from-blue-500 via-ogray-500 to-green-500 opacity-75 blur"
        ></div>
        <div
          class="relative h-60 w-60 items-center justify-center rounded-lg bg-slate-900 text-slate-300"
        >
        <i class="fa-solid fa-folder text-blue-500 fa-2x pt-2 mb-4"></i>
          <p class="text-lg font-sans font-semibold text-gray-300">
            SEO (Search Engine Optimization)
          </p>
          <p class="text-sm pt-2 ml-2 mr-2 text-gray-400">
            I employ best SEO practices like "Semantic HTML" and more on
            websites and projects I work on to improve the site visibility and
            rankings on Google.
          </p>
        </div>
      </div>

         <div class="relative">
        <div
          class="absolute -inset-0.5 rounded-md bg-gradient-to-br from-blue-500 via-ogray-500 to-green-500 opacity-75 blur"
        ></div>
        <div
          class="relative h-60 w-60 items-center justify-center rounded-lg bg-slate-900 text-slate-300"
        >
        <i class="fa-solid fa-mobile text-blue-500 fa-2x pt-2 mb-4"></i>
          <p class="text-lg font-sans font-semibold text-gray-300">Responsive Design</p>
          <p class="text-sm pt-2 ml-2 mr-2 text-gray-400">
            I am passionate about responsiveness and making the websites I build
            look good on different devices, browsers and cross platforms using
            both "mobile first" approach and desktop "media queries"
          </p>
        </div>
      </div>
      </div>
    </div>
  </div>
  <MySkills />
</template>
