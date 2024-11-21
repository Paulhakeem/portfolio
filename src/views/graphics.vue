<template>
  <div>
    <buttons/>
    <div class="text-center pt-20">
      <h3
        class="text-2xl tracking-wide font-sans font-bold first-letter:uppercase text-gray-400"
      >
        posters / Logos
      </h3>
    </div>

    <div class="flex flex-wrap justify-center gap-4 pt-10">
      <div v-for="poster in usePoster.posters" :key="poster.id">
        <div class="relative mx-4">
          <div
            class="absolute -inset-0.5 rounded-md bg-gradient-to-br from-blue-500 via-ogray-500 to-green-500 opacity-75 blur"
          ></div>
          <div
            class="relative w-80 h-80 items-center justify-center rounded-lg bg-[#121a27] p-2 text-slate-300"
          >
            <img :src="poster.image" alt="poster" />
          </div>
        </div>
      </div>
    </div>

    <!-- flyer -->

    <div class="text-center pt-10">
      <h3
        class="text-2xl tracking-wide font-sans font-bold first-letter:uppercase text-blue-500"
      >
        Flyers
      </h3>
    </div>

    <div class="flex flex-wrap justify-center gap-4 pt-10">
      <div v-for="flyer in useFlyer.flyers" :key="flyer.id">
        <div class="relative mx-4">
          <div
            class="absolute -inset-0.5 rounded-md bg-gradient-to-br from-blue-500 via-ogray-500 to-green-500 opacity-75 blur"
          ></div>
          <div
            class="relative w-80 h-auto items-center justify-center rounded-lg bg-[#121a27] p-2 text-slate-300"
          >
            <img :src="flyer.image" alt="poster" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import buttons from "../components/Header.vue";
import { usePosterStore } from "../store/posters.js";
import { useFlyerStore } from "../store/flyer.js";
const usePoster = usePosterStore();
const useFlyer = useFlyerStore();
</script>

<style lang="scss" scoped></style>
