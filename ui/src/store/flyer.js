import { defineStore } from 'pinia'
import { ref } from "vue";
import offerflyer from "../assets/graphic/offerflyer.jpg"
import school from "../assets/graphic/school.jpg"
import vale from "../assets/graphic/vale.jpg"
import wasinibirthday from "../assets/graphic/wasinibirthday.jpg"
import Discover from "../assets/graphic/Discover.jpg"
import honeymoon from "../assets/graphic/honeymoon.jpg"

export const useFlyerStore = defineStore('flyers', () => {
   
    
    let flyers = ref([
      {
        id: 1,
        image: offerflyer,
      },
      {
        id: 2,
        image: school,
      },
      {
        id: 3,
        image: vale,
      },
      {
        id: 3,
        image: wasinibirthday,
      },
      {
        id: 3,
        image: Discover,
      },
      {
        id: 3,
        image: honeymoon,
      },
      
    ]);

    return {flyers}
  })