export const Rank = Object.freeze({
  NOTHING: {
    key: "NOTHING",
    matchCount: 0,
    prize: 0,
    description: "",
  },
  FIFTH: {
    key: "FIFTH",
    matchCount: 3,
    prize: 5_000,
    description: "3개 일치 (5,000원)",
  },
  FOURTH: {
    key: "FOURTH",
    matchCount: 4,
    prize: 50_000,
    description: "4개 일치 (50,000원)",
  },
  THIRD: {
    key: "THIRD",
    matchCount: 5,
    prize: 1_500_000,
    description: "5개 일치 (1,500,000원)",
  },
  SECOND: {
    key: "SECOND",
    matchCount: 5,
    prize: 30_000_000,
    description: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  },
  FIRST: {
    key: "FIRST",
    matchCount: 6,
    prize: 2_000_000_000,
    description: "6개 일치 (2,000,000,000원)",
  },
});

export const RANK_ORDER = [
  Rank.FIFTH,
  Rank.FOURTH,
  Rank.THIRD,
  Rank.SECOND,
  Rank.FIRST,
];

export function calculateRank(matchCount, hasBonus) {
  if (matchCount === Rank.SECOND.matchCount && hasBonus) {
    return Rank.SECOND;
  }

  const found = Object.values(Rank).find(
    (rank) =>
      rank.matchCount === matchCount &&
      rank.key !== Rank.SECOND.key &&
      rank.key !== Rank.NOTHING.key
  );

  return found ?? Rank.NOTHING;
}
