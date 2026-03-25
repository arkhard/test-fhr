<script setup lang="ts">
import { ref } from 'vue'
import { TeamsList } from '@/widgets/teams-list'
import { initialTeams } from '@/entities/team'

const teams = ref(initialTeams)
</script>

<template>
  <main class="teams-page">
    <TeamsList
      :list="teams"
      has-search
      class="teams-page__list"
    />
  </main>
</template>

<style scoped lang="scss">
.teams-page {
  &__list {
    max-width: 600px;
    margin: auto;
  }
}
</style>
