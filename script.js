const socialsEl = document.querySelector("#socials");
const projectsEl = document.querySelector("#projects");
const writingEl = document.querySelector("#wrtiting");

const socialHandles = [
  {
    Link: "https://x.com/Lakshay_1808",
    platform: "twitter",
  },
  {
    Link: "https://github.com/lakshaykathuria",
    platform: "github",
  },
  {
    Link: "https://www.instagram.com/lakshay_kathuria_/",
    platform: "Instagram",
  },
  {
    Link: "https://www.linkedin.com/in/kathuria-lakshay/",
    platform: "linkedin",
  },  
];


const projectsArray = [
  {
    title: "E-Library (Online Library Management System)",
    desc: " The E-Library is a backend system developed to simplify online library management by enabling functionalities such as user authentication, book management, and record retrieval. Built using Java Spring Boot and PostgreSQL, this project provides a scalable and efficient solution for handling digital library operations. It features secure authentication, CRUD operations for books, and optimized API endpoints to enhance performance and user experience.",
    githubLink: "https://github.com/lakshaykathuria/E-Library",
  },
  {
    title: "J.A.R.V.I.S",
    desc: " The J.A.R.V.I.S is a Python virtual assistant project inspired by Tony Stark's intelligent AI system from the Marvel universe. It is designed to provide a range of functionalities and assist users with tasks using natural language processing and automation capabilities. While this project is a simplified version of the fictional J.A.R.V.I.S, it serves as a foundation for building a voice-controlled assistant.",
    githubLink: "https://github.com/lakshaykathuria/JARVIS",
  },
  {
    title: "Bank Management System",
    desc: "A Bank Management System project in Python and MySQL is a software application that allows users to perform banking transactions such as creating and managing accounts, depositing and withdrawing funds, checking balances, and viewing transaction history.",
    githubLink: "https://github.com/lakshaykathuria/Bank-management-system",
  },
  {
    title: "Flipkart Clone",
    desc: "The Flipkart Clone project is a web-based e-commerce application that emulates the appearance and basic functionality of the popular online shopping platform, Flipkart. This project is primarily built using HTML and CSS, focusing on replicating the user interface (UI) and layout of the Flipkart website.",
    githubLink: "https://github.com/lakshaykathuria/Flipkart-Clone",
  },
];



socialHandles.forEach((social, index) => {
  const a = document.createElement("a");
  a.href = social.Link;
  a.textContent = social.platform;
  a.target = "_blank";

  socialsEl.appendChild(a);
});

projectsArray.forEach((project, index) => {
  const div = document.createElement("div");
  div.style.display = "flex"
  div.style.flexDirection = "column"
  div.style.gap = "10px"
  div.style.marginLeft = "15px"
  div.style.color = "rgb(229, 231, 235)"
  const h3 = document.createElement("h3");
  h3.className = "project-title";
  h3.textContent = `- ${project.title}`;
  h3.style.marginLeft = "-15px"
  const p = document.createElement("p");
  p.textContent = project.desc;
  const links = document.createElement("div")
  links.className = "links"
  const githubLink = document.createElement("a");
  githubLink.target = "_blank";
  githubLink.href = project.githubLink;
  githubLink.textContent = "github";
  githubLink.style.display = project.githubLink ? "block" : "none"
  const demoLink = document.createElement("a");
  demoLink.target = "_blank";
  demoLink.href = project.demoLink;
  demoLink.textContent = "demo";

  links.append(githubLink);

  div.append(h3, p, links);

  projectsEl.appendChild(div);

});






