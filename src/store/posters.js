import { defineStore } from 'pinia'
import { ref } from "vue";
// import Apartment from "../assets/graphic/Apartment.jpg"
import ADVERT from "../assets/graphic/ADVERT.jpg"
// import bnb from "../assets/graphic/bnb.jpg"
import customer from "../assets/graphic/customer.jpg"
import confirm from "../assets/graphic/confirm.jpg"
import dolphin from "../assets/graphic/dolphin.jpg"
// import jamhuri from "../assets/graphic/jamhuri.jpg"
// import offer from "../assets/graphic/offer.jpg"
import poster11 from "../assets/graphic/poster11.jpg"
import poster6 from "../assets/graphic/poster6.jpg"
import FISHION from "../assets/graphic/FISHION.jpg"
import madaraka from "../assets/graphic/madaraka.jpg"
import poster4 from "../assets/graphic/poster4.jpg"
import poster5 from "../assets/graphic/poster5.jpg"
import wasini from "../assets/graphic/wasini.jpg"
// import newyear from "../assets/graphic/newyear.jpg"
import may from "../assets/graphic/may.jpg"
import valentines from "../assets/graphic/valentines.jpg"
// import holiday from "../assets/graphic/holiday.jpg"
import farmlogo from "../assets/graphic/farmlogo.jpg"
import waterlogo from "../assets/graphic/waterlogo.jpg"
import logo from "../assets/graphic/logo.jpg"
import logo1 from "../assets/graphic/logo1.jpg"

export const usePosterStore = defineStore('posters', () => {
   
    
    let posters = ref([
      // {
      //   id: 1,
      //   image: Apartment,
      // },
      {
        id: 2,
        image: confirm,
      },
      {
        id: 3,
        image: customer,
      },
      {
        id: 3,
        image: dolphin,
      },
      {
        id: 3,
        image: ADVERT,
      },
      // {
      //   id: 3,
      //   image: bnb,
      // },
      // {
      //   id: 3,
      //   image: jamhuri,
      // },
      // {
      //   id: 3,
      //   image: offer,
      // },
      {
        id: 3,
        image: poster11,
      },
      {
        id: 3,
        image: poster6,
      },
      {
        id: 3,
        image: FISHION,
      },
      {
        id: 3,
        image: madaraka,
      },
      {
        id: 3,
        image: poster4,
      },
      {
        id: 3,
        image: poster5,
      },
      {
        id: 3,
        image: wasini,
      },
      // {
      //   id: 3,
      //   image: newyear,
      // },
      {
        id: 3,
        image: may,
      },
      {
        id: 3,
        image: valentines,
      },
      // {
      //   id: 3,
      //   image: holiday,
      // },
      {
        id: 3,
        image: waterlogo,
      },
      {
        id: 3,
        image: farmlogo,
      },
      {
        id: 3,
        image: logo1,
      },
      {
        id: 3,
        image: logo,
      },
    ]);

    return {posters}
  })