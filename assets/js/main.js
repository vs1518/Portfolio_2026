const translations = {
  fr: {
    "meta.title": "Valeriya Shin — Portfolio",
    "meta.description": "Portfolio de Valeriya Shin — Développeuse Fullstack Java / Spring Boot / React",
    "skip": "Aller au contenu",
    "brand.aria": "Retour en haut",
    "nav.aria": "Navigation principale",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.resume": "Parcours",
    "nav.education": "Formation",
    "nav.contact": "Contact",
    "theme.aria": "Changer le thème",
    "menu.aria": "Ouvrir le menu",
    "cta.contact": "Me contacter",
    "hero.badge": "Développeuse Fullstack",
    "hero.title": "Java / Spring Boot, React — <span class=\"grad\">je construis des apps solides</span> et orientées produit",
    "hero.lead": "Alternante à la DSI RATP sur une solution de réservation de flex office.<br />Je cherche un CDI à partir de septembre 2026.",
    "hero.projectsBtn": "Voir mes projets",
    "hero.resumeBtn": "Mon parcours",
    "hero.stackLabel": "Stack",
    "hero.locationLabel": "Localisation",
    "hero.location": "Paris · Hybride",
    "profile.alt": "Photo de Valeriya Shin",
    "profile.role": "Junior Backend Java / Spring Boot",
    "profile.deliveryTitle": "Ce que j’aime livrer",
    "profile.delivery1": "APIs propres + DTO/Validation",
    "profile.delivery2": "Architecture claire + tests",
    "profile.delivery3": "UI simple & efficace",
    "about.title": "À propos",
    "about.p1": "Originaire du Kazakhstan, j’ai quitté mon pays en 2014 avec une ambition claire : me former dans le pays de la haute gastronomie, là où l’excellence culinaire est une véritable institution.",
    "about.p2": "J’ai intégré l’une des écoles de cuisine les plus prestigieuses de France, avant de perfectionner mes techniques pendant sept ans dans des restaurants étoilés. Une expérience exigeante, où j’ai appris à allier rigueur, créativité et quête constante de perfection.",
    "about.p3": "À un tournant de ma vie, j’ai voulu transposer cette exigence dans un domaine tout aussi rigoureux et passionnant : le développement d’applications. Ce choix ne s’est pas fait au hasard. Dans un secteur où la précision, l’attention aux détails et la capacité à délivrer sous pression sont essentielles, mon parcours en gastronomie s’est révélé être un atout stratégique.",
    "about.p4": "Actuellement en dernière année de master, je travaille à la <span class=\"hl\">DSI de la RATP</span> sur un projet de réservation de flex office, que je développe de bout en bout. Ce projet constitue également le socle de mon mémoire de fin d’études et m’a permis d’approfondir concrètement le langage <span class=\"hl\">Java ainsi que le framework Spring Boot.</span>",
    "about.p5": "À l’issue de mon master, prévu en septembre 2026, je souhaite intégrer une équipe technique en tant que développeuse <span class=\"hl\">Junior backend Java / Spring Boot</span>, au sein d’un environnement stimulant, où la qualité et la progression continue sont valorisées.",
    "skills.title": "Compétences",
    "skills.tools": "Outils",
    "skills.docker": "Docker (bases)",
    "skills.cicd": "CI/CD (notions)",
    "projects.title": "Projets",
    "projects.flex.title": "FlexReserve — Réservation de postes (RATP)",
    "projects.flex.desc": "Plateforme interne de réservation de flex office : endpoints REST, règles métier, persistance, gestion d’erreurs, documentation API.",
    "projects.private": "Code privé",
    "projects.demo": "Démo / détails",
    "projects.docs.title": "Mini Google Docs — Éditeur collaboratif",
    "projects.docs.desc": "Édition temps réel, gestion des documents, websocket events, UI de liste, navigation.",
    "projects.github": "Voir sur GitHub",
    "projects.javacore.title": "JavaCore — Exercices & algo",
    "projects.javacore.desc": "Boucles, conditions, nombres premiers, optimisation, structuration et logique.",
    "resume.title": "Parcours",
    "resume.ratp.date": "Sept. 2024 — Sept. 2026",
    "resume.ratp.title": "RATP, DSI — Développeuse Fullstack Java (Alternance)",
    "resume.ratp.intro": "Conception et développement d’une application interne de réservation de postes de travail (Flex-Office), développée en autonomie dans un contexte grande entreprise.",
    "resume.ratp.li1": "Architecture backend en Java / Spring Boot (API REST, JPA, Hibernate)",
    "resume.ratp.li2": "Modélisation des entités et gestion des règles métier (conflits de réservation, statuts)",
    "resume.ratp.li3": "Base de données MySQL : relations, intégrité, optimisation des requêtes",
    "resume.ratp.li4": "Analyse des besoins et rédaction des spécifications techniques",
    "resume.ratp.li5": "Versioning Git, suivi des tâches via Jira",
    "resume.bnp.title": "BNP Paribas ITG — Assistant IT (Stage)",
    "resume.bnp.desc": "Support et gestion de données RH : sécurisation, archivage, et traitement de demandes via outils ITSM.",
    "resume.bnp.li1": "Gestion du chiffrement et de l’archivage des données RH (suivi, conformité, traçabilité)",
    "resume.bnp.li2": "Utilisation de TIBCO EBX (MDM) : manipulation et contrôle de données référentielles",
    "resume.bnp.li3": "Gestion de tickets et coordination : ServiceNow, Jira",
    "resume.environment": "Environnement :",
    "resume.cuisine.title": "Cheffe de cuisine — Restaurants gastronomiques / étoilés",
    "resume.cuisine.desc": "Parcours en environnements exigeants : rigueur, gestion des priorités, travail d’équipe et qualité d’exécution. Cette expérience renforce aujourd’hui ma capacité à livrer proprement, sous contrainte et avec méthode.",
    "resume.cuisine.li1": "Organisation et exécution sous forte pression (service)",
    "resume.cuisine.li2": "Standards élevés : qualité, précision, sens du détail",
    "resume.cuisine.li3": "Coordination d’équipe et communication claire",
    "education.title": "Formation",
    "education.jiraws.title": "JirAWS Learning — Spécialisation Java & Cloud",
    "education.jiraws.subtitle": "Formation avancée orientée backend et architecture",
    "education.jiraws.li1": "Java avancé, programmation orientée objet, bonnes pratiques",
    "education.jiraws.li2": "Spring & Spring Boot : API REST, architecture en couches, sécurité",
    "education.jiraws.li3": "Hibernate / JPA : mapping, relations, optimisation des requêtes",
    "education.jiraws.li4": "Introduction aux environnements Cloud (AWS)",
    "education.focus": "Focus :",
    "education.jiraws.focus": "conception d’applications robustes et prêtes pour la production",
    "education.efrei.title": "EFREI — Mastère Dev Manager Full Stack (Bac +5)",
    "education.efrei.li1": "Conception logicielle, architecture, API, bases de données",
    "education.efrei.li2": "Projets fullstack orientés production (qualité, tests, documentation)",
    "education.efrei.li3": "Mémoire : architecture d’une solution de réservation flex-office en grande entreprise",
    "education.descodeuses.title": "DesCodeuses — Concepteur Développeur d’Applications (Bac +3/4)",
    "education.descodeuses.li1": "Fondamentaux dev : algorithmie, web, bases de données, bonnes pratiques",
    "education.descodeuses.li2": "Projets d’équipe : livraison, Git, communication, itérations",
    "education.cordon.title": "Le Cordon Bleu — Diplôme de cuisine",
    "education.cordon.desc": "Exigence, discipline et culture du travail bien fait.",
    "contact.title": "Contact",
    "contact.reachTitle": "Me joindre",
    "contact.reachDesc": "Le plus simple : mail ou LinkedIn.",
    "contact.messageTitle": "Message",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Envoyer",
    "footer.top": "Haut ↑"
  },
  en: {
    "meta.title": "Valeriya Shin — Portfolio",
    "meta.description": "Valeriya Shin’s portfolio — Fullstack Java / Spring Boot / React Developer",
    "skip": "Skip to content",
    "brand.aria": "Back to top",
    "nav.aria": "Main navigation",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.resume": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "theme.aria": "Change theme",
    "menu.aria": "Open menu",
    "cta.contact": "Contact me",
    "hero.badge": "Fullstack Developer",
    "hero.title": "Java / Spring Boot, React — <span class=\"grad\">I build reliable applications</span> with a product mindset",
    "hero.lead": "Apprentice developer at RATP’s IT department, working on a flex-office reservation solution.<br />I am looking for a permanent position from September 2026.",
    "hero.projectsBtn": "View my projects",
    "hero.resumeBtn": "My experience",
    "hero.stackLabel": "Stack",
    "hero.locationLabel": "Location",
    "hero.location": "Paris · Hybrid",
    "profile.alt": "Photo of Valeriya Shin",
    "profile.role": "Junior Java / Spring Boot Backend Developer",
    "profile.deliveryTitle": "What I like to deliver",
    "profile.delivery1": "Clean APIs + DTOs/Validation",
    "profile.delivery2": "Clear architecture + tests",
    "profile.delivery3": "Simple and efficient UI",
    "about.title": "About",
    "about.p1": "Originally from Kazakhstan, I moved to France in 2014 with a clear ambition: to train in the country of haute cuisine, where culinary excellence is a true institution.",
    "about.p2": "I joined one of France’s most prestigious culinary schools, then refined my techniques for seven years in Michelin-starred restaurants. It was a demanding experience where I learned to combine discipline, creativity and a constant pursuit of excellence.",
    "about.p3": "At a turning point in my life, I decided to bring the same level of discipline into an equally rigorous and exciting field: application development. This career change was not accidental. In a sector where precision, attention to detail and the ability to deliver under pressure are essential, my background in gastronomy has become a strategic strength.",
    "about.p4": "I am currently in the final year of my master’s degree and work at the <span class=\"hl\">RATP IT Department</span> on a flex-office reservation project that I develop end to end. This project is also the foundation of my final dissertation and has allowed me to deepen my practical knowledge of <span class=\"hl\">Java and the Spring Boot framework.</span>",
    "about.p5": "After completing my master’s degree in September 2026, I would like to join a technical team as a <span class=\"hl\">Junior Java / Spring Boot Backend Developer</span>, in a stimulating environment where quality and continuous improvement are valued.",
    "skills.title": "Skills",
    "skills.tools": "Tools",
    "skills.docker": "Docker (basics)",
    "skills.cicd": "CI/CD (basics)",
    "projects.title": "Projects",
    "projects.flex.title": "FlexReserve — Workspace reservation system (RATP)",
    "projects.flex.desc": "Internal flex-office reservation platform: REST endpoints, business rules, persistence, error handling and API documentation.",
    "projects.private": "Private code",
    "projects.demo": "Demo / details",
    "projects.docs.title": "Mini Google Docs — Collaborative editor",
    "projects.docs.desc": "Real-time editing, document management, websocket events, list UI and navigation.",
    "projects.github": "View on GitHub",
    "projects.javacore.title": "JavaCore — Exercises & algorithms",
    "projects.javacore.desc": "Loops, conditions, prime numbers, optimization, structure and logic.",
    "resume.title": "Experience",
    "resume.ratp.date": "Sep. 2024 — Sep. 2026",
    "resume.ratp.title": "RATP, IT Department — Fullstack Java Developer (Apprenticeship)",
    "resume.ratp.intro": "Design and development of an internal workspace reservation application (Flex Office), built autonomously in a large-company environment.",
    "resume.ratp.li1": "Backend architecture with Java / Spring Boot (REST API, JPA, Hibernate)",
    "resume.ratp.li2": "Entity modeling and business-rule management (reservation conflicts, statuses)",
    "resume.ratp.li3": "MySQL database: relationships, integrity and query optimization",
    "resume.ratp.li4": "Requirements analysis and technical specification writing",
    "resume.ratp.li5": "Git version control and task tracking with Jira",
    "resume.bnp.title": "BNP Paribas ITG — IT Assistant (Internship)",
    "resume.bnp.desc": "Support and HR data management: securing, archiving and processing requests through ITSM tools.",
    "resume.bnp.li1": "Encryption and archiving of HR data (tracking, compliance, traceability)",
    "resume.bnp.li2": "Use of TIBCO EBX (MDM): handling and checking reference data",
    "resume.bnp.li3": "Ticket management and coordination: ServiceNow, Jira",
    "resume.environment": "Environment:",
    "resume.cuisine.title": "Chef de cuisine — Gourmet / Michelin-starred restaurants",
    "resume.cuisine.desc": "Experience in demanding environments: rigor, priority management, teamwork and execution quality. Today, this background strengthens my ability to deliver clean work under constraints and with method.",
    "resume.cuisine.li1": "Organization and execution under strong pressure during service",
    "resume.cuisine.li2": "High standards: quality, precision and attention to detail",
    "resume.cuisine.li3": "Team coordination and clear communication",
    "education.title": "Education",
    "education.jiraws.title": "JirAWS Learning — Java & Cloud specialization",
    "education.jiraws.subtitle": "Advanced training focused on backend development and architecture",
    "education.jiraws.li1": "Advanced Java, object-oriented programming and best practices",
    "education.jiraws.li2": "Spring & Spring Boot: REST APIs, layered architecture and security",
    "education.jiraws.li3": "Hibernate / JPA: mapping, relationships and query optimization",
    "education.jiraws.li4": "Introduction to Cloud environments (AWS)",
    "education.focus": "Focus:",
    "education.jiraws.focus": "designing robust, production-ready applications",
    "education.efrei.title": "EFREI — Master’s degree, Full Stack Development Management",
    "education.efrei.li1": "Software design, architecture, APIs and databases",
    "education.efrei.li2": "Production-oriented fullstack projects: quality, tests and documentation",
    "education.efrei.li3": "Dissertation: architecture of a flex-office reservation solution in a large company",
    "education.descodeuses.title": "DesCodeuses — Application Developer / Designer",
    "education.descodeuses.li1": "Development fundamentals: algorithms, web, databases and best practices",
    "education.descodeuses.li2": "Team projects: delivery, Git, communication and iterations",
    "education.cordon.title": "Le Cordon Bleu — Culinary Diploma",
    "education.cordon.desc": "High standards, discipline and a culture of well-executed work.",
    "contact.title": "Contact",
    "contact.reachTitle": "Get in touch",
    "contact.reachDesc": "The easiest way: email or LinkedIn.",
    "contact.messageTitle": "Message",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",
    "footer.top": "Top ↑"
  }
};

const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const year = document.getElementById("year");

function applyTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  const icon = themeToggle?.querySelector(".iconbtn__icon");
  if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";
}

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.fr;
  root.lang = lang;
  root.dataset.lang = lang;
  localStorage.setItem("lang", lang);
  langToggle?.setAttribute("aria-pressed", String(lang === "en"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.innerHTML = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const pairs = element.dataset.i18nAttr.split(",");
    pairs.forEach((pair) => {
      const [attr, key] = pair.split(":").map((value) => value.trim());
      if (attr && key && dictionary[key]) element.setAttribute(attr, dictionary[key]);
    });
  });

  if (dictionary["meta.title"]) document.title = dictionary["meta.title"];
}

const savedTheme = localStorage.getItem("theme") || "dark";
const savedLang = localStorage.getItem("lang") || "fr";
applyTheme(savedTheme);
applyLanguage(savedLang);
if (year) year.textContent = new Date().getFullYear();

themeToggle?.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

langToggle?.addEventListener("click", () => {
  applyLanguage(root.dataset.lang === "fr" ? "en" : "fr");
});

menuBtn?.addEventListener("click", () => {
  if (!mobileNav) return;
  mobileNav.hidden = !mobileNav.hidden;
});

document.querySelectorAll("#mobileNav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileNav) mobileNav.hidden = true;
  });
});
