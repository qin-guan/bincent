<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const app = useNuxtApp()
const state = reactive({
  selected: -1
})

const redemptions = [
  {
    name: '$5 HPB vouchers',
    image: 'https://placeimg.com/800/200/arch',
    points: 500
  },
  {
    name: '$5 CapitaLand vouchers',
    image: 'https://placeimg.com/800/200/arch',
    points: 500
  },
  {
    name: '$5 Nike vouchers',
    image: 'https://placeimg.com/800/200/arch',
    points: 500
  },
  {
    name: '$5 Popular vouchers',
    image: 'https://placeimg.com/800/200/arch',
    points: 500
  }
]

function redeem() {
  state.selected = -1
}
</script>

<template>
  <div class="flex h-full flex-col">
    <Teleport to="body">
      <input type="checkbox" id="modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <div v-if="state.selected > -1">
            <h3 class="font-bold text-lg">{{ redemptions[state.selected].name }}</h3>
            <div class="flex justify-between align-center mt-3">
              <span>
                You have
              </span>
              <span>
                1000 points
              </span>
            </div>
            <div class="flex justify-between align-center mt-3">
              <span>This will cost</span>
              <span>
                {{ redemptions[state.selected].points }} points
              </span>
            </div>

            <hr class="mt-4" />

            <div class="flex justify-between align-center mt-3">
              <span>Your balance</span>
              <span>
                {{ redemptions[state.selected].points }} points
              </span>
            </div>
          </div>

          <div class="modal-action">
            <label for="modal" class="btn btn-ghost">Cancel</label>
            <label for="modal" @click="redeem" class="btn btn-success">Redeem</label>
          </div>
        </div>
      </div>
    </Teleport>

    <h1 class="font-semibold text-xl">Spend</h1>

    <div class="grid grid-cols-2 gap-2 mt-3">
      <label for="modal" @click="() => state.selected = idx" v-for="(redemption, idx) in redemptions"
        class="hover:scale-[102%] cursor-pointer duration-75 card card-bordered card-compact w-full bg-base-200 text-base-content">
        <div class="card-body">
          <h2 class="font-semibold">{{ redemption.name }}</h2>
          <span class="ml-auto">{{ redemption.points }} points</span>
        </div>
      </label>
    </div>
  </div>
</template>
