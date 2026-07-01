import { IllustrationComposer } from "@/components/illustrations/IllustrationComposer";
import { ExperienceLogo } from "../ExperienceLogo";
import { PrimaryButton } from "../PrimaryButton";
import { ExperienceEyebrow } from "../typography/ExperienceEyebrow";
import { ExperienceTitle } from "../typography/ExperienceTitle";

type WelcomeSceneProps = {
  onStart: () => void;
};

export function WelcomeScene({ onStart }: WelcomeSceneProps) {
  return (
    <>
      <ExperienceLogo />

      <IllustrationComposer screen="welcome" alt="משפחה בזמן משחק" />

      <ExperienceEyebrow>להיות יחד</ExperienceEyebrow>

      <ExperienceTitle>ברוכים הבאים לזמן ביחד</ExperienceTitle>

      <div className="mx-auto mb-8 max-w-xl rounded-[1.8rem] border border-[#DCCDB8]/80 bg-white/45 px-6 py-6 text-lg leading-8 text-[#6F6252] shadow-sm">
        <p className="mb-3">
          משחק משפחתי שמזמין אתכם להאט, לזוז, לצחוק, להסתקרן ולראות אחד את השני קצת אחרת.
        </p>

        <p>מומלץ לשחק בלי טלפונים, למעט המסך איתו אתם משחקים.</p>
      </div>

      <PrimaryButton onClick={onStart}>מתחילים</PrimaryButton>
    </>
  );
}