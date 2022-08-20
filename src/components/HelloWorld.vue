<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div
    class="flex h-screen items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800"
  >
    <div
      class="rounded-lg border border-blue-600 bg-gradient-to-br from-blue-800 to-blue-500 p-12 text-center shadow-lg"
    >
      <h1 class="m-1 text-4xl font-bold text-white">
        {{ msg }}
      </h1>

      <button
        type="button"
        class="m-8 rounded-lg border-2 border-white bg-transparent p-4 px-6 text-white"
        @click="count++"
      >
        Count is: <b>{{ count }}</b>
      </button>
      <p class="text-white">
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>
  </div>
</template>
