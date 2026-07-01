export type CardCategory =
  | "release"
  | "curious"
  | "discover"
  | "see";

export type CardCompletion = "timer" | "manual";

export type CardTheme =
  | "movement"
  | "cooperation"
  | "imagination"
  | "inner"
  | "choice"
  | "future"
  | "relationship"
  | "emotion"
  | "humor"
  | "identity"
  | "confidence"
  | "belonging"
  | "safety"
  | "growth"
  | "memory"
  | "listening"
  | "courage"
  | "gratitude"
  | "appreciation"
  | "attention"
  | "connection";

export type TogetherCard = {
  id: string;
  category: CardCategory;
  subcategory: string;
  theme: CardTheme;
  title: string;
  text: string[];
  completion: CardCompletion;
  timerSeconds?: number;
  illustrationId: string;
  variants?: string[];
  minAge: number;
};

export type TogetherCategory = {
  id: CardCategory;
  label: string;
  order: number;
  colorClass: string;
  illustrationFolder: string;
  introText: string;
  hasGuessRule: boolean;
  guessRuleText?: string;
};

export type GameDuration = 10 | 20 | 30;

export type GamePlan = {
  order: CardCategory[];
  cardsPerCategory: Record<CardCategory, number>;
};

export type GameStep =
  | "welcome"
  | "howToPlay"
  | "starsIntro"
  | "duration"
  | "categoryIntro"
  | "card"
  | "star"
  | "extraIntro"
  | "finished";

export type GameSession = {
  step: GameStep;
  duration: GameDuration | null;
  startedAt: string | null;
  stars: number;
  sequence: TogetherCard[];
  currentCardIndex: number;
  extraRoundStarted: boolean;
};