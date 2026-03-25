<script setup lang="ts">
import { toRefs } from 'vue'
import type { Team } from '../model/types';
import { TeamCardContainer } from '../index'

interface Props {
  team: Team,
  isLeader?: boolean
}

const props = defineProps<Props>()
const { isLeader, team } = toRefs(props)
</script>

<template>
  <TeamCardContainer
    :class="[
      {'team-card--leader': isLeader },
    ]"
  >
    <div
      v-if="isLeader"
      class="team-card__badge"
    >
      Лидер
    </div>

    <div class="team-card__info">
      <span class="team-card__name">
        {{ team.name }}
      </span>

      <span class="team-card__city">
        {{ team.city }}
      </span>
    </div>

    <div class="team-card__points">
      <span class="team-card__points-value">
        {{ team.points }}
      </span>

      <span class="team-card__points-label">
        очков
      </span>
    </div>
  </TeamCardContainer>
</template>

<style scoped lang="scss">
.team-card {
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  }

  &__badge {
    position: absolute;
    top: -10px;
    right: 16px;
    font-size: 11px;
    font-weight: 700;
    color: var(--fhr-color-primary);
    background: var(--fhr-color-background);
    padding: 2px 8px;
    border-radius: 20px;
    border: 1px solid var(--fhr-color-primary);
    letter-spacing: 0.5px;
  }

  &__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  &__name {
    font-size: 15px;
    font-weight: 600;
    color: var(--fhr-color-text);
  }

  &__city {
    font-size: 12px;
    color: var(--fhr-color-text-secondary);
  }

  &__points {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 52px;
  }

  &__points-value {
    font-size: 22px;
    font-weight: 700;
    color: var(--fhr-color-secondary);
    line-height: 1;
  }

  &__points-label {
    font-size: 10px;
    color: #6b7694;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  &--leader {
    border-color: var(--fhr-color-primary);
    box-shadow: 0 0 0 1px var(--fhr-color-primary), 0 4px 20px rgba(245, 197, 24, 0.15);

    .team-card__name {
      color: var(--fhr-color-primary);
    }

    .team-card__points-value {
      color: var(--fhr-color-primary);
    }
  }
}
</style>
