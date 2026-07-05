export default function PendingApprovalPage() {
  return (
    <main dir="rtl" className="flex min-h-screen items-center justify-center bg-[#F7EFE3] px-4 text-[#4C3D2E]">
      <section className="max-w-lg rounded-[2rem] border border-[#D8C7AA] bg-[#FFF9EF]/90 px-8 py-10 text-center shadow-sm">
        <h1 className="mb-4 text-3xl font-light">החשבון ממתין לאישור</h1>

        <p className="leading-8 text-[#6F6252]">
          ההרשמה התקבלה. בדקות הקרובות, במידה והחשבון יאושר, תישלח הודעה לגביי קבלת הגישה למשחקים.
        </p>
      </section>
    </main>
  );
}