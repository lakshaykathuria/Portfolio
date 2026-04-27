/* =====================================================
   DATA
   ===================================================== */

const skillCategories = [
  {
    icon: "fa-solid fa-code",
    name: "Languages",
    tags: ["Java", "Python", "JavaScript", "C", "HTML", "CSS"],
  },
  {
    icon: "fa-solid fa-server",
    name: "Backend",
    tags: ["Spring Boot", "REST API Development", "Microservices", "WebSocket", "Apache Kafka"],
  },
  {
    icon: "fa-solid fa-database",
    name: "Databases",
    tags: ["PostgreSQL", "MySQL", "H2 Database"],
  },
  {
    icon: "fa-solid fa-robot",
    name: "AI / APIs",
    tags: ["OpenAI API", "Google Vertex AI (Gemini)", "Stability AI", "Spring AI"],
  },
  {
    icon: "fa-solid fa-wrench",
    name: "Tools & Concepts",
    tags: ["Git", "Linux", "Postman", "Maven", "Data Structures", "OOP", "System Design Basics", "Asynchronous Processing", "Event-Driven Architecture"],
  },
];

const experience = [
  {
    role: "Software Engineering Virtual Internship",
    company: "JPMorgan Chase & Co.",
    via: "Forage Program",
    date: "Jan 2025 – Feb 2025",
    bullets: [
      "Completed backend engineering tasks simulating real-world workflows using Java and Spring Boot.",
      "Built RESTful APIs and worked with relational databases to handle application data.",
      "Explored concepts of event-driven architecture and message streaming using Apache Kafka.",
      "Practiced writing modular backend components and improving application reliability.",
    ],
  },
];

const projects = [
  {
    icon: "📈",
    featured: true,
    name: "TradeIntel AI — Algorithmic Trading Platform",
    desc: "A backend platform for analysing stock market data and generating trading signals. Implemented trading strategies including RSI, MACD, Moving Average crossover, Bollinger Bands, and Support/Resistance. Integrated broker APIs and WebSockets to receive real-time market data streams, and built a backtesting module to evaluate strategies using historical OHLCV data.",
    tech: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "WebSocket"],
    github: "https://github.com/lakshaykathuria/tradeintel_ai",
  },
  {
    icon: "🤖",
    featured: true,
    name: "AI Assistant — Multimodal AI Application",
    desc: "A backend service integrating large language models and image generation APIs. Implemented WebSocket-based communication enabling real-time chat interaction. Added conversation memory to maintain context across multiple user messages. Supports text generation via Gemini and image generation via Stability AI.",
    tech: ["Spring Boot", "Spring AI", "Vertex AI", "Stability AI", "WebSocket"],
    github: "https://github.com/lakshaykathuria/AI_Assistant",
  },
  {
    icon: "🔗",
    name: "URL Shortener — Link Management System",
    desc: "Built a backend service to generate shortened URLs using Base62 encoding. Implemented REST APIs for link creation, redirection, and analytics tracking. Stored link metadata and analytics data using PostgreSQL.",
    tech: ["Spring Boot", "PostgreSQL", "REST APIs"],
    github: "https://github.com/lakshaykathuria/URLShortner",
  },
  {
    icon: "📚",
    name: "E-Library — Online Library Management System",
    desc: "A backend system for managing digital library operations including user authentication, book management, and record retrieval. Features secure authentication, CRUD operations for books, and optimised API endpoints.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/lakshaykathuria/E-Library",
  },
  {
    icon: "🎙️",
    name: "J.A.R.V.I.S — Voice AI Assistant",
    desc: "A Python virtual assistant inspired by Tony Stark's AI from Marvel. Provides voice-controlled assistance using natural language processing and automation. Won 1st Place at College Technical Event.",
    tech: ["Python", "NLP", "Automation"],
    github: "https://github.com/lakshaykathuria/JARVIS",
  },
  {
    icon: "🏦",
    name: "Bank Management System",
    desc: "A banking application that allows users to perform transactions such as creating accounts, depositing and withdrawing funds, checking balances, and viewing transaction history.",
    tech: ["Python", "MySQL"],
    github: "https://github.com/lakshaykathuria/Bank-management-system",
  },
];

const certifications = [
  {
    icon: "fa-brands fa-java",
    name: "Java Programming",
    issuer: "GeeksforGeeks",
  },
  {
    icon: "fa-solid fa-briefcase",
    name: "Software Engineering Virtual Internship",
    issuer: "HackerRank — JPMorgan Chase & Co. (Forage)",
  },
  {
    icon: "fa-solid fa-star",
    name: "4-Star Java Badge",
    issuer: "HackerRank",
  },
  {
    icon: "fa-brands fa-python",
    name: "Programming in Python",
    issuer: "Merient Infotech",
  },
  {
    icon: "fa-solid fa-trophy",
    name: "1st Place — College Technical Event",
    issuer: "JARVIS Project",
  },
];

/* =====================================================
   RENDER FUNCTIONS
   ===================================================== */

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  skillCategories.forEach((cat) => {
    const div = document.createElement("div");
    div.className = "skill-category reveal";
    div.innerHTML = `
      <div class="skill-cat-header">
        <div class="skill-cat-icon"><i class="${cat.icon}"></i></div>
        <div class="skill-cat-name">${cat.name}</div>
      </div>
      <div class="skill-tags">
        ${cat.tags.map((t) => `<span class="skill-tag">${t}</span>`).join("")}
      </div>
    `;
    grid.appendChild(div);
  });
}

function renderExperience() {
  const timeline = document.getElementById("timeline");
  experience.forEach((exp) => {
    const item = document.createElement("div");
    item.className = "timeline-item reveal";
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="exp-header">
          <div class="exp-role">${exp.role}</div>
          <div class="exp-date">${exp.date}</div>
        </div>
        <div class="exp-company"><span>${exp.company}</span> · ${exp.via}</div>
        <ul class="exp-bullets">
          ${exp.bullets.map((b) => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    `;
    timeline.appendChild(item);
  });
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  projects.forEach((proj) => {
    const card = document.createElement("div");
    card.className = `project-card reveal${proj.featured ? " featured" : ""}`;
    card.innerHTML = `
      <div class="project-top">
        <div class="project-icon">${proj.icon}</div>
        <div class="project-links">
          ${proj.github ? `<a href="${proj.github}" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a>` : ""}
          ${proj.demo ? `<a href="${proj.demo}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Demo</a>` : ""}
        </div>
      </div>
      <div class="project-name">${proj.name}</div>
      <div class="project-desc">${proj.desc}</div>
      <div class="project-tech">
        ${proj.tech.map((t) => `<span class="tech-badge">${t}</span>`).join("")}
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderCertifications() {
  const grid = document.getElementById("certs-grid");
  certifications.forEach((cert) => {
    const card = document.createElement("div");
    card.className = "cert-card reveal";
    card.innerHTML = `
      <div class="cert-icon"><i class="${cert.icon}"></i></div>
      <div>
        <div class="cert-name">${cert.name}</div>
        <div class="cert-issuer">${cert.issuer}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* =====================================================
   SCROLL REVEAL
   ===================================================== */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 6) * 60}ms`;
    observer.observe(el);
  });
}

/* =====================================================
   MOBILE MENU
   ===================================================== */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

/* =====================================================
   NAV SHRINK ON SCROLL
   ===================================================== */
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 60) {
    navbar.style.padding = "0";
  } else {
    navbar.style.padding = "";
  }
});

/* =====================================================
   INIT
   ===================================================== */
renderSkills();
renderExperience();
renderProjects();
renderCertifications();

// Run scroll reveal AFTER rendering so all .reveal elements exist
setTimeout(initScrollReveal, 50);
