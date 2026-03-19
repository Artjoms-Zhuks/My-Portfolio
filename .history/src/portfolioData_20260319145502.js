export const portfolioData = {
  profile: {
    name: "Artjom",
    surname: "Zhuk",
    role: "Backend Developer",
    subRole: "with Frontend capabilities",
    description: "I specialize in developing robust backend systems using Java & Spring Boot, while also crafting modern, responsive user interfaces with React. My expertise extends to enterprise integration through the Software AG webMethods ecosystem, where I have hands-on experience working with Integration Server, Designer, and MyWebMethods (MWS) to build seamless data flows and middleware solutions.",
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
      image: "/1Finance_manager.png"
    },
    {
      id: 2,
      title: "Guessing Game",
      description: "The simple game, where you need to guess a 4-digit number.",
      tagsbackend: ["Java", "Spring Boot"],
      tagsfrontend: ["HTML", "CSS", "Javascript"],
      tagstesting: ["JUnit 5", "AssertJ"],
      githubUrl: "https://github.com/Artjoms-Zhuks/Guessing-game",
      image: "/1Guessing game.png"
    },
    {
      id: 3,
      title: "TODO List Console App",
      description: "A simple console-based TODO application written in Java. Allows users to manage tasks with persistent storage between application runs.",
      tagsbackend: ["Java"],
      githubUrl: "https://github.com/Artjoms-Zhuks/TODOListConsoleApp",
      image: "/1TODOListApp.png"
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
      image: "/1MyPortfolioSite.png" // Картинка должна лежать в папке public
    },
    {
      id: 2,
      title: "Marcus Portfolio",
      description: "A premium, minimalist photography portfolio prototype built with React and Vite. This project focuses on high-impact visual storytelling and a seamless user experience.",
      tagsfrontend: ["HTML", "CSS", "Javascript", "React", "Vite"],
      githubUrl: "https://github.com/Artjoms-Zhuks/Marcus.Studio-Visionary-Photography-Portfolio",
      image: "/1Marcus Studio.png" // Картинка должна лежать в папке public
    },
    {
      id: 3,
      title: "Tattoo Studio",
      description: "I built a website based on a freely available project in Figma.\n\rFigma: https://www.figma.com/design/neuTfcYiWGjYMyJJO4ugwY/Tattoo-Studio-website--Community-?node-id=7-90&t=IodIDZ2wDf5wUwka-0",
      tagsfrontend: ["HTML", "CSS", "Javascript", "React", "Vite"],
      githubUrl: "https://github.com/Artjoms-Zhuks/TattooStudioFigma",
      image: "/1Tattoo_Studio.png" // Картинка должна лежать в папке public
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