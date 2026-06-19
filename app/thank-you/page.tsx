import Link from "next/link";

const WEBINAR_DATE = "יום רביעי | 8.7.26";
const WEBINAR_TIME = "20:30";

export default function ThankYouPage() {
  return (
    <main
      dir="rtl"
      className="relative min-h-screen bg-[#F8F3E8] text-[#3E3023] overflow-hidden"
    >
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.018] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(62,48,35,0.22) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      <section className="relative min-h-screen grid place-items-center text-center px-6 py-20">
        <img
          src="/soft-home.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 scale-[1.04]"
        />

        <div className="absolute inset-0 bg-[#F8F3E8]/68" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(248,243,232,0.82), rgba(248,243,232,0.58), rgba(248,243,232,0.86))",
          }}
        />

        <div className="relative z-10 w-full max-w-3xl rounded-t-[5rem] md:rounded-t-[10rem] rounded-b-[2.5rem] border border-[#C8A86A]/30 bg-[#F8F3E8]/84 px-7 py-14 md:px-12 md:py-16 shadow-2xl backdrop-blur-[2px]">
          <img
            src="/logo-placeholder.png"
            alt="שחר טקו פישר"
            className="w-28 md:w-36 mx-auto mb-8 opacity-90"
          />

          <p className="tracking-[0.22em] text-sm mb-6 text-[#7E8C6B]">
            ההרשמה התקבלה
          </p>

          <h1 className="text-4xl md:text-6xl font-serif leading-[1.25]">
            שמרתי לך מקום
          </h1>

          <p className="mt-8 text-xl md:text-2xl leading-10 text-[#5F4A35] max-w-2xl mx-auto">
            תודה שנרשמת לוובינר
            <br />
            ״רגע לפני החופש הגדול״
          </p>

          <div className="my-10 flex items-center justify-center gap-5">
            <span className="h-px w-16 bg-[#9C7A4B]/25" />
            <img
              src="/logo-placeholder.png"
              alt=""
              className="w-9 h-9 opacity-35 object-contain"
            />
            <span className="h-px w-16 bg-[#9C7A4B]/25" />
          </div>

          <p className="text-lg md:text-xl leading-9 text-[#5F4A35] max-w-2xl mx-auto">
            פרטי האירוע יישלחו אליך בהמשך.
          </p>

          <div className="mt-10 text-lg leading-9 text-[#5F4A35]">
            {WEBINAR_DATE}
            <br />
            {WEBINAR_TIME}
          </div>

          <Link
            href="/"
            className="mt-10 inline-flex rounded-full border border-[#9C7A4B]/40 px-9 py-4 text-[#9C7A4B] hover:bg-white/50 transition"
          >
            חזרה לאתר
          </Link>
        </div>
      </section>
    </main>
  );
}