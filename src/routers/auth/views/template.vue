<script setup lang="ts">
</script>

<template>
  <section class="flex items-center h-screen w-full justify-between">
    <RouterLink
      class="lg:w-1/2 items-center relative justify-center shadow-md bg-green-50 min-h-screen h-full lg:flex hidden flex-col gap-y-8"
      to="/">
      <h1 class="text-4xl font-bold text-gray-700">TheraTalk AI</h1>
    </RouterLink>
    <div class="w-full lg:w-1/2 sm:px-12 px-6 h-full flex lg:flex-row flex-col justify-center items-center bg-gray-50">
      <RouterView />
    </div>
  </section>
</template>
