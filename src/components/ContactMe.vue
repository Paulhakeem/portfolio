<script setup>
</script>

<template>
<div>
<div
      class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg shadow-lg mb-6 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32"
    >
      <div class="flex flex-col justify-between">
        <div class="space-y-2">
          <h2 class="text-4xl font-bold leadi lg:text-3xl text-blue-500">
            Let's have Chat!🤗
          </h2>
          <div class="dark:text-gray-400"></div>
        </div>
        <img src="../assets/call.png" alt="" class="w-72" />
      </div>

      <form @submit.prevent="sendMessage" class="space-y-6">
        <div>
          <label for="name" class="text-sm text-gray-400">Full name</label>
          <input
            v-model="senderDetails.username"
            id="name"
            type="text"
            placeholder=""
            class="w-full p-3 rounded bg-gray-200 outline-none hover:outline-1 hover:outline-blue-500 text-gray-800"
          />
          <div
            class="input-errors"
            v-for="error of v$.username.$errors"
            :key="error.$uid"
          >
            <p class="error-msg text-red-500 italic">{{ error.$message }}</p>
          </div>
        </div>
        <div>
          <label for="email" class="text-sm text-gray-400">Email</label>
          <input
            v-model="senderDetails.email"
            id="email"
            type="email"
            class="w-full p-3 rounded bg-gray-200 outline-none hover:outline-1 hover:outline-blue-500 text-gray-800"
          />
          <div
            class="input-errors"
            v-for="error of v$.email.$errors"
            :key="error.$uid"
          >
            <p class="error-msg text-red-500 italic">{{ error.$message }}</p>
          </div>
        </div>
        <div>
          <label for="message" class="text-sm text-gray-400">Message</label>
          <textarea
            v-model="senderDetails.message"
            id="message"
            rows="3"
            class="w-full p-3 rounded bg-gray-200 outline-none hover:outline-1 hover:outline-blue-500 text-gray-800"
          ></textarea>
          <div
            class="input-errors"
            v-for="error of v$.message.$errors"
            :key="error.$uid"
          >
            <p class="error-msg text-red-500 italic">{{ error.$message }}</p>
          </div>
        </div>
        <button
          type="submit"
          class="bg-gradient-to-l from-blue-600 via-green-500 to-blue-600 w-full p-3 text-sm font-bold tracking-wider uppercase rounded text-white cursor-pointer hover:animate-bounce"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>