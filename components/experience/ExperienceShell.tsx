type ExperienceShellProps = {
  children: React.ReactNode;
};

export function ExperienceShell({ children }: ExperienceShellProps) {
  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#F3E8D7] px-3 py-5 text-[#4C3D2E] md:px-6 md:py-8"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'url("/illustrations/family-time/backgrounds/soft-linen.webp")',
          backgroundSize: "900px auto",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[#F5EAD8]/45" />

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-5xl items-center justify-center">
        {children}
      </section>
    </main>
  );
}