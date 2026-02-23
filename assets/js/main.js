(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const isHidden = mobileNav.hasAttribute("hidden");
      if (isHidden) mobileNav.removeAttribute("hidden");
      else mobileNav.setAttribute("hidden", "");
    });

    mobileNav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => mobileNav.setAttribute("hidden", ""));
    });
  }

  // Theme toggle (DEFAULT = DARK)
  const toggle = document.getElementById("themeToggle");
  const root = document.documentElement;

  const setIcon = (theme) => {
    const icon = toggle?.querySelector(".iconbtn__icon");
    if (!icon) return;

    // Dark => soleil (pour passer en light)
    // Light => lune (pour passer en dark)
    icon.textContent = theme === "dark" ? "☀" : "☾";
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme; // "dark" | "light"
    setIcon(theme);
  };

  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") {
    applyTheme(saved);
  } else {
    // par défaut : dark
    applyTheme("dark");
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = root.dataset.theme === "light" ? "light" : "dark";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem("theme", next);
    });
  }
})();