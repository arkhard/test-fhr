<script setup lang="ts">
import { TeamCardContainer } from '../index'
</script>

<template>
  <TeamCardContainer class="team-card--empty">
    Ничего не найдено
  </TeamCardContainer>
</template>

<style scoped lang="scss">
.team-card {
  &--empty {
    justify-content: center;
  }
}
</style>
