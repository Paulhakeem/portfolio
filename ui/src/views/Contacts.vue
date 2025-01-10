<template>
  <div>
    <Header />
    <div
      class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 pt-20 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32"
    >
      <div class="flex flex-col justify-between">
        <div class="space-y-2 pt-2">
          <h2
            id="contact"
            class="text-3xl font-medium lg:text-3xl text-blue-500"
          >
            Let's have Chat!🤗
          </h2>
          <div class="pt-6">
            <div class="flex gap-4">
              <i
                class="fa-solid fa-phone text-xl pt-2 rotate-20 text-blue-500"
              ></i>
              <div class="text-gray-500">
                <a href="tel:+254 792 857 288">
                  <p>+254 792 857 288</p>
                </a>
                <a href="tel:+254 759 732 432">
                  <p>+254 759 732 432</p>
                </a>
              </div>
            </div>

            <div class="flex gap-4 pt-3">
              <i
                class="fa-solid fa-envelope text-xl pt-2 rotate-20 text-blue-500"
              ></i>
              <div class="text-gray-500">
                <a href="mailto:paulnyamawi18@gmail.com">
                  <p class="cursor-pointer">paulnyamawi18@gmail.com</p>
                </a>
                <a href="mailto:poltechnology01@gmail.com">
                  <p>poltechnology01@gmail.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <ContactForm />
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import ContactForm from "../components/ContactForm.vue";
</script>
