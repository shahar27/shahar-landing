type ExperienceTitleProps = {
  children: React.ReactNode;
};

export function ExperienceTitle({
  children,
}: ExperienceTitleProps) {
  return (
    <h1 className="mb-5 text-4xl font-light leading-tight md:text-6xl">
      {children}
    </h1>
  );
}