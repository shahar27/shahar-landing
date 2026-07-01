import { IllustrationComposer } from "@/components/illustrations/IllustrationComposer";
import { PrimaryButton } from "../PrimaryButton";
import { ExperienceEyebrow } from "../typography/ExperienceEyebrow";
import { ExperienceTitle } from "../typography/ExperienceTitle";
import type { TogetherCategory } from "@/types/games/family-time";

type CategoryIntroSceneProps = {
  category: TogetherCategory;
  progressLabel: string;
  onContinue: () => void;
};

function getCategoryScreen(categoryId: TogetherCategory["id"]) {
  return `${categoryId}Intro` as const;
}

export function CategoryIntroScene({
  category,
  progressLabel,
  onContinue,
}: CategoryIntroSceneProps) {
  return (
    <>
      <IllustrationComposer
        screen={getCategoryScreen(category.id)}
        alt={category.label}
      />

      <ExperienceEyebrow>{progressLabel}</ExperienceEyebrow>

      <div className="mx-auto mb-5 inline-flex rounded-full border border-[#DCCDB8] bg-white/55 px-6 py-2 text-sm tracking-[0.22em] text-[#8A7A62]">
        הפרק הבא
      </div>

      <ExperienceTitle>{category.label}</ExperienceTitle>

      <div className="mx-auto mb-8 max-w-xl rounded-[1.8rem] border border-[#DCCDB8]/80 bg-white/45 px-6 py-6 text-lg leading-8 text-[#6F6252] shadow-sm">
        <p>{category.introText}</p>

        {category.hasGuessRule && category.guessRuleText && (
          <div className="mt-5 rounded-[1.4rem] border border-[#DCCDB8] bg-[#FFF9EF]/80 px-5 py-4 text-base leading-7">
            <p className="mb-2 text-sm tracking-[0.18em] text-[#8A7A62]">
              כלל קטן לפני שעונים
            </p>

            <p>{category.guessRuleText}</p>
          </div>
        )}
      </div>

      <PrimaryButton onClick={onContinue}>בואו נתחיל</PrimaryButton>
    </>
  );
}