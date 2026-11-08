/* =========================================================
   PUBLICATION LIST
   Add one block per publication. Order does not matter
   (the page sorts by year, newest first).

   type: "SCI-E" | "National" | "Book Chapter" | "Conference" | "Book"
   selected: true  -> also shown on the Research page
   doi: leave "" if there is none
   ========================================================= */

const PUBLICATIONS = [
  {
    year: 2025,
    authors: "Kırca, L.",
    title: "<span class=\"todo\">Title to be added</span>",
    venue: "Meyve Bilimi",
    details: "12(1): 65–77",
    doi: "10.51532/meyve.1671443",
    type: "National"
  },
  {
    year: 2025,
    authors: "Kırca, L., Mertoğlu, K.",
    title: "<span class=\"todo\">Title to be added</span>",
    venue: "Manas Journal of Agriculture Veterinary and Life Sciences",
    details: "",
    doi: "10.53518/mjavl.1574982",
    type: "National"
  },
  {
    year: 2025,
    authors: "Kırca, L.",
    title: "<span class=\"todo\">Title to be added</span>",
    venue: "International Journal of Agriculture, Environment and Food Sciences",
    details: "",
    doi: "10.31015/2025.1.15",
    type: "National"
  },
  {
    year: 2024,
    authors: "Kırca, L., Aygün, A.",
    title: "Determination and comparison of morpho-physiological characteristics of Turkish sweet cherry (<i>Prunus avium</i> L.) grown in Afyonkarahisar: local cultivars and genotypes",
    venue: "Genetic Resources and Crop Evolution",
    details: "71(8): 4359–4373",
    doi: "10.1007/s10722-024-01904-9",
    type: "SCI-E",
    selected: true
  },
  {
    year: 2024,
    authors: "Kırca, L.",
    title: "Regional analysis of almond production: Current situation and future potential in the Aegean Region",
    venue: "Ordu University Journal of Science and Technology",
    details: "",
    doi: "10.54370/ordubtd.1499044",
    type: "National",
    selected: true
  },
  {
    year: 2023,
    authors: "Kırca, L., Kırca, S., Aygün, A.",
    title: "Organic acid, phenolic compound and antioxidant contents of fresh and dried fruits of pear (<i>Pyrus communis</i> L.) cultivars",
    venue: "Erwerbs-Obstbau",
    details: "65(4): 677–691",
    doi: "",
    type: "SCI-E",
    selected: true
  },
  {
    year: 2020,
    authors: "Karadeniz, T., Kırca, L., Şenyurt, M., Bak, T.",
    title: "Determination and evaluation of wild hazelnut genotypes in Tirebolu Harkköy region",
    venue: "Uluslararası Anadolu Ziraat Mühendisliği Bilimleri Dergisi",
    details: "",
    doi: "",
    type: "National"
  },
  {
    year: 2018,
    authors: "Kırca, L., Bak, T., Kırca, S., Karadeniz, T.",
    title: "Hazelnut usage areas and their effects on human health",
    venue: "Bahçe",
    details: "",
    doi: "",
    type: "National"
  },
  {
    year: 2014,
    authors: "Kırca, S., Yarılgaç, T., Kırca, L., Bak, T.",
    title: "Study on the selection of walnut (<i>Juglans regia</i> L.) in Trabzon",
    venue: "Turkish Journal of Agricultural and Natural Sciences",
    details: "",
    doi: "",
    type: "National"
  }
];

/* ---------- Rendering (no need to edit below) ---------- */

function highlightMe(authors) {
  return authors.replace(/(Kırca, L\.|Kirca, L\.)/g, '<span class="me">$1</span>');
}

function pubHTML(p, num) {
  const doi = p.doi ? `<a href="https://doi.org/${p.doi}" target="_blank" rel="noopener">[DOI]</a>` : "";
  const details = p.details ? `, ${p.details}` : "";
  return `
    <li class="pub-item">
      <span class="pub-num">${String(num).padStart(2, "0")}</span>
      <div>
        <div class="pub-title">${p.title}<span class="pub-type">${p.type}</span></div>
        <div class="pub-authors">${highlightMe(p.authors)}</div>
        <div class="pub-venue"><em>${p.venue}</em>${details} (${p.year})</div>
        <div class="pub-links">${doi}</div>
      </div>
    </li>`;
}

function sortedPubs() {
  return [...PUBLICATIONS].sort((a, b) => b.year - a.year);
}

function renderPublicationsPage() {
  const list = document.getElementById("pub-list");
  if (!list) return;
  const search = document.getElementById("pub-search");
  const yearSel = document.getElementById("pub-year");
  const typeSel = document.getElementById("pub-typefilter");
  const count = document.getElementById("pub-count");

  const all = sortedPubs();
  [...new Set(all.map(p => p.year))].forEach(y => yearSel.add(new Option(y, y)));
  [...new Set(all.map(p => p.type))].forEach(t => typeSel.add(new Option(t, t)));

  function update() {
    const q = search.value.toLowerCase().trim();
    const y = yearSel.value;
    const t = typeSel.value;
    const items = all.filter(p =>
      (!y || String(p.year) === y) &&
      (!t || p.type === t) &&
      (!q || (p.title + p.authors + p.venue).toLowerCase().includes(q))
    );
    list.innerHTML = items.map((p, i) => pubHTML(p, i + 1)).join("");
    count.textContent = `Complete list (${all.length} records)` +
      (items.length !== all.length ? ` — showing ${items.length}` : "");
  }

  search.addEventListener("input", update);
  yearSel.addEventListener("change", update);
  typeSel.addEventListener("change", update);
  update();
}

function renderSelectedPubs() {
  const list = document.getElementById("selected-pubs");
  if (!list) return;
  const items = sortedPubs().filter(p => p.selected);
  list.innerHTML = items.map((p, i) => pubHTML(p, i + 1)).join("");
}

renderPublicationsPage();
renderSelectedPubs();
