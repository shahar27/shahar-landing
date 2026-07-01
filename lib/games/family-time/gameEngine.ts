import { familyTimeGamePlans } from "@/data/games/family-time";
import { selectBalancedCards } from "@/lib/games/family-time/randomEngine";
import type {
  GameDuration,
  TogetherCard,
} from "@/types/games/family-time";

export function buildGameSequence(
  allCards: TogetherCard[],
  duration: GameDuration
): TogetherCard[] {
  const plan = familyTimeGamePlans[duration];

  return plan.order.flatMap((category) => {
    const cardsInCategory = allCards.filter(
      (card) => card.category === category
    );

    const amount = plan.cardsPerCategory[category];

    return selectBalancedCards(cardsInCategory, amount);
  });
}