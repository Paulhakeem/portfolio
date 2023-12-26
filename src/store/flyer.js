import { defineStore } from 'pinia'
import { ref } from "vue";
// import offerflyer from "../assets/graphic/offerflyer.jpg"
// import school from "../assets/graphic/school.png"
import vale from "../assets/graphic/vale.png"
import wasinibirthday from "../assets/graphic/wasinibirthday.png"
import Discover from "../assets/graphic/Discover.png"
import honeymoon from "../assets/graphic/honeymoon.png"

export const useFlyerStore = defineStore('flyers', () => {
   
    
    let flyers = ref([
      // {
      //   id: 1,
      //   image: offerflyer,
      // },
      // {
      //   id: 2,
      //   image: school,
      // },
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