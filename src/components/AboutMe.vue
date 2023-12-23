<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="pt-20">
    <div class="relative mx-4">
      <div
        class="absolute -inset-0.5 rounded-md bg-gradient-to-br from-blue-500 via-ogray-500 to-green-500 opacity-75 blur"
      ></div>
      <div
        class="relative w-full h-96 items-center justify-center rounded-lg bg-slate-900 text-slate-300"
      >
        <div
          class="grid grid-cols-2 items-center text-center divide-x-2 divide-gray-400"
        >
          <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="200"
            class="about justify-center ml-2 mr-2"
          >
            <div class="pb-3">
              <h3
                class="bg-gradient-to-br from-blue-500 via-ogray-500 to-green-500 text-transparent bg-clip-text uppercase font-black text-4xl font-sans tracking-wider"
              >
                hello!, <br />
                am paul nyamawi
              </h3>
            </div>
            <p class="italic text-md font-sans font-medium line-clamp-3">
              Front-end web developer and <br />
              grapic designer
            </p>
            <div class="mt-4 text-center justify-center">
              <RouterLink to="/portfolio">
                <button
                  class="bg-gradient-to-br from-blue-500 via-ogray-500 to-green-500 p-4 rounded-md w-72 text-md font-semibold tracking-wider hover:animate-bounce"
                >
                  My Portfolio
                </button>
              </RouterLink>
            </div>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :enter="{ opacity: 1, x: 0, scale: 1 }"
            :variants="{ custom: { scale: 6 } }"
            :delay="200"
            class="ml-10 mr-10 h-full"
          >
            <div class="pt-4 text-xl text-gray-200 font-serif font-medium">
              <h4>
                Lets know each other and have a chat. <br />
                Follow me through the following platforms:
              </h4>
            </div>
            <div class="pt-8 ml-2 mr-2 space-y-6">
              <div>
                <a
                  href="https://www.linkedin.com/in/paul-nyamawi-9244b924b/"
                  target="_blank"
                >
                  <button
                    class="bg-gradient-to-l from-blue-500 via-ogray-500 to-green-500 text-white text-lg rounded-md w-full p-2 tracking-wider hover:animate-bounce"
                  >
                    <i class="fa-brands fa-linkedin text-2xl pr-8"></i>
                    LinkedIn
                  </button>
                </a>
              </div>

              <div>
                <a href="https://twitter.com/Hakeemi20" target="_blank">
                  <button
                    class="bg-gradient-to-r from-blue-500 via-ogray-500 to-green-500 text-white text-lg rounded-md w-full p-2 tracking-wider hover:animate-bounce"
                  >
                    <i class="fa-brands fa-square-twitter text-2xl pr-10"></i>
                    Twitter
                  </button>
                </a>
              </div>

              <div>
                <a
                  href="https://web.facebook.com/paul.nyamawi.33"
                  target="_blank"
                >
                  <button
                    class="bg-gradient-to-l from-blue-500 via-ogray-500 to-green-500 text-white text-lg rounded-md w-full p-2 tracking-wider hover:animate-bounce"
                  >
                    <i class="fa-brands fa-facebook text-2xl pr-4"></i>
                    Facebook
                  </button>
                </a>
              </div>

              <div>
                <a
                  href="https://www.instagram.com/coderpaul18/"
                  target="_blank"
                >
                  <button
                    class="bg-gradient-to-r from-blue-500 via-ogray-500 to-green-500 text-white text-lg rounded-md w-full p-2 tracking-wider shadow-md hover:animate-bounce"
                  >
                    <i class="fa-brands fa-square-instagram text-2xl pr-4"></i>
                    Instagram
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
