<script setup lang="ts">
const route = useRoute()
const header = computed(() => {
  if (route.path === '/') return 'Explore with Bincent'
  return 'Bincent'
})
</script>
<template>
  <div class="h-screen flex flex-col bg-base-100">
    <div class="navbar">
      <div class="container mx-auto">
        <div class="flex-1">
          <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">{{ header }}</NuxtLink>
        </div>

        <div class="flex-none">
          <ButtonLogin />
        </div>
      </div>
    </div>

    <main class="flex-1 container mx-auto p-4">
      <slot></slot>
    </main>
  </div>
</template>
