// Semua bagian halaman dibuat dari data.js agar mudah diperbarui.
const makeElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
};

function renderStatistics() {
  const statsGrid = document.querySelector("#stats-grid");
  const stats = [
    { label: "Total Mahasiswa", value: classData.statistics.totalStudents, suffix: " orang", placeholder: "[Isi jumlah]" },
    { label: "Semester", value: classData.statistics.semester, suffix: "" },
    { label: "Dokumentasi", value: classData.statistics.documentation, suffix: " momen" },
    { label: "Mata Kuliah", value: classData.statistics.courses, suffix: " slot" }
  ];

  stats.forEach((stat, index) => {
    const card = makeElement("article", "stat-card reveal");
    const number = makeElement("span", "stat-number");
    const value = Number.isFinite(stat.value) ? stat.value : null;
    number.textContent = value === null ? stat.placeholder : `0${stat.suffix}`;
    if (value !== null) {
      number.dataset.target = String(value);
      number.dataset.suffix = stat.suffix;
    }
    const label = makeElement("span", "stat-label", stat.label);
    card.append(number, label);
    card.style.setProperty("--card-delay", `${index * 70}ms`);
    statsGrid.append(card);
  });
}

function getInitials(name) {
  const words = name.replace(/[\[\]]/g, "").trim().split(/\s+/).filter(Boolean);
  return words.slice(0, 2).map((word) => word[0]).join("").toUpperCase() || "?";
}

function renderStructure() {
  const container = document.querySelector("#structure-groups");
  classData.structure.forEach((group, groupIndex) => {
    const groupSection = makeElement("section", `structure-group reveal${groupIndex === 0 ? " structure-advisor" : ""}`);
    const title = makeElement("h3", "group-title", group.group);
    const members = makeElement("div", "member-grid");
    group.members.forEach((member) => {
      const card = makeElement("article", "member-card");
      const portrait = makeElement("div", "portrait");
      const initials = makeElement("span", "portrait-initials", getInitials(member.name));
      portrait.append(initials);
      if (member.photo) {
        const image = makeElement("img", "portrait-image");
        image.src = member.photo;
        image.alt = `Foto ${member.name}`;
        image.loading = "lazy";
        image.addEventListener("error", () => image.remove());
        portrait.append(image);
      }
      card.append(portrait, makeElement("h4", "member-name", member.name), makeElement("p", "member-role", member.role));
      members.append(card);
    });
    groupSection.append(title, members);
    container.append(groupSection);
  });
}

function renderGallery() {
  const gallery = document.querySelector("#gallery-grid");
  const lightbox = document.querySelector("#lightbox");
  const lightboxImage = lightbox.querySelector(".lightbox-image");
  const fallback = lightbox.querySelector(".lightbox-fallback");

  classData.gallery.forEach((item, index) => {
    const card = makeElement("button", "gallery-card reveal");
    card.type = "button";
    card.setAttribute("aria-label", `Buka foto: ${item.title}`);
    const imageWrap = makeElement("span", "gallery-image-wrap");
    const image = makeElement("img", "gallery-image");
    image.src = item.image;
    image.alt = `${item.title}: ${item.description}`;
    image.loading = "lazy";
    image.addEventListener("error", () => image.remove());
    imageWrap.append(image);
    const caption = makeElement("span", "gallery-caption");
    caption.append(makeElement("span", "gallery-title", item.title), makeElement("span", "gallery-description", item.description));
    card.append(imageWrap, caption);
    card.style.setProperty("--card-delay", `${(index % 3) * 70}ms`);
    card.addEventListener("click", () => {
      lightbox.querySelector(".lightbox-caption h2").textContent = item.title;
      lightbox.querySelector(".lightbox-caption p").textContent = item.description;
      lightboxImage.alt = `${item.title}: ${item.description}`;
      fallback.hidden = true;
      lightboxImage.hidden = false;
      lightboxImage.src = item.image;
      lightboxImage.onerror = () => {
        lightboxImage.hidden = true;
        fallback.hidden = false;
      };
      lightbox.showModal();
    });
    gallery.append(card);
  });

  lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("cancel", (event) => {
    event.preventDefault();
    lightbox.close();
  });
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
}

function renderSchedule() {
  const tabs = document.querySelector("#schedule-tabs");
  const panel = document.querySelector("#schedule-panel");
  const todayIndex = new Date().getDay();
  const today = todayIndex >= 1 && todayIndex <= 5 ? todayIndex - 1 : 0;
  let selectedIndex = today;

  function showDay(index) {
    selectedIndex = index;
    const dayData = classData.schedule[index];
    tabs.querySelectorAll('[role="tab"]').forEach((tab, tabIndex) => {
      const selected = tabIndex === index;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    panel.replaceChildren();
    panel.setAttribute("aria-labelledby", `day-tab-${index}`);

    if (!dayData.courses.length) {
      panel.append(makeElement("p", "empty-schedule", "Belum ada jadwal untuk hari ini."));
      return;
    }

    dayData.courses.forEach((course) => {
      const card = makeElement("article", "course-card");
      const time = makeElement("span", "course-time", course.time);
      const details = makeElement("div", "course-details");
      details.append(
        makeElement("h3", "course-name", course.name),
        makeElement("p", "course-lecturer", course.lecturer)
      );
      const room = makeElement("span", "course-room", course.room);
      card.append(time, details, room);
      panel.append(card);
    });
  }

  classData.schedule.forEach((day, index) => {
    const tab = makeElement("button", "schedule-tab", day.day);
    tab.type = "button";
    tab.id = `day-tab-${index}`;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", "schedule-panel");
    tab.setAttribute("aria-selected", String(index === selectedIndex));
    tab.tabIndex = index === selectedIndex ? 0 : -1;
    tab.addEventListener("click", () => showDay(index));
    tab.addEventListener("keydown", (event) => {
      let nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % classData.schedule.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + classData.schedule.length) % classData.schedule.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = classData.schedule.length - 1;
      if (nextIndex !== index) {
        event.preventDefault();
        tabs.querySelectorAll('[role="tab"]')[nextIndex].focus();
        showDay(nextIndex);
      }
    });
    tabs.append(tab);
  });
  showDay(selectedIndex);
}

function setupNavigation() {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#primary-menu");
  const navLinks = [...document.querySelectorAll(".nav-link")];

  function closeMenu() {
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Buka menu" : "Tutup menu");
    menu.classList.toggle("is-open", !isOpen);
  });
  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      const lightbox = document.querySelector("#lightbox");
      if (lightbox.open) {
        event.preventDefault();
        lightbox.close();
      }
    }
  });

  const sections = navLinks.map((link) => document.querySelector(link.hash)).filter(Boolean);
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-30% 0px -55% 0px" });
  sections.forEach((section) => sectionObserver.observe(section));
}

function setupAnimations() {
  const revealItems = document.querySelectorAll(".reveal");
  const countItems = document.querySelectorAll(".stat-number[data-target]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function reveal(element) {
    element.classList.add("is-visible");
  }

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(reveal);
    countItems.forEach((item) => {
      item.textContent = `${item.dataset.target}${item.dataset.suffix}`;
    });
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        reveal(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));

  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const number = entry.target;
      const target = Number(number.dataset.target);
      const duration = 850;
      const start = performance.now();
      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        number.textContent = `${Math.round(target * eased)}${number.dataset.suffix}`;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      observer.unobserve(number);
    });
  }, { threshold: 0.6 });
  countItems.forEach((item) => countObserver.observe(item));
}

renderStatistics();
renderStructure();
renderGallery();
renderSchedule();
setupNavigation();
setupAnimations();
