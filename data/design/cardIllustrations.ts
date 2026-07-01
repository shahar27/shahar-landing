import type { IllustrationFolder } from "./screenIllustrations";
import type { CardCategory } from "@/types/games/family-time";

export type CardIllustrationElement = {
  folder: IllustrationFolder;
  name: string;
  className: string;
  alt?: string;
};

export type CardIllustrationConfig = {
  background: string;
  elements: CardIllustrationElement[];
};

const categoryBackgrounds: Record<CardCategory, string> = {
  release: "cream-paper",
  curious: "dusty-blue-paper",
  discover: "sage-paper",
  see: "cream-paper",
};

const categoryBaseElements: Record<CardCategory, CardIllustrationElement[]> = {
  release: [
    {
      folder: "nature",
      name: "sun",
      className:
        "absolute right-7 top-5 h-20 w-20 object-contain opacity-65",
    },
    {
      folder: "decorations",
      name: "leaf-small",
      className:
        "absolute left-7 bottom-3 h-16 w-16 object-contain opacity-65",
    },
  ],
  curious: [
    {
      folder: "decorations",
      name: "little-stars",
      className:
        "absolute right-7 top-5 h-20 w-20 object-contain opacity-70",
    },
    {
      folder: "decorations",
      name: "rainbow",
      className:
        "absolute left-7 bottom-3 h-20 w-20 object-contain opacity-65",
    },
  ],
  discover: [
    {
      folder: "decorations",
      name: "olive-branch-small",
      className:
        "absolute right-7 top-5 h-20 w-20 object-contain opacity-70",
    },
    {
      folder: "decorations",
      name: "wild-flowers",
      className:
        "absolute left-7 bottom-3 h-20 w-20 object-contain opacity-65",
    },
  ],
  see: [
    {
      folder: "decorations",
      name: "little-hearts",
      className:
        "absolute right-7 top-5 h-20 w-20 object-contain opacity-70",
    },
    {
      folder: "decorations",
      name: "olive-branch",
      className:
        "absolute left-5 bottom-1 h-24 w-24 object-contain opacity-60",
    },
  ],
};

export const cardIllustrations: Record<string, CardIllustrationElement[]> = {
  "human-maze": [
    {
      folder: "objects",
      name: "bridge",
      className:
        "absolute -bottom-4 left-1/2 h-48 w-48 -translate-x-1/2 object-contain",
    },
    {
      folder: "icons",
      name: "movement",
      className:
        "absolute left-8 top-6 h-16 w-16 object-contain opacity-80",
    },
  ],
  "pillow-mission": [
    {
      folder: "objects",
      name: "pillow",
      className:
        "absolute -bottom-3 left-1/2 h-48 w-48 -translate-x-1/2 object-contain",
    },
  ],
  "invisible-ball": [
    {
      folder: "objects",
      name: "balloon",
      className:
        "absolute -bottom-2 left-1/2 h-44 w-44 -translate-x-1/2 object-contain",
    },
    {
      folder: "icons",
      name: "magic",
      className:
        "absolute right-8 top-6 h-16 w-16 object-contain opacity-80",
    },
  ],
  "wind-storm": [
    {
      folder: "nature",
      name: "cloud",
      className:
        "absolute -bottom-1 left-1/2 h-48 w-48 -translate-x-1/2 object-contain",
    },
    {
      folder: "decorations",
      name: "leaf",
      className:
        "absolute right-8 top-4 h-20 w-20 object-contain opacity-70",
    },
  ],
  "new-walk": [
    {
      folder: "nature",
      name: "grass",
      className:
        "absolute -bottom-4 left-1/2 h-48 w-48 -translate-x-1/2 object-contain",
    },
    {
      folder: "icons",
      name: "movement",
      className:
        "absolute right-8 top-6 h-16 w-16 object-contain opacity-80",
    },
  ],
  "contagious-face": [
    {
      folder: "characters",
      name: "family-laugh",
      className:
        "absolute -bottom-8 left-1/2 h-60 w-60 -translate-x-1/2 object-contain",
    },
  ],
  "family-machine": [
    {
      folder: "characters",
      name: "family-play",
      className:
        "absolute -bottom-8 left-1/2 h-60 w-60 -translate-x-1/2 object-contain",
    },
    {
      folder: "icons",
      name: "movement",
      className:
        "absolute right-8 top-6 h-16 w-16 object-contain opacity-80",
    },
  ],
  "move-and-move": [
    {
      folder: "characters",
      name: "children-circle",
      className:
        "absolute -bottom-8 left-1/2 h-60 w-60 -translate-x-1/2 object-contain",
    },
  ],
  "shrinking-island": [
    {
      folder: "objects",
      name: "island",
      className:
        "absolute -bottom-4 left-1/2 h-52 w-52 -translate-x-1/2 object-contain",
    },
  ],
  "family-jump": [
    {
      folder: "characters",
      name: "children-jump",
      className:
        "absolute -bottom-8 left-1/2 h-64 w-64 -translate-x-1/2 object-contain",
    },
  ],
  "aliens": [
    {
      folder: "icons",
      name: "magic",
      className:
        "absolute bottom-2 left-1/2 h-40 w-40 -translate-x-1/2 object-contain",
    },
    {
      folder: "decorations",
      name: "little-stars",
      className:
        "absolute right-8 top-5 h-24 w-24 object-contain opacity-75",
    },
  ],
  "mirror": [
    {
      folder: "characters",
      name: "parent-child",
      className:
        "absolute -bottom-8 left-1/2 h-60 w-60 -translate-x-1/2 object-contain",
    },
  ],
  "no-words": [
    {
      folder: "nature",
      name: "bird",
      className:
        "absolute bottom-2 left-1/2 h-40 w-40 -translate-x-1/2 object-contain",
    },
    {
      folder: "nature",
      name: "butterfly",
      className:
        "absolute right-8 top-6 h-16 w-16 object-contain opacity-80",
    },
  ],
  "family-statue": [
    {
      folder: "nature",
      name: "tree",
      className:
        "absolute -bottom-5 left-1/2 h-56 w-56 -translate-x-1/2 object-contain",
    },
    {
      folder: "icons",
      name: "magic",
      className:
        "absolute right-8 top-5 h-16 w-16 object-contain opacity-75",
    },
  ],
  "balloons-in-air": [
    {
      folder: "objects",
      name: "balloon",
      className:
        "absolute -bottom-2 left-1/2 h-48 w-48 -translate-x-1/2 object-contain",
    },
  ],

  "secret-castle": [
    {
      folder: "objects",
      name: "castle",
      className:
        "absolute -bottom-5 left-1/2 h-56 w-56 -translate-x-1/2 object-contain",
    },
  ],
  "bag-that-tells": [
    {
      folder: "objects",
      name: "backpack",
      className:
        "absolute -bottom-3 left-1/2 h-48 w-48 -translate-x-1/2 object-contain",
    },
  ],
  "heart-weather": [
    {
      folder: "icons",
      name: "heart",
      className:
        "absolute bottom-3 left-1/2 h-36 w-36 -translate-x-1/2 object-contain",
    },
    {
      folder: "nature",
      name: "cloud-small",
      className:
        "absolute right-8 top-6 h-20 w-20 object-contain opacity-75",
    },
  ],
  "new-invention": [
    {
      folder: "icons",
      name: "sparkle",
      className:
        "absolute bottom-3 left-1/2 h-36 w-36 -translate-x-1/2 object-contain",
    },
    {
      folder: "icons",
      name: "magic",
      className:
        "absolute right-8 top-6 h-18 w-18 object-contain opacity-75",
    },
  ],
  "personal-guardian": [
    {
      folder: "icons",
      name: "heart",
      className:
        "absolute bottom-2 left-1/2 h-40 w-40 -translate-x-1/2 object-contain",
    },
  ],
  "perfect-day": [
    {
      folder: "nature",
      name: "sun",
      className:
        "absolute bottom-2 left-1/2 h-40 w-40 -translate-x-1/2 object-contain",
    },
  ],
  "super-animal": [
    {
      folder: "nature",
      name: "butterfly",
      className:
        "absolute bottom-2 left-1/2 h-40 w-40 -translate-x-1/2 object-contain",
    },
  ],
  "private-island": [
    {
      folder: "objects",
      name: "island",
      className:
        "absolute -bottom-4 left-1/2 h-52 w-52 -translate-x-1/2 object-contain",
    },
  ],
  "new-skill": [
    {
      folder: "icons",
      name: "discover",
      className:
        "absolute bottom-2 left-1/2 h-40 w-40 -translate-x-1/2 object-contain",
    },
  ],
  "treasure-box": [
    {
      folder: "objects",
      name: "treasure-box",
      className:
        "absolute -bottom-2 left-1/2 h-48 w-48 -translate-x-1/2 object-contain",
    },
  ],
  "future-window": [
    {
      folder: "objects",
      name: "clock",
      className:
        "absolute -bottom-2 left-1/2 h-44 w-44 -translate-x-1/2 object-contain",
    },
  ],
  "new-land": [
    {
      folder: "objects",
      name: "map",
      className:
        "absolute -bottom-2 left-1/2 h-48 w-48 -translate-x-1/2 object-contain",
    },
  ],
  "adventure-friend": [
    {
      folder: "objects",
      name: "bridge",
      className:
        "absolute -bottom-3 left-1/2 h-48 w-48 -translate-x-1/2 object-contain",
    },
    {
      folder: "icons",
      name: "family",
      className:
        "absolute right-8 top-6 h-16 w-16 object-contain opacity-75",
    },
  ],
  "time-machine": [
    {
      folder: "objects",
      name: "clock",
      className:
        "absolute -bottom-2 left-1/2 h-44 w-44 -translate-x-1/2 object-contain",
    },
  ],
  "magical-day": [
    {
      folder: "icons",
      name: "magic",
      className:
        "absolute bottom-2 left-1/2 h-40 w-40 -translate-x-1/2 object-contain",
    },
  ],

  "most-me": [
    {
      folder: "icons",
      name: "heart",
      className:
        "absolute bottom-2 left-1/2 h-40 w-40 -translate-x-1/2 object-contain",
    },
  ],
  "proud-moment": [
    {
      folder: "icons",
      name: "star-fill",
      className:
        "absolute bottom-4 left-1/2 h-36 w-36 -translate-x-1/2 object-contain",
    },
  ],
  "heart-chooses": [
    {
      folder: "icons",
      name: "heart",
      className:
        "absolute bottom-2 left-1/2 h-40 w-40 -translate-x-1/2 object-contain",
    },
  ],
  "safe-place": [
    {
      folder: "nature",
      name: "tree",
      className:
        "absolute -bottom-5 left-1/2 h-56 w-56 -translate-x-1/2 object-contain",
    },
  ],
  "small-success": [
    {
      folder: "decorations",
      name: "leaf",
      className:
        "absolute bottom-0 left-1/2 h-44 w-44 -translate-x-1/2 object-contain",
    },
  ],
  "small-magic": [
    {
      folder: "icons",
      name: "sparkle",
      className:
        "absolute bottom-3 left-1/2 h-36 w-36 -translate-x-1/2 object-contain",
    },
  ],
  "three-words": [
    {
      folder: "icons",
      name: "family",
      className:
        "absolute bottom-3 left-1/2 h-36 w-36 -translate-x-1/2 object-contain",
    },
  ],
  "surprise": [
    {
      folder: "objects",
      name: "gift",
      className:
        "absolute -bottom-2 left-1/2 h-44 w-44 -translate-x-1/2 object-contain",
    },
  ],
  "wish-they-knew": [
    {
      folder: "decorations",
      name: "little-hearts",
      className:
        "absolute bottom-2 left-1/2 h-40 w-40 -translate-x-1/2 object-contain",
    },
  ],
  "sweet-memory": [
    {
      folder: "characters",
      name: "family-hug",
      className:
        "absolute -bottom-8 left-1/2 h-56 w-56 -translate-x-1/2 object-contain",
    },
  ],
  "hidden-talent": [
    {
      folder: "icons",
      name: "sparkle",
      className:
        "absolute bottom-3 left-1/2 h-36 w-36 -translate-x-1/2 object-contain",
    },
  ],
  "i-would-like": [
    {
      folder: "objects",
      name: "bridge",
      className:
        "absolute -bottom-3 left-1/2 h-48 w-48 -translate-x-1/2 object-contain",
    },
  ],
  "brave-moment": [
    {
      folder: "icons",
      name: "movement",
      className:
        "absolute bottom-3 left-1/2 h-36 w-36 -translate-x-1/2 object-contain",
    },
  ],
  "heart-knows": [
    {
      folder: "icons",
      name: "guess",
      className:
        "absolute bottom-3 left-1/2 h-36 w-36 -translate-x-1/2 object-contain",
    },
  ],
  "my-gift": [
    {
      folder: "objects",
      name: "gift",
      className:
        "absolute -bottom-2 left-1/2 h-44 w-44 -translate-x-1/2 object-contain",
    },
  ],

  "moment-for-you": [
    {
      folder: "icons",
      name: "heart",
      className:
        "absolute bottom-2 left-1/2 h-40 w-40 -translate-x-1/2 object-contain",
    },
  ],
  "i-notice": [
    {
      folder: "icons",
      name: "guess",
      className:
        "absolute bottom-3 left-1/2 h-36 w-36 -translate-x-1/2 object-contain",
    },
  ],
  "because-of-you": [
    {
      folder: "characters",
      name: "parent-child",
      className:
        "absolute -bottom-8 left-1/2 h-56 w-56 -translate-x-1/2 object-contain",
    },
  ],
  "fun-with-you": [
    {
      folder: "characters",
      name: "family-play",
      className:
        "absolute -bottom-8 left-1/2 h-60 w-60 -translate-x-1/2 object-contain",
    },
  ],
  "small-smile": [
    {
      folder: "characters",
      name: "family-laugh",
      className:
        "absolute -bottom-8 left-1/2 h-60 w-60 -translate-x-1/2 object-contain",
    },
  ],
  "see-you": [
    {
      folder: "icons",
      name: "heart",
      className:
        "absolute bottom-2 left-1/2 h-40 w-40 -translate-x-1/2 object-contain",
    },
  ],
  "never-forget": [
    {
      folder: "nature",
      name: "moon",
      className:
        "absolute bottom-2 left-1/2 h-40 w-40 -translate-x-1/2 object-contain",
    },
  ],
  "small-thanks": [
    {
      folder: "objects",
      name: "gift",
      className:
        "absolute -bottom-2 left-1/2 h-44 w-44 -translate-x-1/2 object-contain",
    },
  ],
  "if-you-only-knew": [
    {
      folder: "icons",
      name: "heart",
      className:
        "absolute bottom-2 left-1/2 h-40 w-40 -translate-x-1/2 object-contain",
    },
  ],
  "again": [
    {
      folder: "characters",
      name: "family-play",
      className:
        "absolute -bottom-8 left-1/2 h-60 w-60 -translate-x-1/2 object-contain",
    },
  ],
  "i-appreciate": [
    {
      folder: "decorations",
      name: "little-hearts",
      className:
        "absolute bottom-2 left-1/2 h-40 w-40 -translate-x-1/2 object-contain",
    },
  ],
  "i-saw-you": [
    {
      folder: "characters",
      name: "parent-child",
      className:
        "absolute -bottom-8 left-1/2 h-56 w-56 -translate-x-1/2 object-contain",
    },
  ],
  "proud-of-you": [
    {
      folder: "icons",
      name: "star-fill",
      className:
        "absolute bottom-4 left-1/2 h-36 w-36 -translate-x-1/2 object-contain",
    },
  ],
  "wish-we-would": [
    {
      folder: "characters",
      name: "family-talk",
      className:
        "absolute -bottom-8 left-1/2 h-56 w-56 -translate-x-1/2 object-contain",
    },
  ],
  "one-star": [
    {
      folder: "icons",
      name: "star-outline",
      className:
        "absolute bottom-4 left-1/2 h-36 w-36 -translate-x-1/2 object-contain",
    },
  ],
};

export function getCardIllustrationConfig(params: {
  category: CardCategory;
  illustrationId: string;
}): CardIllustrationConfig {
  const { category, illustrationId } = params;

  return {
    background: categoryBackgrounds[category],
    elements: [
      ...categoryBaseElements[category],
      ...(cardIllustrations[illustrationId] ?? []),
    ],
  };
}