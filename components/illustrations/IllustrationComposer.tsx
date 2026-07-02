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
    <div className="relative mx-auto mb-4 h-44 w-full max-w-xl overflow-visible rounded-[1.4rem]">
      <Image
        src={backgroundSrc(config.background)}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 560px"
        className="rounded-[1.4rem] object-cover opacity-28 mix-blend-multiply"
        priority={screen === "welcome"}
      />

      {config.elements.map((element, index) => (
        <Image
          key={`${element.folder}-${element.name}-${index}`}
          src={assetSrc(element.folder, element.name)}
          alt={element.alt ?? alt}
          width={260}
          height={260}
          className={element.className}
        />
      ))}
    </div>
  );
}