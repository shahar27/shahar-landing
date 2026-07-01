"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { CardIllustration } from "@/components/illustrations/CardIllustration";
import { CardTimer } from "@/components/game/CardTimer";
import type {
  TogetherCard,
  TogetherCategory,
} from "@/types/games/family-time";

type GameCardProps = {
  card: TogetherCard;
  category: TogetherCategory | null;
  duration: number | null;
  progressLabel: string;
  onComplete: (starsToAdd?: number) => void;
};

function getRandomVariant(variants?: string[]) {
  if (!variants || variants.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * variants.length);
  return variants[randomIndex];
}

function getVariantRevealButtonText(card: TogetherCard) {
  if (card.id === "release-no-words") return "חשוף את שם החיה";
  return "חשוף את המילה";
}

function getVariantLabel(card: TogetherCard) {
  if (card.id === "release-no-words") return "החיה שלכם";
  return "המילה שלכם";
}

export function GameCard({
  card,
  category,
  duration,
  progressLabel,
  onComplete,
}: GameCardProps) {
  const [selectedVariant, setSelectedVariant] = useState<string | null>(
    () => getRandomVariant(card.variants)
  );
  const [isVariantVisible, setIsVariantVisible] = useState(false);

  useEffect(() => {
    setSelectedVariant(getRandomVariant(card.variants));
    setIsVariantVisible(false);
  }, [card.id, card.variants]);

  const canEarnBonusStar = category?.hasGuessRule === true;

  return (
    <div className="mx-auto max-w-xl">
      <CardIllustration card={card} />

      <div className="mb-4 inline-flex rounded-full border border-[#DCCDB8] bg-white/55 px-5 py-2 text-sm tracking-[0.2em] text-[#8A7A62]">
        {category?.label}
      </div>

      <h1 className="mb-6 text-4xl font-light leading-tight text-[#3F3428] md:text-5xl">
        {card.title}
      </h1>

      <div className="mb-8 rounded-[1.7rem] border border-[#DCCDB8]/80 bg-white/45 px-6 py-6 text-lg leading-8 text-[#6F6252] shadow-sm">
        {card.text.map((line) => (
          <p key={line} className="mb-2 last:mb-0">
            {line}
          </p>
        ))}
      </div>

      {selectedVariant && (
        <div className="mx-auto mb-8 max-w-md rounded-[1.7rem] border border-[#DCCDB8] bg-[#FFF9EF]/75 px-6 py-5 shadow-sm">
          {!isVariantVisible ? (
            <button
              type="button"
              onClick={() => setIsVariantVisible(true)}
              className="rounded-full bg-[#A58E6C] px-8 py-3 text-base text-white shadow-sm transition hover:bg-[#927B5E]"
            >
              {getVariantRevealButtonText(card)}
            </button>
          ) : (
            <>
              <p className="mb-2 text-sm text-[#8A7A62]">
                {getVariantLabel(card)}
              </p>

              <p className="text-3xl font-light text-[#3F3428]">
                {selectedVariant}
              </p>
            </>
          )}
        </div>
      )}

      {card.completion === "timer" &&
        card.timerSeconds !== undefined && (
          <CardTimer
            seconds={card.timerSeconds}
            onComplete={() => onComplete(1)}
          />
        )}

      {card.completion === "manual" && (
        <div className="flex flex-col items-center gap-3">
          {canEarnBonusStar && (
            <button
              type="button"
              onClick={() => onComplete(2)}
              className="flex items-center gap-2 rounded-full bg-[#A58E6C] px-10 py-4 text-lg text-white shadow-[0_10px_24px_rgba(76,61,46,0.14)] transition hover:-translate-y-0.5 hover:bg-[#927B5E]"
            >
              <Image
                src="/illustrations/family-time/icons/guess.webp"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
              סיימנו וניחשנו נכון
            </button>
          )}

          <button
            type="button"
            onClick={() => onComplete(1)}
            className="flex items-center gap-2 rounded-full border border-[#DCCDB8] bg-white/60 px-10 py-4 text-lg text-[#6F6252] shadow-sm transition hover:bg-white/80"
          >
            <Image
              src="/illustrations/family-time/icons/star-fill.webp"
              alt=""
              width={22}
              height={22}
              className="h-5 w-5 object-contain"
            />
            סיימנו
          </button>
        </div>
      )}

      <div className="mt-7 space-y-1 text-sm text-[#8A7A62]">
        {duration && <p>משחק של {duration} דקות</p>}
        <p>{progressLabel}</p>
      </div>
    </div>
  );
}