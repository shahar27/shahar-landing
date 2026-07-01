import Image from "next/image";

type ExperienceIllustrationProps = {
  src?: string | null;
  alt: string;
  tone?: "release" | "curious" | "discover" | "see" | "general";
};

const toneClasses = {
  release: "bg-[#F3DF8F]/50",
  curious: "bg-[#BFDDEA]/50",
  discover: "bg-[#BFD7C5]/50",
  see: "bg-[#E8C3C3]/50",
  general: "bg-[#EFE2CC]/55",
};

export function ExperienceIllustration({
  src,
  alt,
  tone = "general",
}: ExperienceIllustrationProps) {
  return (
    <div className="relative mx-auto mb-8 flex h-44 w-44 items-center justify-center">
      <div
        className={[
          "absolute inset-0 rotate-3 rounded-[2.4rem]",
          toneClasses[tone],
        ].join(" ")}
      />

      <div className="absolute -right-3 top-4 h-9 w-16 rounded-full border-t border-[#A99674]/45" />
      <div className="absolute -bottom-1 left-1 h-8 w-14 rounded-full border-b border-[#A99674]/35" />

      <div className="relative flex h-40 w-40 items-center justify-center rounded-[2.15rem] border border-[#D8C7AA]/80 bg-[#FFF9EF]/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.55),0_14px_32px_rgba(76,61,46,0.08)]">
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={156}
            height={156}
            className="h-32 w-32 object-contain"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-[1.7rem] border border-[#B8A37F]/45 bg-white/35">
            <div className="h-10 w-10 rounded-full border border-[#B8A37F]/35" />
          </div>
        )}
      </div>
    </div>
  );
}