import { IllustrationComposer } from "@/components/illustrations/IllustrationComposer";
import { PrimaryButton } from "../PrimaryButton";
import { ExperienceBody } from "../typography/ExperienceBody";
import { ExperienceEyebrow } from "../typography/ExperienceEyebrow";
import { ExperienceTitle } from "../typography/ExperienceTitle";

type StarSceneProps = {
  stars: number;
  starsAdded: number;
  onContinue: () => void;
};

function getTitle(starsAdded: number) {
  return starsAdded > 1 ? "שני כוכבים נוספו" : "כוכב נוסף";
}

function createStars(count: number) {
  return Array.from({ length: count }, (_, index) => index + 1);
}

export function StarScene({ stars, starsAdded, onContinue }: StarSceneProps) {
  const earnedStars = createStars(starsAdded);

  return (
    <>
      <IllustrationComposer screen="starEarned" alt="כוכב נוסף" />

      <ExperienceEyebrow>רגע של יחד</ExperienceEyebrow>

      <div className="mb-5 flex justify-center gap-2">
        {earnedStars.map((star) => (
          <span
            key={star}
            className="text-5xl leading-none text-[#A78C64]"
            aria-label="כוכב"
          >
            ☆
          </span>
        ))}
      </div>

      <ExperienceTitle>{getTitle(starsAdded)}</ExperienceTitle>

      <ExperienceBody>
        כבר אספתם {stars} {stars === 1 ? "כוכב" : "כוכבים"} של זמן ביחד.
      </ExperienceBody>

      <PrimaryButton onClick={onContinue}>המשך</PrimaryButton>
    </>
  );
}