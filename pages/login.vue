<script setup lang="ts">
import { RecaptchaVerifier, signInWithPhoneNumber } from '@firebase/auth';

const app = useNuxtApp()
const state = reactive({
  phone: ''
})

// let recaptchaVerifier: RecaptchaVerifier

// onMounted(() => {
//   recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//     'size': 'invisible',
//     'callback': (a) => {
//       console.log(a)
//     }
//   }, app.$firebase.auth);
// })

// function login() {
//   signInWithPhoneNumber(app.$firebase.auth, state.phone, recaptchaVerifier)
//     .then((confirmationResult) => {
//       console.log(confirmationResult)
//     }).catch((error) => {
//       console.error(error)
//     });
// }
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Login</h1>
    <!-- <form @submit.prevent="login">
      <input v-model="state.phone" type="phone" placeholder="8888 8888" class="input w-full max-w-xs" />
      <button id="sign-in-button" type="submit" class="btn btn-primary">Login</button>
    </form> -->
  </div>
</template>
