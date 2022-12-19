<script setup lang="ts">
const { data: points } = useLazyAsyncData('points', async () => {
  return 1000
})

const { data: communityRank } = useLazyAsyncData('communityRank', async () => {
  return 1
})

const { data: friendsRank } = useLazyAsyncData('friendsRank', async () => {
  return 1
})

interface Game {
  name: string
  image: string
  previous?: string
  next?: string
}

const { data: games } = useLazyAsyncData<Game[]>('games', async () => {
  return [
    {
      name: 'Community leaderboard',
      image: 'https://placeimg.com/800/200/arch',
    }
  ]
})
</script>

<template>
  <div>
    <ThePointsCard :points="points" :friends-rank="friendsRank" :community-rank="communityRank" />

    <div class="grid grid-cols-2 gap-2 mt-3">
      <NuxtLink class="hover:scale-[102%] duration-75">
        <div class="card card-bordered card-compact w-full bg-base-200 text-base-content">
          <div class="card-body">
            <div class="flex justify-between align-center">
              <h2 class="font-semibold">Find a Bincent</h2>
              <Icon name="material-symbols:search" size="24px" />
            </div>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink class="hover:scale-[102%] duration-75">
        <div class="card card-bordered card-compact w-full bg-base-200 text-base-content">
          <div class="card-body">
            <div class="flex justify-between align-center">
              <h2 class="font-semibold">Spend your points</h2>
              <Icon name="material-symbols:wallet" size="24px" />
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>

    <div class="mt-8">
      <h1 class="text-lg font-bold">
        Binteractive games
      </h1>

      <div class="carousel w-full h-72">
        <div :id="game.name" v-for="(game) in games" class="carousel-item relative w-full">
          <img :src="game.image" class="absolute inset-0 object-cover" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a v-if="game.previous" :href="game.previous" class="btn btn-circle">❮</a>
            <a v-if="game.next" :href="game.next" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
