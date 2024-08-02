<script setup>
import { RouterLink } from "vue-router";
import More from "../components/More.vue";
import buttons from "../components/buttons.vue";
import HomeButtons from "../components/HomeButtons.vue";
import { Vue3Lottie } from "vue3-lottie";
</script>
<template>
  <section>
    <buttons />
    <div class="mx-auto">
      <div id="portfolio" class="flex my-6 justify-center">
        <div
          id="user"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="200"
          class="justify-center justify-self-center mx-auto"
        >
          <Vue3Lottie
            animation-link="https://assets2.lottiefiles.com/packages/lf20_GbabwrUY2k.json"
            :height="500"
            :width="500"
          />
        </div>

        <div
          id="user-grid"
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :enter="{ opacity: 1, x: 0, scale: 1 }"
          :variants="{ custom: { scale: 6 } }"
          :delay="200"
          class="pt-24 justify-center justify-self-center mx-auto"
        >
          <div class="mx-4">
            <h3
              class="text-4xl tracking-wide font-sans font-bold uppercase bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 text-transparent bg-clip-text"
            >
              i am paul nyamawi
            </h3>
          </div>
          <div id="user-info" class="px-4 pt-6">
            <p
              class="text-md tracking-wide font-light text-gray-400 text-balance"
            >
              Self taught
              <span class="">Front-end Web Developer and Graphic designer</span>
              who enjoy building everything from small business websites to rich
              interactive websites. I create custom website to bring your idea
              into life and help businesses do better online. <br />
              If you are a business seeking a web presence or an employer
              looking to hire you can get in touch with me.
            </p>
          </div>

          <div id="user-button" class="">
            <home-buttons/>
            <!-- <a href="/src/assets/cv/cv.jpg" download="DevPaulCv.jpg">
              <button
                class="p-3 rounded-full border border-1 border-green-500 text-blue-500 uppercase tracking-wider w-48 hover:animate-bounce"
              >
                download my cv
              </button>
            </a> -->
          </div>
        </div>
      </div>

      <More />
    </div>
  </section>
</template>
