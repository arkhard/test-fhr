<script setup lang="ts">
import { toRefs } from 'vue'
import type { Team } from '@/entities/team'
import { TeamCard, TeamCardEmpty } from '@/entities/team'
import { useTeamFilter, TeamFilterInput } from '@/features/team-filter'

interface Props {
  list: Team[],
  hasSearch?: boolean
}

const props = defineProps<Props>()
const { list, hasSearch } = toRefs(props)
const { searchText, filteredAndSorted, leaderId } = useTeamFilter(list)
</script>

<template>
  <section class="teams-list">
    <TeamFilterInput
      v-if="hasSearch"
      v-model="searchText"
      class="teams-list__filter"
    />

    <TransitionGroup
      name="list"
      tag="ul"
      class="teams-list__grid"
    >
      <li
        v-for="team in filteredAndSorted"
        :key="team.id"
        class="teams-list__item"
      >
        <TeamCard
          :team="team"
          :isLeader="team.id === leaderId"
        />
      </li>

      <li
        v-show="!filteredAndSorted.length"
        key="empty"
      >
        <TeamCardEmpty />
      </li>
    </TransitionGroup>
  </section>
</template>

<style scoped lang="scss">
.teams-list {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__grid {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}
</style>
