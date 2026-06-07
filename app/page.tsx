"use client";

import React, { FormEvent } from "react";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  Leaf,
  MessageCircle,
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
  };

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
      <header className="relative z-40 px-6 md:px-12 lg:px-20 pt-6">
        <div className="mx-auto max-w-7xl flex items-center justify-center md:justify-start">
          <a href="#top" className="shrink-0">
            <div className="w-20 h-20 md:w-24 md:h-24 overflow-hidden">
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
      <section
        id="top"
        className="relative min-h-[calc(100vh-100px)] flex flex-col-reverse lg:flex-row items-center justify-between gap-14 px-6 md:px-10 lg:px-20 pt-8 md:pt-16 pb-20"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-[-120px] w-[360px] h-[360px] rounded-full bg-white/35 blur-3xl" />
          <div className="absolute bottom-10 left-[-140px] w-[420px] h-[420px] rounded-full bg-[#9C7A4B]/10 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl relative z-10 text-center lg:text-right"
        >
          <h2 className="text-[#9C7A4B] text-2xl md:text-3xl font-light mb-3">
            שחר טקו פישר
          </h2>

          <p className="text-[12px] md:text-sm tracking-[0.18em] leading-7 text-[#9C7A4B]/85 mb-5">
            גוף · רגש · מערכת העצבים · חופש פנימי
          </p>

          <div className="w-16 h-px bg-[#9C7A4B]/30 mx-auto lg:mx-0 mb-7" />

          <p className="text-[12px] md:text-sm tracking-[0.12em] md:tracking-[0.18em] leading-7 text-[#9C7A4B]/75 mb-8">
            B.Sc במדעי המחשב | MASTER NLP | מדריכת הורים ADHD ODD
            <br />
            מאמנת אישית, זוגית ומשפחתית מיודעת טראומה
          </p>

          <h1 className="text-[2.35rem] md:text-5xl lg:text-[4.3rem] leading-[1.22] md:leading-[1.16] font-serif text-[#3E3023] max-w-2xl mx-auto lg:mx-0">
            מאחורי כל דפוס הישרדות יש אדם שמנסה להרגיש בטוח בעולם.
          </h1>

          <p className="mt-7 text-base md:text-xl leading-8 md:leading-9 text-[#5F4A35] max-w-xl mx-auto lg:mx-0">
            רוב האנשים שאני פוגשת כבר עשו דרך. הם למדו, קראו, ניסו להבין את עצמם.
            ובכל זאת, ברגעים מסוימים הם מוצאים את עצמם חוזרים לאותם דפוסים.
          </p>

          <div className="mt-8 max-w-xl mx-auto lg:mx-0 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-12 bg-[#9C7A4B]/25" />
              <Leaf className="text-[#9C7A4B]/65" size={22} />
              <span className="h-px w-12 bg-[#9C7A4B]/25" />
            </div>

            <p className="text-base md:text-xl leading-8 md:leading-10 text-[#5F4A35]">
              זה לא קורה מתוך חולשה,
              <br />
              אלא מתוך חלקים בתוכם, שעדיין מנסים להגן עליהם.
            </p>
          </div>

          <p className="mt-6 text-base md:text-lg leading-8 text-[#6B5944] max-w-xl mx-auto lg:mx-0">
            אני מלווה אנשים שרוצים להבין מה באמת מפעיל אותם, להפסיק להילחם בעצמם,
            ולחזור להרגיש יותר חופש, חיבור ושקט.
          </p>

          <div className="mt-10 flex flex-col items-center lg:items-start gap-5">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9C7A4B] px-8 py-4 text-[#F8F3E8] shadow-md hover:shadow-lg hover:scale-[1.02] transition"
              href="#contact"
            >
              אני רוצה להתחיל בשיחה <ArrowLeft size={18} />
            </a>

            <a
              className="text-[#9C7A4B] border-b border-[#9C7A4B]/30 pb-1 hover:border-[#9C7A4B] transition"
              href="#process"
            >
              לקרוא איך התהליך עובד
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex justify-center lg:justify-start lg:pl-4"
        >
          <div className="relative w-full max-w-[350px] md:max-w-[450px] lg:max-w-[520px]">
            <div className="absolute -top-10 -right-10 w-[94%] h-[94%] rounded-[45%_55%_60%_40%/40%_40%_60%_60%] bg-[#9C7A4B]/10 blur-sm" />
            <div className="absolute -bottom-8 -left-8 w-[80%] h-[80%] rounded-[60%_40%_45%_55%/55%_60%_40%_45%] border border-[#9C7A4B]/20" />

            <div className="absolute top-8 -right-5 hidden md:block w-28 h-px rotate-[-22deg] bg-[#9C7A4B]/20" />
            <div className="absolute bottom-16 -left-6 hidden md:block w-24 h-px rotate-[28deg] bg-[#9C7A4B]/20" />

            <Leaf className="absolute -bottom-3 right-7 text-[#9C7A4B]/35" size={34} />

            <div className="relative aspect-[3/4] overflow-hidden rounded-[3.2rem] border border-white/60 bg-white/40 shadow-2xl">
              <img
                src="/shaharportrait.png"
                alt="שחר טקו פישר"
                className="w-full h-full object-cover object-center"
              />
            </div>
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
      <section id="approach" className="px-6 md:px-14 lg:px-24 py-20 md:py-24">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#9C7A4B] mb-5 tracking-[0.18em] text-sm md:text-base">
            הגישה שלי
          </p>

          <h2 className="text-3xl md:text-5xl font-serif leading-[1.25] text-[#3E3023] max-w-3xl mx-auto">
            לא רק להבין את הכאב.
            <br />
            להתחיל לשחרר אותו מהמקום שבו הוא חי.
          </h2>

          <div className="mt-10 rounded-[2.5rem] bg-white/40 border border-[#9C7A4B]/15 shadow-sm px-6 py-8 md:px-12 md:py-10 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-9 text-[#5F4A35]">
              שינוי אמיתי קורה כשהמערכת כולה מקבלת חוויה חדשה,
              לא רק הראש.
            </p>

            <div className="my-8 h-px w-20 bg-[#9C7A4B]/25 mx-auto" />

            <p className="text-base md:text-lg leading-9 text-[#5F4A35]">
              לכן אני לא עובדת רק עם מחשבות. אני מסתכלת על האדם כמערכת שלמה:
              גוף, רגש, מערכת עצבים, מערכות יחסים, חוויות ילדות והאמונות שנבנו לאורך החיים.
            </p>

            <p className="mt-6 text-base md:text-lg leading-9 text-[#5F4A35]">
              כשהחלקים האלה מתחילים להתחבר מחדש,
              נוצר שינוי עמוק ויציב יותר.
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

      {/* Breathing Moment */}
      <section className="px-6 md:px-14 lg:px-24 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-14 bg-[#9C7A4B]/20" />
            <Leaf className="text-[#9C7A4B]/55" size={24} />
            <span className="h-px w-14 bg-[#9C7A4B]/20" />
          </div>

          <p className="text-[2rem] md:text-[3rem] font-serif leading-[1.8] text-[#3E3023]">
            לפעמים לא צריך ללמוד עוד.
            <br />
            צריך מקום בטוח מספיק
            <br />
            כדי להיזכר במי שאנחנו.
          </p>
        </div>
      </section>

     {/* About */}
    <section id="about" className="px-6 md:px-14 lg:px-24 py-24 bg-white/35">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-14 items-start">
        <div className="rounded-[3rem] bg-[#F8F3E8] border border-[#9C7A4B]/15 p-8 md:p-10 shadow-sm text-center">
          <Heart className="text-[#9C7A4B] mb-5 mx-auto" size={34} />

          <h2 className="text-3xl md:text-4xl font-serif text-[#3E3023] mb-10">
            קצת עליי
          </h2>

          <div className="space-y-7 text-lg leading-9 text-[#5F4A35] max-w-2xl mx-auto">

            <p>
              במשך שנים עשיתי את מה שנראה נכון, עמדתי בציפיות ואפילו הרבה מעבר,
              אבל מה שהרגשתי היה בעיקר עייפות, תסכול וניתוק.
              לא הרגשתי באמת חופשיה ובכלל לא עצרתי לשאול מה אני רוצה לעשות.
              פעלתי בעיקר על אוטומט.
            </p>

            <div className="my-8 h-px w-20 bg-[#9C7A4B]/25 mx-auto" />

            <p>
              אחרי תהליך שעברתי ובעקבותיו החיים שלי באמת השתנו מהקצה לקצה,
              גיליתי שרבים מהדפוסים שניהלו אותי לא היו מי שאני,
              אלא מנגנוני הגנה שלמדתי לאורך החיים כדי להרגיש בטוחה,
              אהובה ושייכת.
            </p>

            <blockquote className="my-9 text-xl md:text-2xl leading-10 font-serif text-[#3E3023]">
              רציתי להבין מה הגורם הקיצוני לשינוי שעברתי
              <br />
              במעבר מחיים בתחושת הישרדות , לחיים בחופש ובחירה.
            </blockquote>

            <div className="my-8 h-px w-20 bg-[#9C7A4B]/25 mx-auto" />

            <p>
              המסע שלי להבין את עצמי הוביל אותי ללימודים, למחקר ולעבודה עמוקה
              עם טראומה, מערכת העצבים, הורות, זוגיות, תקשורת ותהליכי שינוי.
            </p>

            <p>
              יותר מכל תעודה, אני מגיעה מתוך מסע אישי שעבר דרך הילדות,
              זוגיות והורות, שהרחיק אותי ולבסוף החזיר אותי לעצמי.
            </p>

            <div className="my-8 h-px w-20 bg-[#9C7A4B]/25 mx-auto" />

            <p>
              היום אני מאמינה שרוב האנשים לא צריכים להפוך למישהו אחר.
              הם רק צריכים להבין מה באמת שייך להם,
              ומה נבנה כדי להגן עליהם.
            </p>

            <p>
              ההישג הכי חשוב בעבודה שלי הוא לראות את הרגע שבו אדם מפסיק
              להילחם בעצמו ומתחיל להרגיש חופשי להיות מי שהוא.
            </p>

          </div>
        </div>

          <div className="space-y-7 text-lg leading-9 text-[#5F4A35]">
            <h3 className="text-2xl font-serif text-[#3E3023] mb-6 text-center">
              הכשרות ותחומי התמחות
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 pt-5">
              {credentials.map((item) => (
                <div key={item} className="flex items-start gap-3 border-b border-[#9C7A4B]/15 pb-4 text-[#5F4A35]">
                  <GraduationCap className="text-[#9C7A4B] shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative px-6 md:px-14 lg:px-24 py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-[-160px] w-[360px] h-[360px] rounded-full bg-white/35 blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-[#9C7A4B] mb-4 tracking-[0.16em]">איך זה עובד</p>
          <h2 className="text-3xl md:text-5xl font-serif text-[#3E3023]">תהליך עדין. עמוק. מאוד מעשי.</h2>
          <p className="mt-7 text-lg leading-9 text-[#5F4A35] max-w-3xl mx-auto">
            זה לא תהליך שבו אני אומרת מי אתם או מה אתם צריכים לעשות. זה תהליך שבו אנחנו מקשיבים יחד למה שהמערכת שלך כבר מנסה לומר - ומתחילים ליצור שם יותר בהירות, חופש וביטחון.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-16 relative z-10">
          <div className="absolute right-[21px] top-4 bottom-4 w-px bg-[#9C7A4B]/20" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative pr-16">
                <div className="absolute right-0 top-1 w-11 h-11 rounded-full bg-[#9C7A4B] text-[#F8F3E8] flex items-center justify-center shadow-sm">
                  {index + 1}
                </div>

                <div className="rounded-[2rem] bg-white/35 border border-[#9C7A4B]/12 px-7 py-6 shadow-sm">
                  <h3 className="text-2xl font-serif mb-4 text-[#3E3023]">{step.title}</h3>
                  <p className="text-lg leading-8 text-[#5F4A35]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
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
