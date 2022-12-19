
<script setup lang="ts">
const app = useNuxtApp()
const { isAuthenticated } = useAuth(app.$firebase.auth)
</script>

<template>
  <NuxtLink v-if="isAuthenticated" tabindex="0" class="btn btn-ghost btn-circle avatar">
    <div class="w-10 rounded-full">
      <Icon v-if="isAuthenticated" name="material-symbols:account-circle" class="h-10 w-10" />
    </div>
  </NuxtLink>

  <NuxtLink to="/login" v-else class="btn btn-primary btn-sm">Login</NuxtLink>
</template>
