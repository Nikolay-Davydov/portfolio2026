export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  bullets?: string[];
  techStack: string[];
  image?: string;
  link?: string;
  github?: string;
  linkedin?: string;
};

const projects: Project[] = [
  {
    slug: "guider-pro",
    title: "Guider.Pro",
    shortDescription:
      "Web catalog of places and companies in Costa Rica for locals and tourists. Worked on frontend development as part of a distributed team.",
    bullets: [
      "Built an admin panel with a 4-tier role system (Super Admin, Admin, Manager, User)",
      "Developed public and private collection features",
      "Integrated internal REST APIs",
      "Implemented category-based location filtering",
      "Identified and resolved UI and application logic bugs",
    ],
    techStack: ["Next.js", "TypeScript", "React", "Git"],
    image: "/images/guider-pro1.png",
    linkedin: "https://www.linkedin.com/company/guider-pro/",
  },
  {
    slug: "data-parsing",
    title: "EcomSeller Data Parsing",
    shortDescription:
      "Python script for parsing and analyzing data from various sources.",
    bullets: [
      "Developed a Python script using Pandas to collect and analyze customer data from an e-commerce platform and load it into a SQL database.",
      "Implemented error handling and retry logic with rate-limit awareness, logging failed requests to a file for subsequent re-processing.",
    ],
    techStack: ["Python", "Pandas", "SQL"],
    image: "/images/ecom-seller.webp",
    github: "https://github.com/Nikolay-Davydov/ahj-ECOMSELLER",
  },
  {
    slug: "adaptive-layout",
    title: "Adaptive Blog Layout",
    shortDescription:
      "Diploma project: adaptive and mobile web page layout built from PSD mockups. Supports desktop and tablet breakpoints with flexbox grid.",
    bullets: [
      "Supports desktop and tablet breakpoints with flexbox grid",
      "Built from PSD mockups with pixel-perfect accuracy",
    ],
    techStack: ["HTML", "CSS"],
    image: "/images/banner1.png",
    link: "https://nikolay-davydov.github.io/ahj-my_blog/",
    github: "https://github.com/Nikolay-Davydov/ahj-my_blog",
  },
  {
    slug: "card-validation",
    title: "Card Validation",
    shortDescription:
      "Frontend form with real-time bank card number validation using the Luhn algorithm.",
    bullets: [
      "Implemented the Luhn algorithm for card number validation.",
      "Real-time feedback on card number input.",
    ],
    techStack: ["JavaScript", "HTML", "CSS"],
    image: "/images/card-validation.webp",
    link: "https://nikolay-davydov.github.io/ahj-code-4.1-hw/",
    github: "https://github.com/Nikolay-Davydov/ahj-code-4.1-hw",
  },
];

export default projects;
