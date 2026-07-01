import type {
  GameDuration,
  TogetherCard,
} from "@/types/games/family-time";

const MIN_REMAINING_SECONDS_TO_ADD_EXTRA_CARD = 30;

export function hasEnoughTimeForExtraCard(params: {
  startedAt: string | null;
  duration: GameDuration | null;
}) {
  const { startedAt, duration } = params;

  if (!startedAt || !duration) return false;

  const targetSeconds = duration * 60;
  const elapsedSeconds = getElapsedSeconds(startedAt);
  const remainingSeconds = targetSeconds - elapsedSeconds;

  return remainingSeconds >= MIN_REMAINING_SECONDS_TO_ADD_EXTRA_CARD;
}

export function findExtraCardBeforeEnding(params: {
  allCards: TogetherCard[];
  currentSequence: TogetherCard[];
}) {
  const { allCards, currentSequence } = params;

  const usedCardIds = new Set(currentSequence.map((card) => card.id));

  const availableCards = allCards.filter((card) => {
    if (card.category === "see") return false;
    return !usedCardIds.has(card.id);
  });

  if (availableCards.length === 0) return null;

  return shuffleCards(availableCards)[0];
}

function getElapsedSeconds(startedAt: string) {
  const startedAtMs = new Date(startedAt).getTime();

  if (Number.isNaN(startedAtMs)) return 0;

  return Math.floor((Date.now() - startedAtMs) / 1000);
}

function shuffleCards<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}