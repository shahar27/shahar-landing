import type { GameSession } from "@/types/games/family-time";

const STORAGE_KEY = "family-time-game-session-v1";

export function saveGameSession(session: GameSession) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function loadGameSession(): GameSession | null {
  if (typeof window === "undefined") return null;

  const rawSession = window.localStorage.getItem(STORAGE_KEY);

  if (!rawSession) return null;

  try {
    return JSON.parse(rawSession) as GameSession;
  } catch {
    clearGameSession();
    return null;
  }
}

export function clearGameSession() {
  if (typeof window === "undefined") return;

  window.localStorage.removeItem(STORAGE_KEY);
}