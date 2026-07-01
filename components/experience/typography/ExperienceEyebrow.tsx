type ExperienceEyebrowProps = {
  children: React.ReactNode;
};

export function ExperienceEyebrow({
  children,
}: ExperienceEyebrowProps) {
  return (
    <p className="mb-3 text-sm tracking-[0.25em] text-[#8A7A62]">
      {children}
    </p>
  );
}