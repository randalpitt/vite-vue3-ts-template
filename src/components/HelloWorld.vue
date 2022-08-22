<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="flex h-screen items-center justify-center bg-slate-900">
    <div
      class="rounded-lg bg-gradient-to-r from-purple-600 via-yellow-500 to-red-600 p-0.5"
    >
      <div class="rounded-lg bg-slate-900 p-12 text-center shadow-lg">
        <h1
          class="m-1 bg-gradient-to-r from-purple-500 via-yellow-500 to-red-500 bg-clip-text text-4xl font-bold text-transparent"
        >
          {{ msg }}
        </h1>

        <button
          type="button"
          class="m-8 w-40 rounded-lg border-2 border-slate-400 bg-transparent p-4 px-6 text-slate-200 hover:bg-slate-800/50"
          @click="count++"
        >
          Count is: <b>{{ count }}</b>
        </button>

        <p class="text-slate-400">
          Edit
          <code>components/HelloWorld.vue</code> to test HMR
        </p>
      </div>
    </div>
  </div>
</template>
