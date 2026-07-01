import type { CardCategory, TogetherCategory } from "@/types/games/family-time";

const guessRuleText =
  "בני המשפחה מנחשים מה תהיה התשובה. רק אחר כך מי שבחר בקלף עונה. אם לפחות אחד ניחש נכון, המשפחה מרוויחה כוכב נוסף.";

export const familyTimeCategories: Record<CardCategory, TogetherCategory> = {
  release: {
    id: "release",
    label: "להשתחרר",
    order: 1,
    colorClass: "bg-[#F3DF8F]",
    illustrationFolder: "release",
    introText:
      "לפני שנכיר אחד את השני קצת יותר, נתחיל ברגע קטן של תנועה, צחוק ושחרור.",
    hasGuessRule: false,
  },
  curious: {
    id: "curious",
    label: "להסתקרן",
    order: 2,
    colorClass: "bg-[#BFDDEA]",
    illustrationFolder: "curious",
    introText:
      "עכשיו כשהאווירה קצת השתחררה, נפתח מקום לסקרנות ולגילוי קטן אחד על השני.",
    hasGuessRule: true,
    guessRuleText,
  },
  discover: {
    id: "discover",
    label: "לגלות",
    order: 3,
    colorClass: "bg-[#BFD7C5]",
    illustrationFolder: "discover",
    introText:
      "עכשיו ננסה לגלות משהו אמיתי על האדם שיושב מולנו. לא דרך פנטזיה, אלא דרך החיים עצמם.",
    hasGuessRule: true,
    guessRuleText,
  },
  see: {
    id: "see",
    label: "לראות",
    order: 4,
    colorClass: "bg-[#E8C3C3]",
    illustrationFolder: "see",
    introText:
      "זה רגע יפה להסביר לילדים שלראות באמת זה לא רק להסתכל. זה לשים לב למה שמישהו מרגיש, למה שהוא צריך, למה שהוא מתאמץ לעשות ולמי שהוא מבפנים. נסיים ברגע קטן של מבט, תודה וחיבור.",
    hasGuessRule: true,
    guessRuleText,
  },
};