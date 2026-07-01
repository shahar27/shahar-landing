import { IllustrationComposer } from "@/components/illustrations/IllustrationComposer";
import { PrimaryButton } from "../PrimaryButton";
import { ExperienceEyebrow } from "../typography/ExperienceEyebrow";
import { ExperienceTitle } from "../typography/ExperienceTitle";

type HowToPlaySceneProps = {
  onContinue: () => void;
};

const steps = [
  {
    title: "קוראים קלף",
    text: "על כל קלף כתובה משימה או שאלה. קראו והבינו אותו יחד.",
  },
  {
    title: "עושים יחד",
    text: "לפעמים זזים, לפעמים מנחשים, לפעמים משתפים. לא צריך להצליח, רק להשתתף.",
  },
  {
    title: "אוספים כוכב",
    text: "כל קלף שהשלמתם מוסיף כוכב אחד לשמיים שלכם.",
  },
];

export function HowToPlayScene({ onContinue }: HowToPlaySceneProps) {
  return (
    <>
      <IllustrationComposer screen="howToPlay" alt="הסבר משחק" />

      <ExperienceEyebrow>איך משחקים?</ExperienceEyebrow>

      <ExperienceTitle>פשוט להיות יחד</ExperienceTitle>

      <div className="mx-auto mb-8 grid max-w-xl gap-3">
        {steps.map((step) => (
          <div
            key={step.title}
            className="rounded-[1.6rem] border border-[#DCCDB8]/80 bg-white/45 px-5 py-4 text-right shadow-sm"
          >
            <h3 className="mb-2 text-lg font-light text-[#3F3428]">
              {step.title}
            </h3>

            <p className="text-base leading-7 text-[#6F6252]">{step.text}</p>
          </div>
        ))}
      </div>

      <PrimaryButton onClick={onContinue}>הבנתי, ממשיכים</PrimaryButton>
    </>
  );
}