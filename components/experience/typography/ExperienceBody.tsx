type ExperienceBodyProps = {
  children: React.ReactNode;
};

export function ExperienceBody({
  children,
}: ExperienceBodyProps) {
  return (
    <p className="mx-auto mb-10 max-w-xl text-lg leading-8 text-[#6F6252]">
      {children}
    </p>
  );
}