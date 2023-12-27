<template>
  <div>
    <div class="switch">
      <Switch
        @click="toggleDark()"
        v-model="enabled"
        :class="enabled ? 'bg-green-500' : 'bg-blue-500'"
        class="relative inline-flex h-[23px] w-[60px] mx-4 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        <span class="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-9' : 'translate-x-0'"
          class="pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </Switch>
    </div>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { Switch } from "@headlessui/vue";
import { ref } from "vue";
const enabled = ref(false);
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="scss" scoped></style>
