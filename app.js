const STORE_KEY = "echoChoreChart.v1";
const DAYS = [
  { key: "sun", label: "Sun" },
  { key: "mon", label: "Mon" },
  { key: "tue", label: "Tue" },
  { key: "wed", label: "Wed" },
  { key: "thu", label: "Thu" },
  { key: "fri", label: "Fri" },
  { key: "sat", label: "Sat" },
];

const EVERY_DAY = DAYS.map((day) => day.key);
const defaultChoreTemplates = {
  Harrison: [
    ["Make the bed", 1],
    ["Brush your teeth", 1],
    ["Clean your room", 1],
    ["Tidy the dining room", 2],
    ["Read 15 min", 1],
    ["Fold laundry", 2],
    ["Scoop the catbox", 2],
    ["Weed the beds", 2],
  ],
  Bennett: [
    ["Make the bed", 1],
    ["Brush your teeth", 1],
    ["Clean your room", 1],
    ["Tidy the living room", 2],
    ["Read 15 min", 1],
    ["Fold laundry", 2],
    ["Sweep the patio", 2],
    ["Weed the beds", 2],
  ],
};
const defaultPrizeTemplates = [
  ["Pool", 10],
  ["Inside Scoop", 75],
  ["Out to lunch", 100],
  ["Card store ($10)", 150],
  ["Iron Pigs", 200],
];

const palette = ["#087e8b", "#d95d39", "#6c4f8f", "#2d7dd2", "#47a878", "#a14a76"];
const iconPaths = {
  check: [["path", { d: "M20 6 9 17l-5-5" }]],
  circle: [["circle", { cx: "12", cy: "12", r: "10" }]],
  download: [
    ["path", { d: "M12 15V3" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
    ["path", { d: "m7 10 5 5 5-5" }],
  ],
  maximize: [
    ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3" }],
    ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3" }],
    ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3" }],
    ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3" }],
  ],
  pencil: [
    ["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }],
    ["path", { d: "m15 5 4 4" }],
  ],
  plus: [
    ["path", { d: "M5 12h14" }],
    ["path", { d: "M12 5v14" }],
  ],
  "rotate-ccw": [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
    ["path", { d: "M3 3v5h5" }],
  ],
  "settings-2": [
    ["path", { d: "M14 17H5" }],
    ["path", { d: "M19 7h-9" }],
    ["circle", { cx: "17", cy: "17", r: "3" }],
    ["circle", { cx: "7", cy: "7", r: "3" }],
  ],
  star: [["path", { d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" }]],
  "trash-2": [
    ["path", { d: "M10 11v6" }],
    ["path", { d: "M14 11v6" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }],
    ["path", { d: "M3 6h18" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }],
  ],
  upload: [
    ["path", { d: "M12 3v12" }],
    ["path", { d: "m17 8-5-5-5 5" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
  ],
  "user-plus": [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
    ["circle", { cx: "9", cy: "7", r: "4" }],
    ["line", { x1: "19", x2: "19", y1: "8", y2: "14" }],
    ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }],
  ],
  x: [
    ["path", { d: "M18 6 6 18" }],
    ["path", { d: "m6 6 12 12" }],
  ],
  gift: [
    ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1" }],
    ["path", { d: "M12 8v13" }],
    ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" }],
    ["path", { d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" }],
  ],
  lock: [
    ["rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }],
  ],
};
const iconFallbacks = {
  check: "OK",
  circle: "O",
  download: "DL",
  maximize: "FULL",
  pencil: "EDIT",
  plus: "+",
  "rotate-ccw": "RESET",
  "settings-2": "EDIT",
  star: "*",
  "trash-2": "DEL",
  upload: "UP",
  "user-plus": "+",
  x: "X",
  gift: "PRIZE",
  lock: "LOCK",
};

const defaultState = {
  householdName: "Home Chore Board",
  view: "today",
  selectedDate: localDateKey(new Date()),
  editMode: false,
  members: [
    { id: cryptoId(), name: "Harrison", color: "#6c4f8f" },
    { id: cryptoId(), name: "Bennett", color: "#2d7dd2" },
  ],
  chores: [],
  prizes: [],
  completions: {},
};

defaultState.chores = [
  ...defaultChoresForMember(defaultState.members[0]),
  ...defaultChoresForMember(defaultState.members[1]),
];
defaultState.prizes = defaultPrizes();

let state = loadState();
saveState();
let clockTimer = null;

const app = document.querySelector("#app");
const modalBackdrop = document.querySelector("#modalBackdrop");
const modalTitle = document.querySelector("#modalTitle");
const modalBody = document.querySelector("#modalBody");
const importFile = document.querySelector("#importFile");

render();
startClock();

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;

  if (action === "set-view") {
    state.view = target.dataset.view;
    saveAndRender();
  }

  if (action === "toggle-edit") {
    state.editMode = !state.editMode;
    saveAndRender();
  }

  if (action === "toggle-chore") {
    toggleChore(target.dataset.choreId, target.dataset.date);
  }

  if (action === "add-chore") {
    openChoreModal();
  }

  if (action === "edit-chore") {
    openChoreModal(target.dataset.choreId);
  }

  if (action === "delete-chore") {
    deleteChore(target.dataset.choreId);
  }

  if (action === "add-member") {
    openMemberModal();
  }

  if (action === "add-prize") {
    openPrizeModal();
  }

  if (action === "edit-prize") {
    openPrizeModal(target.dataset.prizeId);
  }

  if (action === "delete-prize") {
    deletePrize(target.dataset.prizeId);
  }

  if (action === "edit-member") {
    openMemberModal(target.dataset.memberId);
  }

  if (action === "delete-member") {
    deleteMember(target.dataset.memberId);
  }

  if (action === "reset-day") {
    resetDay(state.selectedDate);
  }

  if (action === "export") {
    exportState();
  }

  if (action === "import") {
    importFile.click();
  }

  if (action === "fullscreen") {
    enterFullscreen();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-modal]") || event.target === modalBackdrop) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modalBackdrop.hidden) {
    closeModal();
  }
});

importFile.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;

  try {
    const imported = JSON.parse(await file.text());
    validateImportedState(imported);
    state = migrateState(imported);
    state.selectedDate = localDateKey(new Date());
    saveAndRender();
  } catch (error) {
    openNotice("Import failed", "That file does not look like a chore board backup.");
  } finally {
    importFile.value = "";
  }
});

function render() {
  const today = localDateKey(new Date());
  if (state.selectedDate !== today) {
    state.selectedDate = today;
    saveState();
  }

  const currentDate = dateFromKey(state.selectedDate);
  app.innerHTML = `
    <header class="topbar">
      <div class="brand">
        <h1>${escapeHtml(state.householdName)}</h1>
        <div class="date-line">${formatDate(currentDate)}</div>
      </div>

      <nav class="view-tabs" aria-label="Board view">
        ${tabButton("today", "Today")}
        ${tabButton("rewards", "Points")}
        ${tabButton("prizes", "Prizes")}
      </nav>

      <div class="top-actions">
        <div class="clock" data-clock>${formatTime(new Date())}</div>
        <button class="icon-button ${state.editMode ? "is-active" : ""}" type="button" data-action="toggle-edit" aria-label="Edit board">
          <i data-lucide="settings-2"></i>
        </button>
        <button class="icon-button" type="button" data-action="fullscreen" aria-label="Fullscreen">
          <i data-lucide="maximize"></i>
        </button>
      </div>
    </header>

    <main class="content">
      ${renderSidebar()}
      ${renderMain()}
    </main>
  `;

  refreshIcons();
}

function renderSidebar() {
  const due = choresForDate(state.selectedDate);
  const done = due.filter((chore) => isDone(chore.id, state.selectedDate)).length;
  const percent = due.length ? Math.round((done / due.length) * 100) : 100;

  return `
    <aside class="sidebar">
      <section class="score-summary">
        <strong>${percent}%</strong>
        <span>${done} of ${due.length} done today</span>
      </section>

      <section class="member-list" aria-label="Family members">
        ${state.members.map(renderMemberScore).join("")}
      </section>

      <div class="toolbar">
        <button class="text-button primary" type="button" data-action="add-chore">
          <i data-lucide="plus"></i>
          <span>Chore</span>
        </button>
        <button class="text-button" type="button" data-action="add-member">
          <i data-lucide="user-plus"></i>
          <span>Person</span>
        </button>
        <button class="icon-button" type="button" data-action="reset-day" aria-label="Reset today">
          <i data-lucide="rotate-ccw"></i>
        </button>
        <button class="icon-button" type="button" data-action="export" aria-label="Export board">
          <i data-lucide="download"></i>
        </button>
        <button class="icon-button" type="button" data-action="import" aria-label="Import board">
          <i data-lucide="upload"></i>
        </button>
      </div>
    </aside>
  `;
}

function renderMain() {
  if (state.view === "rewards") return renderRewardsView();
  if (state.view === "prizes") return renderPrizeView();
  return renderTodayView();
}

function renderTodayView() {
  return `
    <section class="main-board">
      <div class="panel-title">
        <div>
          <h2>Today's Chores</h2>
          <p>${formatDate(dateFromKey(state.selectedDate))}</p>
        </div>
        <div class="button-row">
          ${state.editMode ? `<button class="text-button" type="button" data-action="add-member"><i data-lucide="user-plus"></i><span>Person</span></button>` : ""}
          <button class="text-button primary" type="button" data-action="add-chore"><i data-lucide="plus"></i><span>Chore</span></button>
        </div>
      </div>

      <div class="board-grid">
        ${state.members.map(renderPersonColumn).join("")}
      </div>
    </section>
  `;
}

function renderPersonColumn(member) {
  const chores = choresForDate(state.selectedDate).filter((chore) => chore.memberId === member.id);
  const dailyPoints = pointsForMemberOnDate(member.id, state.selectedDate);
  const totalPoints = overallPointsForMember(member.id);

  return `
    <section class="person-card">
      <div class="person-heading">
        <div class="avatar" style="background:${member.color}">${initials(member.name)}</div>
        <div>
          <h3>${escapeHtml(member.name)}</h3>
        </div>
        <div class="points-stack" aria-label="${escapeAttr(member.name)} points">
          <div class="point-stat">
            <span>Today</span>
            <strong>${dailyPoints}</strong>
          </div>
          <div class="point-stat">
            <span>Total</span>
            <strong>${totalPoints}</strong>
          </div>
        </div>
      </div>

      <div class="chore-list">
        ${chores.length ? chores.map((chore) => renderChoreCard(chore, state.selectedDate)).join("") : `<div class="empty-state">Clear today</div>`}
      </div>
    </section>
  `;
}

function renderChoreCard(chore, dateKey) {
  const done = isDone(chore.id, dateKey);
  const member = getMember(chore.memberId);
  return `
    <article class="chore-card ${done ? "is-done" : ""}">
      <button class="done-button ${done ? "is-done" : ""}" type="button" data-action="toggle-chore" data-chore-id="${chore.id}" data-date="${dateKey}" aria-label="${done ? "Mark incomplete" : "Mark done"}">
        <i data-lucide="${done ? "check" : "circle"}"></i>
      </button>
      <div>
        <p class="chore-title">${escapeHtml(chore.title)}</p>
        <div class="chore-meta">
          <span class="mini-pill">${Number(chore.points || 0)} pt</span>
          <span class="mini-pill">${escapeHtml(scheduleLabel(chore))}</span>
          ${member ? `<span class="mini-pill">${escapeHtml(member.name)}</span>` : ""}
        </div>
      </div>
      ${
        state.editMode
          ? `<div class="row-actions">
              <button class="icon-button" type="button" data-action="edit-chore" data-chore-id="${chore.id}" aria-label="Edit chore"><i data-lucide="pencil"></i></button>
              <button class="icon-button" type="button" data-action="delete-chore" data-chore-id="${chore.id}" aria-label="Delete chore"><i data-lucide="trash-2"></i></button>
            </div>`
          : ""
      }
    </article>
  `;
}

function renderWeekView() {
  const week = getWeekDates(dateFromKey(state.selectedDate));
  return `
    <section class="main-board">
      <div class="panel-title">
        <div>
          <h2>This Week</h2>
          <p>${formatShortDate(week[0])} - ${formatShortDate(week[6])}</p>
        </div>
        <button class="text-button primary" type="button" data-action="add-chore"><i data-lucide="plus"></i><span>Chore</span></button>
      </div>

      <div class="week-grid">
        ${week.map(renderDayColumn).join("")}
      </div>
    </section>
  `;
}

function renderDayColumn(date) {
  const key = localDateKey(date);
  const chores = choresForDate(key);
  const done = chores.filter((chore) => isDone(chore.id, key)).length;
  const isToday = key === localDateKey(new Date());
  return `
    <section class="day-column ${isToday ? "is-today" : ""}">
      <h3>${DAYS[date.getDay()].label}</h3>
      <div class="day-stat">
        <span>${formatShortDate(date)}</span>
        <span>${done}/${chores.length}</span>
      </div>
      <div class="compact-list">
        ${
          chores.length
            ? chores.map((chore) => {
                const member = getMember(chore.memberId);
                return `<button class="compact-chore" type="button" data-action="toggle-chore" data-chore-id="${chore.id}" data-date="${key}">
                  <span class="dot" style="background:${member?.color || "#60707b"}"></span>
                  <span>${escapeHtml(chore.title)}</span>
                  <i data-lucide="${isDone(chore.id, key) ? "check" : "circle"}"></i>
                </button>`;
              }).join("")
            : `<div class="empty-state">Open</div>`
        }
      </div>
    </section>
  `;
}

function renderRewardsView() {
  const week = getWeekDates(dateFromKey(state.selectedDate)).map(localDateKey);
  return `
    <section class="main-board">
      <div class="panel-title">
        <div>
          <h2>Points</h2>
          <p>${formatShortDate(dateFromKey(week[0]))} - ${formatShortDate(dateFromKey(week[6]))}</p>
        </div>
        <button class="text-button" type="button" data-action="export"><i data-lucide="download"></i><span>Backup</span></button>
      </div>

      <div class="reward-grid">
        ${state.members.map((member) => {
          const points = week.reduce((total, dateKey) => {
            return total + state.chores
              .filter((chore) => chore.memberId === member.id && choreDueOn(chore, dateFromKey(dateKey)) && isDone(chore.id, dateKey))
              .reduce((sum, chore) => sum + Number(chore.points || 0), 0);
          }, 0);
          return `
            <article class="reward-card" style="background:${member.color}">
              <h3>${escapeHtml(member.name)}</h3>
              <strong>${points}</strong>
              <p>${completionPhrase(member.id, week)}</p>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderPrizeView() {
  const prizes = [...(state.prizes || [])].sort((a, b) => Number(a.points || 0) - Number(b.points || 0));

  return `
    <section class="main-board">
      <div class="panel-title">
        <div>
          <h2>Prizes</h2>
          <p>${state.members.map((member) => `${escapeHtml(member.name)}: ${overallPointsForMember(member.id)} pts`).join(" | ")}</p>
        </div>
        <button class="text-button primary" type="button" data-action="add-prize"><i data-lucide="gift"></i><span>Prize</span></button>
      </div>

      <div class="prize-grid">
        ${
          prizes.length
            ? prizes.map(renderPrizeCard).join("")
            : `<div class="empty-state prize-empty">No prizes yet</div>`
        }
      </div>
    </section>
  `;
}

function renderPrizeCard(prize) {
  const cost = Number(prize.points || 0);
  const unlockedCount = state.members.filter((member) => overallPointsForMember(member.id) >= cost).length;

  return `
    <article class="prize-card ${unlockedCount ? "" : "is-locked"}">
      <div class="prize-card-header">
        <div>
          <div class="prize-icon"><i data-lucide="${unlockedCount ? "gift" : "lock"}"></i></div>
          <h3>${escapeHtml(prize.title)}</h3>
        </div>
        <div class="prize-cost">
          <strong>${cost}</strong>
          <span>pts</span>
        </div>
      </div>

      <div class="unlock-list">
        ${state.members.map((member) => renderPrizeMemberStatus(member, prize)).join("")}
      </div>

      ${
        state.editMode
          ? `<div class="row-actions prize-actions">
              <button class="icon-button" type="button" data-action="edit-prize" data-prize-id="${prize.id}" aria-label="Edit ${escapeHtml(prize.title)}"><i data-lucide="pencil"></i></button>
              <button class="icon-button" type="button" data-action="delete-prize" data-prize-id="${prize.id}" aria-label="Delete ${escapeHtml(prize.title)}"><i data-lucide="trash-2"></i></button>
            </div>`
          : ""
      }
    </article>
  `;
}

function renderPrizeMemberStatus(member, prize) {
  const total = overallPointsForMember(member.id);
  const cost = Number(prize.points || 0);
  const unlocked = total >= cost;
  const remaining = Math.max(0, cost - total);

  return `
    <div class="unlock-row ${unlocked ? "is-unlocked" : "is-locked"}">
      <div class="avatar small" style="background:${member.color}">${initials(member.name)}</div>
      <div>
        <strong>${escapeHtml(member.name)}</strong>
        <span>${unlocked ? "Unlocked" : `${remaining} pts to go`}</span>
      </div>
      <i data-lucide="${unlocked ? "check" : "lock"}"></i>
    </div>
  `;
}

function renderMemberScore(member) {
  const chores = choresForDate(state.selectedDate).filter((chore) => chore.memberId === member.id);
  const done = chores.filter((chore) => isDone(chore.id, state.selectedDate)).length;
  const progress = chores.length ? Math.round((done / chores.length) * 360) : 360;
  const dailyPoints = pointsForMemberOnDate(member.id, state.selectedDate);
  const totalPoints = overallPointsForMember(member.id);

  return `
    <article class="member-card">
      <div class="avatar" style="background:${member.color}">${initials(member.name)}</div>
      <div>
        <h3>${escapeHtml(member.name)}</h3>
        <p>${dailyPoints} today | ${totalPoints} total</p>
      </div>
      ${
        state.editMode
          ? `<div class="member-actions">
              <button class="icon-button" type="button" data-action="edit-member" data-member-id="${member.id}" aria-label="Edit ${escapeHtml(member.name)}"><i data-lucide="pencil"></i></button>
              <button class="icon-button" type="button" data-action="delete-member" data-member-id="${member.id}" aria-label="Remove ${escapeHtml(member.name)}"><i data-lucide="trash-2"></i></button>
            </div>`
          : `<button class="progress-ring" style="--progress:${progress}deg" data-label="${done}/${chores.length}" aria-label="${escapeHtml(member.name)} progress"></button>`
      }
    </article>
  `;
}

function tabButton(view, label) {
  return `<button class="tab-button ${state.view === view ? "is-active" : ""}" type="button" data-action="set-view" data-view="${view}">${label}</button>`;
}

function openChoreModal(choreId) {
  const chore = state.chores.find((item) => item.id === choreId);
  const draft = chore || makeChore("", state.members[0]?.id || "", "daily", ["mon", "tue", "wed", "thu", "fri", "sat", "sun"], 1);
  modalTitle.textContent = chore ? "Edit Chore" : "Add Chore";
  modalBody.innerHTML = `
    <form class="form" id="choreForm">
      <label>
        Chore
        <input name="title" value="${escapeAttr(draft.title)}" maxlength="60" required />
      </label>

      <div class="form-grid">
        <label>
          Person
          <select name="memberId" required>
            ${state.members.map((member) => `<option value="${member.id}" ${member.id === draft.memberId ? "selected" : ""}>${escapeHtml(member.name)}</option>`).join("")}
          </select>
        </label>
        <label>
          Points
          <input name="points" type="number" min="0" max="20" value="${Number(draft.points || 1)}" />
        </label>
      </div>

      <label>
        Schedule
        <select name="schedule">
          <option value="daily" ${draft.schedule === "daily" ? "selected" : ""}>Daily</option>
          <option value="weekly" ${draft.schedule === "weekly" ? "selected" : ""}>Weekly</option>
        </select>
      </label>

      <div>
        <label>Days</label>
        <div class="day-tabs">
          ${DAYS.map((day) => `<button class="chip-button ${draft.days.includes(day.key) ? "is-active" : ""}" type="button" data-day="${day.key}">${day.label}</button>`).join("")}
        </div>
      </div>

      <div class="form-actions">
        ${chore ? `<button class="text-button danger" type="button" data-delete-from-modal>Delete</button>` : ""}
        <button class="text-button" type="button" data-close-modal>Cancel</button>
        <button class="text-button primary" type="submit">Save</button>
      </div>
    </form>
  `;

  modalBackdrop.hidden = false;
  refreshIcons();
  const selectedDays = new Set(draft.days);
  const form = document.querySelector("#choreForm");

  form.querySelectorAll("[data-day]").forEach((button) => {
    button.addEventListener("click", () => {
      if (selectedDays.has(button.dataset.day) && selectedDays.size > 1) {
        selectedDays.delete(button.dataset.day);
      } else {
        selectedDays.add(button.dataset.day);
      }
      button.classList.toggle("is-active", selectedDays.has(button.dataset.day));
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const updated = {
      id: chore?.id || cryptoId(),
      title: cleanText(data.get("title")),
      memberId: data.get("memberId"),
      schedule: data.get("schedule"),
      days: [...selectedDays],
      points: clamp(Number(data.get("points") || 0), 0, 20),
    };

    if (chore) {
      state.chores = state.chores.map((item) => (item.id === chore.id ? updated : item));
    } else {
      state.chores.push(updated);
    }

    closeModal();
    saveAndRender();
  });

  const deleteButton = form.querySelector("[data-delete-from-modal]");
  if (deleteButton) {
    deleteButton.addEventListener("click", () => {
      deleteChore(chore.id);
      closeModal();
    });
  }
}

function openMemberModal(memberId) {
  const member = state.members.find((item) => item.id === memberId);
  const color = member?.color || palette[state.members.length % palette.length];
  modalTitle.textContent = member ? "Edit Person" : "Add Person";
  modalBody.innerHTML = `
    <form class="form" id="memberForm">
      <label>
        Name
        <input name="name" value="${escapeAttr(member?.name || "")}" maxlength="32" required />
      </label>

      <label>
        Color
        <input name="color" type="color" value="${escapeAttr(color)}" />
      </label>

      <div class="form-actions">
        ${member ? `<button class="text-button danger" type="button" data-delete-member-modal>Delete</button>` : ""}
        <button class="text-button" type="button" data-close-modal>Cancel</button>
        <button class="text-button primary" type="submit">Save</button>
      </div>
    </form>
  `;

  modalBackdrop.hidden = false;
  refreshIcons();
  const form = document.querySelector("#memberForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const updated = {
      id: member?.id || cryptoId(),
      name: cleanText(data.get("name")),
      color: data.get("color") || color,
    };

    if (member) {
      state.members = state.members.map((item) => (item.id === member.id ? updated : item));
    } else {
      state.members.push(updated);
    }

    closeModal();
    saveAndRender();
  });

  const deleteButton = form.querySelector("[data-delete-member-modal]");
  if (deleteButton) {
    deleteButton.addEventListener("click", () => {
      deleteMember(member.id);
      closeModal();
    });
  }
}

function openPrizeModal(prizeId) {
  const prize = state.prizes?.find((item) => item.id === prizeId);
  modalTitle.textContent = prize ? "Edit Prize" : "Add Prize";
  modalBody.innerHTML = `
    <form class="form" id="prizeForm">
      <label>
        Prize
        <input name="title" value="${escapeAttr(prize?.title || "")}" maxlength="60" required />
      </label>

      <label>
        Points needed
        <input name="points" type="number" min="1" max="9999" value="${Number(prize?.points || 10)}" required />
      </label>

      <div class="form-actions">
        ${prize ? `<button class="text-button danger" type="button" data-delete-prize-modal>Delete</button>` : ""}
        <button class="text-button" type="button" data-close-modal>Cancel</button>
        <button class="text-button primary" type="submit">Save</button>
      </div>
    </form>
  `;

  modalBackdrop.hidden = false;
  refreshIcons();
  const form = document.querySelector("#prizeForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const updated = {
      id: prize?.id || cryptoId(),
      title: cleanText(data.get("title")),
      points: clamp(Number(data.get("points") || 1), 1, 9999),
    };

    state.prizes = Array.isArray(state.prizes) ? state.prizes : [];
    if (prize) {
      state.prizes = state.prizes.map((item) => (item.id === prize.id ? updated : item));
    } else {
      state.prizes.push(updated);
    }

    closeModal();
    saveAndRender();
  });

  const deleteButton = form.querySelector("[data-delete-prize-modal]");
  if (deleteButton) {
    deleteButton.addEventListener("click", () => {
      deletePrize(prize.id);
      closeModal();
    });
  }
}

function openNotice(title, message) {
  modalTitle.textContent = title;
  modalBody.innerHTML = `
    <div class="form">
      <p>${escapeHtml(message)}</p>
      <div class="form-actions">
        <button class="text-button primary" type="button" data-close-modal>OK</button>
      </div>
    </div>
  `;
  modalBackdrop.hidden = false;
  refreshIcons();
}

function closeModal() {
  modalBackdrop.hidden = true;
  modalBody.innerHTML = "";
}

function toggleChore(choreId, dateKey) {
  state.completions[dateKey] = state.completions[dateKey] || {};
  if (state.completions[dateKey][choreId]) {
    delete state.completions[dateKey][choreId];
  } else {
    const chore = state.chores.find((item) => item.id === choreId);
    state.completions[dateKey][choreId] = {
      doneAt: new Date().toISOString(),
      memberId: chore?.memberId,
      points: Number(chore?.points || 0),
    };
  }
  saveAndRender();
}

function deleteChore(choreId) {
  state.chores = state.chores.filter((chore) => chore.id !== choreId);
  Object.keys(state.completions).forEach((dateKey) => {
    delete state.completions[dateKey][choreId];
  });
  saveAndRender();
}

function deletePrize(prizeId) {
  state.prizes = (state.prizes || []).filter((prize) => prize.id !== prizeId);
  saveAndRender();
}

function deleteMember(memberId) {
  if (state.members.length <= 1) {
    openNotice("Keep One Person", "A board needs at least one person.");
    return;
  }

  const removedChoreIds = new Set(
    state.chores
      .filter((chore) => chore.memberId === memberId)
      .map((chore) => chore.id),
  );
  state.members = state.members.filter((member) => member.id !== memberId);
  state.chores = state.chores.filter((chore) => chore.memberId !== memberId);
  removeCompletionEntries(removedChoreIds);
  saveAndRender();
}

function removeCompletionEntries(choreIds, completions = state.completions) {
  Object.values(completions).forEach((dayCompletions) => {
    choreIds.forEach((choreId) => delete dayCompletions[choreId]);
  });
}

function resetDay(dateKey) {
  state.completions[dateKey] = {};
  saveAndRender();
}

function choresForDate(dateKey) {
  const date = dateFromKey(dateKey);
  return state.chores.filter((chore) => choreDueOn(chore, date));
}

function choreDueOn(chore, date) {
  const day = DAYS[date.getDay()].key;
  return chore.days.includes(day);
}

function isDone(choreId, dateKey) {
  return Boolean(state.completions[dateKey]?.[choreId]);
}

function getMember(memberId) {
  return state.members.find((member) => member.id === memberId);
}

function pointsForMemberOnDate(memberId, dateKey) {
  return state.chores
    .filter((chore) => chore.memberId === memberId && choreDueOn(chore, dateFromKey(dateKey)) && isDone(chore.id, dateKey))
    .reduce((total, chore) => total + Number(chore.points || 0), 0);
}

function overallPointsForMember(memberId) {
  return Object.entries(state.completions).reduce((total, [, dayCompletions]) => {
    return total + Object.entries(dayCompletions).reduce((dayTotal, [choreId, completion]) => {
      const chore = state.chores.find((item) => item.id === choreId);
      const completionMember = chore?.memberId || completion.memberId;
      if (completionMember !== memberId) return dayTotal;
      return dayTotal + Number(chore?.points ?? completion.points ?? 0);
    }, 0);
  }, 0);
}

function completionPhrase(memberId, week) {
  const due = week.flatMap((dateKey) => {
    return state.chores
      .filter((chore) => chore.memberId === memberId && choreDueOn(chore, dateFromKey(dateKey)))
      .map((chore) => ({ chore, dateKey }));
  });
  const done = due.filter((item) => isDone(item.chore.id, item.dateKey)).length;
  return `${done} of ${due.length} chores done this week`;
}

function makeChore(title, memberId, schedule, days, points) {
  return {
    id: cryptoId(),
    title,
    memberId,
    schedule,
    days: [...days],
    points,
  };
}

function defaultChoresForMember(member) {
  return (defaultChoreTemplates[member.name] || []).map(([title, points]) => {
    return makeChore(title, member.id, "daily", EVERY_DAY, points);
  });
}

function makePrize(title, points) {
  return {
    id: cryptoId(),
    title,
    points,
  };
}

function defaultPrizes() {
  return defaultPrizeTemplates.map(([title, points]) => makePrize(title, points));
}

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORE_KEY));
    validateImportedState(stored);
    return migrateState(stored);
  } catch {
    return JSON.parse(JSON.stringify(defaultState));
  }
}

function migrateState(value) {
  const renameMap = {
    Avery: "Mom",
    Jordan: "Dad",
    Riley: "Harrison",
  };
  const starterChoresToRemove = new Set([
    "Make bed",
    "Unload dishwasher",
    "Feed pets",
    "Take out trash",
    "Laundry basket",
    "Wipe bathroom sink",
  ]);
  const members = value.members
    .map((member) => ({
      ...member,
      name: renameMap[member.name] || member.name,
    }))
    .filter((member) => !["Mom", "Dad"].includes(member.name));

  const harrison = ensureMember(members, "Harrison", "#6c4f8f");
  const bennett = ensureMember(members, "Bennett", "#2d7dd2");
  const validMemberIds = new Set(members.map((member) => member.id));
  const removedChoreIds = new Set();
  const chores = value.chores
    .map((chore) => ({
      ...chore,
      days: Array.isArray(chore.days) && chore.days.length ? [...chore.days] : [...EVERY_DAY],
      points: Number(chore.points || 0),
    }))
    .filter((chore) => {
      const shouldRemove = !validMemberIds.has(chore.memberId) || starterChoresToRemove.has(chore.title);
      if (shouldRemove) removedChoreIds.add(chore.id);
      return !shouldRemove;
    });

  applyDefaultChores(chores, harrison);
  applyDefaultChores(chores, bennett);

  const completions = JSON.parse(JSON.stringify(value.completions || {}));
  removeCompletionEntries(removedChoreIds, completions);

  return {
    ...value,
    view: value.view === "week" ? "prizes" : (["today", "rewards", "prizes"].includes(value.view) ? value.view : "today"),
    members,
    chores,
    prizes: applyDefaultPrizes(Array.isArray(value.prizes) ? value.prizes.map((prize) => ({
      id: prize.id || cryptoId(),
      title: cleanText(prize.title),
      points: clamp(Number(prize.points || 1), 1, 9999),
    })).filter((prize) => prize.title) : []),
    completions,
  };
}

function ensureMember(members, name, color) {
  let member = members.find((item) => item.name === name);
  if (!member) {
    member = { id: cryptoId(), name, color };
    members.push(member);
  }
  return member;
}

function applyDefaultChores(chores, member) {
  (defaultChoreTemplates[member.name] || []).forEach(([title, points]) => {
    const existing = chores.find((chore) => chore.memberId === member.id && chore.title.toLowerCase() === title.toLowerCase());
    if (existing) {
      existing.schedule = "daily";
      existing.days = [...EVERY_DAY];
      existing.points = points;
    } else {
      chores.push(makeChore(title, member.id, "daily", EVERY_DAY, points));
    }
  });
}

function applyDefaultPrizes(prizes) {
  defaultPrizeTemplates.forEach(([title, points]) => {
    const existing = prizes.find((prize) => prize.title.toLowerCase() === title.toLowerCase());
    if (existing) {
      existing.title = title;
      existing.points = points;
    } else {
      prizes.push(makePrize(title, points));
    }
  });

  return prizes;
}

function validateImportedState(value) {
  if (!value || !Array.isArray(value.members) || !Array.isArray(value.chores) || typeof value.completions !== "object") {
    throw new Error("Invalid chore board");
  }
}

function saveAndRender() {
  saveState();
  render();
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function exportState() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const anchor = document.createElement("a");
  anchor.href = URL.createObjectURL(blob);
  anchor.download = `chore-board-${state.selectedDate}.json`;
  anchor.click();
  URL.revokeObjectURL(anchor.href);
}

function enterFullscreen() {
  const root = document.documentElement;
  if (document.fullscreenElement) {
    document.exitFullscreen?.();
  } else {
    root.requestFullscreen?.().catch(() => {});
  }
}

function startClock() {
  clearInterval(clockTimer);
  clockTimer = setInterval(() => {
    const node = document.querySelector("[data-clock]");
    if (node) node.textContent = formatTime(new Date());
  }, 1000);
}

function getWeekDates(date) {
  const start = new Date(date);
  start.setDate(date.getDate() - date.getDay());
  return Array.from({ length: 7 }, (_, index) => {
    const item = new Date(start);
    item.setDate(start.getDate() + index);
    return item;
  });
}

function localDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateFromKey(key) {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(date) {
  return new Intl.DateTimeFormat(undefined, { weekday: "long", month: "long", day: "numeric" }).format(date);
}

function formatShortDate(date) {
  return new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" }).format(date);
}

function formatTime(date) {
  return new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" }).format(date);
}

function scheduleLabel(chore) {
  if (chore.days.length === 7) return "Every day";
  return chore.days.map((day) => DAYS.find((item) => item.key === day)?.label).filter(Boolean).join(", ");
}

function initials(name) {
  return cleanText(name)
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function cleanText(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function cryptoId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons({ attrs: { width: 22, height: 22, "stroke-width": 2.4 } });
  } else {
    document.querySelectorAll("i[data-lucide]").forEach((icon) => {
      const paths = iconPaths[icon.dataset.lucide];
      if (!paths) {
        icon.textContent = iconFallbacks[icon.dataset.lucide] || "";
        return;
      }

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("width", "22");
      svg.setAttribute("height", "22");
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("stroke-width", "2.4");
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");
      svg.setAttribute("aria-hidden", "true");

      paths.forEach(([tag, attrs]) => {
        const child = document.createElementNS("http://www.w3.org/2000/svg", tag);
        Object.entries(attrs).forEach(([key, value]) => child.setAttribute(key, value));
        svg.appendChild(child);
      });

      icon.textContent = "";
      icon.setAttribute("aria-hidden", "true");
      icon.appendChild(svg);
    });
  }
}
