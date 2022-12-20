<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const bincents = [
  {
    id: 'sutd',
    name: 'Bincent SUTD'
  }
]

onBeforeMount(() => {
  if (!bincents.find(b => b.id === route.params.id)) {
    return navigateTo('/')
  }
})

const route = useRoute()

const state = reactive({
  open: false
})

const bincent = computed(() => {
  return bincents.find(b => b.id === route.params.id)
})
</script>

<template>
  <div>
    <h1 class="font-semibold text-2xl">You are at...</h1>

    <div class="mt-4">
      <div class="card card-compact bg-primary text-primary-content">
        <div class="card-body">
          <div class="flex items-center justify-between">
            <h2 class="card-title text-3xl">{{ bincent?.name }}</h2>
            <div class="badge badge-success gap-2">
              <Icon name="material-symbols:check-small" size="24px" />
              Available
            </div>
          </div>

          <div class="card-actions mt-3">
            <div class="flex flex-col">
              <span>
                Status
              </span>
              <span class="font-semibold text-lg">
                76% full
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <h2 class="font-semibold text-xl">Actions</h2>
        <div class="grid grid-cols-2 mt-4">
          <button @click="() => state.open = !state.open" class="btn btn-lg" :class="state.open ? 'btn-warning' : 'btn-success'">
            {{ state.open ? 'Close' : 'Open' }} Bincent
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
