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
  "את מתפקדת, אבל בפנים מרגישה שאין לך באמת אוויר.",
  "הראש שלך ממשיך לעבוד גם כשכל מה שאת רוצה זה רגע שקט.",
  "את מבינה הרבה דברים בשכל, אבל הגוף עדיין נשאר דרוך.",
  "את רגילה להיות חזקה בשביל כולם, גם כשמשהו בתוכך כבר מבקש להניח.",
  "את מרגישה שהתגובות שלך לפעמים גדולות יותר ממה שהתכוונת.",
  "את יודעת שיש בך יותר חיים, יותר שמחה ויותר חופש ממה שאת מצליחה להרגיש כרגע.",
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
    text: "הורות היא לא רק ניסיון לגרום לילד להתנהג בהתאם לציפיות ואמונות שלנו. היא מפגש בין מערכות עצבים, דפוסים שעוברים מדור לדור, ופחדים שמבקשים ריפוי.",
  },
];

const credentials = [
  "B.Sc במדעי המחשב",
  "Master NLP",
  "מאמנת אישית, זוגית ומשפחתית מיודעת טראומות",
  "מדריכת הורים בפרט לילדים עם adhd odd ",
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
    text: "כי האדם הוא לא רק מחשבות. שינוי אמיתי מתחיל כשהגוף, הרגש, התודעה ומערכת העצבים מקבלים חוויה חדשה של ביטחון ובחירה.",
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
            <div className="w-32 h-32 md:w-40 md:h-40">
              <img
                src="/logo-placeholder.png"
                alt="הלוגו של שחר"
                className="w-full h-full object-contain hover:scale-105 transition duration-500"
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
            אפשר להפסיק לחיות כאילו צריך להחזיק הכול לבד.
          </h1>
          <p className="mt-7 text-lg md:text-xl leading-9 text-[#5F4A35] max-w-xl">
            אני מלווה אנשים שרוצים להבין מה באמת קורה להם מבפנים - ולחזור להרגיש יותר שקט, בחירה, חיבור וחיים בתוך הגוף שלהם.
          </p>
          <p className="mt-5 text-base md:text-lg leading-8 text-[#6B5944] max-w-xl">
            העבודה שלי משלבת בין עולמות המחקר, הפסיכולוגיה, מערכת העצבים, הגוף והתודעה - מתוך הבנה שאי אפשר להבין בני אדם דרך החשיבה בלבד.
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
              src="/shaharportrait.jpeg"
              alt="שחר טקו"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </section>

      {/* Mirror */}
      <section className="px-6 md:px-14 lg:px-24 py-24 bg-white/35">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#3E3023]">
            אולי את לא צריכה שמישהו יגיד לך מה לעשות.
            <br />
            אולי את צריכה שמישהו סוף סוף יבין מה קורה לך בגוף.
          </h2>
          <p className="mt-7 text-lg leading-9 text-[#5F4A35] max-w-3xl mx-auto">
            הרבה מהכאב שאנחנו סוחבים בבגרות לא נוצר מתוך חולשה, אלא מתוך מנגנונים שפעם ניסו להגן עלינו. הגוף זוכר. מערכת העצבים מגיבה. ולפעמים הגוף מספר את הסיפור עוד לפני שהמילים מצליחות.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-5 text-right">
            {painCards.map((item, index) => (
              <div key={index} className="rounded-[2rem] bg-[#F8F3E8] border border-[#9C7A4B]/15 p-7 shadow-sm">
                <Sparkles className="text-[#9C7A4B] mb-5" size={24} />
                <p className="text-lg leading-8">{item}</p>
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
              שינוי עמוק לא קורה רק דרך מודעות והבנה קוגניטיבית. הוא מתחיל כשהגוף מפסיק להרגיש שהוא במלחמה תמידית, וכשנוצר מרחב בטוח יותר לנשום, להרגיש, להבין ולחוות את החיים אחרת.
            </p>
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

      {/* About */}
      <section id="about" className="px-6 md:px-14 lg:px-24 py-24 bg-white/35">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.35fr] gap-14 items-start">
          <div className="rounded-[3rem] bg-[#F8F3E8] border border-[#9C7A4B]/15 p-8 shadow-sm sticky top-8 text-center flex flex-col items-center">
            <Heart className="text-[#9C7A4B] mb-5" size={34} />
            <h2 className="text-3xl font-serif mb-5 text-[#3E3023]">קצת עליי</h2>
            <div className="space-y-8 leading-[2.15] text-[#5F4A35] text-center max-w-3xl mx-auto">

              <p>
                אני שחר, נשואה ואמא לשתי בנות, ואישה שהמסע האישי שלה הוביל אותה לחקור לעומק את נפש האדם, הגוף, מערכת העצבים והדרך שבה חוויות ילדות מעצבות את החיים שלנו גם שנים אחר כך.
              </p>

              <p>
                המסע שהתחיל מתוך טראומות אישיות וחיפוש להבין בני אדם. להבין למה אנשים חושבים, מרגישים ומגיבים כמו שהם מגיבים, למה לפעמים אנחנו יודעים בדיוק מה נכון לנו ובכל זאת לא מצליחים להשתחרר מדפוסים, ולמה כל כך הרבה כאב עובר מדור לדור בלי שמישהו בכלל שם לב.
              </p>

              <p>
                הרקע שלי במדעי המחשב השפיע מאוד על הדרך שבה אני מסתכלת על המוח ועל תהליכי שינוי.
                ההבנה שמערכת פועלת לפי תכנותים, דפוסים וחיווטים שנבנו לאורך זמן, עזרה לי להבין שגם בני אדם פועלים פעמים רבות מתוך “קוד פנימי” שנוצר ע״י חוויות חיים, פחדים, זיכרונות ומנגנוני הישרדות.
              </p>

              <p>
                עם השנים העמקתי בלימודים ובחקירה שממשיכה עד היום,
                אבל דווקא האימהות והחיים עצמם הפכו להיות בית הספר הכי עמוק שלי.
              </p>

              <p>
                ההתמודדות עם רגישות גבוהה, שונות נוירולוגית (ADHD, ODD), רגשות עוצמתיים, עייפות, דריכות, דפוסים בין דוריים והרצון לעצור מעגלים, הובילו אותי למסע אישי עמוק של ריפוי, מודעות והבנה.
              </p>

              <p>
                עם הזמן נוצרה אצלי הסתכלות שמשלבת בין מדע, גוף, רגש ותודעה.
              </p>

              <p>
                מצד אחד, הבנה עמוקה של טראומה, מערכת העצבים והפסיכולוגיה האנושית.
                ומצד שני, חיבור חזק לאינטואיציה, לנוכחות, למשמעות ולדברים שלא תמיד אפשר להסביר רק דרך מילים או מחקרים.
              </p>

            </div>
          </div>

          <div className="space-y-7 text-lg leading-9 text-[#5F4A35]">
            <p>
              הדרך שלי משלבת בין חשיבה מדויקת, חקירה של דפוסים ומערכות, לבין הקשבה עמוקה לגוף, לרגש, לאינטואיציה ולמה שלא תמיד נאמר במילים.
            </p>
            <p>
              מאחורי חשיבת יתר יש לעיתים ניסיון להרגיש בטוחים. מאחורי שליטה יש פחד לאבד יציבות. מאחורי ביקורת יש בושה. ומאחורי הרבה מאוד בעיות התנהגות יש מערכת עצבים שחיה יותר מדי זמן בדריכות.
            </p>
            <p>
              חלק משמעותי מהעבודה נוגע גם בהורות ובמערכות יחסים. הורות היא לא רק ניסיון לגרום לילד להתנהג. היא מפגש בין מערכות עצבים, בין עולמות רגשיים, בין דפוסים שעוברים מדור לדור.
            </p>
            <p>
              עולם הרוח תופס מקום משמעותי בגישה שלי - לא במקום ידע מקצועי, אלא כחלק מהיכולת להתחבר למשמעות, לאינטואיציה ולאפשרות להרפות מהאשליה שהכול חייב להיות בשליטה תמידית.
            </p>
            <p>
              בסופו של דבר כולנו חיים מתוך אמונות כלשהן לגבי החיים, לגבי עצמנו ולגבי העולם. השאלה היא לא האם אנחנו מאמינים. השאלה היא איזו אמונה יוצרת בתוכנו יותר חיים.
            </p>

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
            זה לא תהליך שבו אני אומרת לך מי את או מה את צריכה לעשות. זה תהליך שבו אנחנו מקשיבות יחד למה שהמערכת שלך כבר מנסה לומר - ומתחילות ליצור שם יותר בהירות, חופש וביטחון.
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
            המטרה היא לא להפוך אותך למישהי אחרת.
            <br />
            המטרה היא להחזיר אותך לעצמך.
          </h2>
          <p className="mt-7 text-lg leading-9 text-[#5F4A35]">
            יותר שקט בגוף. יותר בחירה מול הילדים. פחות מלחמה פנימית. פחות חיים מתוך הישרדות. יותר יכולת להיות בקשר, להרגיש, לנשום, להגיב אחרת - ולחיות מתוך מקום שהוא באמת שלך.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-14 lg:px-24 py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#3E3023]">
            אם משהו כאן נגע בך, אפשר להתחיל בשיחה אחת פשוטה.
          </h2>

          <p className="mt-6 text-lg leading-9 text-[#5F4A35]">
            לא צריך לדעת להסביר הכול. לא צריך להגיע מסודרת. מספיק להרגיש שיש משהו בתוכך שמבקש דרך אחרת.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9C7A4B] px-8 py-4 text-[#F8F3E8] shadow-md hover:shadow-lg transition"
            >
              <MessageCircle size={20} />
              שלחי לי הודעה בוואטסאפ
            </a>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#9C7A4B]/40 px-8 py-4 text-[#9C7A4B] hover:bg-white/40 transition"
            >
              <Phone size={18} />
              התקשרי אליי
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
