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
    <div className="relative mx-auto mb-4 h-44 w-full max-w-xl overflow-visible rounded-[1.4rem]">
      <Image
        src={backgroundSrc(config.background)}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 560px"
        className="rounded-[1.4rem] object-cover opacity-28 mix-blend-multiply"
      />

      {config.elements.map((element, index) => (
        <Image
          key={`${element.folder}-${element.name}-${index}`}
          src={assetSrc(element)}
          alt={element.alt ?? ""}
          width={260}
          height={260}
          className={element.className}
        />
      ))}
    </div>
  );
}