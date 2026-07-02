# OC Freebie Tracker

A year-round calendar of national and food holidays, paired with the companies and
restaurants offering **freebies and discounts in Orange County, CA** on each one — plus
a birthday-rewards view for everything you can claim just for having a birthday.

### ▶️ View it live: **https://chellechau.github.io/oc-freebie-tracker/**

No install, no account, works on your phone. It's a static site, so the link above always
reflects whatever is on the `main` branch.

## Features

- **All 365 days covered** — every day's national/food holiday(s), from National Donut Day
  to National Moldy Cheese Day (yes, that's real).
- **72 freebie days · 175 listings** — recurring offers from chains with OC locations,
  including OC-headquartered brands (Taco Bell–Irvine, Chipotle–Newport Beach,
  El Pollo Loco–Costa Mesa, Wienerschnitzel–Irvine, Yogurtland, Nekter, BJ's, Bruxie…).
- **Filter by type** — Coffee, Drinks, Donuts, Ice Cream, Desserts, Breakfast, Burgers,
  Mexican, Pizza, Meals, Snacks, Appreciation Days.
- **Views** — Upcoming (next 45 days), Full Year (grouped by month), or any single month.
- **Search** — by holiday, business, or offer ("Krispy Kreme", "veterans", "taco").
- **FREE vs. DISCOUNT badges** — every listing is tagged; a "100% free only" toggle hides
  discount-only offers (like Fogo de Chão's 50%-off Veterans Day churrasco or Krispy
  Kreme's $2.50 July 4th dozen) when you only want free stuff.
- **🎂 Birthday view** — 80+ things you can claim on your birthday (or birthday
  week/month), grouped by category with timing badges. Almost all require joining the
  free rewards program *before* your birthday.

## Run it locally

```bash
python3 serve.py          # serves at http://127.0.0.1:5180
```

Or just open `index.html` directly in a browser — no build step, no dependencies.

## Data notes

- Offers marked **🔁 annual** have recurred in recent years; **❓ some years** are less
  reliable. Details (dates, apps required, participation) change every year — verify
  with the business before making the trip.
- Floating holidays are pinned to their **2026** dates (e.g., IHOP Pancake Day = Mar 3,
  Donut Day = Jun 5, Ice Cream Day = Jul 19, Taco Day = Oct 6, Easter = Apr 5,
  Thanksgiving = Nov 26). Update these annually.
- Most fast-food freebies require the chain's free rewards app; Veterans Day offers
  require proof of service; not every franchise location participates.

## Project layout

| Path | Purpose |
|---|---|
| `index.html` | App shell and the banner |
| `css/styles.css` | Styling (ocean-wash palette, all CSS variables up top) |
| `js/app.js` | Filtering, search, views, and rendering logic |
| `js/data-h1.js` | Holiday + freebie data, January–June |
| `js/data-h2.js` | Holiday + freebie data, July–December |
| `js/data-birthday.js` | Birthday rewards data |
| `assets/fonts/` | Bundled webfonts (Cormorant Garamond, Jost) for the banner |
| `serve.py` | Zero-dependency local dev server |

## Editing the data

To add or update a holiday offer, edit the matching day entry in `js/data-h1.js` or
`js/data-h2.js`. Each freebie is an object:

```js
{ biz: "Krispy Kreme", offer: "Free doughnut, no purchase", fine: "Participating shops",
  oc: "Santa Ana, Orange, Buena Park", cats: ["donut"], annual: true, kind: "free" }
```

`kind` is `"free"` or `"deal"`; `cats` are the filter categories. Birthday entries live in
`js/data-birthday.js` and add a `timing` field (`"day"`, `"week"`, or `"month"`).

Because the site is served straight from `main` via GitHub Pages, pushing a commit updates
the live link automatically.

## License

[MIT](LICENSE) — free to use, share, and adapt.

---

*Not affiliated with any listed business. Offers change constantly; always confirm before
you go.*
