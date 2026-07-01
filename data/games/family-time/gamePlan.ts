import type { GameDuration, GamePlan } from "@/types/games/family-time";

export const familyTimeGamePlans: Record<GameDuration, GamePlan> = {
  10: {
    order: ["release", "curious", "discover", "see"],
    cardsPerCategory: {
      release: 2,
      curious: 2,
      discover: 1,
      see: 1,
    },
  },
  20: {
    order: ["release", "curious", "discover", "see"],
    cardsPerCategory: {
      release: 3,
      curious: 3,
      discover: 2,
      see: 1,
    },
  },
  30: {
    order: ["release", "curious", "discover", "see"],
    cardsPerCategory: {
      release: 4,
      curious: 4,
      discover: 3,
      see: 1,
    },
  },
};