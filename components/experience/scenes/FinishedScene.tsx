import Image from "next/image";
import { PrimaryButton } from "../PrimaryButton";
import { ExperienceEyebrow } from "../typography/ExperienceEyebrow";
import { ExperienceTitle } from "../typography/ExperienceTitle";

type FinishedSceneProps = {
  stars: number;
  onRestart: () => void;
  onEndGame: () => void;
};

function createStars(count: number) {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    top: 12 + ((index * 19) % 58),
    left: 10 + ((index * 31) % 78),
    size: 18 + ((index * 7) % 12),
    rotate: (index * 23) % 35,
  }));
}

export function FinishedScene({
  stars,
  onRestart,
  onEndGame,
}: FinishedSceneProps) {
  const collectedStars = createStars(stars);

  return (
    <>
      <ExperienceEyebrow>סיום</ExperienceEyebrow>

      <ExperienceTitle>השמיים שלכם</ExperienceTitle>

      <div className="relative mx-auto mb-8 h-[320px] max-w-xl overflow-hidden rounded-[2rem] border border-[#DCCDB8] bg-[#10192E] shadow-sm">
        <Image
          src="/illustrations/family-time/backgrounds/finished-sky.webp"
          alt="השמיים שלכם"
          fill
          sizes="600px"
          className="object-cover"
          priority
        />

        {collectedStars.map((star) => (
          <Image
            key={star.id}
            src="/illustrations/family-time/icons/star-fill.webp"
            alt=""
            width={40}
            height={40}
            className="absolute object-contain"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              transform: `rotate(${star.rotate}deg)`,
            }}
          />
        ))}

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10192E]/80 to-transparent px-6 pb-5 pt-16">
          <p className="text-lg leading-8 text-white/90">
            אספתם {stars} {stars === 1 ? "כוכב" : "כוכבים"} של זמן משפחתי.
          </p>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-xl text-lg leading-8 text-[#6F6252]">
        כל כוכב הוא רגע אחד שבו עצרתם להיות יחד.
      </p>

      <div className="flex flex-col items-center gap-3">
        <PrimaryButton onClick={onRestart}>לשחק שוב</PrimaryButton>

        <button
          type="button"
          onClick={onEndGame}
          className="rounded-full border border-[#DCCDB8] bg-white/60 px-10 py-4 text-lg text-[#6F6252] shadow-sm transition hover:bg-white/80"
        >
          סיים משחק
        </button>
      </div>
    </>
  );
}