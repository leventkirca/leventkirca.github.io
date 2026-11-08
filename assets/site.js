/* =========================================================
   Shared header, profile block and footer for all pages.
   Edit the PROFILE and NAV sections below to update every page.
   ========================================================= */

const PROFILE = {
  name: "Levent Kırca, Ph.D.",
  shortName: "Levent Kırca",
  role: "Associate Professor of Horticulture",
  affiliation: "Pamukkale University, Faculty of Agriculture, Department of Horticulture",
  photo: "/assets/photo.jpg",
  initials: "LK",
  links: [
    { label: "Email", url: "mailto:lkirca@pau.edu.tr" },
    { label: "University Profile", url: "https://pau.edu.tr/lkirca/en" },
    { label: "Pamukkale University", url: "https://www.pau.edu.tr/" },
    { label: "Google Scholar", url: "https://scholar.google.com.tr/citations?user=qiIJmgcAAAAJ" },
    { label: "ORCID", url: "https://orcid.org/0000-0003-2496-9513" },
    { label: "ResearchGate", url: "https://www.researchgate.net/profile/Levent-Kirca-2" },
    { label: "YÖK Akademik", url: "https://akademik.yok.gov.tr/AkademikArama/AkademisyenGorevOgrenimBilgileri?islem=direct&authorId=C82161FD0BDDA5AB" },
    { label: "DergiPark", url: "https://dergipark.org.tr/en/pub/@leventkirca" }
    // Scopus: { label: "Scopus", url: "https://www.scopus.com/authid/detail.uri?authorId=XXXXXXXX" },
    // LinkedIn: { label: "LinkedIn", url: "https://www.linkedin.com/in/XXXX" },
  ]
};

const NAV = [
  { label: "Home", url: "/" },
  { label: "CV", url: "/cv/" },
  { label: "Research", url: "/research/" },
  { label: "Publications", url: "/publications/" },
  { label: "Teaching", url: "/teaching/" },
  { label: "Projects", url: "/projects/" },
  { label: "Experience", url: "/experience/" },
  { label: "Service & Awards", url: "/service/" }
];

(function renderShell() {
  const path = window.location.pathname.replace(/index\.html$/, "");

  const navItems = NAV.map(item => {
    const active = (item.url === "/" ? path === "/" : path.startsWith(item.url)) ? ' class="active"' : "";
    return `<li><a href="${item.url}"${active}>${item.label}</a></li>`;
  }).join("");

  const links = PROFILE.links.map(l => {
    const ext = l.url.startsWith("http") ? ' target="_blank" rel="noopener"' : "";
    return `<li><a href="${l.url}"${ext}>${l.label}</a></li>`;
  }).join("");

  const header = `
    <header class="topbar">
      <div class="container">
        <a class="site-name" href="/">${PROFILE.shortName}</a>
        <nav><ul>${navItems}</ul></nav>
      </div>
    </header>
    <div class="container">
      <section class="profile">
        <img class="profile-photo" src="${PROFILE.photo}" alt="Portrait of ${PROFILE.shortName}"
             onerror="this.outerHTML='<div class=&quot;profile-initials&quot;>${PROFILE.initials}</div>'">
        <div>
          <h2>${PROFILE.name}</h2>
          <p class="role">${PROFILE.role}</p>
          <p class="affil">${PROFILE.affiliation}</p>
          <ul class="profile-links">${links}</ul>
        </div>
      </section>
    </div>`;

  const footer = `
    <footer>
      <div class="container">© ${new Date().getFullYear()} ${PROFILE.shortName}</div>
    </footer>`;

  document.getElementById("site-header").innerHTML = header;
  document.getElementById("site-footer").innerHTML = footer;
})();
