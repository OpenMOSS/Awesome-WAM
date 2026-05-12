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
      { label: "Blog", url: "./report/2602.15922/index.en.html" },
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
      { label: "Blog", url: "./report/2601.16163/index.en.html" },
    ],
  },
];

const state = {
  papers: [],
  activeFilter: "all",
  query: "",
  sortBy: "newest",
  visible: 18,
};

const els = {
  paperGrid: document.querySelector("#paperGrid"),
  paperCount: document.querySelector("#paperCount"),
  branchCount: document.querySelector("#branchCount"),
  resultCount: document.querySelector("#resultCount"),
  search: document.querySelector("#paperSearch"),
  sort: document.querySelector("#paperSort"),
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
  if (!links.length) return;

  const sectionIds = [
    "overview",
    "definition",
    "vlas-wms",
    "architecture",
    "training-data",
    "evaluation",
    "challenges",
    "library",
  ];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  if (!sections.length) return;

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

  function updateActiveLink() {
    const activationLine = window.scrollY + 140;
    let activeSection = sections[0];

    sections.forEach((section) => {
      if (section.offsetTop <= activationLine) {
        activeSection = section;
      }
    });

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      activeSection = sections[sections.length - 1];
    }

    setActiveLink(activeSection.id);
  }

  let ticking = false;
  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateActiveLink();
      ticking = false;
    });
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);

  updateActiveLink();
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
  if (label.includes("summary")) return "Blog";
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
  return "all";
}

function normalizeArxivUrl(url) {
  return url.replace("/pdf/", "/abs/").replace(/\.pdf$/i, "");
}

function normalizeLibraryUrl(url, rawLabel, arxiv) {
  const label = rawLabel.toLowerCase();
  if (label.includes("summary") && arxiv) {
    return `./report/${arxiv}/index.en.html`;
  }
  const reportMatch = url.match(/github\.com\/OpenMOSS\/WAM-survey\/blob\/main\/Report\/([^/]+)\/index\.html/i);
  if (reportMatch) {
    const slug = decodeURIComponent(reportMatch[1]);
    return arxiv ? `./report/${arxiv}/index.en.html` : `./report/${slug}/index.en.html`;
  }
  return url;
}

function keepLibraryPaper(paper) {
  return paper.category === "cascaded" || paper.category === "joint";
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

  [...block.matchAll(/\[\[([^\]]+)]\((https?:\/\/[^)]+)\)\s*]/g)].forEach((match) => {
    const url = normalizeLibraryUrl(normalizeArxivUrl(match[2].trim()), match[1], arxiv);
    if (links.some((link) => link.url === url)) return;
    links.push({ label: labelFromLink(match[1], url), url });
  });

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
  const filtered = state.papers.filter((paper) => {
    const filterMatch = state.activeFilter === "all" || paper.category === state.activeFilter;
    const queryMatch = !query || getSearchText(paper).includes(query);
    return filterMatch && queryMatch;
  });

  function getSortTimestamp(paper) {
    if (!paper.arxiv) return 0;
    const base = paper.arxiv.replace(/^(\d{4}\.\d+).*/, "$1").replace(".", "");
    const numeric = Number(base);
    return Number.isFinite(numeric) ? numeric : 0;
  }

  filtered.sort((a, b) => {
    if (state.sortBy === "oldest") {
      return getSortTimestamp(a) - getSortTimestamp(b) || a.name.localeCompare(b.name);
    }
    if (state.sortBy === "name-asc") {
      return a.name.localeCompare(b.name);
    }
    return getSortTimestamp(b) - getSortTimestamp(a) || a.name.localeCompare(b.name);
  });

  return filtered;
}

function createPaperCard(paper, index) {
  const card = el("article", "paper-card reveal");
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
    if (link.label === "Blog" || /^https?:\/\//.test(link.url)) {
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
  const branches = new Set(
    state.papers
      .map((paper) => paper.category)
      .filter((category) => category === "cascaded" || category === "joint"),
  );
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

  els.sort?.addEventListener("change", (event) => {
    state.sortBy = event.target.value || "newest";
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
    state.sortBy = "newest";
    state.visible = 18;
    if (els.search) els.search.value = "";
    if (els.sort) els.sort.value = "newest";
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
    state.papers = parsed.filter(keepLibraryPaper);
    if (!state.papers.length) throw new Error("No cascaded or joint WAM papers parsed from README");
  } catch (error) {
    console.warn(error);
    state.papers = FALLBACK_PAPERS.filter(keepLibraryPaper);
    if (els.resultCount) {
      els.resultCount.textContent = "Related papers could not be loaded. Showing a small fallback library.";
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
