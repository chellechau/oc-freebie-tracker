// OC Freebie Tracker — app logic
(function () {
  const DATA = window.HOLIDAY_DATA.slice().sort((a, b) => a.m - b.m || a.d - b.d);
  const BDAY = (window.BIRTHDAY_DATA || []).slice();

  const MONTHS = ["January","February","March","April","May","June",
    "July","August","September","October","November","December"];

  const CATEGORIES = [
    { key: "coffee",       label: "☕ Coffee" },
    { key: "drinks",       label: "🥤 Drinks & Smoothies" },
    { key: "donut",        label: "🍩 Donuts & Pastries" },
    { key: "icecream",     label: "🍨 Ice Cream & Frozen" },
    { key: "dessert",      label: "🍰 Desserts & Sweets" },
    { key: "breakfast",    label: "🥞 Breakfast" },
    { key: "burger",       label: "🍔 Burgers & Sandwiches" },
    { key: "mexican",      label: "🌮 Mexican" },
    { key: "pizza",        label: "🍕 Pizza" },
    { key: "meal",         label: "🍗 Meals & Entrées" },
    { key: "snack",        label: "🍿 Snacks & Sides" },
    { key: "appreciation", label: "🎖️ Appreciation Days" },
    { key: "other",        label: "✨ Other" },
  ];
  const CAT_LABEL = Object.fromEntries(CATEGORIES.map(c => [c.key, c.label]));

  // ---- state ----
  const state = {
    view: "upcoming",          // "upcoming" | "all" | "birthday" | 1..12
    cats: new Set(),           // empty = all categories
    freebiesOnly: true,
    freeOnly: false,           // hide discount-only listings, keep 100%-free ones
    query: "",
  };

  // A listing is "free" if explicitly marked, or the offer says FREE.
  function isFree(f) {
    if (f.kind) return f.kind === "free";
    return /\bfree\b/i.test(f.offer);
  }

  const today = new Date();
  const todayM = today.getMonth() + 1;
  const todayD = today.getDate();

  function dayOfYear(m, d) {
    const cum = [0,31,59,90,120,151,181,212,243,273,304,334];
    return cum[m - 1] + d;
  }
  const todayDOY = dayOfYear(todayM, todayD);

  function dayCats(day) {
    const s = new Set();
    day.holidays.forEach(h => h.cats.forEach(c => s.add(c)));
    day.freebies.forEach(f => (f.cats || []).forEach(c => s.add(c)));
    return s;
  }

  function dayFreebies(day) {
    return state.freeOnly ? day.freebies.filter(isFree) : day.freebies;
  }

  function matchesFilters(day) {
    if (state.freebiesOnly && dayFreebies(day).length === 0) return false;
    if (state.cats.size > 0) {
      const cats = dayCats(day);
      let hit = false;
      state.cats.forEach(c => { if (cats.has(c)) hit = true; });
      if (!hit) return false;
    }
    if (state.query) {
      const q = state.query.toLowerCase();
      const hay = [
        ...day.holidays.map(h => h.name),
        ...dayFreebies(day).flatMap(f => [f.biz, f.offer, f.oc || ""]),
      ].join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  }

  function visibleDays() {
    let days = DATA.filter(matchesFilters);
    if (state.view === "upcoming") {
      // next 45 days, wrapping around the new year
      days = days.filter(day => {
        let diff = dayOfYear(day.m, day.d) - todayDOY;
        if (diff < 0) diff += 365;
        return diff <= 45;
      }).sort((a, b) => {
        const da = (dayOfYear(a.m, a.d) - todayDOY + 365) % 365;
        const db = (dayOfYear(b.m, b.d) - todayDOY + 365) % 365;
        return da - db;
      });
    } else if (state.view !== "all") {
      days = days.filter(d => d.m === state.view);
    }
    return days;
  }

  // ---- rendering ----
  const el = sel => document.querySelector(sel);

  function catBadges(cats) {
    return [...cats].map(c =>
      `<span class="badge badge-${c}">${CAT_LABEL[c] || c}</span>`).join("");
  }

  // ---- birthday view ----
  const TIMING = {
    day:   { label: "🎂 Birthday only",  cls: "timing-day" },
    week:  { label: "📅 Birthday week",  cls: "timing-week" },
    month: { label: "🗓️ All birth month", cls: "timing-month" },
  };

  function birthdayItems() {
    return BDAY.filter(b => {
      if (state.freeOnly && !isFree(b)) return false;
      if (state.cats.size > 0 && !b.cats.some(c => state.cats.has(c))) return false;
      if (state.query) {
        const q = state.query.toLowerCase();
        if (![b.biz, b.offer, b.req || "", b.oc || ""].join(" ").toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }

  function birthdayCardHTML(b) {
    const free = isFree(b);
    const t = TIMING[b.timing] || TIMING.day;
    return `
      <div class="freebie ${free ? "" : "deal"}">
        <div class="freebie-head">
          <span class="biz">${b.biz}
            <span class="kind ${free ? "kind-free" : "kind-deal"}">${free ? "FREE" : "DISCOUNT"}</span>
            <span class="timing ${t.cls}">${t.label}</span>
          </span>
        </div>
        <div class="offer">${b.offer}</div>
        ${b.req ? `<div class="fine">📋 ${b.req}</div>` : ""}
        ${b.oc ? `<div class="oc">📍 ${b.oc}</div>` : ""}
      </div>`;
  }

  function renderBirthday() {
    const items = birthdayItems();
    el("#stats").textContent =
      `${items.length} birthday freebie/deal listing${items.length === 1 ? "" : "s"} — join each rewards program BEFORE your birthday`;
    let html = `<div class="bday-intro">🎂 Everything you can claim just for having a birthday. Nearly all require a free
      rewards/app signup <strong>ahead of time</strong> — set these up a few weeks early. Grouped by category.</div>`;
    for (const cat of CATEGORIES) {
      const group = items.filter(b => b.cats[0] === cat.key);
      if (!group.length) continue;
      html += `<h2 class="month-header">${cat.label}</h2>
        <article class="card has-freebies"><div class="card-body">
          ${group.map(birthdayCardHTML).join("")}
        </div></article>`;
    }
    el("#results").innerHTML = html ||
      `<p class="empty">Nothing matches — try clearing a filter.</p>`;
  }

  function freebieHTML(f) {
    const free = isFree(f);
    return `
      <div class="freebie ${free ? "" : "deal"}">
        <div class="freebie-head">
          <span class="biz">${f.biz}
            <span class="kind ${free ? "kind-free" : "kind-deal"}">${free ? "FREE" : "DISCOUNT"}</span>
          </span>
          ${f.annual ? `<span class="annual" title="Offered annually in recent years — verify before you go">🔁 annual</span>`
                     : `<span class="annual maybe" title="Has happened some years — verify before you go">❓ some years</span>`}
        </div>
        <div class="offer">${f.offer}</div>
        ${f.fine ? `<div class="fine">📋 ${f.fine}</div>` : ""}
        ${f.oc ? `<div class="oc">📍 ${f.oc}</div>` : ""}
      </div>`;
  }

  function dayCardHTML(day) {
    const isToday = day.m === todayM && day.d === todayD;
    const cats = dayCats(day);
    return `
      <article class="card ${isToday ? "today" : ""} ${day.freebies.length ? "has-freebies" : ""}">
        <div class="card-date">
          <div class="mon">${MONTHS[day.m - 1].slice(0, 3).toUpperCase()}</div>
          <div class="num">${day.d}</div>
          ${isToday ? `<div class="today-tag">TODAY</div>` : ""}
        </div>
        <div class="card-body">
          <h3>${day.holidays.map(h => h.name).join(" · ")}</h3>
          <div class="badges">${catBadges(cats)}</div>
          ${dayFreebies(day).length
            ? `<div class="freebies">${dayFreebies(day).map(freebieHTML).join("")}</div>`
            : `<div class="no-freebies">No known recurring OC freebie — celebrate on your own dime 😄</div>`}
        </div>
      </article>`;
  }

  function render() {
    if (state.view === "birthday") {
      renderBirthday();
      syncControls();
      return;
    }
    const days = visibleDays();
    const freebieCount = days.reduce((n, d) => n + dayFreebies(d).length, 0);

    el("#stats").textContent =
      `${days.length} day${days.length === 1 ? "" : "s"} · ${freebieCount} freebie/deal listing${freebieCount === 1 ? "" : "s"}` +
      (state.view === "upcoming" ? " in the next 45 days" : "");

    if (state.view === "upcoming" || state.view !== "all") {
      el("#results").innerHTML = days.map(dayCardHTML).join("") ||
        `<p class="empty">Nothing matches — try clearing a filter.</p>`;
    } else {
      // "all": group by month with headers
      let html = "";
      for (let m = 1; m <= 12; m++) {
        const monthDays = days.filter(d => d.m === m);
        if (!monthDays.length) continue;
        html += `<h2 class="month-header">${MONTHS[m - 1]}</h2>` +
                monthDays.map(dayCardHTML).join("");
      }
      el("#results").innerHTML = html || `<p class="empty">Nothing matches — try clearing a filter.</p>`;
    }

    syncControls();
  }

  function syncControls() {
    document.querySelectorAll("#month-tabs button").forEach(b => {
      b.classList.toggle("active", String(state.view) === b.dataset.view);
    });
    document.querySelectorAll("#cat-chips button").forEach(b => {
      b.classList.toggle("active", state.cats.has(b.dataset.cat));
    });
    el("#freebies-toggle").classList.toggle("active", state.freebiesOnly);
    el("#free-only-toggle").classList.toggle("active", state.freeOnly);
    // freebies-only toggle is meaningless in the birthday view
    el("#freebies-toggle").style.display = state.view === "birthday" ? "none" : "";
  }

  // ---- build controls ----
  function init() {
    const tabs = el("#month-tabs");
    const mkTab = (view, label) => {
      const b = document.createElement("button");
      b.dataset.view = String(view);
      b.textContent = label;
      b.onclick = () => { state.view = typeof view === "string" ? view : Number(view); render(); };
      tabs.appendChild(b);
    };
    mkTab("upcoming", "🔜 Upcoming");
    mkTab("all", "📅 Full Year");
    mkTab("birthday", "🎂 Birthday");
    MONTHS.forEach((name, i) => mkTab(i + 1, name.slice(0, 3)));

    const chips = el("#cat-chips");
    CATEGORIES.forEach(c => {
      const b = document.createElement("button");
      b.dataset.cat = c.key;
      b.textContent = c.label;
      b.onclick = () => {
        state.cats.has(c.key) ? state.cats.delete(c.key) : state.cats.add(c.key);
        render();
      };
      chips.appendChild(b);
    });

    el("#freebies-toggle").onclick = () => { state.freebiesOnly = !state.freebiesOnly; render(); };
    el("#free-only-toggle").onclick = () => { state.freeOnly = !state.freeOnly; render(); };

    // Scale the fixed 1300x420 banner design to the container width, like an image.
    const bannerWrap = el("#banner-scale");
    const bannerFixed = el("#banner-fixed");
    if (bannerWrap && bannerFixed) {
      const fitBanner = () => {
        const s = bannerWrap.clientWidth / 1300;
        bannerFixed.style.transform = `scale(${s})`;
        bannerWrap.style.height = `${Math.round(420 * s)}px`;
      };
      window.addEventListener("resize", fitBanner);
      fitBanner();
    }
    el("#clear-cats").onclick = () => { state.cats.clear(); el("#search").value = ""; state.query = ""; render(); };
    el("#search").oninput = e => { state.query = e.target.value.trim(); render(); };

    render();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
