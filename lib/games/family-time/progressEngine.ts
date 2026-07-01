import type { CardCategory } from "@/types/games/family-time";

export function getCardProgressLabel(
  currentCardIndex: number,
  totalCards: number
) {
  return `קלף ${currentCardIndex + 1} מתוך ${totalCards}`;
}

export function getCategoryProgressLabel(
  category: CardCategory,
  categoryOrder: CardCategory[]
) {
  const categoryIndex = categoryOrder.indexOf(category);

  if (categoryIndex === -1) {
    return "";
  }

  return `פרק ${categoryIndex + 1} מתוך ${categoryOrder.length}`;
}