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
  "home.address": "Bahçe Bitkileri Bölümü, Ziraat Fakültesi,\n          <a href=\"https://www.pau.edu.tr/\" target=\"_blank\" rel=\"noreferrer\">Pamukkale Üniversitesi</a> Yerleşkesi, Çivril, Denizli, Türkiye",
  "home.bio1": "Meyvecilik alanında çalışıyorum. Çalışmalarım meyve türlerinde pomolojik, fenolojik ve biyokimyasal özellikleri, anaç–kalem ilişkilerini, anatomik ve histolojik incelemeleri, bitki fizyolojisini, abiyotik ve biyotik stres faktörlerini ve hasat sonrası kaliteyi kapsamaktadır.",
  "home.bio2": "Yabani ve yerel genotiplerin seleksiyonu ve karakterizasyonu ile meyve genetik kaynaklarının değerlendirilmesi de temel ilgi alanlarım arasındadır.",
  "home.collab": "<strong>Ortak çalışma</strong>\n          <p>Bahçe bitkileri ve meyvecilik alanında ortak çalışmalara açığım. Ulusal ve uluslararası projelerde ya da ortak makale çalışmalarında birlikte çalışmak isteyen araştırmacılarla iletişim kurmaktan memnuniyet duyarım.</p>",
  "home.quickLinksHeading": "Hızlı Bağlantılar",
  "home.quickLinksList": "<li><a href=\"/cv/\">Özgeçmiş (Web Sürümü)</a></li>\n          <li><a href=\"/research/\">Araştırma alanları ve seçili yayınlar</a></li>\n          <li><a href=\"/publications/\">Tam yayın listesi</a></li>\n          <li><a href=\"/teaching/\">Verilen dersler</a></li>\n          <li><a href=\"/projects/\">Araştırma projeleri</a></li>\n          <li><a href=\"/experience/\">Akademik deneyim</a></li>\n          <li><a href=\"/service/\">Akademik hizmet, hakemlik ve ödüller</a></li>",
  "cv.title": "Özgeçmiş",
  "cv.subtitle": "Kapsamlı akademik profil",
  "cv.educationHeading": "Eğitim",
  "cv.educationList": "<li>\n            <strong>Bolu Abant İzzet Baysal Üniversitesi</strong>, Bolu, Türkiye (2017-2022)<br />\n            Doktora, Bahçe Bitkileri<br />\n            Tez: Çakal eriği (<i>Prunus spinosa</i>) ve bazı badem (<i>Prunus amygdalus</i>) anaçlarının geç çiçeklenen badem çeşitleri için anaç olarak kullanılabilirliği<br />\n            Danışman: Prof. Dr. Turan Karadeniz\n          </li>\n          <li>\n            <strong>Ordu Üniversitesi</strong>, Ordu, Türkiye (2008-2010)<br />\n            Yüksek Lisans, Bahçe Bitkileri<br />\n            Tez: Fındıkta (<i>Corylus avellana</i> L.) ocak dikim yaşı ile verim ve kalite arasındaki ilişkiler<br />\n            Danışman: Prof. Dr. Turan Karadeniz\n          </li>\n          <li>\n            <strong>Karadeniz Teknik Üniversitesi</strong>, Ordu Ziraat Fakültesi, Ordu, Türkiye (2003-2007)<br />\n            Lisans, Bahçe Bitkileri Bölümü\n          </li>",
  "cv.titlesHeading": "Akademik Unvanlar",
  "cv.titlesList": "<li><strong>Doçent</strong>, Üniversitelerarası Kurul (ÜAK) (2026)</li>\n          <li><strong>Doktor Öğretim Üyesi</strong>, Ziraat Fakültesi, Pamukkale Üniversitesi (2022)</li>\n          <li><strong>Öğretim Görevlisi</strong>, Tavas Meslek Yüksekokulu, Pamukkale Üniversitesi (2012)</li>",
  "cv.skillsHeading": "Teknik Beceriler",
  "cv.skillsList": "<li><strong>Laboratuvar:</strong> HPLC, GC, UV-Vis spektrofotometri, Soxhlet ekstraksiyonu (ham yağ) ve Kjeldahl analizi (ham protein)</li>\n          <li><strong>İstatistik:</strong> SPSS, JMP, Minitab, R, Python</li>",
  "cv.languagesHeading": "Yabancı Diller",
  "cv.languagesList": "<li><strong>Türkçe:</strong> Ana dil</li>\n          <li><strong>İngilizce:</strong> Orta üstü (YDS: 65, YÖKDİL: 68,75)</li>",
  "research.title": "Araştırma",
  "research.interestsHeading": "Araştırma Alanları",
  "research.interestsList": "<li><strong>Meyve genetik kaynakları:</strong> yabani ve yerel genotiplerin seleksiyonu, karakterizasyonu ve fenotipik çeşitlilik.</li>\n          <li><strong>Meyve biyokimyası:</strong> fenolik bileşikler, organik asitler, yağ asitleri, mineraller ve antioksidan aktivite.</li>\n          <li><strong>Hasat sonrası:</strong> hasatta ve depolama sürecinde meyve kalitesi.</li>\n          <li><strong>Bahçe yönetimi:</strong> anaç–kalem ilişkileri ve sulama.</li>",
  "research.selectedHeading": "Seçili Dergi Yayınları",
  "publications.title": "Yayınlar",
  "publications.filtersAria": "Yayın filtreleri",
  "teaching.title": "Eğitim",
  "teaching.subtitle": "Pamukkale Üniversitesi'nde verilen dersler",
  "teaching.courses": "<details class=\"course-group\" open>\n          <summary><span class=\"course-title\">Lisans</span> <span class=\"course-sub\">Ziraat Fakültesi, Pamukkale Üniversitesi · 17 ders</span></summary>\n          <ul class=\"course-list\">\n            <li><span class=\"course-name\">Araştırma ve Deneme Metotları</span> <span class=\"course-meta\">3 saat/hafta · 2025–2026</span></li>\n            <li><span class=\"course-name\">Bahçe Bitkilerine Giriş</span> <span class=\"course-meta\">2–4 saat/hafta · 2023–2026</span></li>\n            <li><span class=\"course-name\">Fide ve Fidan Yetiştirme Teknikleri</span> <span class=\"course-meta\">4 saat/hafta · 2025–2026</span></li>\n            <li><span class=\"course-name\">Genel Meyvecilik</span> <span class=\"course-meta\">4 saat/hafta · 2025–2026</span></li>\n            <li><span class=\"course-name\">İstatistik</span> <span class=\"course-meta\">2–3 saat/hafta · 2023–2026</span></li>\n            <li><span class=\"course-name\">Mesleki Uygulama - I</span> <span class=\"course-meta\">5 saat/hafta · 2025–2026</span></li>\n            <li><span class=\"course-name\">Mesleki Uygulama - II</span> <span class=\"course-meta\">5 saat/hafta · 2025–2026</span></li>\n            <li><span class=\"course-name\">Sıcak İklim Sebzeleri</span> <span class=\"course-meta\">4 saat/hafta · 2025–2026</span></li>\n            <li><span class=\"course-name\">Tarım Ekonomisi</span> <span class=\"course-meta\">2 saat/hafta · 2025–2026</span></li>\n            <li><span class=\"course-name\">Tarımsal Yapılar ve Sulama</span> <span class=\"course-meta\">3 saat/hafta · 2024–2026</span></li>\n            <li><span class=\"course-name\">Bahçe Ürünlerinin Muhafazası ve Pazara Hazırlanması</span> <span class=\"course-meta\">3 saat/hafta · 2024–2025</span></li>\n            <li><span class=\"course-name\">Bitki Çoğaltma Tekniği</span> <span class=\"course-meta\">4 saat/hafta · 2024–2025</span></li>\n            <li><span class=\"course-name\">Botanik</span> <span class=\"course-meta\">4 saat/hafta · 2023–2025</span></li>\n            <li><span class=\"course-name\">Genetiği Değiştirilmiş Organizmalar</span> <span class=\"course-meta\">3 saat/hafta · 2024–2025</span></li>\n            <li><span class=\"course-name\">Meyve Yetiştirme İlkeleri</span> <span class=\"course-meta\">2 saat/hafta · 2024–2025</span></li>\n            <li><span class=\"course-name\">Ölçme Bilgisi</span> <span class=\"course-meta\">3 saat/hafta · 2024–2025</span></li>\n            <li><span class=\"course-name\">Topraksız Tarım</span> <span class=\"course-meta\">3 saat/hafta · 2024–2025</span></li>\n          </ul>\n        </details>\n        <details class=\"course-group\">\n          <summary><span class=\"course-title\">Önlisans</span> <span class=\"course-sub\">Tavas Meslek Yüksekokulu, Pamukkale Üniversitesi · 12 ders</span></summary>\n          <ul class=\"course-list\">\n            <li><span class=\"course-name\">Budama Tekniği</span> <span class=\"course-meta\">3 saat/hafta · 2020–2023</span></li>\n            <li><span class=\"course-name\">Bahçe Bitkileri</span> <span class=\"course-meta\">2 saat/hafta · 2020–2022</span></li>\n            <li><span class=\"course-name\">Bitki Fizyolojisi</span> <span class=\"course-meta\">2 saat/hafta · 2020–2022</span></li>\n            <li><span class=\"course-name\">Bitki Hormonları ve Kullanım Alanları</span> <span class=\"course-meta\">2 saat/hafta · 2020–2022</span></li>\n            <li><span class=\"course-name\">Fide ve Fidan Yetiştiriciliği</span> <span class=\"course-meta\">3 saat/hafta · 2020–2022</span></li>\n            <li><span class=\"course-name\">Hasat Sonrası Teknolojisi</span> <span class=\"course-meta\">3 saat/hafta · 2020–2022</span></li>\n            <li><span class=\"course-name\">Ilıman İklim Meyve Türleri - I</span> <span class=\"course-meta\">4 saat/hafta · 2020–2022</span></li>\n            <li><span class=\"course-name\">Ilıman İklim Meyve Türleri - II</span> <span class=\"course-meta\">4 saat/hafta · 2020–2022</span></li>\n            <li><span class=\"course-name\">Sera ve Süs Bitkileri</span> <span class=\"course-meta\">3 saat/hafta · 2020–2022</span></li>\n            <li><span class=\"course-name\">Sunum ve Toplantı Teknikleri</span> <span class=\"course-meta\">3 saat/hafta · 2020–2022</span></li>\n            <li><span class=\"course-name\">Tarla Bitkileri</span> <span class=\"course-meta\">2 saat/hafta · 2021–2022</span></li>\n            <li><span class=\"course-name\">Üzümsü Meyveler</span> <span class=\"course-meta\">3 saat/hafta · 2020–2022</span></li>\n          </ul>\n        </details>",
  "projects.title": "Projeler",
  "projects.subtitle": "Destekli araştırma projeleri",
  "projects.heading": "Araştırma Projeleri",
  "projects.list": "<li>\n            <strong>İç Ege Bölgesi ile Göller Yöresinde Şalak Kayısı Yetiştiriciliğinin Mukayesesi ve Verimsizliğinin Nedenlerinin Araştırılması</strong>\n            (Pamukkale Üniversitesi Bilimsel Araştırma Projeleri, 2023-2026). Araştırmacı (Yürütücü: Doğru Çokran, B.). Tamamlandı.\n          </li>\n          <li>\n            <strong>Çal ve Bekilli İlçelerinde Yetiştirilen ‘Çalkarası’ Üzüm Popülasyonundan Üstün Özellikli Asmaların Belirlenmesi</strong>\n            (Pamukkale Üniversitesi Bilimsel Araştırma Projeleri, 2023-2025). Araştırmacı (Yürütücü: Karadeniz, T.). Tamamlandı.\n          </li>\n          <li>\n            <strong>Bazı Sofralık Özbekistan ve Avrupa Üzüm Çeşitlerinin Çal (Denizli) Ekolojisine Adaptasyonlarının Belirlenmesi</strong>\n            (Pamukkale Üniversitesi Bilimsel Araştırma Projeleri, 2022-2024). Yürütücü. Tamamlandı.\n          </li>\n          <li>\n            <strong>PAÜ Tavas MYO Otomatik Topraksız Tarım ve Fide/Fidan Üretim Serasının Kurulumu</strong>\n            (Pamukkale Üniversitesi Bilimsel Araştırma Projeleri, 2016-2017). Araştırmacı (Yürütücü: Arslan, Ş.). Tamamlandı.\n          </li>\n          <li>\n            <strong>PAÜ Tavas Meslek Yüksekokulu Fide/Fidan Üretim Serası ve Toprak Bitki Analiz Laboratuvarının Kurulumu</strong>\n            (Pamukkale Üniversitesi Bilimsel Araştırma Projeleri, 2015-2016). Araştırmacı (Yürütücü: Arslan, Ş.). Tamamlandı.\n          </li>",
  "experience.title": "Deneyim",
  "experience.subtitle": "Akademik görevler",
  "experience.list": "<li>\n            <strong>Doçent</strong>, Bahçe Bitkileri Bölümü, Ziraat Fakültesi,\n            Pamukkale Üniversitesi, Denizli (2026-Devam ediyor).\n          </li>\n          <li>\n            <strong>Doktor Öğretim Üyesi</strong>, Bahçe Bitkileri Bölümü, Ziraat Fakültesi,\n            Pamukkale Üniversitesi, Denizli (2022-2026).\n          </li>\n          <li>\n            <strong>Öğretim Görevlisi</strong>, Tavas Meslek Yüksekokulu, Pamukkale Üniversitesi,\n            Denizli (2012-2022).\n          </li>",
  "service.title": "Hizmet ve Ödüller",
  "service.subtitle": "Akademik hizmet, hakemlik ve ödüller",
  "service.serviceHeading": "Akademik Hizmetler",
  "service.serviceList": "<li><strong>Dekan Yardımcısı</strong>, Ziraat Fakültesi, Pamukkale Üniversitesi (2022-Devam ediyor).</li>\n          <li><strong>Uluslararası İlişkiler Fakülte Koordinatörü</strong>, Ziraat Fakültesi, Pamukkale Üniversitesi (2022-Devam ediyor).</li>\n          <li><strong>Fakülte Yönetim Kurulu Üyesi</strong>, Ziraat Fakültesi, Pamukkale Üniversitesi (2023-Devam ediyor).</li>\n          <li><strong>Kalite Kurulu Üyesi</strong>, Ziraat Fakültesi, Pamukkale Üniversitesi (2024-Devam ediyor).</li>\n          <li><strong>Kalite Komisyonu Üyesi</strong>, Ziraat Fakültesi, Pamukkale Üniversitesi (2022-Devam ediyor).</li>\n          <li><strong>Yüksekokul Müdürü</strong>, Tavas Meslek Yüksekokulu, Pamukkale Üniversitesi (2015-2016).</li>\n          <li><strong>Yüksekokul Müdür Yardımcısı</strong>, Tavas Meslek Yüksekokulu, Pamukkale Üniversitesi (2014-2015, 2017-2022).</li>\n          <li><strong>Yüksekokul Yönetim Kurulu Üyesi</strong>, Tavas Meslek Yüksekokulu, Pamukkale Üniversitesi (2017-2022).</li>\n          <li><strong>Bölüm Başkanı</strong>, Bitkisel ve Hayvansal Üretim Bölümü, Tavas Meslek Yüksekokulu, Pamukkale Üniversitesi (2014-2022).</li>\n          <li><strong>Bölüm Başkan Yardımcısı</strong>, Bitkisel ve Hayvansal Üretim Bölümü, Tavas Meslek Yüksekokulu, Pamukkale Üniversitesi (2013-2014).</li>\n          <li><strong>Program Başkanı</strong>, Tıbbi ve Aromatik Bitkiler Programı, Tavas Meslek Yüksekokulu, Pamukkale Üniversitesi (2013-2022).</li>",
  "service.membershipHeading": "Üyelikler",
  "service.membershipList": "<li><strong>Society of Chemical Industry (SCI)</strong>, Üye (2026-Devam ediyor).</li>\n          <li><strong>American Society for Horticultural Science (ASHS)</strong>, Üye (2024-Devam ediyor).</li>\n          <li><strong>Bahçe Bitkileri Derneği</strong>, Üye (2016-Devam ediyor).</li>",
  "service.awardsHeading": "Burslar ve Ödüller",
  "service.awardsList": "<li>2013 Yılının En İyi Tarım Haber Sitesi Ödülü, Türkiye Ziraat Mühendisleri Derneği, 2013.</li>",
  "service.reviewHeading": "Editörlük ve Hakemlik Faaliyetleri",
  "service.pub0": "<strong>Springer Nature</strong>",
  "service.pub1": "<strong>Elsevier</strong>",
  "service.pub2": "<strong>Wiley</strong>",
  "service.pub3": "<strong>Diğer Yayınevleri</strong>"
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
  const searchInput = document.getElementById("pub-search");
  const yearSelect = document.getElementById("pub-year-filter");
  const catSelect = document.getElementById("pub-cat-filter");
  if (!searchInput || !yearSelect) {
    return;
  }

  const items = Array.from(document.querySelectorAll(".pub-list li"));
  const sections = Array.from(document.querySelectorAll(".pub-section"));
  const years = Array.from(
    new Set(items.map((item) => item.dataset.year).filter((year) => year && year !== "0"))
  ).sort((a, b) => Number(b) - Number(a));

  years.forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  });

  const runFilter = () => {
    const query = searchInput.value.trim().toLocaleLowerCase("tr");
    const selectedYear = yearSelect.value;
    const selectedCat = catSelect ? catSelect.value : "all";

    sections.forEach((section) => {
      const catOk = selectedCat === "all" || section.dataset.cat === selectedCat;
      let visible = 0;
      section.querySelectorAll("li").forEach((item) => {
        const haystack = (item.dataset.search || item.textContent).toLocaleLowerCase("tr");
        const matchQuery = !query || haystack.includes(query);
        const matchYear = selectedYear === "all" || item.dataset.year === selectedYear;
        item.hidden = !(catOk && matchQuery && matchYear);
        if (!item.hidden) visible += 1;
      });
      section.hidden = visible === 0;
    });

    updatePubCountLabel(document.documentElement.lang || "en");
  };

  searchInput.addEventListener("input", runFilter);
  yearSelect.addEventListener("change", runFilter);
  if (catSelect) catSelect.addEventListener("change", runFilter);

  runFilter();
}

function updatePubCountLabel(lang) {
  const counter = document.getElementById("pub-count");
  if (!counter) {
    return;
  }
  const allItems = Array.from(document.querySelectorAll(".pub-list li"));
  const visibleItems = allItems.filter((item) => !item.hidden).length;
  counter.textContent =
    lang === "tr"
      ? `${visibleItems} / ${allItems.length} kayıt gösteriliyor`
      : `Showing ${visibleItems} of ${allItems.length} records`;
}

function updatePublicationSubtitle(lang) {
  if (!document.getElementById("pub-search")) {
    return;
  }
  const subtitle = document.querySelector("article.content .subtitle");
  if (!subtitle) {
    return;
  }
  const total = document.querySelectorAll(".pub-list li").length;
  subtitle.textContent =
    lang === "tr" ? `Tam liste (${total} kayıt)` : `Complete list (${total} records)`;
}

function normalizePath(pathname) {
  if (!pathname.endsWith("/")) {
    return `${pathname}/`;
  }
  return pathname;
}

// Back-to-top button (appears after scrolling down)
(function initBackToTop() {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "to-top";
  btn.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 14l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const setLabel = () => {
    const label = document.documentElement.lang === "tr" ? "Yukarı git" : "Back to top";
    btn.setAttribute("aria-label", label);
    btn.title = label;
  };
  setLabel();
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const toggle = () => {
    btn.classList.toggle("is-visible", window.scrollY > 400);
  };
  window.addEventListener("scroll", toggle, { passive: true });
  toggle();

  document.querySelectorAll(".lang-btn").forEach((b) => b.addEventListener("click", setLabel));
})();
