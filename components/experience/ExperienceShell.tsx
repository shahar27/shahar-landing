type ExperienceShellProps = {
  children: React.ReactNode;
};

export function ExperienceShell({ children }: ExperienceShellProps) {
  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#F7EFE3] px-4 py-6 text-[#4C3D2E]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.20]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,#FFFFFF_0,#FFFFFF_17%,transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_92%,#E8D7BD_0,#E8D7BD_18%,transparent_48%)]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(90,70,45,0.06) 1px, transparent 1px), linear-gradient(rgba(90,70,45,0.045) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-full bg-[#D9E8D2]/45 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-16 h-64 w-64 rounded-full bg-[#EBD7C8]/55 blur-3xl" />

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-3rem)] max-w-5xl items-center justify-center">
        {children}
      </section>
    </main>
  );
}