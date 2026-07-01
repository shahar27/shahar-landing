import type { TogetherCard } from "@/types/games/family-time";

export function selectBalancedCards(
  cards: TogetherCard[],
  amount: number
): TogetherCard[] {
  const selectedCards: TogetherCard[] = [];
  const availableCards = shuffleCards(cards);

  while (selectedCards.length < amount && availableCards.length > 0) {
    const nextCard = pickBestNextCard(availableCards, selectedCards);

    selectedCards.push(nextCard);

    const selectedIndex = availableCards.findIndex(
      (card) => card.id === nextCard.id
    );

    if (selectedIndex !== -1) {
      availableCards.splice(selectedIndex, 1);
    }
  }

  return selectedCards;
}

function pickBestNextCard(
  availableCards: TogetherCard[],
  selectedCards: TogetherCard[]
): TogetherCard {
  if (selectedCards.length === 0) {
    return availableCards[0];
  }

  const lastCard = selectedCards[selectedCards.length - 1];

  const bestMatch = availableCards.find(
    (card) =>
      card.theme !== lastCard.theme &&
      card.subcategory !== lastCard.subcategory
  );

  if (bestMatch) {
    return bestMatch;
  }

  const differentTheme = availableCards.find(
    (card) => card.theme !== lastCard.theme
  );

  if (differentTheme) {
    return differentTheme;
  }

  return availableCards[0];
}

export function shuffleCards<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5);
}