<script setup lang="ts">
const props = defineProps<{
  points: number | null
  communityRank: number | null,
  friendsRank: number | null
}>()
</script>

<template>
  <div class="card card-compact w-full bg-secondary text-secondary-content">
    <div class="card-body">
      <h2 v-if="props.points" class="card-title text-4xl">{{ props.points }} points</h2>
      <progress v-else class="progress w-56"></progress>

      <div class="grid grid-cols-2 mt-3">
        <div>
          <h3 class="text-sm font-bold">Community rank</h3>
          <span class="text-lg">
            #{{ props.communityRank }}
          </span>
        </div>

        <div>
          <h3 class="text-sm font-bold">Friends rank</h3>
          <span class="text-lg">
            #{{ props.friendsRank }}
          </span>
        </div>
      </div>

      <div class="card-actions justify-end">
        <button class="btn btn-sm">View breakdown</button>
      </div>
    </div>
  </div>
</template>
