type ExperienceCardProps = {
  children: React.ReactNode;
};

export function ExperienceCard({ children }: ExperienceCardProps) {
  return (
    <article className="relative w-full max-w-2xl overflow-hidden rounded-[2.75rem] border border-[#D7C5A5] bg-[#FFF8ED]/88 px-6 py-9 text-center shadow-[0_28px_80px_rgba(76,61,46,0.12)] backdrop-blur-sm md:px-12 md:py-12">
      <div className="pointer-events-none absolute inset-3 rounded-[2.25rem] border border-dashed border-[#D8C7AA]/75" />

      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#E7D8BD]/55" />
      <div className="pointer-events-none absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-[#DDE9D5]/55" />

      <div className="pointer-events-none absolute right-8 top-7 h-12 w-24 rounded-full border-t border-[#B8A37F]/40" />
      <div className="pointer-events-none absolute bottom-8 left-8 h-12 w-24 rounded-full border-b border-[#B8A37F]/35" />

      <div className="relative z-10">{children}</div>
    </article>
  );
}