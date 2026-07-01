import Link from "next/link";

export default function GamesPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F7F1E8] px-6 py-10 text-[#3F3428]">
      <section className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="mb-3 text-sm tracking-[0.25em] text-[#8A7A62]">
          משחקי משפחה
        </p>

        <h1 className="mb-4 text-4xl font-light leading-tight md:text-5xl">
          משחקים שמחברים משפחות
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-8 text-[#6F6252]">
          רגעים פשוטים, עדינים ומשחקיים שמזמינים את המשפחה לעצור,
          לצחוק, להסתקרן ולהיות יחד.
        </p>

        <div className="grid w-full gap-6 md:grid-cols-2">
          <Link
            href="/games/together"
            className="rounded-[2rem] border border-[#DCCDB8] bg-white/55 p-8 text-right shadow-sm transition hover:-translate-y-1 hover:bg-white/75"
          >
            <p className="mb-4 text-sm text-[#A58E6C]">המשחק הראשון</p>
            <h2 className="mb-3 text-2xl font-light">להיות יחד</h2>
            <p className="leading-7 text-[#6F6252]">
              משחק קלפים דיגיטלי למשפחה — תנועה, סקרנות, גילוי וחיבור.
            </p>
          </Link>

          <div className="rounded-[2rem] border border-dashed border-[#DCCDB8] bg-white/30 p-8 text-right opacity-70">
            <p className="mb-4 text-sm text-[#A58E6C]">בקרוב</p>
            <h2 className="mb-3 text-2xl font-light">משחק נוסף</h2>
            <p className="leading-7 text-[#6F6252]">
              עוד חוויה משפחתית תצטרף לכאן בהמשך.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}