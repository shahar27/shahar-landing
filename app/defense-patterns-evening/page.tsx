import Link from "next/link";

const EVENT_PRICE = "240 ₪";
const EVENT_DATE = "יום חמישי | 17.9.26";
const EVENT_TIME = "19:00-21:30";

function BrainDivider() {
  return (
    <div className="my-10 flex items-center justify-center gap-5">
      <span className="h-px w-16 bg-[#9C7A4B]/25" />
      <img src="/brain-icon.png" alt="" className="w-7 h-7 opacity-45 object-contain" />
      <span className="h-px w-16 bg-[#9C7A4B]/25" />
    </div>
  );
}

function BrainMark() {
  return (
    <div className="mb-5 flex justify-center">
      <img src="/brain-icon.png" alt="" className="w-10 h-10 opacity-50 object-contain" />
    </div>
  );
}

export default function DefensePatternsEveningPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F8F3E8] text-[#3E3023] overflow-hidden pb-24">

        <a
          href="#register"
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-auto z-[9999] rounded-full bg-[#9C7A4B] text-[#F8F3E8] px-7 py-4 text-center shadow-xl text-lg hover:shadow-2xl transition"
        >
          שמירת מקום 
        </a>
        
      {/* Hero */}
      <section className="relative min-h-screen grid place-items-center text-center px-6 py-20 bg-[#F8F3E8]">
        <img src="/odem-house-hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-[#F8F3E8]/55" />

        <div className="relative z-10 w-full max-w-4xl rounded-t-[12rem] rounded-b-[2.5rem] border border-[#9C7A4B]/30 bg-[#F8F3E8]/75 px-6 py-14 md:px-12 md:py-18 shadow-xl backdrop-blur-[2px]">
          <img src="/logo-placeholder.png" alt="שחר טקו פישר" className="w-28 md:w-36 mx-auto mb-8" />

          <p className="text-[#9C7A4B] tracking-[0.28em] text-sm mb-6">
            ערב בוטיק אינטימי
          </p>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            מתחת
            <br />
            למנגנוני ההגנה
          </h1>

          <p className="mt-8 text-xl md:text-2xl leading-10 text-[#5F4A35] max-w-2xl mx-auto">
            ערב חווייתי, עמוק ומשחרר שבו נחליף ביקורת בסקרנות - ונגלה מה באמת נמצא מתחת לדפוסים שמנהלים אותנו.
          </p>

          <BrainDivider />

          <p className="text-lg leading-9 text-[#5F4A35]">
            {EVENT_DATE}
            <br />
            {EVENT_TIME}
            <br />
            ODEM HOUSE | יפו
          </p>

          <a href="#register" className="mt-10 inline-flex rounded-full bg-[#9C7A4B] px-9 py-4 text-[#F8F3E8] shadow-md hover:shadow-lg transition">
            שמירת מקום - {EVENT_PRICE}
          </a>
        </div>
      </section>

      {/* Identification */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl md:text-5xl font-serif leading-[1.35]">
            לפעמים אנחנו מוצאים את עצמנו מגיבים בצורה שלא באמת מייצגת את מי שאנחנו רוצים להיות.
          </p>

          <BrainDivider />

          <div className="space-y-5 text-2xl md:text-3xl font-serif text-[#9C7A4B]">
            <p>חושבים יותר מדי.</p>
            <p>מרצים.</p>
            <p>נמנעים.</p>
            <p>מתפרצים.</p>
          </div>

          <p className="mt-14 text-xl leading-10 text-[#5F4A35]">
            חוזרים שוב ושוב לאותם דפוסים,
            <br />
            גם כשאנחנו כבר מבינים אותם היטב.
          </p>
        </div>
      </section>

      {/* Core idea */}
      <section className="px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="min-h-[340px] md:min-h-[520px] rounded-t-[12rem] rounded-b-[2.5rem] overflow-hidden border border-[#9C7A4B]/15 shadow-lg">
            <img src="/odem-house-detail.jpg" alt="" className="w-full h-full object-cover opacity-90" />
          </div>

          <div className="text-center md:text-right">
            <p className="text-xl leading-10 text-[#5F4A35]">
              רבים מהדפוסים האלה לא התחילו כבעיה.
              <br />
              הם התחילו כניסיון חכם להגן עלינו.
            </p>

            <p className="mt-8 text-xl leading-10 text-[#5F4A35]">
              עם הזמן הם הפכו להיות כל כך מוכרים,
              עד שהתחלנו לחשוב שהם פשוט מי שאנחנו.
            </p>

            <div className="my-12 h-px w-24 bg-[#9C7A4B]/35 mx-auto md:mx-0" />

            <p className="text-3xl md:text-4xl font-serif leading-[1.35]">
              רובנו לא סובלים מהמנגנונים עצמם.
              <br />
              אנחנו סובלים מהרגע שבו התחלנו להאמין שהם הזהות שלנו.
            </p>
          </div>
        </div>
      </section>

      {/* Curiosity */}
      <section className="px-6 py-24 bg-white/35">
        <div className="max-w-4xl mx-auto text-center">
          <BrainMark />

          <p className="text-[#9C7A4B] tracking-[0.22em] mb-5">
            למה בכלל סקרנות?
          </p>

          <h2 className="text-4xl md:text-5xl font-serif leading-[1.25] text-[#3E3023]">
            איפה שיש סקרנות,
            <br />
            יש פחות אוטומט.
          </h2>

          <div className="mt-10 text-xl leading-10 text-[#5F4A35] space-y-6">
            <p>
              רובנו מנסים להשתנות דרך מאמץ:
              להפסיק לחשוב, להפסיק לפחד, להפסיק לדחות, להפסיק להתעצבן.
            </p>

            <p>
              אבל ככל שאנחנו נאבקים בעצמנו יותר,
              כך אנחנו בדרך כלל נשארים תקועים באותו מקום.
            </p>

            <p>
              סקרנות עובדת אחרת.
              כשהיא נכנסת - משהו מתרכך. נוצר מרווח.
              ובתוך המרווח הזה מתחילה להופיע בחירה.
            </p>
          </div>
        </div>
      </section>

      {/* What happens */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <BrainMark />

          <h2 className="text-4xl md:text-5xl font-serif mb-14">
            מה יקרה בערב?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["01", "נחקור מה מסתתר מתחת להגנות שלנו, בלי להילחם בהן"],
              ["02", "נזהה איך הדפוסים האלה מופיעים בזוגיות, בהורות ובחיי היומיום"],
              ["03", "נלמד איך סקרנות יכולה לפתוח מרווח חדש לפני שהאוטומט משתלט"],
            ].map(([number, text]) => (
              <div key={number} className="rounded-[2rem] bg-white/40 border border-[#9C7A4B]/15 p-8 shadow-sm">
                <div className="mb-8 text-[#9C7A4B] text-2xl font-light tracking-[0.3em]">
                  {number}
                </div>
                <p className="text-xl leading-9 text-[#5F4A35]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 py-24 bg-white/35">
        <div className="max-w-4xl mx-auto text-center">
          <BrainMark />

          <p className="text-[#9C7A4B] tracking-[0.22em] mb-5">
            עם מה תצאו הביתה?
          </p>

          <h2 className="text-4xl md:text-5xl font-serif leading-[1.25]">
            פחות תשובות גדולות.
            <br />
            יותר בהירות אמיתית.
          </h2>

          <div className="mt-10 text-xl leading-10 text-[#5F4A35] space-y-6">
            <p>
              ההמטרה בערב הזה,
              היא שתצאו ממנו עם שפה חדשה להבין את עצמכם.
            </p>

            <p>
              עם פחות אשמה. עם יותר חמלה.
              עם שאלות שימשיכו ללוות אתכם גם אחר כך.
            </p>

            <p>
              ועם כמה כלים פשוטים שיעזרו לכם לעצור רגע לפני שהאוטומט משתלט.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              ["01", "לא רק להבין, להצליח ליישם מנגנונים חדשים"],
              ["02", "דרך חדשה להסתכל על עצמכם"],
              ["03", "כלים פשוטים ליום שאחרי"],
            ].map(([number, item]) => (
              <div key={item} className="rounded-[2rem] bg-[#F8F3E8] border border-[#9C7A4B]/15 p-7 shadow-sm">
                <div className="mb-5 text-[#9C7A4B] text-xl font-light tracking-[0.3em]">
                  {number}
                </div>
                <p className="text-xl leading-8 text-[#5F4A35]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Odem House */}
      <section className="px-6 md:px-16 lg:px-24 py-20">
        <div className="relative overflow-hidden rounded-[3rem] min-h-[520px] flex items-center justify-center text-center text-[#F8F3E8]">
          <img src="/odem-house-wide.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-[#3E3023]/35" />

          <div className="relative z-10 px-6 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-serif mb-10">
              ODEM HOUSE | יפו
            </h2>

            <p className="text-xl leading-10">
              בחרתי לקיים את הערב ב־ODEM HOUSE לא במקרה.
              המרחב שבו אנחנו נמצאים משפיע על הדרך שבה אנחנו חושבים, מרגישים ונוכחים.
            </p>

            <p className="mt-8 text-xl leading-10">
              רציתי ליצור ערב שאפשר יהיה לנשום בו:
              לצאת לכמה שעות מהקצב היומיומי,
              לשבת עם כוס יין, אנשים טובים ושאלות שלא תמיד יש לנו זמן לעצור ולשאול.
            </p>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <BrainMark />

          <h2 className="text-4xl md:text-5xl font-serif mb-12">
            מה כולל הערב?
          </h2>

          <div className="grid md:grid-cols-2 gap-5 text-right">
            {[
              "ערב בוטיק שאורך כשעתיים וחצי",
              "מרחב יפואי ייחודי ואינטימי ב־ODEM HOUSE",
              "יין וכיבוד מפנק כחלק מהחוויה",
              "תרגילי התבוננות ושאלות שימשיכו ללוות אתכם",
              "כלים מעשיים לעבודה עם דפוסים ביומיום",
              "שיח פתוח, סיפורים ותוכן חווייתי",
              "מספר משתתפים מוגבל",
              "עלות השתתפות: 240 ₪",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] bg-white/40 border border-[#9C7A4B]/15 p-6 text-[#5F4A35] text-lg leading-8 flex items-center gap-4"
                >
                <img
                    src="/brain-icon.png"
                    alt=""
                    className="w-4 h-4 opacity-35 shrink-0"
                />

                <span>{item}</span>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="px-6 py-24 bg-white/35">
        <div className="max-w-3xl mx-auto text-center">
          <BrainMark />

          <h2 className="text-4xl md:text-5xl font-serif mb-10">
            חשוב לי לומר
          </h2>

          <div className="max-w-2xl mx-auto text-xl md:text-2xl font-serif leading-[1.9] text-[#3E3023]">
            <p>זה לא ערב שבו צריך לחשוף את עצמכם מול כולם.</p>

            <p className="mt-8">
              אפשר להשתתף, להקשיב, לחשוב ולקחת מהערב בדיוק את מה שמתאים לכם.
            </p>

            <p className="mt-8">
              המטרה היא לא לדבר על החיים האישיים מול קבוצה,
              אלא לקבל חוויה, שפה וכלים שאפשר לקחת הביתה.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <img src="/logo-placeholder.png" alt="שחר טקו פישר" className="w-28 mx-auto mb-8 opacity-90" />

          <p className="text-[#9C7A4B] tracking-[0.22em] mb-4">
            בהנחיית
          </p>

          <h2 className="text-4xl md:text-5xl font-serif">
            שחר טקו פישר
          </h2>

          <p className="mt-8 text-xl leading-10 text-[#5F4A35]">
            מלווה תהליכים רגשיים המשלבים גוף, מערכת עצבים, תודעה והורות מיודעת טראומה.
          </p>

          <Link href="/" className="mt-10 inline-flex rounded-full border border-[#9C7A4B]/40 px-8 py-4 text-[#9C7A4B] hover:bg-white/50 transition">
            לקריאה נוספת עליי
          </Link>
        </div>
      </section>

      {/* Register */}
      <section id="register" className="px-6 py-28 bg-[#9C7A4B] text-[#F8F3E8] text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-4xl md:text-5xl font-serif leading-[1.35]">
            אם היית מסתכל/ת על עצמך בסקרנות במקום בביקורת,
            <br />
            מה היית מגלה?
          </p>

          <div className="my-12 flex items-center justify-center gap-5">
            <span className="h-px w-16 bg-[#F8F3E8]/35" />
            <img src="/brain-icon.png" alt="" className="w-7 h-7 opacity-55 object-contain" />
            <span className="h-px w-16 bg-[#F8F3E8]/35" />
          </div>

          <p className="text-xl leading-9">
            {EVENT_PRICE}
            <br />
            {EVENT_DATE}
            <br />
            {EVENT_TIME}
          </p>

          <a href="https://wa.me/972525460444?text=היי שחר, אשמח לשמור מקום לערב מתחת למנגנוני ההגנה" className="mt-10 inline-flex rounded-full bg-[#F8F3E8] px-10 py-4 text-[#9C7A4B] shadow-md hover:shadow-lg transition">
            שמירת מקום
          </a>
        </div>
      </section>
    </main>
  );
}