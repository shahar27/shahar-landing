"use client";

import { playTimerEndSound, unlockTimerEndSound } from "@/lib/audio";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PrimaryButton } from "@/components/experience/PrimaryButton";

type CardTimerProps = {
  seconds: number;
  onComplete: () => void;
};

export function CardTimer({ seconds, onComplete }: CardTimerProps) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const intervalId = window.setInterval(() => {
      setTimeLeft((current) => current - 1);
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      playTimerEndSound();
      setIsRunning(false);
    }
  }, [timeLeft, isRunning]);

  const minutes = Math.floor(timeLeft / 60);
  const secondsOnly = timeLeft % 60;
  const isDone = timeLeft === 0;

  return (
    <div className="mt-6 flex flex-col items-center gap-4">
      <div className="flex items-center gap-3 rounded-full border border-[#DCCDB8] bg-white/55 px-6 py-3">
        <Image
          src="/illustrations/family-time/icons/timer.webp"
          alt=""
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
        />

        <div className="text-4xl font-light text-[#5A4A35]">
          {minutes}:{secondsOnly.toString().padStart(2, "0")}
        </div>
      </div>

      {!isRunning && !isDone && (
        <PrimaryButton
          onClick={() => {
            void unlockTimerEndSound();
            setIsRunning(true);
          }}
        >
          התחל
        </PrimaryButton>
      )}

      {isRunning && !isDone && (
        <button
          type="button"
          onClick={onComplete}
          className="rounded-full border border-[#DCCDB8] bg-white/60 px-10 py-4 text-lg text-[#6F6252] shadow-sm transition hover:bg-white/80"
        >
          סיימנו
        </button>
      )}

      {isDone && (
        <>
          <p className="text-lg text-[#6F6252]">הזמן נגמר</p>

          <PrimaryButton onClick={onComplete}>
            סיימנו
          </PrimaryButton>
        </>
      )}
    </div>
  );
}