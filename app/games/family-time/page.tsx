"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { ExperienceShell } from "@/components/experience/ExperienceShell";

import { WelcomeScene } from "@/components/experience/scenes/WelcomeScene";
import { HowToPlayScene } from "@/components/experience/scenes/HowToPlayScene";
import { StarsIntroScene } from "@/components/experience/scenes/StarsIntroScene";
import { DurationScene } from "@/components/experience/scenes/DurationScene";
import { CategoryIntroScene } from "@/components/experience/scenes/CategoryIntroScene";
import { ExtraIntroScene } from "@/components/experience/scenes/ExtraIntroScene";
import { StarScene } from "@/components/experience/scenes/StarScene";
import { FinishedScene } from "@/components/experience/scenes/FinishedScene";

import { GameCard } from "@/components/game/GameCard";

import {
  familyTimeCards,
  familyTimeCategories,
  familyTimeGamePlans,
} from "@/data/games/family-time";

import { buildGameSequence } from "@/lib/games/family-time/gameEngine";
import {
  getCardProgressLabel,
  getCategoryProgressLabel,
} from "@/lib/games/family-time/progressEngine";
import {
  clearGameSession,
  loadGameSession,
  saveGameSession,
} from "@/lib/games/family-time/sessionStorage";
import {
  findExtraCardBeforeEnding,
  hasEnoughTimeForExtraCard,
} from "@/lib/games/family-time/timeEngine";

import type {
  GameDuration,
  GameSession,
} from "@/types/games/family-time";

const initialSession: GameSession = {
  step: "welcome",
  duration: null,
  startedAt: null,
  stars: 0,
  sequence: [],
  currentCardIndex: 0,
  extraRoundStarted: false,
};

export default function FamilyTimeGamePage() {
  const router = useRouter();

  const [isLoaded, setIsLoaded] = useState(false);
  const [session, setSession] = useState<GameSession>(initialSession);
  const [lastStarsAdded, setLastStarsAdded] = useState(1);

  const currentCard =
    session.sequence[session.currentCardIndex] ?? null;

  const currentCategory = currentCard
    ? familyTimeCategories[currentCard.category]
    : null;

  const cardProgressLabel = getCardProgressLabel(
    session.currentCardIndex,
    session.sequence.length
  );

  const categoryProgressLabel =
    currentCard && session.duration
      ? getCategoryProgressLabel(
          currentCard.category,
          familyTimeGamePlans[session.duration].order
        )
      : "";

  useEffect(() => {
    const savedSession = loadGameSession();

    if (savedSession) {
      setSession({
        ...initialSession,
        ...savedSession,
        startedAt: savedSession.startedAt ?? null,
        extraRoundStarted: savedSession.extraRoundStarted ?? false,
      });
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    saveGameSession(session);
  }, [isLoaded, session]);

  function updateSession(nextSession: GameSession) {
    setSession(nextSession);
  }

  function startGame(selectedDuration: GameDuration) {
    const builtSequence = buildGameSequence(
      familyTimeCards,
      selectedDuration
    );

    setLastStarsAdded(1);

    updateSession({
      step: "categoryIntro",
      duration: selectedDuration,
      startedAt: new Date().toISOString(),
      stars: 0,
      currentCardIndex: 0,
      sequence: builtSequence,
      extraRoundStarted: false,
    });
  }

  function restartGame() {
    clearGameSession();
    setLastStarsAdded(1);
    updateSession(initialSession);
  }

  function endGame() {
    clearGameSession();
    router.push("/games");
  }

  function completeCard(starsToAdd = 1) {
    setLastStarsAdded(starsToAdd);

    updateSession({
      ...session,
      stars: session.stars + starsToAdd,
      step: "star",
    });
  }

  function startExtraRound() {
    const nextIndex = session.currentCardIndex + 1;

    const extraCard = findExtraCardBeforeEnding({
      allCards: familyTimeCards,
      currentSequence: session.sequence,
    });

    if (!extraCard) {
      updateSession({
        ...session,
        currentCardIndex: nextIndex,
        step: "card",
        extraRoundStarted: true,
      });

      return;
    }

    const updatedSequence = [
      ...session.sequence.slice(0, nextIndex),
      extraCard,
      ...session.sequence.slice(nextIndex),
    ];

    updateSession({
      ...session,
      sequence: updatedSequence,
      currentCardIndex: nextIndex,
      step: "card",
      extraRoundStarted: true,
    });
  }

  function goToNextCard() {
    const nextIndex = session.currentCardIndex + 1;
    const nextCard = session.sequence[nextIndex] ?? null;

    if (!nextCard) {
      updateSession({
        ...session,
        step: "finished",
      });

      return;
    }

    const isAboutToEnterSeeCategory = nextCard.category === "see";

    if (
      isAboutToEnterSeeCategory &&
      hasEnoughTimeForExtraCard({
        startedAt: session.startedAt,
        duration: session.duration,
      })
    ) {
      if (!session.extraRoundStarted) {
        updateSession({
          ...session,
          step: "extraIntro",
          extraRoundStarted: true,
        });

        return;
      }

      const extraCard = findExtraCardBeforeEnding({
        allCards: familyTimeCards,
        currentSequence: session.sequence,
      });

      if (extraCard) {
        const updatedSequence = [
          ...session.sequence.slice(0, nextIndex),
          extraCard,
          ...session.sequence.slice(nextIndex),
        ];

        updateSession({
          ...session,
          sequence: updatedSequence,
          currentCardIndex: nextIndex,
          step: "card",
          extraRoundStarted: true,
        });

        return;
      }
    }

    const currentCategoryId = currentCard?.category;
    const nextCategoryId = nextCard.category;

    updateSession({
      ...session,
      currentCardIndex: nextIndex,
      step:
        session.extraRoundStarted || currentCategoryId === nextCategoryId
          ? "card"
          : "categoryIntro",
    });
  }

  if (!isLoaded) {
    return null;
  }

  return (
    <ExperienceShell>
      <button
        type="button"
        onClick={endGame}
        className="fixed bottom-4 left-4 z-50 rounded-full border border-[#DCCDB8] bg-white/80 px-5 py-3 text-sm text-[#6F6252] shadow-sm backdrop-blur transition hover:bg-white"
      >
        סיים משחק
      </button>

      <ExperienceCard>
        {session.step === "welcome" && (
          <WelcomeScene
            onStart={() =>
              updateSession({
                ...session,
                step: "howToPlay",
              })
            }
          />
        )}

        {session.step === "howToPlay" && (
          <HowToPlayScene
            onContinue={() =>
              updateSession({
                ...session,
                step: "starsIntro",
              })
            }
          />
        )}

        {session.step === "starsIntro" && (
          <StarsIntroScene
            onContinue={() =>
              updateSession({
                ...session,
                step: "duration",
              })
            }
          />
        )}

        {session.step === "duration" && (
          <DurationScene onSelect={startGame} />
        )}

        {session.step === "categoryIntro" && currentCategory && (
          <CategoryIntroScene
            category={currentCategory}
            progressLabel={categoryProgressLabel}
            onContinue={() =>
              updateSession({
                ...session,
                step: "card",
              })
            }
          />
        )}

        {session.step === "extraIntro" && (
          <ExtraIntroScene onContinue={startExtraRound} />
        )}

        {session.step === "card" && currentCard && (
          <GameCard
            card={currentCard}
            category={currentCategory}
            duration={session.duration}
            progressLabel={cardProgressLabel}
            onComplete={completeCard}
          />
        )}

        {session.step === "star" && (
          <StarScene
            stars={session.stars}
            starsAdded={lastStarsAdded}
            onContinue={goToNextCard}
          />
        )}

        {session.step === "finished" && (
          <FinishedScene
            stars={session.stars}
            onRestart={restartGame}
            onEndGame={endGame}
          />
        )}
      </ExperienceCard>
    </ExperienceShell>
  );
}