<script setup lang="ts">
const app = useNuxtApp()
const auth = useAuth(app.$firebase.auth)
</script>

<template>
  <div class="h-screen flex flex-col bg-base-100">
    <div class="navbar">
      <div class="container mx-auto">
        <div class="flex-1">
          <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">Bincent</NuxtLink>
        </div>

        <div class="flex-none">
          <ButtonLogin />
        </div>
      </div>
    </div>
    
    <main class="flex-1 container mx-auto p-4">
      <slot v-if="auth.isAuthenticated.value"></slot>
    </main>
  </div>
</template>
