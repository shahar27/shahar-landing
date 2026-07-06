import Image from "next/image";

import { IllustrationComposer } from "@/components/illustrations/IllustrationComposer";
import { PrimaryButton } from "../PrimaryButton";
import { ExperienceEyebrow } from "../typography/ExperienceEyebrow";
import { ExperienceTitle } from "../typography/ExperienceTitle";

const starIdeas = [
  {
    title: "שמיים על דף",
    image: "stars-on-page.webp",
    text: "הכינו שמיים חשוכים מכל חומר יצירה שמתחשק לכם ושאפשר להדביק עליו כוכבים זוהרים בחושך (שווה לרכוש, במידה ואין). בכל קלף שהשלמתם, הדביקו על הבריסטול כוכב זוהר, כשהוא מתמלא אפשר למסגר ולתלות בחדר הילדים.",
  },
  {
    title: "צנצנת כוכבים",
    image: "jar-stars.webp",
    text: "גזרו כוכבים קטנים והכניסו כוכב בכל משימה שסיימתם, לתוך צנצנת שקישטתם. כשהצנצנת מתמלאת בכוכבים, צאו יחד לרכוש עציץ חדש לבית, הילדים אחראיים לטפל בו יחד אתכם.",
  },
  {
    title: "בית כוכבים",
    image: "popsicle-house.webp",
    text: "עבור כל משימה שהצלחתם, הכניסו מקל ארטיק מקושט במדבקות כוכבים, לתוך קופסא שקישטתם יחד. בסוף המשחק, תבנו בית מהמקלות שצברתם",
  },
];

function objectSrc(fileName: string) {
  return `/illustrations/family-time/objects/${fileName}`;
}

type StarsIntroSceneProps = {
  onContinue: () => void;
};

export function StarsIntroScene({ onContinue }: StarsIntroSceneProps) {
  return (
    <>
      <IllustrationComposer screen="starsIntro" alt="שמיים וכוכבים" />

      <ExperienceEyebrow>השמיים שלנו</ExperienceEyebrow>

      <ExperienceTitle>אוספים כוכבים של יחד</ExperienceTitle>

      <div className="mx-auto mb-6 max-w-xl rounded-[1.8rem] border border-[#DCCDB8]/80 bg-white/45 px-6 py-6 text-right text-lg leading-8 text-[#6F6252] shadow-sm">
        <p className="mb-3">
          הכוכבים הם לא ניקוד של ניצחון. הם דרך לראות כמה רגעים של יחד אספתם.
        </p>
      </div>

      <div className="mx-auto mb-6 max-w-xl text-center">
        <p className="text-base leading-7 text-[#7A6C5A]">
          אם תרצו, אפשר להפוך את הכוכבים גם ליצירה משפחתית בבית,
          מצורפות פה למטה שלוש אפשרויות ליצירות שכאלו.
        </p>
      </div>

      <div className="mx-auto mb-8 grid max-w-xl gap-3 md:grid-cols-3">
        {starIdeas.map((idea) => (
          <div
            key={idea.title}
            className="rounded-[1.5rem] border border-[#DCCDB8] bg-[#FFF9EF]/70 px-4 py-5 text-right shadow-sm"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-lg font-light text-[#3F3428]">
                {idea.title}
              </h3>

              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-[1.2rem] bg-[#F8EEDC]/70 shadow-[inset_0_1px_8px_rgba(76,61,46,0.05),0_6px_16px_rgba(76,61,46,0.08)]">
                <Image
                  src={objectSrc(idea.image)}
                  alt=""
                  width={96}
                  height={96}
                  className="h-16 w-16 object-contain opacity-95 mix-blend-multiply"
                />
              </div>
              </div>

            <p className="text-sm leading-6 text-[#6F6252]">{idea.text}</p>
          </div>
        ))}
      </div>

      <PrimaryButton onClick={onContinue}>ממשיכים</PrimaryButton>
    </>
  );
}