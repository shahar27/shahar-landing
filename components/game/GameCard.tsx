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

      <div className="mb-3 inline-flex rounded-full border border-[#DCCDB8] bg-[#FFF8EA]/55 px-5 py-2 text-sm tracking-[0.18em] text-[#8A7A62]">
        {category?.label}
      </div>

      <h1 className="mb-5 font-serif text-4xl font-normal leading-tight tracking-[-0.035em] text-[#6A4E35] md:text-5xl">
        {card.title}
      </h1>

      <div className="mb-6 rounded-[1.5rem] bg-[#FFF8EA]/48 px-5 py-5 text-lg leading-8 text-[#6F6252] shadow-[0_5px_16px_rgba(76,61,46,0.06)]">
        {card.text.map((line) => (
          <p key={line} className="mb-2 last:mb-0">
            {line}
          </p>
        ))}
      </div>

      {selectedVariant && (
        <div className="mx-auto mb-6 max-w-md rounded-[1.4rem] border border-[#DCCDB8]/75 bg-[#FFF9EF]/55 px-5 py-4 shadow-[0_4px_14px_rgba(76,61,46,0.05)]">
          {!isVariantVisible ? (
            <button
              type="button"
              onClick={() => setIsVariantVisible(true)}
              className="rounded-[1.2rem] bg-[#9E7D55] px-8 py-3 text-base text-white shadow-[0_6px_16px_rgba(76,61,46,0.12)] transition hover:bg-[#8D6F4B]"
            >
              {getVariantRevealButtonText(card)}
            </button>
          ) : (
            <>
              <p className="mb-2 text-sm tracking-[0.12em] text-[#8A7A62]">
                {getVariantLabel(card)}
              </p>

              <p className="font-serif text-3xl font-normal text-[#6A4E35]">
                {selectedVariant}
              </p>
            </>
          )}
        </div>
      )}

      {card.completion === "timer" && card.timerSeconds !== undefined && (
        <CardTimer seconds={card.timerSeconds} onComplete={() => onComplete(1)} />
      )}

      {card.completion === "manual" && (
        <div className="flex flex-col items-center gap-3">
          {canEarnBonusStar && (
            <button
              type="button"
              onClick={() => onComplete(2)}
              className="flex items-center gap-2 rounded-[1.2rem] bg-[#9E7D55] px-9 py-3.5 text-base text-white shadow-[0_6px_16px_rgba(76,61,46,0.12)] transition hover:-translate-y-0.5 hover:bg-[#8D6F4B]"
            >
              <Image
                src="/illustrations/family-time/icons/guess.webp"
                alt=""
                width={22}
                height={22}
                className="h-5 w-5 object-contain"
              />
              סיימנו וניחשנו נכון
            </button>
          )}

          <button
            type="button"
            onClick={() => onComplete(1)}
            className="flex items-center gap-2 rounded-[1.2rem] border border-[#DCCDB8] bg-[#FFF9EF]/65 px-9 py-3.5 text-base text-[#6F6252] shadow-[0_4px_12px_rgba(76,61,46,0.06)] transition hover:bg-white/80"
          >
            <Image
              src="/illustrations/family-time/icons/star-fill.webp"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            סיימנו
          </button>
        </div>
      )}

      <div className="mt-5 space-y-1 text-sm text-[#8A7A62]">
        {duration && <p>משחק של {duration} דקות</p>}
        <p>{progressLabel}</p>
      </div>
    </div>
  );
}