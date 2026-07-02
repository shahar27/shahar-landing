type ExperienceTitleProps = {
  children: React.ReactNode;
};

export function ExperienceTitle({ children }: ExperienceTitleProps) {
  return (
    <h1 className="mb-4 font-serif text-4xl font-normal leading-tight tracking-[-0.035em] text-[#6A4E35] md:text-5xl">
      {children}
    </h1>
  );
}