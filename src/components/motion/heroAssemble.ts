/** Общие тайминги: фото-мозаика и клетки кода собираются в одном темпе */
export const HERO_ASSEMBLE = {
  delayChildren: 0.05,
  staggerChildren: 0.0068,
  pieceDuration: 0.82,
  ease: [0.22, 1, 0.36, 1] as const,
};

/** Сетка мозаики портрета (см. FragmentedPortrait — плитки через img + object-fit, без растягивания) */
export const HERO_GRID = { cols: 8, rows: 10 } as const;

/** Длительность одного направления (разлет или сбор) до полного завершения, мс */
export function getAssembleOneWayMs() {
  const n = HERO_GRID.cols * HERO_GRID.rows;
  const seconds =
    HERO_ASSEMBLE.delayChildren +
    (n - 1) * HERO_ASSEMBLE.staggerChildren +
    HERO_ASSEMBLE.pieceDuration;
  return Math.ceil(seconds * 1000) + 100;
}

/**
 * Цикл: пауза в собранном виде → разлет → пауза в разлёте → сбор → …
 * Суммарный темп умеренный (~6–7 с на полный цикл при дефолтах).
 */
export const HERO_CYCLE = {
  holdAssembledMs: 2000,
  holdScatteredMs: 1500,
} as const;
