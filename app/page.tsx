"use client";

import React, { FormEvent } from "react";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  Leaf,
  MessageCircle,
  Sparkles,
  Brain,
  Waves,
  Baby,
  ShieldCheck,
  GraduationCap,
  Mail,
  Phone,
} from "lucide-react";

const WHATSAPP_NUMBER = "972525460444"; // TODO: להחליף למספר שלך בפורמט בינלאומי, בלי + ובלי מקפים
const PHONE_NUMBER = "052-5460444"; // TODO: להחליף לטלפון שלך
const EMAIL = "ShaharTakoFisher8@gmail.com"; // TODO: להחליף למייל שלך
const INSTAGRAM = "https://www.instagram.com/shahar_tako_fisher?igsh=cmgzdnozNTN4dTB3&utm_source=qr"; // TODO: להחליף לקישור האינסטגרם שלך

const painCards = [
  "אתם מתפקדים, אבל בפנים מרגישים שאין לכם אוויר.",
  "הראש ממשיך לעבוד גם כשכל מה שאתם רוצים זה רגע שקט.",
  "אתם מבינים הרבה דברים על עצמכם, אבל עדיין מרגישים תקועים",
  "אתם רגילים להיות חזקים בשביל כולם, גם כשמשהו בתוככם כבר מבקש להניח.",
  "אתם רוצים להיות הורים, בני זוג או אנשים רגועים יותר, אבל משהו חזק מכם משתלט ברגע האמת",
  "אתם מתגעגעים להרגיש ולא רק לשרוד.",
];

const approachItems = [
  {
    icon: Brain,
    title: "מחשבות ואמונות",
    text: "מאחורי חשיבת יתר יש לעיתים ניסיון להרגיש בטוחים. מאחורי שליטה יש פחד לאבד יציבות. ומאחורי ביקורת יש לא פעם בושה שמבקשת הגנה.",
  },
  {
    icon: Waves,
    title: "גוף ומערכת העצבים",
    text: "הגוף זוכר. מערכת העצבים מגיבה. חוויות ילדות הופכות לדפוסי הישרדות - גם הרבה אחרי שהסכנה כבר לא שם.",
  },
  {
    icon: Heart,
    title: "רגש ונוכחות",
    text: "שינוי עמוק לא קורה רק דרך הבנה. הוא מתחיל כשנוצר מרחב בטוח יותר לנשום, להרגיש, להבין ולחוות את החיים אחרת.",
  },
  {
    icon: Baby,
    title: "הורות וקשרים",
    text: "הורות היא לא רק ניסיון לגרום לילד להתנהג בהתאם לציפיות ואמונות שלנו. היא מפגש בין עולמות רגשיים, דפוסים ופחדים שעוברים מדור לדור.",
  },
];

const credentials = [
  "B.Sc במדעי המחשב",
  "Master NLP",
  "מאמנת אישית, זוגית ומשפחתית מיודעת טראומה",
  "מדריכת הורים לילדים עם ADHD ו-ODD ",
  "כלים מעולמות CBT",
  "עבודה בהשראת Polyvagal Theory",
  "תקשורת רגשית ומערכות יחסים",
  "שילוב בין מדע, גוף, תודעה ואינטואיציה",
  "ליווי הורים ואנשים בתהליכי עומק ושינוי",
];

const processSteps = [
  {
    title: "מתחילים במה שקורה באמת",
    text: "לא במה ש׳אמור׳ להיות קשה, אלא במקום המדויק שבו החיים שלך כרגע מכאיבים, מציפים, מעייפים או סוגרים אותך.",
  },
  {
    title: "מזהים את מנגנון ההגנה",
    text: "מה הגוף למד לעשות כדי להגן עלייך? להילחם, לרצות, להחזיק, להיעלם, לשלוט, לחשוב בלי סוף או להמשיך לתפקד בכל מחיר.",
  },
  {
    title: "עובדים עם כל המערכת",
    text: "שינוי אמיתי מתחיל כשהמערכת מרגישה בטוחה יותר.",
  },
  {
    title: "חוזרים להרגיש בבית",
    text: "לא כדי להפוך למישהו אחר, אלא כדי להרגיש סוף סוף יותר בבית בתוך עצמך - עם יותר נשימה, נוכחות וחופש פנימי.",
  },
];

export default function ShaharLandingPage() {
    const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const whatsappMessage = encodeURIComponent(
      `היי שחר, אשמח לשוחח איתך.\n\nשם: ${name}\nטלפון: ${phone}\nמה חשוב לי שתדעי: ${message}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, "_blank");
  }
  return (
    <main dir="rtl" className="min-h-screen bg-[#F8F3E8] text-[#4B3A2A] font-sans overflow-hidden">
      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className="fixed bottom-3 left-3 md:bottom-5 md:left-5 z-50 flex items-center gap-2 rounded-full bg-[#9C7A4B] px-5 py-3 text-[#F8F3E8] shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle size={20} />
        שלחי הודעה
      </a>

      {/* Header */}
      <header className="relative z-40 px-6 md:px-12 lg:px-20 pt-8 md:py-5">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center md:items-start justify-between gap-5">
          <div className="flex-1 text-center md:text-right md:pt-10">
            <h2 className="text-[#9C7A4B] tracking-wide text-2xl md:text-3xl font-light mb-5">
              שחר טקו פישר
            </h2>

            <p className="text-[13px] md:text-base tracking-[0.14em] md:tracking-[0.22em] leading-8 text-[#9C7A4B]">
              B.Sc במדעי המחשב | MASTER NLP | מדריכת הורים (ADHD ODD) |
              <br />
              מאמנת אישית, זוגית ומשפחתית מיודעת טראומה
            </p>
          </div>

          <a href="#top" className="shrink-0 md:mr-8">
            <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden">
              <img
                src="/logo-placeholder.png"
                alt="הלוגו של שחר"
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </a>

          </div>
          </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 md:px-10 lg:px-20 pt-10 md:pt-32 pb-16">        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl relative z-10 text-center lg:text-right"
        >
          <h1 className="text-3xl md:text-5xl lg:text-[4.2rem] leading-[1.15] font-serif text-[#3E3023] max-w-2xl">
            מאחורי כל דפוס הישרדות יש אדם שמנסה להרגיש בטוח בעולם.
          </h1>
          <p className="mt-7 text-lg md:text-xl leading-9 text-[#5F4A35] max-w-xl">
            רוב האנשים שאני פוגשת כבר יודעים מה נכון לעשות.

            הם קראו ספרים, שמעו פודקאסטים, ניסו להבין את עצמם ולשנות את החיים שלהם.

            ובכל זאת ברגעים מסוימים הם מוצאים את עצמם חוזרים לאותם דפוסים.

            והסיבה לכך היא, שחלקים עמוקים יותר במערכת שלהם עדיין מנסים לשרוד.

          </p>
          <p className="mt-5 text-base md:text-lg leading-8 text-[#6B5944] max-w-xl">
            אני מלווה אנשים שרוצים להפסיק להילחם בעצמם, להבין מה מפעיל אותם באמת, ולחזור להרגיש טוב.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9C7A4B] px-7 py-4 text-[#F8F3E8] shadow-md hover:shadow-lg transition" href="#contact">
              אני רוצה לדבר איתך <ArrowLeft size={18} />
            </a>
            <a className="inline-flex items-center justify-center rounded-full border border-[#9C7A4B]/40 px-7 py-4 text-[#9C7A4B] hover:bg-white/40 transition" href="#approach">
              להבין איך זה עובד
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex justify-center lg:justify-start lg:pl-4"        >
          <div className="w-full max-w-[300px] md:max-w-[360px] lg:max-w-[390px] aspect-[4/5] rounded-[2.5rem] bg-white/45 border border-[#9C7A4B]/20 shadow-xl overflow-hidden">
            <img
              src="/shaharportrait.png"
              alt="שחר טקו"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </section>

      {/* Atmosphere Image */}
      <section className="px-6 md:px-14 lg:px-24 py-8">
        <div className="relative overflow-hidden rounded-[2.5rem] h-[240px] md:h-[320px] shadow-sm border border-[#9C7A4B]/10 bg-[#F8F3E8]">

          <img
            src="/calm-space.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-80 scale-[1.01]"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-[#F8F3E8]/35 via-[#F8F3E8]/10 to-transparent" />

          <div className="absolute inset-0 ring-1 ring-inset ring-[#9C7A4B]/10 rounded-[2.5rem]" />
        </div>
      </section>


      {/* Mirror */}
      <section className="px-6 md:px-14 lg:px-24 py-24 bg-white/35">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#3E3023]">
            זה לא עוזר לך להמשיך לקבל עצות מה נכון לעשות
            <br />
            כי ברגע האמת הגוף שלך פועל באופן אוטומטי. 
          </h2>
          <p className="mt-7 text-lg leading-9 text-[#5F4A35] max-w-3xl mx-auto">
            הרבה מהתגובות שלנו לא נולדו מתוך חולשה.
            הן נולדו מתוך ניסיון לשרוד.
          </p>

          <div className="mt-14 flex flex-col md:grid md:grid-cols-3 gap-5 text-center">
            {painCards.map((item, index) => (
              <div
                key={index}
                className="w-full rounded-[2rem] bg-[#F8F3E8] border border-[#9C7A4B]/15 p-7 shadow-sm flex flex-col items-center justify-center gap-5 min-h-[170px]"
              >
                <img
                  src="/brain-icon.png"
                  alt=""
                  className="w-14 h-14 opacity-65 object-contain"
                />

                <p className="text-lg leading-8 text-[#5F4A35]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="px-6 md:px-14 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#9C7A4B] mb-4">הגישה שלי</p>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight text-[#3E3023]">
              לא רק להבין את הכאב.
              <br />
              להתחיל לשחרר אותו מהמקום שבו הוא חי.
            </h2>
          </div>
          <div className="text-lg leading-9 text-[#5F4A35] space-y-6">
            <p>
              שינוי אמיתי קורה כשהמערכת כולה מקבלת חוויה חדשה - לא רק הראש.
            </p>
              לכן אני לא עובדת רק עם מחשבות.
              אני מסתכלת על האדם כמערכת שלמה - גוף, רגש, מערכת עצבים, מערכות יחסים, חוויות ילדות והאמונות שנבנו לאורך החיים.
              כשהחלקים האלה מתחילים להתחבר מחדש, נוצר שינוי עמוק ויציב יותר.
            <p>
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {approachItems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[2rem] bg-white/45 border border-[#9C7A4B]/15 p-7 shadow-sm">
              <Icon className="text-[#9C7A4B] mb-5" size={30} />
              <h3 className="text-xl font-serif mb-3 text-[#3E3023]">{title}</h3>
              <p className="leading-8 text-[#5F4A35]">{text}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Atmosphere Image */}
      <section className="px-6 md:px-14 lg:px-24 py-8">
        <div className="relative overflow-hidden rounded-[2.5rem] h-[240px] md:h-[320px] shadow-sm border border-[#9C7A4B]/10 bg-[#F8F3E8]">

          <img
            src="/soft-home.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-80 scale-[1.01]"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-[#F8F3E8]/35 via-[#F8F3E8]/10 to-transparent" />

          <div className="absolute inset-0 ring-1 ring-inset ring-[#9C7A4B]/10 rounded-[2.5rem]" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-14 lg:px-24 py-24 bg-white/35">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.35fr] gap-14 items-start">
          <div className="rounded-[3rem] bg-[#F8F3E8] border border-[#9C7A4B]/15 p-8 shadow-sm sticky top-8 text-center flex flex-col items-center">
            <Heart className="text-[#9C7A4B] mb-5" size={34} />
            <h2 className="text-3xl font-serif mb-5 text-[#3E3023]">קצת עליי</h2>
            <div className="space-y-8 leading-[2.15] text-[#5F4A35] text-center max-w-3xl mx-auto">

              <p>
                אני שחר.
                במשך שנים חיפשתי תשובות.
                למדתי, חקרתי, קראתי, התפתחתי וניסיתי להבין למה אנשים ממשיכים לסבול גם כשהם יודעים בדיוק מה נכון לעשות.
              </p>

              <p>
                גם אני חייתי מתוך מנגנוני הגנה שלא תמיד ידעתי לזהות.
                ריצוי, דריכות, צורך בשליטה, מחשבות שלא מפסיקות לעבוד, וניסיון להיות כל מה שהסביבה צריכה.
              </p>

              <p>
                עם השנים הבנתי שהשינוי המשמעותי ביותר לא קרה כשהצלחתי להשתנות.
                הוא קרה כשהתחלתי להיזכר במי שהייתי לפני כל מה שנבנה כדי להגן עליי.
              </p>

              <p>
                מאז אני חוקרת את אותה שאלה.
                איך אנשים חוזרים לעצמם?
              </p>

              <p>
                הדרך שלי משלבת בין ידע מקצועי, הבנה עמוקה של נפש האדם, עבודה עם הגוף ומערכת העצבים, והמסע האישי שעברתי בעצמי.
              </p>
              
               <p>
                  אני לא מאמינה שאנשים מקולקלים.
                  אני מאמינה שרובנו פשוט התרחקנו מעצמנו.
              </p>

              <p>
                והעבודה המשותפת היא לא להפוך למישהו אחר.
                אלא להבין מתי ולמה התרחקנו מעצמנו ואיך חוזרים.
              </p>

            </div>
          </div>

          <div className="space-y-7 text-lg leading-9 text-[#5F4A35]">

            <h3 className="text-2xl font-serif text-[#3E3023] mb-6 text-center">
              הכשרות ותחומי התמחות
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 pt-5">
              {credentials.map((item) => (
                <div key={item} className="rounded-2xl bg-[#F8F3E8] border border-[#9C7A4B]/15 p-5 text-[#5F4A35] flex items-start gap-3">
                  <GraduationCap className="text-[#9C7A4B] shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="px-6 md:px-14 lg:px-24 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#9C7A4B] mb-4">איך זה עובד</p>
          <h2 className="text-3xl md:text-5xl font-serif text-[#3E3023]">תהליך עדין. עמוק. מאוד מעשי.</h2>
          <p className="mt-7 text-lg leading-9 text-[#5F4A35] max-w-3xl mx-auto">
            זה לא תהליך שבו אני אומרת מי אתם או מה אתם צריכים לעשות. זה תהליך שבו אנחנו מקשיבים יחד למה שהמערכת שלך כבר מנסה לומר - ומתחילים ליצור שם יותר בהירות, חופש וביטחון.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-5">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-[2rem] bg-white/45 border border-[#9C7A4B]/15 p-8 shadow-sm">
              <div className="w-11 h-11 rounded-full bg-[#9C7A4B] text-[#F8F3E8] flex items-center justify-center mb-5">{index + 1}</div>
              <h3 className="text-2xl font-serif mb-4 text-[#3E3023]">{step.title}</h3>
              <p className="text-lg leading-8 text-[#5F4A35]">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gentle proof */}
      <section className="px-6 md:px-14 lg:px-24 py-24 bg-white/35">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="mx-auto text-[#9C7A4B] mb-6" size={38} />
          <h2 className="text-3xl md:text-5xl font-serif text-[#3E3023]">
            המטרה היא לא להפוך אותך לאדם אחר.
            <br />
            אלא להחזיר אותך לעצמך.
          </h2>
          <p className="mt-7 text-lg leading-9 text-[#5F4A35]">
            פחות מלחמה פנימית.
            יותר שקט בגוף.
            יותר יכולת להרגיש, לנשום ולהגיב אחרת.
          </p>
        </div>
      </section>
      {/* Atmosphere Image */}
      <section className="px-6 md:px-14 lg:px-24 py-8">
        <div className="relative overflow-hidden rounded-[2.5rem] h-[240px] md:h-[320px] shadow-sm border border-[#9C7A4B]/10 bg-[#F8F3E8]">

          <img
            src="/nature-light.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-80 scale-[1.01]"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-[#F8F3E8]/35 via-[#F8F3E8]/10 to-transparent" />

          <div className="absolute inset-0 ring-1 ring-inset ring-[#9C7A4B]/10 rounded-[2.5rem]" />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-14 lg:px-24 py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#3E3023]">
            אם משהו כאן נגע בך, אפשר להתחיל בשיחה לבדיקת התאמה.
          </h2>

          <p className="mt-6 text-lg leading-9 text-[#5F4A35]">
            לא צריך לדעת להסביר הכול. לא צריך להגיע מסודרים. מספיק להרגיש שיש משהו בתוכך שמבקש דרך אחרת.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9C7A4B] px-8 py-4 text-[#F8F3E8] shadow-md hover:shadow-lg transition"
            >
              <MessageCircle size={20} />
              שלח/י לי הודעה בוואטסאפ
            </a>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#9C7A4B]/40 px-8 py-4 text-[#9C7A4B] hover:bg-white/40 transition"
            >
              <Phone size={18} />
              התקשר/י אליי
            </a>
          </div>

          <form
            onSubmit={handleContactSubmit}
            className="mt-12 grid gap-4 text-right bg-white/45 border border-[#9C7A4B]/15 rounded-[2rem] p-6 md:p-8 shadow-sm"
          >
            <input
              name="name"
              required
              className="rounded-full px-5 py-4 bg-[#F8F3E8] border border-[#9C7A4B]/20 outline-none focus:border-[#9C7A4B]"
              placeholder="שם מלא"
            />

            <input
              name="phone"
              required
              className="rounded-full px-5 py-4 bg-[#F8F3E8] border border-[#9C7A4B]/20 outline-none focus:border-[#9C7A4B]"
              placeholder="טלפון"
            />

            <textarea
              name="message"
              className="rounded-[1.5rem] px-5 py-4 bg-[#F8F3E8] border border-[#9C7A4B]/20 outline-none focus:border-[#9C7A4B] min-h-32"
              placeholder="מה חשוב לי שתדעי?"
            />

            <button
              type="submit"
              className="rounded-full bg-[#9C7A4B] px-7 py-4 text-[#F8F3E8] shadow-md hover:shadow-lg transition"
            >
              שליחת פרטים בוואטסאפ
            </button>

            <p className="text-center text-sm text-[#7A654D] leading-7">
              אפשר גם לפנות ישירות: {PHONE_NUMBER} · {EMAIL}
            </p>
          </form>

          <div className="mt-10 flex items-center justify-center gap-5 text-[#9C7A4B] text-sm">
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:underline">
              <Mail size={16} /> מייל
            </a>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-80 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37a4 4 0 1 1-7.75 1.27 4 4 0 0 1 7.75-1.27z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              אינסטגרם
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-14 lg:px-24 py-10 border-t border-[#9C7A4B]/15 text-center text-sm text-[#7A654D]">
        <p>© שחר טקו פישר · ליווי ואימון רגשי מיודע טראומה, גוף, מערכת עצבים והורות בפרט לילדים עם adhd odd </p>
      </footer>
    </main>
  );
}
