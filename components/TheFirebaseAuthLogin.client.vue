<script setup lang="ts">
import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'

const app = useNuxtApp()
const auth = useAuth(app.$firebase.auth)

const form = reactive({
  requested: false,
  phone: '',
  otp: ''
})

let confirmationResult: ConfirmationResult
let recaptchaVerifier: RecaptchaVerifier

watchEffect(() => {
  if (auth.isAuthenticated.value) return navigateTo('/')
})

onMounted(async () => {
  setTimeout(() => {

    recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
    }, app.$firebase.auth);
  }, 1)
})


async function login() {
  confirmationResult = await signInWithPhoneNumber(app.$firebase.auth, form.phone, recaptchaVerifier)
  form.requested = true
}

async function confirm() {
  await confirmationResult.confirm(form.otp)
  navigateTo('/')
}
</script>

<template>
  <div>
    <div class="form-control w-full mt-3">
      <label class="label">
        <span class="label-text">Phone</span>
      </label>
      <div class="flex items-center gap-3">
        <input class="flex-1 input input-bordered" placeholder="+6588888888" v-model="form.phone" />
        <button @click="login" id="sign-in-button" class="btn btn-sm btn-ghost">Request</button>
      </div>
    </div>

    <div class="form-control w-full mt-3">
      <label class="label">
        <span class="label-text">OTP</span>
      </label>
      <input :disabled="!form.requested" v-model="form.otp" class="input input-bordered w-full" />
    </div>

    <button :disabled="!form.requested" @click="confirm" class="btn btn-secondary w-full mt-6">Confirm number</button>
  </div>
</template>
