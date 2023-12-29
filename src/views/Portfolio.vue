<script setup>
import { RouterLink } from "vue-router";
import More from "../components/More.vue";
import buttons from "../components/buttons.vue";
</script>
<template>
  <div>
    <buttons />
    <div class="grid md:grid-cols-2 my-6 gap-20 text-center mt-20">
      <div
        id="user"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="200"
        class="relative px-3 bg-gradient-to-tr from-blue-600 via-green-500 to-blue-600 rounded-full h-auto w-full blur-3xl"
      >
      </div>
      <div class="absolute  bg-gradient-to-tr from-green-600 via-blue-500 to-green-600 h-96 w-96 blur-3xl"></div>

      <div
       id="user-grid"
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :enter="{ opacity: 1, x: 0, scale: 1 }"
        :variants="{ custom: { scale: 6 } }"
        :delay="200"
        class="pt-24 px-10"
      >
        <div class="flex">
          <h3
            class="text-4xl tracking-wide font-sans font-bold text-left uppercase bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 text-transparent bg-clip-text"
          >
            i am paul nyamawi
          </h3>
        </div>
        <div class="text-left pt-6">
          <p
            class="text-md tracking-wide font-light text-gray-400 text-balance"
          >
            Self taught
            <span class="italic"
              >Front-end Web Developer and Graphic designer</span
            >
            who enjoy building everything from small business websites to rich
            interactive websites. I create custom website to bring your idea
            into life and help businesses do better online. <br />
            <i
              >If you are a business seeking a web presence or an employer
              looking to hire you can get in touch with me.</i
            >
          </p>
        </div>

        <div class="flex flex-wrap pt-12 m-auto gap-18">
          <button
            class="bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 p-4 rounded-full text-white uppercase tracking-wider w-48 hover:shadow-lg hover:animate-bounce"
          >
            read my cv
          </button>

          <button
            class="shadow-lg p-4 rounded-full text-blue-500 uppercase tracking-wider w-48 hover:animate-bounce"
          >
            download my cv
          </button>
        </div>
      </div>
    </div>

    <More />
  </div>
</template>
