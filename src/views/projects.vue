<template>
  <div>
    <buttons />
    <div
      class="project flex flex-wrap mx-6 space-x-6 lg:flex p-5 scroll-smooth justify-center"
    >
    <div v-for="project in projects" :key="project.id">
        <div id="box" class="text-lg p-10 rounded-lg shadow-lg w-96">
        <div class="text-center">
          <img :src="project.image" alt="" class="w-96" />
        </div>
        <div class="pt-3">
          <h1 class="text-blue-500 font-semibold">{{project.heading}}</h1>
          <p class="text-pretty text-gray-400 text-md">{{project.text}}</p>
          <div class="img flex gap-4 my-8">
            <img src="../assets/vue.svg" alt="vue logo" class="w-8" />
            <img src="../assets/js.svg" alt="javascript logo" class="w-8" />
            <img
              src="../assets/tailwindcss.svg"
              alt="tailwindcss logo"
              class="w-8"
            />
          </div>
          <a
            href="http://localhost:5173/src/assets/weather%20v1.JPG"
            target="_blank"
          >
            <button
              class="bg-gradient-to-r from-blue-500 via-ogray-500 to-green-500 text-white rounded-md p-2 w-80 text-lg mt-3 uppercase hover:animate-bounce"
            >
              Open
            </button>
          </a>
        </div>
      </div>
    </div>
    
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
import buttons from "../components/buttons.vue";
import medusa from "../assets/medusa.jpg";
import moviev1 from "../assets/moviev1.jpg";
import weatherv1 from "../assets/weatherv1.jpg";
import moviev2 from "../assets/moviev2.jpg";
import website from "../assets/website.jpg";
import todo from "../assets/todo.jpg";

let projects = ref([
  {
    id: 2,
    heading: "Online Store",
    text: "Medusa is an online store",
    image: medusa,
  },
  {
    id: 2,
    heading: "Movie app Version I",
    text: "Simple movie app build using IMDB API",
    image: moviev1,
  },

  {
    id: 3,
    heading: "Movie App Version II",
    text: " Simple movie app build using TMDB API",
    image: moviev2,
  },
  {
    id: 4,
    heading: "RealTime Todo",
    text: "Simple Realtime todo app",
    image: todo,
  },
  {
    id: 5,
    heading: "Weather Version I",
    text: "Local weather app used by searching a city or a country to get the real time weather of the place",
    image: weatherv1,
  },
  {
    id: 6,
    heading: "website",
    text: "Simple website",
    image: website,
  },
]);
</script>
