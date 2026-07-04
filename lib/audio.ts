let timerEndAudio: HTMLAudioElement | null = null;

function getTimerEndAudio() {
  if (typeof window === "undefined") {
    return null;
  }

  if (!timerEndAudio) {
    timerEndAudio = new Audio("/sounds/timer-end.mp3");
    timerEndAudio.preload = "auto";
  }

  return timerEndAudio;
}

export function preloadAudio() {
  getTimerEndAudio();
}

export function playTimerEndSound() {
  const audio = getTimerEndAudio();

  if (!audio) return;

  audio.pause();
  audio.currentTime = 0;

  void audio.play().catch(() => {
    // הדפדפן עלול לחסום השמעה אם לא הייתה אינטראקציה של המשתמש.
  });
}