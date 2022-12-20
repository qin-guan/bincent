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
}

const { data: games } = useLazyAsyncData<Game[]>('games', async () => {
  return [
    {
      name: 'Community leaderboard',
      image: 'https://placeimg.com/800/200/arch',
    },
    {
      name: 'Friend leaderboard',
      image: 'https://placeimg.com/800/200/nature',
    }
  ]
})
</script>

<template>
  <div>
    <ThePointsCard :points="points" :friends-rank="friendsRank" :community-rank="communityRank" />

    <div class="grid grid-cols-2 gap-2 mt-3">
      <NuxtLink to="/find" class="hover:scale-[102%] duration-75">
        <div class="card card-bordered card-compact w-full bg-base-200 text-base-content">
          <div class="card-body">
            <div class="flex justify-between align-center">
              <h2 class="font-semibold">Find a Bincent</h2>
              <Icon name="material-symbols:search" size="24px" />
            </div>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/spend" class="hover:scale-[102%] duration-75">
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
      <h1 class="text-xl font-bold">
        Binteractive games
      </h1>

      <div v-if="games" class="carousel w-full h-64 mt-3">
        <div :id="idx.toString()" v-for="(game, idx) in games"
          class="carousel-item relative w-full rounded-xl overflow-hidden drop-shadow-lg">
          <img :src="game.image" class="absolute inset-0 object-cover max-w-none h-full" />
          <div class="bg-black/75 absolute inset-0 p-3">
            <h2 class="text-2xl text-base-content">
              {{ game.name }}
            </h2>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a :href="'#' + (idx > 0 ? idx - 1 : games.length - 1).toString()" class="btn btn-circle btn-sm btn-ghost">❮</a>
            <a :href="'#' + (idx < games.length - 1 ? idx + 1 : 0).toString()" class="btn btn-circle btn-sm btn-ghost">❯</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
