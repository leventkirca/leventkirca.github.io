document.querySelectorAll(".footer [data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const I18N_STORAGE_KEY = "lk_site_lang";
const SUPPORTED_LANGS = ["en", "tr"];
const KEY_DEFAULTS = new Map();

const pageHeadTranslations = {
  "/": {
    "en": {
      "title": "Levent Kırca, Ph.D.",
      "description": "Academic homepage of Levent Kırca, Associate Professor of Horticulture at Pamukkale University."
    },
    "tr": {
      "title": "Levent Kırca, Ph.D.",
      "description": "Pamukkale Üniversitesi Bahçe Bitkileri Doçenti Levent Kırca'nın akademik web sitesi."
    }
  },
  "/cv/": {
    "en": {
      "title": "CV | Levent Kırca",
      "description": "Curriculum vitae of Levent Kırca."
    },
    "tr": {
      "title": "Özgeçmiş | Levent Kırca",
      "description": "Levent Kırca'nın özgeçmişi."
    }
  },
  "/research/": {
    "en": {
      "title": "Research | Levent Kırca",
      "description": "Research interests and selected publications of Levent Kırca."
    },
    "tr": {
      "title": "Araştırma | Levent Kırca",
      "description": "Levent Kırca'nın araştırma alanları ve seçili yayınları."
    }
  },
  "/publications/": {
    "en": {
      "title": "Publications | Levent Kırca",
      "description": "Complete publications list of Levent Kırca."
    },
    "tr": {
      "title": "Yayınlar | Levent Kırca",
      "description": "Levent Kırca'nın tam yayın listesi."
    }
  },
  "/teaching/": {
    "en": {
      "title": "Teaching | Levent Kırca",
      "description": "Teaching and supervision activities of Levent Kırca."
    },
    "tr": {
      "title": "Eğitim | Levent Kırca",
      "description": "Levent Kırca'nın öğretim ve danışmanlık faaliyetleri."
    }
  },
  "/projects/": {
    "en": {
      "title": "Projects | Levent Kırca",
      "description": "Research projects of Levent Kırca."
    },
    "tr": {
      "title": "Projeler | Levent Kırca",
      "description": "Levent Kırca'nın araştırma projeleri."
    }
  },
  "/experience/": {
    "en": {
      "title": "Experience | Levent Kırca",
      "description": "Academic experience of Levent Kırca."
    },
    "tr": {
      "title": "Deneyim | Levent Kırca",
      "description": "Levent Kırca'nın akademik deneyimi."
    }
  },
  "/service/": {
    "en": {
      "title": "Service & Awards | Levent Kırca",
      "description": "Academic service, peer review activities, and awards of Levent Kırca."
    },
    "tr": {
      "title": "Hizmet ve Ödüller | Levent Kırca",
      "description": "Levent Kırca'nın akademik hizmet, hakemlik faaliyetleri ve ödülleri."
    }
  }
};

const trKeyTranslations = {
  "shared.role": "Bahçe Bitkileri Doçenti",
  "shared.photoAlt": "Levent Kırca portresi",
  "shared.topNavAria": "Ana gezinme",
  "home.subtitle": "Bahçe Bitkileri Doçenti",
  "home.address": "Bahçe Bitkileri Bölümü, Ziraat Fakültesi,\n          <a href=\"https://www.pau.edu.tr/\" target=\"_blank\" rel=\"noreferrer\">Pamukkale Üniversitesi</a>\n          <br />\n          <span class=\"todo\">Kampüs, 20600</span> Çivril, Denizli, Türkiye",
  "home.bio1": "Meyve genetik kaynakları üzerine çalışıyorum. Çalışmalarım yabani ve yerel meyve genotiplerinin pomolojik ve biyokimyasal karakterizasyonunu, hasat sonrası meyve kalitesini ve anaç–kalem ilişkilerini kapsamaktadır.",
  "home.bio2": "Arazi çalışmalarımın çoğu Denizli ve Ege Bölgesi'nde yürütülmektedir. Fındık, badem, ceviz, armut, kiraz, ayva, kuşburnu ve kızılcık üzerinde çalışıyorum. Son çalışmalarım meyve genotiplerinde fenolik bileşikler, yağ asitleri, mineraller ve antioksidan aktivite üzerinde yoğunlaşmaktadır.",
  "home.quickLinksHeading": "Hızlı Bağlantılar",
  "home.quickLinksList": "<li><a href=\"/cv/\">Özgeçmiş (Web Sürümü)</a></li>\n          <li><a href=\"/research/\">Araştırma alanları ve seçili yayınlar</a></li>\n          <li><a href=\"/publications/\">Tam yayın listesi</a></li>\n          <li><a href=\"/teaching/\">Dersler ve danışmanlıklar</a></li>\n          <li><a href=\"/projects/\">Araştırma projeleri</a></li>\n          <li><a href=\"/experience/\">Akademik deneyim</a></li>\n          <li><a href=\"/service/\">Akademik hizmet, hakemlik ve ödüller</a></li>",
  "cv.title": "Özgeçmiş",
  "cv.subtitle": "Kapsamlı akademik profil",
  "cv.researchHeading": "Araştırma Alanları",
  "cv.researchList": "<li><strong>Meyve genetik kaynakları:</strong> yabani ve yerel genotiplerin seleksiyonu, karakterizasyonu ve fenotipik çeşitlilik.</li>\n          <li><strong>Meyve biyokimyası:</strong> fenolik bileşikler, organik asitler, yağ asitleri, mineraller ve antioksidan aktivite.</li>\n          <li><strong>Hasat sonrası:</strong> hasatta ve depolama sürecinde meyve kalitesi.</li>\n          <li><strong>Bahçe yönetimi:</strong> anaç–kalem ilişkileri ve sulama.</li>",
  "cv.educationHeading": "Eğitim",
  "cv.educationList": "<li>\n            <strong>Bolu Abant İzzet Baysal Üniversitesi</strong>, Bolu, Türkiye (<span class=\"todo\">başlangıç</span>-2022)<br />\n            Doktora, Bahçe Bitkileri<br />\n            Tez: <em><span class=\"todo\">Doktora tezi başlığı</span></em><br />\n            Danışman: <span class=\"todo\">Danışman</span>\n          </li>\n          <li>\n            <strong>Ordu Üniversitesi</strong>, Ordu, Türkiye (<span class=\"todo\">yıllar</span>)<br />\n            Yüksek Lisans, Bahçe Bitkileri<br />\n            Tez: <em><span class=\"todo\">Yüksek lisans tezi başlığı</span></em><br />\n            Danışman: <span class=\"todo\">Danışman</span>\n          </li>\n          <li>\n            <strong>Karadeniz Teknik Üniversitesi</strong>, Trabzon, Türkiye (<span class=\"todo\">yıllar</span>)<br />\n            Lisans, <span class=\"todo\">Bölüm</span>\n          </li>",
  "cv.titlesHeading": "Akademik Unvanlar",
  "cv.titlesList": "<li><strong>Doçent</strong>, Üniversitelerarası Kurul (ÜAK) (2026)</li>\n          <li><strong>Doktor Öğretim Üyesi</strong>, Ziraat Fakültesi, Pamukkale Üniversitesi (2022)</li>\n          <li><strong>Öğretim Görevlisi</strong>, Tavas Meslek Yüksekokulu, Pamukkale Üniversitesi (2012)</li>",
  "cv.skillsHeading": "Teknik Beceriler",
  "cv.skillsList": "<li><strong>Laboratuvar:</strong> <span class=\"todo\">örn. HPLC, GC, spektrofotometrik analizler</span></li>\n          <li><strong>İstatistik:</strong> <span class=\"todo\">örn. SPSS, JMP, R</span></li>",
  "cv.languagesHeading": "Yabancı Diller",
  "cv.languagesList": "<li><strong>Türkçe:</strong> Ana dil</li>\n          <li><strong>İngilizce:</strong> <span class=\"todo\">Düzey</span></li>",
  "research.title": "Araştırma",
  "research.interestsHeading": "Araştırma Alanları",
  "research.interestsList": "<li><strong>Meyve genetik kaynakları:</strong> yabani ve yerel genotiplerin seleksiyonu, karakterizasyonu ve fenotipik çeşitlilik.</li>\n          <li><strong>Meyve biyokimyası:</strong> fenolik bileşikler, organik asitler, yağ asitleri, mineraller ve antioksidan aktivite.</li>\n          <li><strong>Hasat sonrası:</strong> hasatta ve depolama sürecinde meyve kalitesi.</li>\n          <li><strong>Bahçe yönetimi:</strong> anaç–kalem ilişkileri ve sulama.</li>",
  "research.selectedHeading": "Seçili Dergi Yayınları",
  "publications.title": "Yayınlar",
  "publications.filtersAria": "Yayın filtreleri",
  "teaching.title": "Eğitim",
  "teaching.coursesHeading": "Dersler",
  "teaching.coursesList": "<li><span class=\"todo\">Ders kodu</span> - <span class=\"todo\">Ders adı</span></li>\n          <li><span class=\"todo\">Ders kodu</span> - Mezuniyet Tezi Hazırlama</li>",
  "teaching.thesesHeading": "Yönetilen Tezler",
  "teaching.thesesList": "<li>\n            <span class=\"todo\">Öğrenci adı</span>, Yüksek Lisans (<span class=\"todo\">yıl</span>) - Danışman<br />\n            <em><span class=\"todo\">Tez başlığı</span></em>\n          </li>",
  "projects.title": "Projeler",
  "projects.subtitle": "Destekli araştırma projeleri",
  "projects.heading": "Araştırma Projeleri",
  "projects.list": "<li>\n            <strong><span class=\"todo\">Proje adı</span></strong>\n            (<span class=\"todo\">Destekleyen kurum, örn. PAÜ BAP</span>, Türkiye, <span class=\"todo\">yıllar</span>). <span class=\"todo\">Yürütücü / Araştırmacı</span>.\n          </li>",
  "experience.title": "Deneyim",
  "experience.subtitle": "Akademik görevler",
  "experience.list": "<li>\n            <strong>Doçent</strong>, Bahçe Bitkileri Bölümü, Ziraat Fakültesi,\n            Pamukkale Üniversitesi, Denizli (2026-Devam ediyor).\n          </li>\n          <li>\n            <strong>Doktor Öğretim Üyesi</strong>, Bahçe Bitkileri Bölümü, Ziraat Fakültesi,\n            Pamukkale Üniversitesi, Denizli (2022-2026).\n          </li>\n          <li>\n            <strong>Öğretim Görevlisi</strong>, Tavas Meslek Yüksekokulu, Pamukkale Üniversitesi,\n            Denizli (2012-2022).\n          </li>",
  "service.title": "Hizmet ve Ödüller",
  "service.subtitle": "Akademik hizmet, hakemlik ve ödüller",
  "service.serviceHeading": "Akademik Hizmetler",
  "service.serviceList": "<li><strong><span class=\"todo\">Görev</span></strong>, <span class=\"todo\">Birim, Pamukkale Üniversitesi</span> (<span class=\"todo\">yıllar</span>).</li>",
  "service.awardsHeading": "Burslar ve Ödüller",
  "service.awardsList": "<li><span class=\"todo\">Ödül, veren kurum, yıl</span></li>",
  "service.reviewHeading": "Editörlük ve Hakemlik Faaliyetleri",
  "service.intlLabel": "<strong>Uluslararası Dergiler</strong>",
  "service.natLabel": "<strong>Ulusal Dergiler</strong>"
};

initLanguageToggle();
initPublicationFilters();

function initLanguageToggle() {
  const mastheadInner = document.querySelector(".masthead-inner");
  if (!mastheadInner) {
    return;
  }

  captureDefaultKeyContent();

  let lang = localStorage.getItem(I18N_STORAGE_KEY);
  if (!SUPPORTED_LANGS.includes(lang)) {
    lang = "en";
  }

  const switchNode = document.createElement("div");
  switchNode.className = "lang-switch";
  switchNode.setAttribute("aria-label", "Language switch");
  switchNode.innerHTML = `
    <button type="button" class="lang-btn" data-lang="en">EN</button>
    <button type="button" class="lang-btn" data-lang="tr">TR</button>
  `;
  mastheadInner.appendChild(switchNode);

  switchNode.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.lang;
      applyLanguage(selected, switchNode);
      localStorage.setItem(I18N_STORAGE_KEY, selected);
    });
  });

  applyLanguage(lang, switchNode);
}

function captureDefaultKeyContent() {
  document.querySelectorAll("[data-i18n-key]").forEach((node) => {
    const key = node.dataset.i18nKey;
    if (!key || KEY_DEFAULTS.has(key)) {
      return;
    }
    KEY_DEFAULTS.set(key, readNodeValue(node));
  });
}

function readNodeValue(node) {
  const attrName = node.dataset.i18nAttr;
  if (attrName) {
    return node.getAttribute(attrName) || "";
  }
  if (node.dataset.i18nHtml === "true") {
    return node.innerHTML.trim();
  }
  return (node.textContent || "").trim();
}

function writeNodeValue(node, value) {
  const attrName = node.dataset.i18nAttr;
  if (attrName) {
    node.setAttribute(attrName, value);
    return;
  }
  if (node.dataset.i18nHtml === "true") {
    node.innerHTML = value;
    return;
  }
  node.textContent = value;
}

function applyLanguage(lang, switchNode) {
  document.documentElement.lang = lang;

  switchNode.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
  switchNode.setAttribute("aria-label", lang === "tr" ? "Dil seçimi" : "Language switch");

  applyKeyTranslations(lang);

  document.querySelectorAll("[data-i18n-en][data-i18n-tr]").forEach((node) => {
    const translated = lang === "tr" ? node.dataset.i18nTr : node.dataset.i18nEn;
    node.textContent = translated;
  });

  const path = normalizePath(window.location.pathname);
  applyHeadTranslations(path, lang);
  applyPublicationUiTranslations(lang);
}

function applyKeyTranslations(lang) {
  document.querySelectorAll("[data-i18n-key]").forEach((node) => {
    const key = node.dataset.i18nKey;
    if (!key) {
      return;
    }
    const defaultValue = KEY_DEFAULTS.get(key);
    const translatedValue = trKeyTranslations[key];
    const value = lang === "tr" ? translatedValue || defaultValue : defaultValue;
    if (typeof value === "string") {
      writeNodeValue(node, value);
    }
  });
}

function applyHeadTranslations(path, lang) {
  const headMap = pageHeadTranslations[path];
  if (!headMap) {
    return;
  }
  const selected = lang === "tr" ? headMap.tr : headMap.en;
  if (selected.title) {
    document.title = selected.title;
  }
  const description = document.querySelector('meta[name="description"]');
  if (description && selected.description) {
    description.setAttribute("content", selected.description);
  }
}

function applyPublicationUiTranslations(lang) {
  const searchInput = document.getElementById("pub-search");
  if (searchInput) {
    searchInput.placeholder = lang === "tr" ? "Başlık, yazar, dergi" : "Title, author, journal";
    updatePubCountLabel(lang);
  }
  updatePublicationSubtitle(lang);
}

function initPublicationFilters() {
  const list = document.querySelector(".pub-list");
  const searchInput = document.getElementById("pub-search");
  const yearSelect = document.getElementById("pub-year-filter");
  if (!list || !searchInput || !yearSelect) {
    return;
  }

  const items = Array.from(list.querySelectorAll("li"));
  const years = Array.from(
    new Set(
      items
        .map((item) => item.dataset.year)
        .filter((year) => year && year !== "0")
    )
  ).sort((a, b) => Number(b) - Number(a));

  years.forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  });

  const runFilter = () => {
    const query = searchInput.value.trim().toLowerCase();
    const selectedYear = yearSelect.value;

    items.forEach((item) => {
      const haystack = (item.dataset.search || item.textContent).toLowerCase();
      const year = item.dataset.year || "";

      const matchQuery = !query || haystack.includes(query);
      const matchYear = selectedYear === "all" || year === selectedYear;
      item.hidden = !(matchQuery && matchYear);
    });

    updatePubCountLabel(document.documentElement.lang || "en");
  };

  searchInput.addEventListener("input", runFilter);
  yearSelect.addEventListener("change", runFilter);

  runFilter();
}

function updatePubCountLabel(lang) {
  const list = document.querySelector(".pub-list");
  const counter = document.getElementById("pub-count");
  if (!list || !counter) {
    return;
  }
  const allItems = Array.from(list.querySelectorAll("li"));
  const visibleItems = allItems.filter((item) => !item.hidden).length;
  counter.textContent =
    lang === "tr"
      ? `${visibleItems} / ${allItems.length} yayın gösteriliyor`
      : `Showing ${visibleItems} of ${allItems.length} publications`;
}

function updatePublicationSubtitle(lang) {
  const list = document.querySelector(".pub-list");
  const subtitle = document.querySelector("article.content .subtitle");
  if (!list || !subtitle) {
    return;
  }
  const total = list.querySelectorAll("li").length;
  subtitle.textContent =
    lang === "tr" ? `Tam liste (${total} kayıt)` : `Complete list (${total} records)`;
}

function normalizePath(pathname) {
  if (!pathname.endsWith("/")) {
    return `${pathname}/`;
  }
  return pathname;
}
