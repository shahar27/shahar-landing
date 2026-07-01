import Image from "next/image";
import {
  getCardIllustrationConfig,
  type CardIllustrationElement,
} from "@/data/design/cardIllustrations";
import type { TogetherCard } from "@/types/games/family-time";

type CardIllustrationProps = {
  card: TogetherCard;
};

function backgroundSrc(name: string) {
  return `/illustrations/family-time/backgrounds/${name}.webp`;
}

function assetSrc(element: CardIllustrationElement) {
  return `/illustrations/family-time/${element.folder}/${element.name}.webp`;
}

export function CardIllustration({ card }: CardIllustrationProps) {
  const config = getCardIllustrationConfig({
    category: card.category,
    illustrationId: card.illustrationId,
  });

  return (
    <div className="relative mx-auto mb-8 h-44 w-full max-w-xl overflow-hidden rounded-[2rem] border border-[#D8C7AA]/80 bg-[#FFF9EF]/70 shadow-[0_14px_34px_rgba(76,61,46,0.08)]">
      <Image
        src={backgroundSrc(config.background)}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 620px"
        className="object-cover opacity-95"
      />

      {config.elements.map((element, index) => (
        <Image
          key={`${element.folder}-${element.name}-${index}`}
          src={assetSrc(element)}
          alt={element.alt ?? ""}
          width={240}
          height={240}
          className={element.className}
        />
      ))}
    </div>
  );
}