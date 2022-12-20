<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <div>
    <h1 class="font-semibold text-xl">Community leaderboard</h1>

    <div class="mt-6">
      <h2 class="text-lg">Your progress</h2>
      <ul class="steps w-full mt-2">
        <li data-content="10cm" class="step step-primary">20 points</li>
        <li data-content="30cm" class="step step-primary">30 points</li>
        <li data-content="70cm" class="step">70 points</li>
      </ul>
    </div>

    <div class="flex items-center justify-center mt-8">
      <span class="text-center">
        <strong class="text-xl">3 days</strong>
        <br />
        before progress is reset
      </span>
    </div>

    <div class="mt-8 flex flex-col gap-4">
      <div v-for="(_, idx) in new Array(5)" class="card w-full bg-base-200 shadow-xl card-compact" :class="idx === 0 ? 'bg-primary' : 'bg-base-200'">
        <div class="card-body">
          <div class="flex justify-between items-center">
            <span class="text-lg font-semibold">
              {{ idx + 1 }}. Micheal
            </span>
            <span>
              10cm
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
