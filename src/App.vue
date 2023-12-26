<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useDark, useToggle } from "@vueuse/core";
import { Switch } from "@headlessui/vue";
import { ref } from "vue";
const enabled = ref(false);
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div>
    <!-- <p class="text-red-600">Dark theme: {{isDark}}</p>
  <button @click="toggleDark()">toggle</button> -->

    <Switch
      @click="toggleDark()"
      v-model="enabled"
      :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
      class="relative inline-flex h-[26px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-9' : 'translate-x-0'"
        class="pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      />
    </Switch>
    <RouterView />
  </div>
</template>

<style>
.dark {
  background: #121a27;
  color: #fff;
}
</style>
