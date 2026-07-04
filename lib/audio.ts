let timerEndAudio: HTMLAudioElement | null = null;

function getTimerEndAudio() {
  if (typeof window === "undefined") return null;

  if (!timerEndAudio) {
    timerEndAudio = new Audio("/sounds/timer-end.mp3");
    timerEndAudio.preload = "auto";
  }

  return timerEndAudio;
}

export function preloadAudio() {
  getTimerEndAudio();
}

export async function unlockTimerEndSound() {
  const audio = getTimerEndAudio();
  if (!audio) return;

  try {
    audio.volume = 0;
    await audio.play();
    audio.pause();
    audio.currentTime = 0;
    audio.volume = 1;
  } catch {
    audio.volume = 1;
  }
}

export function playTimerEndSound() {
  const audio = getTimerEndAudio();
  if (!audio) return;

  audio.pause();
  audio.currentTime = 0;
  audio.volume = 1;

  void audio.play().catch(() => {});
}