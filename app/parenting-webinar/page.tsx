import Link from "next/link";


const WEBINAR_DATE = "יום רביעי | 8.7.26";
const WEBINAR_TIME = "20:30";

const PHONE_NUMBER = "052-5460444";
const WHATSAPP_NUMBER = "972525460444";

const INSTAGRAM =
  "https://www.instagram.com/shahar_tako_fisher?igsh=cmgzdnozNTN4dTB3&utm_source=qr";

const FACEBOOK =
  "https://www.facebook.com/share/1BagJzGtme/?mibextid=wwXIfr";

const WEBSITE = "https://shahartakofisher.com";

const TALLY_FORM_URL = "https://tally.so/r/Y5e58W";
const OLIVE = "#7E8C6B";

function SoftDivider() {
  return (
    <div className="my-10 flex items-center justify-center gap-5">
      <span className="h-px w-16 bg-[#9C7A4B]/25" />
      <img src="/brain-icon.png" alt="" className="w-7 h-7 opacity-40 object-contain" />
      <span className="h-px w-16 bg-[#9C7A4B]/25" />
    </div>
  );
}

function NatureDivider() {
  return (
    <div className="relative h-14 md:h-24 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-px bg-[#C8A86A]/20" />
      </div>

      <div
        className="relative text-3xl opacity-25"
        style={{ color: "#7E8C6B" }}
      >
        ❋
      </div>
    </div>
  );
}

export default function ParentingWebinarPage() {
  return (
    <main
      dir="rtl"
      className="relative min-h-screen bg-[#F8F3E8] text-[#3E3023] overflow-hidden pb-24"
    >

      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.018] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(62,48,35,0.22) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative z-10">

      <a
        href="#register"
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-auto z-[9999] rounded-full bg-[#9C7A4B] text-[#F8F3E8] px-7 py-3 text-center shadow-xl text-base hover:shadow-2xl transition"
      >
        שמירת מקום
      </a>

      {/* Hero */}
      <section className="relative grid place-items-center text-center px-6 pt-14 pb-10 md:min-h-screen md:py-20 overflow-hidden">
        <img
          src="/soft-home.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 scale-[1.04]"
        />

        <div className="absolute inset-0 bg-[#F8F3E8]/62" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(248,243,232,0.78), rgba(248,243,232,0.55), rgba(248,243,232,0.82))",
          }}
        />
        <div
          className="absolute top-[-80px] right-[-120px] w-[500px] h-[500px] blur-[140px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(126,140,107,0.16) 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute bottom-[-120px] left-[-160px] w-[600px] h-[600px] blur-[150px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(200,168,106,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 w-full max-w-4xl rounded-t-[5rem] md:rounded-t-[12rem] rounded-b-[2.5rem] border border-[#C8A86A]/30 bg-[#F8F3E8]/82 px-6 py-14 md:px-12 md:py-16 shadow-2xl backdrop-blur-[2px]">
          <img
            src="/logo-placeholder.png"
            alt="שחר טקו פישר"
            className="w-28 md:w-36 mx-auto mb-8"
          />

          <p
            className="tracking-[0.24em] text-sm mb-6"
            style={{ color: OLIVE }}
          >
            וובינר מיוחד להורים
          </p>

          <h1 className="text-4xl md:text-6xl font-serif leading-[1.25]">
            רגע לפני החופש הגדול...
          </h1>

          <p className="mt-8 text-xl md:text-2xl leading-10 text-[#5F4A35] max-w-2xl mx-auto">
            לפעמים מה שקורה מול הילד 
            <br />
            הוא רק חלק מהסיפור.
          </p>

          <SoftDivider />

          <p className="text-lg md:text-xl leading-9 text-[#5F4A35] max-w-2xl mx-auto">
            אנחנו יודעים על הורות יותר מאי פעם.
            <br />
            ועדיין, ברגע האמת,
            <br />
            אנחנו מגיבים שונה לגמרי ממה שרצינו.
          </p>

          <p className="mt-8 text-2xl md:text-3xl font-serif leading-[1.5] text-[#3E3023]">
            אז מה אנחנו מפספסים?
          </p>

          <div className="mt-10 text-lg leading-9 text-[#5F4A35]">
            {WEBINAR_DATE}
            <br />
            {WEBINAR_TIME}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#register"
              className="rounded-full bg-[#9C7A4B] px-9 py-4 text-[#F8F3E8] shadow-md hover:shadow-lg transition"
            >
              אני רוצה לשמור מקום
            </a>

            <Link
              href="/"
              className="rounded-full border border-[#9C7A4B]/40 px-9 py-4 text-[#9C7A4B] hover:bg-white/50 transition"
            >
              פרטים נוספים עליי
            </Link>
          </div>
        </div>
      </section>

      <NatureDivider />

      {/* Identification + Reflection */}
        <section className="px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
            <p
              className="tracking-[0.22em] text-sm mb-6"
              style={{ color: OLIVE }}
            >
            אולי זה מוכר לכם
            </p>

            <h2 className="text-3xl md:text-5xl font-serif leading-[1.35]">
            אתם יודעים איזה הורים
            <br />
            אתם רוצים להיות.
            </h2>

            <div className="mt-10 grid gap-4 text-right md:mt-14 md:grid-cols-2 md:gap-5">
              {[
                "אתם יודעים שצעקות זו לא הדרך שאתם רוצים לבחור בה.",
                "אתם יודעים שהילד לא עושה ״דווקא״.",
                "אתם רוצים להנות יותר עם הילדים, אבל לפעמים זה מרגיש גדול עליכם.",
                "ויש רגעים שבהם כל הידע נעלם והתגובה יוצאת מהר יותר מהבחירה.",
              ].map((item) => (
                <div
                  key={item}
                  className="relative overflow-hidden rounded-[2rem] border border-[#C8A86A]/14 bg-[#FFFDF8]/36 px-6 py-5 shadow-[0_10px_28px_rgba(62,48,35,0.035)] md:px-7 md:py-7"
                >
                  <div
                    className="absolute -top-12 -left-12 h-24 w-24 rounded-full blur-3xl opacity-25"
                    style={{
                      background: "rgba(126,140,107,0.14)",
                    }}
                  />

                  <p className="relative text-lg md:text-xl leading-8 md:leading-9 text-[#5F4A35]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 md:mt-12 max-w-2xl mx-auto px-4">
              <p className="text-xl md:text-2xl font-serif leading-[1.45] text-[#3E3023]">
                לפעמים אנחנו מחפשים תשובות חדשות.
              </p>

              <p
                className="mt-3 text-base md:text-lg leading-8"
                style={{ color: OLIVE }}
              >
                כשבעצם חסרה לנו דרך חדשה להסתכל.
              </p>
            </div>

            <div className="mt-8 md:mt-10 max-w-2xl mx-auto rounded-[2.2rem] border border-[#C8A86A]/12 bg-white/14 px-6 py-8 md:px-8 md:py-9 backdrop-blur-[2px] shadow-[0_14px_40px_rgba(62,48,35,0.035)]">
              <h2 className="text-4xl md:text-5xl font-serif leading-[1.45]">
                רוב ההורים שאני פוגשת
                <br />
                לא צריכים להתאמץ יותר.
              </h2>

              <p className="mt-6 text-xl md:text-2xl text-[#A7834D] leading-[1.8]">
                למעשה, חלקם מותשים מהניסיון לעשות הכל נכון.
              </p>
            </div>
        </div>
        </section>
      
        <NatureDivider />

      {/* Soft Home Image */}
      <section className="px-6 md:px-16 lg:px-24 pb-8 md:pb-14">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[220px] md:h-[520px] md:min-h-[520px] overflow-hidden rounded-t-[10rem] rounded-b-[2.5rem] border border-[#9C7A4B]/15 shadow-lg bg-[#F8F3E8]">
            <img
              src="/soft-home.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#3E3023]/20 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-[#C8A86A]/20 rounded-t-[10rem] rounded-b-[2.5rem]" />
          </div>
        </div>
      </section>

      {/* What we will open */}
      <section className="px-6 pt-10 pb-20 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="tracking-[0.22em] text-sm mb-6"
            style={{ color: OLIVE }}
          >
            בוובינר נפתח שאלה אחת
          </p>

          <h2 className="text-3xl md:text-5xl font-serif leading-[1.35] mb-12">
            מה באמת קורה לנו
            <br />
            ברגעים שבהם אנחנו מאבדים את עצמנו?
          </h2>

          <div className="grid md:grid-cols-2 gap-5 text-right">
            {[
              "למה ידע, מודעות וכוונות טובות לא תמיד מספיקים ברגע האמת",
              "מה גורם לנו לחזור שוב ושוב לאותן תגובות, גם כשאנחנו יודעים שהן לא עוזרות",
              "איך אפשר להסתכל על עצמנו בלי אשמה, אבל גם בלי לוותר על אחריות",
              "מה ילדים מחפשים מאיתנו ברגעים שבהם הכי קשה להם להסביר את עצמם.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.7rem] bg-white/40 border border-[#9C7A4B]/15 p-7 text-[#5F4A35] text-lg leading-8 shadow-sm"
              >
                <span className="text-[#C8A86A] ml-2">●</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift */}
      <section className="relative px-6 py-20 bg-[#F3EBDD] text-center overflow-hidden">

        <div
          className="absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(126,140,107,0.18), transparent 70%)",
          }}
        />

        <div
          className="absolute bottom-0 left-0 w-64 h-64 blur-[100px] opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(200,168,106,0.18), transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto rounded-t-[5rem] rounded-b-[2rem] border border-[#C8A86A]/20 bg-[#F8F3E8]/55 px-7 py-12 shadow-sm">

          <p className="text-[#9C7A4B] tracking-[0.22em] mb-5">
            מתנה למשתתפים
          </p>

          <div className="mb-4 text-4xl opacity-70">
            ✦
          </div>

          <h2 className="text-4xl md:text-5xl font-serif leading-[1.3]">
            ערכת משחקים להדפסה
          </h2>

          <p className="mt-8 text-xl leading-10 text-[#5F4A35]">
            רעיונות פשוטים, נעימים וישימים
            <br />
            לחיזוק הקשר והחיבור עם הילדים גם בתוך ימי החופש.
          </p>

        </div>
      </section>

      <NatureDivider />

      {/* About */}
      <section className="px-6 md:px-16 lg:px-24 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-[80%] h-[80%] rounded-t-[8rem] rounded-b-[3rem] border border-[#C8A86A]/25" />

            <div className="relative overflow-hidden rounded-t-[8rem] rounded-b-[3rem] border border-[#C8A86A]/25 shadow-xl">
              <img
                src="/shahar-event.jpg"
                alt="שחר טקו פישר"
                className="w-full h-full min-h-[420px] object-cover object-center"
              />
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[#C8A86A] tracking-[0.22em] mb-5 text-sm">
              בהנחיית
            </p>

            <h2 className="text-4xl md:text-5xl font-serif">
              שחר טקו פישר
            </h2>

            <div className="my-8 h-px w-20 bg-[#C8A86A]/35 mx-auto md:mx-0" />

            <p className="text-xl leading-10 text-[#5F4A35]">
              מלווה רגשית ומדריכת הורים.
              בשנים האחרונות אני מלווה הורים, זוגות ואנשים בתהליכי שינוי וצמיחה,
            </p>

            <p className="mt-8 text-xl leading-10 text-[#5F4A35]">
              בלי אשמה.
              ולא דרך ניסיון להיות מושלמים.
              אלא דרך חיבור למה שמפעיל אותנו,
              כדי שנוכל לבחור אחרת.
            </p>

            <Link
              href="/"
              className="mt-10 inline-flex rounded-full border border-[#9C7A4B]/40 px-8 py-4 text-[#9C7A4B] hover:bg-white/50 transition"
            >
              לקריאה נוספת עליי
            </Link>
          </div>
        </div>
      </section>

      {/* Register */}
      <section id="register" className="px-6 py-20 bg-[#9C7A4B] text-[#F8F3E8] text-center">
        <div className="max-w-3xl mx-auto rounded-t-[6rem] rounded-b-[2.5rem] border border-[#F8F3E8]/20 bg-[#9C7A4B]/40 px-7 py-14 shadow-2xl">
          <p className="text-[#F8F3E8]/75 tracking-[0.22em] text-sm mb-6">
            הרשמה
          </p>

          <h2 className="text-4xl md:text-5xl font-serif leading-[1.35]">
            אז רגע לפני החופש הגדול,
            <br />
            בואו לקבל קצת אוויר.
          </h2>

          <p className="mt-9 text-xl leading-9 text-[#F8F3E8]/90">
            {WEBINAR_DATE}
            <br />
            {WEBINAR_TIME}
          </p>

          <p className="mt-8 text-lg leading-8 text-[#F8F3E8]/85">
            מתנה ללקוחות הגלריה לביטוחים ופיננסים.
            <br />
            מספר המקומות מוגבל.
          </p>

          <a
            href={TALLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full bg-[#F8F3E8] px-10 py-4 text-[#9C7A4B] shadow-md hover:shadow-lg transition"
          >
            מעבר להרשמה
          </a>

          <div className="mt-10 flex flex-wrap justify-center gap-5 text-sm text-[#F8F3E8]/85">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
              וואטסאפ
            </a>

            <a href={`tel:${PHONE_NUMBER}`}>טלפון</a>

            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              אינסטגרם
            </a>

            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">
              פייסבוק
            </a>

            <a href={WEBSITE} target="_blank" rel="noopener noreferrer">
              אתר
            </a>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}