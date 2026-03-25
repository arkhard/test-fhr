import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import type { Team } from '@/entities/team'

export interface UseTeamFilterReturn {
  searchText: Ref<string>
  filteredAndSorted: ComputedRef<Team[]>
  leaderId: ComputedRef<number | null>
}

export function useTeamFilter(teams: Ref<Team[]>): UseTeamFilterReturn {
  const searchText = ref<string>('')

  const filteredAndSorted = computed<Team[]>(() => {
    const search = searchText.value.trim().toLowerCase()
    const filtered = search
      ? teams.value.filter((team) => team.name.toLowerCase().includes(search))
      : teams.value

    return [...filtered].sort((a, b) => b.points - a.points)
  })

  const leaderId = computed<number | null>(() => {
    if (teams.value.length === 0) return null

    const teamMaxPoints = teams.value.reduce((max, team) => {
      return team.points > max.points ? team : max;
    }, teams.value[0]);

    return teamMaxPoints.id
  })

  return { searchText, filteredAndSorted, leaderId }
}
