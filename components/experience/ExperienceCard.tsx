type ExperienceCardProps = {
  children: React.ReactNode;
};

export function ExperienceCard({ children }: ExperienceCardProps) {
  return (
    <article className="relative w-full max-w-xl overflow-hidden rounded-[2rem] bg-[#F8EEDC]/88 px-5 py-6 text-center shadow-[0_8px_26px_rgba(76,61,46,0.07)] md:px-10 md:py-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            'url("/illustrations/family-time/backgrounds/soft-linen.webp")',
          backgroundSize: "760px auto",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          mixBlendMode: "multiply",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[#FFF7E9]/35" />

      <div className="relative z-10">{children}</div>
    </article>
  );
}