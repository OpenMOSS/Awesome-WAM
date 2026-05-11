const REPORT_PATHS = {
  DreamZero: "./Report/DreamZero/index.html",
  "World Action Models are Zero-shot Policies": "./Report/DreamZero/index.html",
  "Cosmos Policy": "./Report/Cosmos%20Policy/index.html",
  "Cosmos Policy: Fine-Tuning Video Models for Visuomotor Control and Planning":
    "./Report/Cosmos%20Policy/index.html",
};

const FALLBACK_PAPERS = [
  {
    name: "DreamZero",
    title: "World Action Models are Zero-shot Policies",
    branch: "World Action Model",
    lane: "Joint World-Action-Model",
    tags: ["Continuous Diffusion Structure", "Single DiT", "Explicit Future Generation"],
    arxiv: "2602.15922",
    category: "joint",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2602.15922" },
      { label: "Project", url: "https://dreamzero0.github.io/" },
      { label: "Analysis", url: "./Report/DreamZero/index.html" },
    ],
  },
  {
    name: "Cosmos Policy",
    title: "Cosmos Policy: Fine-Tuning Video Models for Visuomotor Control and Planning",
    branch: "World Action Model",
    lane: "Joint World-Action-Model",
    tags: ["Continuous Diffusion Structure", "Single DiT", "Explicit Future Generation"],
    arxiv: "2601.16163",
    category: "joint",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2601.16163" },
      { label: "Project", url: "https://research.nvidia.com/labs/dir/cosmos-policy/" },
      { label: "Analysis", url: "./Report/Cosmos%20Policy/index.html" },
    ],
  },
];

const state = {
  papers: [],
  activeFilter: "all",
  query: "",
  visible: 18,
};

const els = {
  paperGrid: document.querySelector("#paperGrid"),
  paperCount: document.querySelector("#paperCount"),
  branchCount: document.querySelector("#branchCount"),
  resultCount: document.querySelector("#resultCount"),
  search: document.querySelector("#paperSearch"),
  loadMore: document.querySelector("#loadMore"),
  resetFilters: document.querySelector("#resetFilters"),
};

const revealObserver =
  typeof IntersectionObserver === "function"
    ? new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0, rootMargin: "0px 0px -8% 0px" },
      )
    : null;

function observeReveal(el) {
  if (!el || el.dataset.revealBound) return;
  el.dataset.revealBound = "true";
  if (!revealObserver) {
    el.classList.add("is-visible");
    return;
  }
  revealObserver.observe(el);
}

function setupRevealAnimations() {
  document.querySelectorAll(".reveal").forEach(observeReveal);
}

function setupSidebarActive() {
  const links = [...document.querySelectorAll(".sidebar-link")];
  if (!links.length || typeof IntersectionObserver !== "function") return;

  function setActiveLink(activeId) {
    links.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${activeId}`;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setActiveLink(entry.target.id);
      });
    },
    { threshold: 0.32, rootMargin: "-86px 0px -42% 0px" },
  );

  [
    "overview",
    "thesis",
    "figures",
    "architecture",
    "data",
    "evaluation",
    "reports",
    "explorer",
    "challenges",
  ].forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });

  setActiveLink("overview");
}

function stripMarkdown(input) {
  return input
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")
    .replace(/\[[^\]]*]\([^)]*\)/g, "")
    .replace(/[*_`#]/g, "")
    .trim();
}

function cleanHeading(line) {
  return stripMarkdown(line.replace(/^#{2,4}\s+/, ""));
}

function cleanPaperName(name) {
  return name
    .replace(/[\u3400-\u9fff].*$/u, "")
    .replace(/\s+[-–—:,.]+$/u, "")
    .replace(/\s+/g, " ")
    .trim();
}

function labelFromLink(rawLabel, url) {
  const label = rawLabel.toLowerCase();
  if (label.includes("summary") || url.includes("Report/") || url.includes("htmlpreview")) return "Analysis";
  if (label.includes("code") || url.includes("github.com")) return "Code";
  if (label.includes("model") || url.includes("huggingface.co")) return "Model";
  if (label.includes("webpage") || label.includes("website")) return "Project";
  if (url.includes("arxiv.org")) return "arXiv";
  return stripMarkdown(rawLabel) || "Link";
}

function inferCategory(branch, lane, tags) {
  const haystack = `${branch} ${lane} ${tags.join(" ")}`.toLowerCase();
  if (haystack.includes("joint world-action-model")) return "joint";
  if (haystack.includes("cascaded world-action-model")) return "cascaded";
  if (haystack.includes("embodied world model")) return "embodied";
  if (haystack.includes("language-conditioned") || haystack.includes("multimodal")) return "multimodal";
  if (haystack.includes("action-conditioned")) return "action-conditioned";
  return "all";
}

function normalizeArxivUrl(url) {
  return url.replace("/pdf/", "/abs/").replace(/\.pdf$/i, "");
}

function parsePaperBlock(block, branch, lane) {
  const heading = block.match(/^####\s+(.+)$/m)?.[1]?.trim();
  if (!heading) return null;

  const titleMatch = heading.match(/\*([^*]+)\*/);
  const title = titleMatch ? titleMatch[1].trim() : stripMarkdown(heading.split(/\s+-\s+\[!\[/)[0]);
  const rawName = heading.split(/\s+-\s+\*/)[0].split(/\s+-\s+\[!\[/)[0];
  const name = cleanPaperName(stripMarkdown(rawName));
  const arxivMatch = block.match(/https:\/\/arxiv\.org\/(?:pdf|abs)\/([0-9.]+(?:v\d+)?)/i);
  const arxiv = arxivMatch?.[1] ?? "";
  const tagsLine = block.match(/\*\*Tags:\*\*\s*(.+)/);
  const tags = tagsLine
    ? tagsLine[1].split(/\s+-\s+/).map((tag) => tag.trim()).filter(Boolean)
    : [];

  const links = [];
  if (arxiv) {
    links.push({ label: "arXiv", url: `https://arxiv.org/abs/${arxiv}` });
  }

  const reportPath = REPORT_PATHS[name] || REPORT_PATHS[title];

  [...block.matchAll(/\[\[([^\]]+)]\((https?:\/\/[^)]+)\)\s*]/g)].forEach((match) => {
    const url = normalizeArxivUrl(match[2].trim());
    if (reportPath && url.includes("htmlpreview.github.io")) return;
    if (links.some((link) => link.url === url)) return;
    links.push({ label: labelFromLink(match[1], url), url });
  });

  if (reportPath && !links.some((link) => link.url === reportPath)) {
    links.push({ label: "Analysis", url: reportPath });
  }

  return {
    name,
    title,
    branch,
    lane,
    tags,
    arxiv,
    category: inferCategory(branch, lane, tags),
    links,
  };
}

function parseReadme(markdown) {
  const lines = markdown.split(/\r?\n/);
  const papers = [];
  let branch = "";
  let lane = "";

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (/^##\s+/.test(line) && !/^###/.test(line)) {
      branch = cleanHeading(line);
      lane = "";
      continue;
    }
    if (/^###\s+/.test(line) && !/^####/.test(line)) {
      lane = cleanHeading(line);
      continue;
    }
    if (!/^####\s+/.test(line)) continue;

    const block = [line];
    let j = i + 1;
    while (j < lines.length && !/^#{2,4}\s+/.test(lines[j])) {
      block.push(lines[j]);
      j += 1;
    }
    const paper = parsePaperBlock(block.join("\n"), branch, lane);
    if (paper) papers.push(paper);
    i = j - 1;
  }

  return papers;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (typeof text === "string") node.textContent = text;
  return node;
}

function getYear(paper) {
  if (!paper.arxiv) return "";
  return `20${paper.arxiv.slice(0, 2)}`;
}

function getSearchText(paper) {
  return [
    paper.name,
    paper.title,
    paper.branch,
    paper.lane,
    paper.arxiv,
    ...paper.tags,
  ].join(" ").toLowerCase();
}

function getFilteredPapers() {
  const query = state.query.trim().toLowerCase();
  return state.papers.filter((paper) => {
    const filterMatch = state.activeFilter === "all" || paper.category === state.activeFilter;
    const queryMatch = !query || getSearchText(paper).includes(query);
    return filterMatch && queryMatch;
  });
}

function createPaperCard(paper, index) {
  const card = el("article", `paper-card reveal${REPORT_PATHS[paper.name] ? " is-report" : ""}`);
  card.style.setProperty("--delay", `${Math.min(index * 35, 280)}ms`);

  const head = el("div", "paper-card-head");
  head.append(
    el("span", "paper-lane", paper.lane || paper.branch || "Survey"),
    el("span", "paper-year", getYear(paper) || paper.arxiv || "paper"),
  );

  const title = el("h3", "", paper.name);
  const desc = el("p", "paper-title", paper.title && paper.title !== paper.name ? paper.title : paper.branch);
  const chips = el("div", "chip-row");
  paper.tags.slice(0, 3).forEach((tag) => chips.append(el("span", "chip", tag)));

  const links = el("div", "paper-links");
  paper.links.slice(0, 5).forEach((link) => {
    const a = el("a", "paper-link", link.label);
    a.href = link.url;
    if (/^https?:\/\//.test(link.url)) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    links.append(a);
  });

  card.append(head, title, desc);
  if (paper.tags.length) card.append(chips);
  if (paper.links.length) card.append(links);
  return card;
}

function renderStats() {
  const branches = new Set(state.papers.map((paper) => paper.lane || paper.branch).filter(Boolean));
  if (els.paperCount) els.paperCount.textContent = String(state.papers.length);
  if (els.branchCount) els.branchCount.textContent = String(branches.size);
}

function renderFilterCounts() {
  const counts = state.papers.reduce(
    (acc, paper) => {
      acc.all += 1;
      acc[paper.category] = (acc[paper.category] || 0) + 1;
      return acc;
    },
    { all: 0 },
  );

  document.querySelectorAll(".filter-count").forEach((node) => {
    const key = node.dataset.countFor || "all";
    node.textContent = String(counts[key] || 0);
  });
}

function renderPapers() {
  const filtered = getFilteredPapers();
  const visible = filtered.slice(0, state.visible);
  els.paperGrid.textContent = "";

  if (!filtered.length) {
    els.paperGrid.append(el("div", "empty-state", "No matching papers. Try another keyword or reset the filters."));
  } else {
    visible.forEach((paper, index) => els.paperGrid.append(createPaperCard(paper, index)));
  }

  if (els.resultCount) {
    els.resultCount.textContent = `Showing ${visible.length} of ${filtered.length} papers`;
  }
  if (els.loadMore) {
    els.loadMore.hidden = visible.length >= filtered.length;
  }
  setupRevealAnimations();
}

function setupFilters() {
  function updateFilterButtons(activeFilter) {
    document.querySelectorAll(".filter-tab").forEach((item) => {
      const isActive = item.dataset.filter === activeFilter;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
  }

  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.activeFilter = tab.dataset.filter || "all";
      state.visible = 18;
      updateFilterButtons(state.activeFilter);
      renderPapers();
    });
  });

  els.search?.addEventListener("input", (event) => {
    state.query = event.target.value;
    state.visible = 18;
    renderPapers();
  });

  els.loadMore?.addEventListener("click", () => {
    state.visible += 18;
    renderPapers();
  });

  els.resetFilters?.addEventListener("click", () => {
    state.activeFilter = "all";
    state.query = "";
    state.visible = 18;
    if (els.search) els.search.value = "";
    updateFilterButtons("all");
    renderPapers();
  });
}

async function loadPapers() {
  try {
    const response = await fetch("./README.md");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    const parsed = parseReadme(markdown);
    if (!parsed.length) throw new Error("No papers parsed from README");
    state.papers = parsed;
  } catch (error) {
    console.warn(error);
    state.papers = FALLBACK_PAPERS;
    if (els.resultCount) {
      els.resultCount.textContent = "Related papers could not be loaded. Showing representative systems.";
    }
  }
  renderStats();
  renderFilterCounts();
  renderPapers();
}

function init() {
  setupRevealAnimations();
  setupSidebarActive();
  setupFilters();
  loadPapers();
}

init();
