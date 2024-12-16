<script setup>
import Skils from "../components/MySkills.vue";
import HomeButtons from "../components/HomeButtons.vue";
import { Vue3Lottie } from "vue3-lottie";
import Header from "../components/Header.vue";
</script>
<template>
  <section>
    <Header />
    <div id="main">
      <div id="profile" class="flex justify-center items-center m-auto">
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
          class="justify-center justify-self-center mx-4"
        >
          <div>
            <p class="text-2xl text-gray-400">Hi!👋</p>
            <h3 id="rule"
              class="my-3 text-4xl tracking-wide font-sans font-bold bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 text-transparent bg-clip-text"
            >
              I learn, I develop....
            </h3>
            <h6 class="text-gray-400 text-xl">A Graphic Designer & Front-End Developer</h6>
          </div>
          <div id="user-info">
            <p
              class="text-md tracking-wide font-light text-gray-300 text-balance"
            >
              I'm always eager to expand my skill set and stay current with the
              latest technology trends.
            </p>
          </div>
          <span class="italic text-gray-400"
            >"- With Small Steps, I Will Go Very Far_"</span
          >
          <div id="user-button" class="">
            <home-buttons />
          </div>
        </div>
      </div>
     
    </div>
     <!-- MY SKILLS -->
     <Skils />
  </section>
</template>

<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  #main {
    align-items: center;
    justify-content: center;
  }
  #profile {
    flex-wrap: wrap;
    margin-left: 2em;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  #main {
    align-items: center;
    justify-content: center;
  }
  #profile {
    flex-wrap: wrap;
  }
  #user-grid {
    padding-left: 2em;
    padding-right: 2em;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  #profile {
    flex-wrap: nowrap;
  }
}

@keyframes blinkCursor {
  50% {
    border-right-color: transparent;
  }
}

@keyframes typeAndDelete {
  0%,
  10% {
    width: 0;
  }
  45%,
  55% {
    width: 9.2em;
  } /* adjust width based on content */
  90%,
  100% {
    width: 0;
  }
}

#rule {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.1em solid blue; /* Cursor */
  animation: typeAndDelete 4s steps(11) infinite,
    blinkCursor 0.5s step-end infinite alternate;
}
</style>
