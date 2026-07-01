import Image from "next/image";
import {
  screenIllustrations,
  type IllustrationFolder,
  type IllustrationScreen,
} from "@/data/design/screenIllustrations";

type IllustrationComposerProps = {
  screen: IllustrationScreen;
  alt: string;
};

function backgroundSrc(name: string) {
  return `/illustrations/family-time/backgrounds/${name}.webp`;
}

function assetSrc(folder: IllustrationFolder, name: string) {
  return `/illustrations/family-time/${folder}/${name}.webp`;
}

export function IllustrationComposer({
  screen,
  alt,
}: IllustrationComposerProps) {
  const config = screenIllustrations[screen];

  return (
    <div className="relative mx-auto mb-8 h-44 w-full max-w-xl overflow-hidden rounded-[2rem] border border-[#D8C7AA]/80 bg-[#FFF9EF]/70 shadow-[0_14px_34px_rgba(76,61,46,0.08)]">
      <Image
        src={backgroundSrc(config.background)}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 620px"
        className="object-cover opacity-95"
        priority={screen === "welcome"}
      />

      {config.elements.map((element, index) => (
        <Image
          key={`${element.folder}-${element.name}-${index}`}
          src={assetSrc(element.folder, element.name)}
          alt={element.alt ?? ""}
          width={240}
          height={240}
          className={element.className}
        />
      ))}
    </div>
  );
}