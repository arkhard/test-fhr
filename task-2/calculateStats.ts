interface Stats {
  min: number;
  max: number;
  average: number;
}

function calculateStats<T>(
  items: T[],
  extractor: (item: T) => number
): Stats | null {
  if (items.length === 0) return null;

  try {
    const numbers = items.map(extractor);

    return {
      min: Math.min(...numbers),
      max: Math.max(...numbers),
      average: (Number((numbers.reduce((sum, n) => sum + n, 0) / numbers.length).toFixed(2))),
    };
  } catch (e) {
    return null
  }
}

interface Player {
  name: string;
  goals: number;
}

const players: Player[] = [
  { name: "Ivanov", goals: 10 },
  { name: "Petrov", goals: 15 },
];

const statsPlayers = calculateStats(players, (player) => player.goals);
console.log(statsPlayers);

interface Team {
  id: number
  name: string
  city: string
  points: number
}

const teams: Team[] = [
  { id: 1, name: 'ЦСКА', city: 'Москва', points: 84 },
  { id: 2, name: 'Динамо', city: 'Москва', points: 81 },
  { id: 3, name: 'Локомотив', city: 'Ярославль', points: 98 },
  { id: 4, name: 'Динамо Мн', city: 'Минск', points: 88 },
  { id: 5, name: 'Северсталь', city: 'Череповец', points: 86 },
  { id: 6, name: 'Куньлунь', city: 'Пекин', points: 54 },
]

const statsTeams = calculateStats(teams, (team) => team.points);
console.log(statsTeams);
