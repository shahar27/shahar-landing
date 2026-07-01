import { IllustrationComposer } from "@/components/illustrations/IllustrationComposer";
import { ExperienceBody } from "../typography/ExperienceBody";
import { ExperienceEyebrow } from "../typography/ExperienceEyebrow";
import { ExperienceTitle } from "../typography/ExperienceTitle";

type Duration = 10 | 20 | 30;

type DurationSceneProps = {
  onSelect: (duration: Duration) => void;
};

const options: {
  minutes: Duration;
  title: string;
  description: string;
  note?: string;
}[] = [
  {
    minutes: 10,
    title: "רגע קטן",
    description: "משחק קצר ונעים",
  },
  {
    minutes: 20,
    title: "זמן משפחה",
    description: "החוויה המומלצת",
    note: "מומלץ",
  },
  {
    minutes: 30,
    title: "להישאר עוד",
    description: "קצת יותר עומק וחיבור",
  },
];

export function DurationScene({ onSelect }: DurationSceneProps) {
  return (
    <>
      <IllustrationComposer screen="duration" alt="בחירת זמן" />

      <ExperienceEyebrow>עוד רגע מתחילים</ExperienceEyebrow>

      <ExperienceTitle>כמה זמן יש לכם?</ExperienceTitle>

      <ExperienceBody>בחרו את הקצב שמתאים לכם היום.</ExperienceBody>

      <div className="mx-auto grid max-w-xl gap-3">
        {options.map((option) => (
          <button
            key={option.minutes}
            type="button"
            onClick={() => onSelect(option.minutes)}
            className="relative rounded-[1.6rem] border border-[#DCCDB8] bg-white/55 px-6 py-5 text-right shadow-sm transition hover:-translate-y-0.5 hover:bg-white/80"
          >
            {option.note && (
              <span className="absolute left-5 top-5 rounded-full bg-[#F3DF8F]/70 px-3 py-1 text-xs text-[#6F6252]">
                {option.note}
              </span>
            )}

            <div className="text-xl font-light text-[#3F3428]">
              {option.title}
            </div>

            <div className="mt-1 text-sm leading-6 text-[#8A7A62]">
              {option.minutes} דקות · {option.description}
            </div>
          </button>
        ))}
      </div>
    </>
  );
}