import { IllustrationComposer } from "@/components/illustrations/IllustrationComposer";
import { PrimaryButton } from "../PrimaryButton";
import { ExperienceEyebrow } from "../typography/ExperienceEyebrow";
import { ExperienceTitle } from "../typography/ExperienceTitle";

const starIdeas = [
  {
    title: "שמיים על דף",
    
    text: "הכינו שמיים חשוכים מכל חומר יצירה שמתחשק לכם ושאפשר להדביק עליו כוכבים זוהרים בחושך (שווה לרכוש, במידה ואין). בכל קלף שהשלמתם, הדביקו על הבריסטול כוכב זוהר, כשהוא מתמלא אפשר למסגר ולתלות בחדר הילדים.",
  },
  {
    title: "צנצנת כוכבים",
    text: "גזרו כוכבים קטנים והכניסו אותם לצנצנת שקישטתם. כשהצנצנת מתמלאת בכוכבים, צאו יחד לרכוש עציץ חדש לבית, הילדים אחראיים לטפל בו יחד אתכם.",
  },
  {
    title: "כוכבים מהבית",
    text: "עבור כל משימה שהצלחתם, הכניסו מקל ארטיק לקופסא שקישטתם יחד. בסוף המשחק, תבנו בית מהמקלות שצברתם",
  },
];

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

        <p>
          אם תרצו, אפשר להפוך את זה גם ליצירה פיזית בבית, כך שהמשחק לא יישאר רק על המסך אלא יהפוך למזכרת משפחתית. למטה כתובים רעיונות ליצירות שכאלו.
        </p>
      </div>

      <div className="mx-auto mb-8 grid max-w-xl gap-3 md:grid-cols-3">
        {starIdeas.map((idea) => (
          <div
            key={idea.title}
            className="rounded-[1.5rem] border border-[#DCCDB8] bg-[#FFF9EF]/70 px-4 py-5 text-right shadow-sm"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3DF8F]/45 text-2xl text-[#A78C64]">
              ☆
            </div>

            <h3 className="mb-2 text-lg font-light text-[#3F3428]">
              {idea.title}
            </h3>

            <p className="text-sm leading-6 text-[#6F6252]">
              {idea.text}
            </p>
          </div>
        ))}
      </div>

      <PrimaryButton onClick={onContinue}>ממשיכים</PrimaryButton>
    </>
  );
}