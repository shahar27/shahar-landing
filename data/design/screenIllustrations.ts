export type IllustrationScreen =
  | "welcome"
  | "howToPlay"
  | "starsIntro"
  | "duration"
  | "starEarned"
  | "finished"
  | "releaseIntro"
  | "curiousIntro"
  | "discoverIntro"
  | "seeIntro";

export type IllustrationFolder =
  | "backgrounds"
  | "decorations"
  | "nature"
  | "icons"
  | "characters"
  | "objects";

export type IllustrationElement = {
  folder: IllustrationFolder;
  name: string;
  className: string;
  alt?: string;
};

export type ScreenIllustrationConfig = {
  background: string;
  elements: IllustrationElement[];
};

export const screenIllustrations: Record<
  IllustrationScreen,
  ScreenIllustrationConfig
> = {
  welcome: {
    background: "soft-linen",
    elements: [
      {
        folder: "characters",
        name: "family-play",
        className:
          "absolute -bottom-8 left-1/2 h-60 w-60 -translate-x-1/2 object-contain",
      },
      {
        folder: "decorations",
        name: "olive-branch",
        className:
          "absolute right-5 top-3 h-24 w-24 object-contain opacity-80",
      },
      {
        folder: "decorations",
        name: "wild-flowers",
        className:
          "absolute left-5 bottom-1 h-24 w-24 object-contain opacity-75",
      },
      {
        folder: "decorations",
        name: "little-stars",
        className:
          "absolute left-10 top-4 h-16 w-16 object-contain opacity-65",
      },
    ],
  },

  howToPlay: {
    background: "cream-paper",
    elements: [
      {
        folder: "characters",
        name: "family-reading",
        className:
          "absolute -bottom-8 left-1/2 h-60 w-60 -translate-x-1/2 object-contain",
      },
      {
        folder: "objects",
        name: "magnifying-glass",
        className:
          "absolute right-9 bottom-2 h-20 w-20 object-contain opacity-90",
      },
      {
        folder: "decorations",
        name: "leaf",
        className:
          "absolute left-7 top-4 h-20 w-20 object-contain opacity-70",
      },
      {
        folder: "decorations",
        name: "linen-fragment",
        className:
          "absolute right-5 top-4 h-20 w-20 object-contain opacity-45",
      },
    ],
  },

  starsIntro: {
    background: "sky-paper",
    elements: [
      {
        folder: "objects",
        name: "jar-stars",
        className:
          "absolute -bottom-2 left-1/2 h-44 w-44 -translate-x-1/2 object-contain",
      },
      {
        folder: "characters",
        name: "children-circle",
        className:
          "absolute -bottom-6 left-6 h-40 w-40 object-contain opacity-95",
      },
      {
        folder: "decorations",
        name: "little-stars",
        className:
          "absolute right-7 top-4 h-24 w-24 object-contain opacity-80",
      },
      {
        folder: "decorations",
        name: "olive-branch-small",
        className:
          "absolute left-6 top-5 h-20 w-20 object-contain opacity-75",
      },
    ],
  },

  duration: {
    background: "cream-paper",
    elements: [
      {
        folder: "objects",
        name: "clock",
        className:
          "absolute -bottom-2 left-1/2 h-44 w-44 -translate-x-1/2 object-contain",
      },
      {
        folder: "nature",
        name: "sun",
        className:
          "absolute right-8 top-5 h-20 w-20 object-contain opacity-80",
      },
      {
        folder: "decorations",
        name: "leaf-small",
        className:
          "absolute left-8 bottom-3 h-16 w-16 object-contain opacity-75",
      },
      {
        folder: "decorations",
        name: "paint-spot-cream",
        className:
          "absolute left-16 top-6 h-20 w-20 object-contain opacity-40",
      },
    ],
  },

  starEarned: {
    background: "sky-paper",
    elements: [
      {
        folder: "icons",
        name: "star-fill",
        className:
          "absolute top-5 left-1/2 h-24 w-24 -translate-x-1/2 object-contain",
      },
      {
        folder: "objects",
        name: "jar-stars",
        className:
          "absolute -bottom-3 left-1/2 h-40 w-40 -translate-x-1/2 object-contain",
      },
      {
        folder: "decorations",
        name: "little-stars",
        className:
          "absolute right-6 top-4 h-24 w-24 object-contain opacity-80",
      },
      {
        folder: "decorations",
        name: "little-hearts",
        className:
          "absolute left-7 bottom-3 h-20 w-20 object-contain opacity-65",
      },
    ],
  },

  finished: {
    background: "finished-sky",
    elements: [
      {
        folder: "characters",
        name: "family-hug",
        className:
          "absolute -bottom-7 left-1/2 h-56 w-56 -translate-x-1/2 object-contain",
      },
      {
        folder: "decorations",
        name: "olive-branch",
        className:
          "absolute right-5 bottom-1 h-22 w-22 object-contain opacity-65",
      },
      {
        folder: "decorations",
        name: "wild-flowers",
        className:
          "absolute left-5 bottom-1 h-22 w-22 object-contain opacity-65",
      },
    ],
  },

  releaseIntro: {
    background: "cream-paper",
    elements: [
      {
        folder: "characters",
        name: "children-jump",
        className:
          "absolute -bottom-8 left-1/2 h-64 w-64 -translate-x-1/2 object-contain",
      },
      {
        folder: "objects",
        name: "balloon",
        className:
          "absolute left-8 top-5 h-20 w-20 object-contain opacity-85",
      },
      {
        folder: "nature",
        name: "sun",
        className:
          "absolute right-8 top-5 h-20 w-20 object-contain opacity-75",
      },
    ],
  },

  curiousIntro: {
    background: "dusty-blue-paper",
    elements: [
      {
        folder: "characters",
        name: "child-explains-family-listens",
        className:
          "absolute -bottom-8 left-1/2 h-60 w-60 -translate-x-1/2 object-contain",
      },
      {
        folder: "decorations",
        name: "little-stars",
        className:
          "absolute right-8 top-5 h-20 w-20 object-contain opacity-75",
      },
      {
        folder: "decorations",
        name: "rainbow",
        className:
          "absolute left-7 bottom-3 h-20 w-20 object-contain opacity-80",
      },
    ],
  },

  discoverIntro: {
    background: "sage-paper",
    elements: [
      {
        folder: "characters",
        name: "parent-child",
        className:
          "absolute -bottom-8 left-1/2 h-60 w-60 -translate-x-1/2 object-contain",
      },
      {
        folder: "decorations",
        name: "olive-branch-small",
        className:
          "absolute right-7 top-5 h-20 w-20 object-contain opacity-75",
      },
      {
        folder: "decorations",
        name: "wild-flowers",
        className:
          "absolute left-7 bottom-3 h-20 w-20 object-contain opacity-75",
      },
    ],
  },

  seeIntro: {
    background: "cream-paper",
    elements: [
      {
        folder: "characters",
        name: "family-hug",
        className:
          "absolute -bottom-8 left-1/2 h-60 w-60 -translate-x-1/2 object-contain",
      },
      {
        folder: "decorations",
        name: "little-hearts",
        className:
          "absolute right-8 top-5 h-20 w-20 object-contain opacity-75",
      },
      {
        folder: "decorations",
        name: "olive-branch",
        className:
          "absolute left-5 bottom-1 h-22 w-22 object-contain opacity-65",
      },
    ],
  },
};