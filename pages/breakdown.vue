<script setup lang="ts">import { doc } from '@firebase/firestore';

definePageMeta({
  layout: 'auth'
})

const app = useNuxtApp()
const auth = useAuth(app.$firebase.auth)
const points = useFirestore(doc(app.$firebase.firestore, 'points', auth.user.value?.phoneNumber ?? ''))

const normalizedPoints = computed(() => {
  return points.value ?? 100
})

const transactions = [
  {
    name: 'Redeem voucher',
    amount: -100
  },
  {
    name: 'Redeem voucher',
    amount: -200
  },
  {
    name: 'SUTD Library',
    amount: +500
  }
]


</script>

<template>
  <div>
    <h1>Your points</h1>
    <h2 class="text-4xl font-semibold">{{ normalizedPoints }}</h2>

    <section class="mt-4">
      <h1>Your transactions</h1>

      <div class="mt-2">
        <div v-for="transaction in transactions" class="p-3 bg-base-200 rounded-lg flex justify-between">
          <span class="font-semibold">
            {{ transaction.name }}
          </span>
          <span :class="{'text-red-500': transaction.amount < 0, 'text-green-500': transaction.amount >= 0}">
            {{ transaction.amount }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
