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

        <div className="relative z-10 w-full max-w-4xl rounded-t-[12rem] rounded-b-[2.5rem] border border-[#C8A86A]/30 bg-[#F8F3E8]/75 px-6 py-14 md:px-12 md:py-18 shadow-2xl backdrop-blur-[2px]">
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
            כמה מהחיים שלך מנוהלים על ידי בחירה,
            <br />
            וכמה על ידי דברים שמעולם לא בחרת?
          </p>

          <BrainDivider />

          <p className="text-lg leading-9 text-[#5F4A35]">
            {EVENT_DATE}
            <br />
            {EVENT_TIME}
            <br />
            ODEM HOUSE | יפו
          </p>
          <p className="mt-4 text-xs md:text-sm text-[#9C7A4B]/80 tracking-[0.15em] uppercase">
            שעתיים וחצי • יין ונשנושים • אירוח מפנק
          </p>


          <a href="#register" className="mt-10 inline-flex rounded-full bg-[#9C7A4B] px-9 py-4 text-[#F8F3E8] shadow-md hover:shadow-lg transition">
            שמירת מקום 
          </a>

          <a
            href="#included"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-[#C8A86A]/45 bg-[#F8F3E8]/55 px-7 py-3 text-[#9C7A4B] shadow-sm backdrop-blur-[2px] hover:bg-white/70 hover:border-[#C8A86A] transition"
          >
            מה מחכה לנו
          </a>
        </div>
      </section>

      {/* Identification */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl md:text-5xl font-serif leading-[1.35] text-[#3E3023]">
            האם האופן שבו אתם מתנהגים,
            <br />
            באמת מעיד על מי שאתם?
          </p>

          <BrainDivider />

          <div className="mt-14 max-w-2xl mx-auto rounded-t-[5rem] rounded-b-[2rem] border border-[#C8A86A]/25 bg-white/25 px-7 py-10 md:px-10 md:py-12 shadow-sm">
            {[
              "למה אני בטוח שהפעם אגיב אחרת, ושוב עושה בדיוק אותו דבר?",
              "איך יכול להיות שאני חוזר לאותו כאב שוב ושוב?",
            ].map((question) => (
              <div
                key={question}
                className="py-7 border-b border-[#C8A86A]/20 last:border-b-0"
              >
                <p className="text-[1.1rem] md:text-[1.55rem] font-serif leading-[1.9] text-[#9C7A4B]">
                  {question}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 max-w-2xl mx-auto">
            <div className="h-px w-16 bg-[#C8A86A]/30 mx-auto mb-8" />

            <p className="text-xl md:text-2xl font-serif leading-[1.9] text-[#3E3023]">
              אולי הסיבה שאנחנו ממשיכים לחזור לאותם מקומות,
              <br className="hidden md:block" />
              היא שאנחנו ממשיכים להסתכל עליהם מאותה נקודת מבט.
            </p>

            <p className="mt-7 text-lg md:text-xl leading-9 text-[#5F4A35]">
              אז בואו נעצור רגע,
              <br className="hidden md:block" />
              לפני שאנחנו ממשיכים להאמין לכל מה שנראה לנו מובן מאליו.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="min-h-[340px] md:min-h-[520px] rounded-t-[12rem] rounded-b-[2.5rem] overflow-hidden border border-[#9C7A4B]/15 shadow-lg">
            <img
              src="/odem-house-detail.jpg"
              alt=""
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      <section className="relative min-h-[620px] flex items-end justify-center text-center overflow-hidden">
        <img
          src="/odem-evening.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />  

        <div className="absolute inset-0 bg-[#3E3023]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E3023]/90 via-[#3E3023]/30 to-transparent" />

        <div className="relative z-10 w-full px-6 pb-16 md:pb-20 text-[#F8F3E8]">
          <div className="mx-auto max-w-2xl rounded-t-[5rem] rounded-b-[2rem] border border-[#C8A86A]/25 bg-[#3E3023]/45 px-7 py-10 backdrop-blur-[2px]">
            <p className="text-[#C8A86A] tracking-[0.22em] mb-5 text-sm">
              רגע לעצור
            </p>

            <h2 className="text-4xl md:text-6xl font-serif leading-[1.25]">
              ערב אחד
              <br />
              לנשום בו אחרת
            </h2>
          </div>
        </div>
      </section>

      {/* Interpretation Moment */}
      <section className="px-6 py-20 md:py-28 bg-white/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl md:text-5xl font-serif leading-[1.45] text-[#3E3023]">
            מה אם רוב הסבל שלנו
            <br />
            לא נובע ממה שקורה?
          </p>

          <p className="mt-8 text-2xl md:text-4xl font-serif leading-[1.45] text-[#9C7A4B]">
            מה אם הוא נובע מהמהירות
            <br />
            שבה החלטנו שאנחנו יודעים מה קרה?
          </p>

          <div className="my-12 h-px w-24 bg-[#C8A86A]/45 mx-auto" />

          <div className="grid md:grid-cols-3 gap-5 text-right">
            {[
              ["בן הזוג שתק.", "הוא מזלזל."],
              ["הילד התפרץ.", "לא אכפת לו."],
              ["החברה לא חזרה להודעה.", "היא לא מעריכה."],
            ].map(([event, meaning]) => (
              <div
                key={event}
                className="rounded-t-[4rem] rounded-b-[2rem] bg-[#F8F3E8] border border-[#C8A86A]/25 p-7 shadow-sm"
              >
                <p className="text-xl leading-8 text-[#5F4A35]">
                  {event}
                </p>

                <div className="my-6 h-px w-12 bg-[#C8A86A]/35" />

                <p className="text-2xl font-serif leading-9 text-[#3E3023]">
                  {meaning}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-3xl mx-auto text-center">

            <div className="h-px w-20 bg-[#C8A86A]/35 mx-auto mb-10" />

            <p className="text-4xl md:text-5xl font-serif leading-[1.4] text-[#3E3023]">
              הערב הזה נועד לעצור
              <br />
              בדיוק ברגע הזה.
            </p>

            <p className="mt-10 text-2xl md:text-3xl font-serif leading-[1.7] text-[#9C7A4B]">
              ברגע שבו
              <br />
              מחשבה הופכת לעובדה.
            </p>

            <div className="h-px w-20 bg-[#C8A86A]/35 mx-auto my-10" />

            <p className="text-lg md:text-xl leading-10 text-[#5F4A35] max-w-2xl mx-auto">
              כי בין מה שקרה,
              לבין מה שאנחנו בטוחים שהוא אומר,
              נולד חלק גדול מהסבל שלנו.
            </p>

          </div>
        </div>
      </section>

      {/* What happens */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 mx-auto h-px w-20 bg-[#C8A86A]/45" />

          <h2 className="text-4xl md:text-5xl font-serif mb-14">
            במהלך הערב נבדוק
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["01", "איך המוח שלנו משכנע אותנו שהוא רואה את המציאות."],
              ["02", "למה אנחנו ממשיכים לחזור לאותם מקומות גם כשאנחנו יודעים יותר טוב."],
              ["03", "ומה קורה כשמחליפים ודאות בסקרנות."],
            ].map(([number, text]) => (
              <div key={number} className="rounded-[2rem] bg-white/40 border border-[#9C7A4B]/15 p-8 shadow-sm">
                <div className="mb-8 text-[#C8A86A] text-2xl font-light tracking-[0.3em]">
                {number}
              </div>
                <p className="text-xl leading-9 text-[#5F4A35]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core idea */}
      <section className="px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-3xl mx-auto text-center">

          <div className="text-center md:text-right">
            <p className="text-xl leading-10 text-[#5F4A35]">
              התחלתי להשתנות באמת 
            </p>

            <p className="mt-8 text-xl leading-10 text-[#5F4A35]">
              ביום שבו הפסקתי ״לדעת״ מה לא בסדר ולנסות לתקן
            </p>

            <p className="mt-8 text-xl leading-10 text-[#5F4A35]">
              והתחלתי לנסות להבין, למה זה נוצר?
            </p>

            <div className="my-12 h-px w-24 bg-[#C8A86A]/45 mx-auto md:mx-0" />

            <p className="text-3xl md:text-4xl font-serif leading-[1.35]">
              ברגע שמבינים למה משהו נוצר,
              קשה להמשיך לראות אותו באותה צורה. 
            </p>
          </div>
        </div>
      </section>

      {/* Curiosity */}
      <section className="px-6 py-24 bg-white/35">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 mx-auto h-px w-20 bg-[#C8A86A]/45" />

          <p className="text-[#9C7A4B] tracking-[0.22em] mb-5">
            אז למה כל כך קשה להשתנות?
          </p>

          <h2 className="text-4xl md:text-5xl font-serif leading-[1.25] text-[#3E3023]">
            רמז: איפה שאין סקרנות,
            <br />
            יש יותר אוטומט.
          </h2>

          <div className="mt-10 text-xl leading-10 text-[#5F4A35] space-y-6">

            <p>
              אם כבר הבנתי את הבעיה,
              למה אני עדיין מוצאת את עצמי באותו מקום?
            </p>

            <p>
              לפעמים דווקא הדברים שאנחנו הכי בטוחים לגביהם,
              הם הדברים שהכי קשה לנו לראות.
            </p>

          </div>
        </div>
      </section>

      

      {/* Experience */}
      <section className="px-6 py-24 bg-white/35">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 mx-auto h-px w-20 bg-[#C8A86A]/45" />

          <p className="text-[#C8A86A] tracking-[0.22em] mb-5">
            עם מה תצאו הביתה?
          </p>

          <h2 className="text-4xl md:text-5xl font-serif leading-[1.25]">
            עם רגע אחד
          </h2>

          <div className="mt-10 text-xl leading-10 text-[#5F4A35] space-y-6">
            <p>
               שבו אתם קולטים
              שלא כל מה שנראה כמו המציאות,
              הוא בהכרח המציאות.
            </p>

          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              ["01", " לזהות את הרגע שבו אנחנו פועלים על אוטומט"],
              ["02", "לראות סיטואציות מוכרות בזווית חדשה"],
              ["03", "לקחת הביתה שאלות וכלים שילוו אתכם גם בחיים"],
            ].map(([number, item]) => (
              <div key={item} className="rounded-[2rem] bg-[#F8F3E8] border border-[#9C7A4B]/15 p-7 shadow-sm">
                <div className="mb-5 text-[#C8A86A] text-xl font-light tracking-[0.3em]">
                  {number}
                </div>
                <p className="text-xl leading-8 text-[#5F4A35]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-20">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-[#9C7A4B] tracking-[0.22em] mb-5">
            המקום שבו ניפגש
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mb-14">
            חלק מהקסם של הערב
            <br />
            מתחיל במרחב הייחודי שבו נשהה
          </h2>

        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-[2fr_1fr] gap-5">

          <div className="overflow-hidden rounded-[3rem]">
            <img
              src="/odem-gallery-1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid gap-5">

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="/odem-gallery-2.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="/odem-gallery-3.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>

      </section>

      {/* Odem House */}
      <section className="px-6 md:px-16 lg:px-24 py-20">
        <div className="relative overflow-hidden rounded-[3rem] min-h-[620px] md:min-h-[560px] flex items-end md:items-center justify-center text-center text-[#F8F3E8]">
          <img
            src="/odem-house-wide.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />

          <div className="absolute inset-0 bg-[#3E3023]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3E3023]/80 via-[#3E3023]/45 to-[#3E3023]/30" />

          <div className="relative z-10 px-7 py-12 md:py-16 max-w-3xl">
            <p className="text-[#C8A86A] tracking-[0.22em] mb-4 text-sm">
              ODEM HOUSE
            </p>

            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-[1.2]">
              יפו
            </h2>

            <div className="mx-auto mb-8 h-px w-20 bg-[#C8A86A]/45" />

            <p className="text-xl md:text-2xl leading-10">
              בחרתי לקיים את הערב ב־ODEM HOUSE
              כי המקום עצמו כבר מכניס אותנו לאווירה אחרת.
            </p>

            <p className="mt-6 text-lg md:text-xl leading-9 text-[#F8F3E8]/90">
              חלל יפואי עתיק, יפהפה ואינטימי.
              מקום שאפשר לעצור בו רגע,
              לשבת עם כוס יין,
              ולפגוש שאלות שבדרך כלל אין לנו זמן לשאול.
            </p>
          </div>
        </div>
      </section>

      {/* Included */}
      <section id="included" className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 mx-auto h-px w-20 bg-[#C8A86A]/45" />

          <h2 className="text-4xl md:text-5xl font-serif mb-12">
              אז מה בעצם כולל הערב?
          </h2>

          <div className="grid md:grid-cols-2 gap-5 text-right">
            {[
              "ערב בוטיק שאורך כשעתיים וחצי",
              "מרחב יפואי ייחודי ואינטימי ב־ODEM HOUSE",
              "יין ונשנושים מפנקים וטריים כחלק מהחוויה",
              "תרגילי התבוננות ושאלות שימשיכו ללוות אתכם",
              "כלים מעשיים לעבודה עם דפוסים ביומיום",
              "שיח פתוח, סיפורים ותוכן חווייתי",
              "מספר משתתפים מוגבל",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] bg-white/40 border border-[#9C7A4B]/15 p-6 text-[#5F4A35] text-lg leading-8 flex items-center gap-4"
                >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C8A86A] shrink-0" />


                <span>{item}</span>
                </div>
            ))}
          </div>

          <div className="mt-12 text-center">

            <div className="h-px w-20 bg-[#C8A86A]/35 mx-auto mb-8" />

            <p className="text-2xl md:text-3xl font-serif text-[#3E3023]">
              עלות ההשתתפות
            </p>

            <p className="mt-4 text-4xl font-serif text-[#9C7A4B]">
              240 ₪
            </p>

          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="px-6 py-24 bg-white/35">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 mx-auto h-px w-20 bg-[#C8A86A]/45" />

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

          <p className="mt-8 text-xl leading-10 text-[#5F4A35]">
            אני לא באה לתת את כל התשובות.
            אני באה להאיר את המקומות שבהם הפסקנו לשאול שאלות.
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