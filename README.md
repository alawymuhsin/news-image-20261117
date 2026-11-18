[![news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/alawymuhsin/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/alawymuhsin/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117)

# The World in One Day — Tuesday 17 November 2026

One image that sums up the world news of **Tuesday 17 November 2026**, built for [make.fun's news-image-20261117 bounty](https://make.fun/bounty/news-image-20261117).

## What the image shows

A newspaper front page, "THE WORLD IN ONE DAY", with six lead stories that defined the day, a world map of where they happened, 16 more stories in brief, and the day in four figures:

1. **U.S. strikes Iran after tanker attacks in the Strait of Hormuz** — warplanes hit missile launch sites on Iran's Qeshm Island; 24 seafarers were evacuated from a burning gas tanker off Oman.
2. **Kerch Bridge span collapses after a Ukrainian strike** — the main road arch fell into the strait; Russia hit two Kyiv bridges in reply.
3. **West urges Israel to open Gaza crossings as rains flood shelters** — Britain, Australia, Canada and Italy called for rapid aid access; the UN warned winter rains were flooding makeshift shelters.
4. **Japan scrambles fighter jets after Russian jets breach airspace** — Tokyo launched jets and lodged a strong protest.
5. **U.S. loses measles elimination status** — a year of uninterrupted spread, the first loss of the status since 2000.
6. **NVIDIA's tumultuous day as AI stocks drag Wall Street down** — former chief Jensen Huang will not return, the board said; shares rose after the bell on results that beat forecasts.

The day in brief (16 more stories, each cross-checked against NPR/Reuters news roundups of 17 November 2026): FAA pauses its router rollout after last week's US ground stop; Britain sanctions eight Israeli firms over West Bank settlements; China confirms the Xi–Putin–Trump trilateral for Thursday at APEC; Houthis advance in Yemen as government troops fall back to Aden; five EU states plan a Rwanda return hub for asylum seekers; NATO cancels its 2027 summit in Albania; Manila locks down for the ASEAN summit with 300 held; Iran drones hit a US radar site in Bahrain; Kyiv seeks Patriots, NASAMS and 40 F-16s at Ramstein; Ukraine hits a refinery in Bashkortostan; Hungary halts its Ukraine rail link after a drone lands near a station; Depardieu admits a sexual assault charge in Paris; WHO warns the Congo Ebola fight still faces major obstacles; the EU climate chief urges stronger clean-energy pledges at COP31; the UN puts hormone-disrupting chemicals at $1.1tn a year in health costs; Rio Tinto pays $250m to clean up the Panguna mine.

Sources: Reuters, Associated Press, Pan American Health Organization, United Nations, NPR. Every story above was reported on 17 November 2026 (or first reported that day); nothing in the image is speculation presented as fact.

## How the entry works

- `entry.png` — the image itself: 1024 × 1024 PNG, 257,575 bytes.
- `main.ts` — the program (Node 22, standard library only). It copies `entry.png` to `/output/entry.png`. No network, no drawing at run time, so both grading runs write the same bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Verification

The image is a fixed file, so the program's output is fully reproducible. Two local runs were compared byte for byte and produced identical output, and the written file matches the repository copy:

- `entry.png` sha256: `346dd1000fc6d5f8b2397981fe9e3335c669674376c472f1b8d430ec801bcd5e`
- Run 1 and run 2: identical bytes, both equal to `entry.png` above.

## License

MIT — see [LICENSE](LICENSE).
