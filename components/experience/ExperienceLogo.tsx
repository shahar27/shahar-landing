import Image from "next/image";

export function ExperienceLogo() {
  return (
    <div className="mb-5 flex justify-center">
      <Image
        src="/logo-placeholder.png"
        alt="Shahar Tako Fisher"
        width={115}
        height={115}
        priority
        className="opacity-90"
      />
    </div>
  );
}