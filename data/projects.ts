export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
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
    shortDescription: "Web catalog of places and companies in Costa Rica for locals and tourists. Commercial project with web app and PWA. Worked on frontend development as part of a distributed team.",
    techStack: ["Next.js", "TypeScript", "React", "Git"],
    image: "/images/guider-pro1.png",
    // link: "https://www.linkedin.com/company/guider-pro/",
    linkedin: "https://www.linkedin.com/company/guider-pro/",
  },
  {
    slug: "adaptive-layout",
    title: "Adaptive Blog Layout",
    shortDescription: "Diploma project: adaptive and mobile web page layout built from PSD mockups. Supports desktop and tablet breakpoints with flexbox grid.",
    techStack: ["HTML", "CSS"],
    image: "/images/banner1.png",
    link: "https://nikolay-davydov.github.io/ahj-my_blog/",
    github: "https://github.com/Nikolay-Davydov/ahj-my_blog",
  },
  {
    slug: "card-validation",
    title: "Card Validation",
    shortDescription: "Frontend form with real-time bank card number validation using the Luhn algorithm.",
    techStack: ["JavaScript", "HTML", "CSS"],
    image: "/images/card-validation.webp",
    link: "https://nikolay-davydov.github.io/ahj-code-4.1-hw/",
    github: "https://github.com/Nikolay-Davydov/ahj-code-4.1-hw",
  },
];

export default projects;
