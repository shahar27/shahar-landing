import releaseCards from "./cards/release.json";
import curiousCards from "./cards/curious.json";
import discoverCards from "./cards/discover.json";
import seeCards from "./cards/see.json";

import type { TogetherCard } from "@/types/games/family-time";

export { familyTimeCategories } from "./categories";
export { familyTimeGamePlans } from "./gamePlan";

export const familyTimeCards: TogetherCard[] = [
  ...releaseCards,
  ...curiousCards,
  ...discoverCards,
  ...seeCards,
] as TogetherCard[];