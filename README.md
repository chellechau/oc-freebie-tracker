# 🍊 OC Freebie Tracker

A year-round calendar of national holidays and food holidays, with the companies and
restaurants offering **freebies and deals in Orange County, CA** on each one.

## Run it

```bash
python3 serve.py          # serves at http://127.0.0.1:5180
```

Or just open `index.html` directly in a browser — no build step, no dependencies.

For the Claude Code preview panel: macOS privacy protection blocks the preview
launcher from reading `~/Documents`, so `./sync-preview.sh` mirrors the site to
`/private/tmp/claude-501/-Users-rochellechau-Documents-Freebies/preview/` and
`.claude/launch.json` serves from there. Re-run the sync after editing site files.

## Features

- **All 365 days covered** — every day's national/food holiday(s), from National Donut Day
  to National Moldy Cheese Day (yes, that's real).
- **70 freebie days / 166 listings** — recurring offers from chains with OC locations,
  including OC-headquartered brands (Taco Bell–Irvine, Chipotle–Newport Beach,
  El Pollo Loco–Costa Mesa, Wienerschnitzel–Irvine, Yogurtland, Nekter, BJ's, Bruxie…).
- **Filter by type** — Coffee, Drinks, Donuts, Ice Cream, Desserts, Breakfast, Burgers,
  Mexican, Pizza, Meals, Snacks, Appreciation Days.
- **Views** — Upcoming (next 45 days), Full Year (grouped by month), or any single month.
- **Search** — by holiday, business, or offer ("Krispy Kreme", "veterans", "taco").
- **Freebies-only toggle** — hide the days that are just a holiday with no known deal.
- **FREE vs. DISCOUNT badges** — every listing is tagged; a "🆓 100% free only" toggle
  hides discount-only offers (like Fogo de Chão's 50%-off Veterans Day churrasco or
  Krispy Kreme's $2.50 July 4th dozen) when you only want free stuff.
- **🎂 Birthday view** — 80+ things you can claim on your birthday (or birthday
  week/month), grouped by category with timing badges. Data in `js/data-birthday.js`.
  Almost all require joining the free rewards program *before* your birthday.

## Data notes

- Offers marked **🔁 annual** have recurred in recent years; **❓ some years** are less
  reliable. Details (dates, apps required, participation) change every year — verify
  with the business before making the trip.
- Floating holidays are pinned to their **2026** dates (e.g., IHOP Pancake Day = Mar 3,
  Donut Day = Jun 5, Ice Cream Day = Jul 19, Taco Day = Oct 6, Easter = Apr 5,
  Thanksgiving = Nov 26). Update these annually.
- Most fast-food freebies require the chain's free rewards app; Veterans Day offers
  require proof of service; not every franchise location participates.

## Files

| File | Purpose |
|---|---|
| `index.html` | The app shell |
| `js/data-h1.js` | Holiday + freebie data, January–June |
| `js/data-h2.js` | Holiday + freebie data, July–December |
| `js/app.js` | Filtering, search, and rendering logic |
| `css/styles.css` | Styling |
| `serve.py` | Zero-dependency local dev server |

To add or update an offer, edit the matching day entry in `js/data-h1.js` or
`js/data-h2.js` — each freebie is `{biz, offer, fine, oc, cats, annual}`.
