export const portfolioData = {
  profile: {
    name: "Artjom",
    surname: "Zhuk",
    role: "Backend Developer",
    subRole: "with Frontend capabilities",
    description: "Специализируюсь на разработке надежной серверной части на Java & Spring Boot. Умею создавать современные интерфейсы на React, эффективно используя современные инструменты разработки.",
    email: "artjoms.zuks@gmail.com",
    github: "https://github.com/Artjoms-Zhuks",
    linkedin: "https://linkedin.com/in/artjoms-zhuks",
  },

  projectsBackend: [
    {
      id: 1,
      title: "Personal Finance Manager",
      description: "A comprehensive application for financial management. It features a complex backend implemented in Java 21, a transaction filtering system, and interactive statistics on the frontend.",
      tagsbackend: ["Java", "Spring Boot"],
      tagsfrontend: ["React", "HTML", "CSS", "Javascript"],
      tagsdb: ["PostgreSQL"],
      githubUrl: "https://github.com/Artjoms-Zhuks/finance-manager-backend",
      image: "/finance-preview.png"
    },
    {
      id: 2,
      title: "Guessing Game",
      description: "The simple game, where you need to guess a 4-digit number.",
      tagsbackend: ["Java", "Spring Boot"],
      tagsfrontend: ["HTML", "CSS", "Javascript"],
      tagstesting: ["JUnit 5", "AssertJ"],
      githubUrl: "https://github.com/Artjoms-Zhuks/Guessing-game",
      image: "/Guessing game.png"
    },
    {
      id: 3,
      title: "TODO List Console App",
      description: "A simple console-based TODO application written in Java. Allows users to manage tasks with persistent storage between application runs.",
      tagsbackend: ["Java"],
      githubUrl: "https://github.com/Artjoms-Zhuks/TODOListConsoleApp",
      image: "/TODOListApp.png"
    },

    // Сюда легко добавить второй проект в будущем:
    // { id: 2, title: "Next Project", ... }
  ],

  projectsFrontend: [
    {
      id: 1,
      title: "My Portfolio",
      description: "This is my personal portfolio that you are currently viewing. The code can be viewed on GitHub.",
      tagsfrontend: ["HTML", "CSS", "Javascript", "React"],
      githubUrl: "https://github.com/Artjoms-Zhuks/My-Portfolio",
      image: "/MyPortfolioSite.png" // Картинка должна лежать в папке public
    },
    {
      id: 2,
      title: "Marcus Portfolio",
      description: "A premium, minimalist photography portfolio prototype built with React and Vite. This project focuses on high-impact visual storytelling and a seamless user experience.",
      tagsfrontend: ["HTML", "CSS", "Javascript", "React", "Vite"],
      githubUrl: "https://github.com/Artjoms-Zhuks/Marcus.Studio-Visionary-Photography-Portfolio",
      image: "/Marcus Studio.png" // Картинка должна лежать в папке public
    },
    {
      id: 2,
      title: "Tattoo Studio",
      description: "I built a website based on a freely available project in Figma.Figma: https://www.figma.com/design/neuTfcYiWGjYMyJJO4ugwY/Tattoo-Studio-website--Community-?node-id=7-90&t=IodIDZ2wDf5wUwka-0",
      tagsfrontend: ["HTML", "CSS", "Javascript", "React", "Vite"],
      githubUrl: "https://github.com/Artjoms-Zhuks/Marcus.Studio-Visionary-Photography-Portfolio",
      image: "/Tattoo_Studio.png" // Картинка должна лежать в папке public
    }
    // Сюда легко добавить второй проект в будущем:
    // { id: 2, title: "Next Project", ... }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "Transport and Telecommunication Institute",
      period: "2018 — 2022",
      description: "Specialized in software engineering, algorithms, and database management."
    },
    {
      id: 2,
      degree: "Java Masterclass 2025: 130+ Hours of Expert Lessons",
      description: "Gain real-world experience with OOP, coding exercises, and problem-solving for job-ready Java development skills."
    },
    {
      id: 3,
      degree: "IBM webMethods | An Exhaustive Content (Development & Admin)",
      description: "The following course is focused for those engineers who wants to start their journey in the universe of webMethods."
    }

  ],

  skills: [
    {
      category: "Integrations & Middleware",
      items: ["Software AG webMethods", "Integration Server", "MyWebMethods (MWS)", "REST / SOAP Web Services"],
      highlight: true
    },
    {
      category: "Backend",
      items: ["Java 21", "Spring Boot / Security", "Maven", "PostgreSQL / Docker"]
    },
    {
      category: "Frontend & Tools",
      items: ["React (Hooks, Router)", "JavaScript / CSS3", "Git / GitHub", "VS Code / IntelliJ IDEA"]
    }
  ]
};