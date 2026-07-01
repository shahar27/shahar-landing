import { IllustrationComposer } from "@/components/illustrations/IllustrationComposer";
import { PrimaryButton } from "../PrimaryButton";
import { ExperienceBody } from "../typography/ExperienceBody";
import { ExperienceEyebrow } from "../typography/ExperienceEyebrow";
import { ExperienceTitle } from "../typography/ExperienceTitle";

type ExtraIntroSceneProps = {
  onContinue: () => void;
};

export function ExtraIntroScene({ onContinue }: ExtraIntroSceneProps) {
  return (
    <>
      <IllustrationComposer screen="duration" alt="עוד זמן ביחד" />

      <ExperienceEyebrow>נשאר עוד רגע</ExperienceEyebrow>

      <ExperienceTitle>סיימתם לפני הזמן</ExperienceTitle>

      <ExperienceBody>
        נשאר לכם עוד קצת זמן ביחד. נגריל עוד קלפים באופן חופשי עד שהזמן שבחרתם יסתיים.
      </ExperienceBody>

      <PrimaryButton onClick={onContinue}>
        ממשיכים לעוד קלף
      </PrimaryButton>
    </>
  );
}