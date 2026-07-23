export const PORTFOLIO_DATA = {
  personal: {
    name: "Tanishq Pandey",
    role: "Full Stack Developer",
    avatarInitials: "TP",
    avatarUrl: "",
    email: "work.tanishqpandey@gmail.com",
    phone: "+91 62657 01426",
    location: "Pune, Maharashtra",
    college:
      "Vellore Institute of Technology - B.Tech Computer Science Engineering",
    resumeUrl: "/Resume.pdf", // Matches file in public folder (See Step 2)
    socials: {
      github: "https://github.com/tanishqpandey14",
      linkedin: "https://www.linkedin.com/in/tanishq-pandey09/",
      email: "mailto:work.tanishqpandey@gmail.com",
    },
  },
  hero: {
    badge: "Available for Opportunities",
    greeting: "Hello, I'm",
    nameGradient: "Tanishq Pandey",
    title: "Full Stack Developer & AI Enthusiast",
    description:
      "I build modern web applications and AI-powered projects with Node.js, Java, Python, and modern web architectures.",
  },
  about: {
    heading: "About Me",
    subheading:
      "A quick overview of my background, focus areas, and engineering principles.",
    bio: [
      "I am a Full Stack Developer passionate about building modern web applications and AI-powered projects.",
      "Skilled in Java, Python, HTML, CSS, and JavaScript, with a current focus on Node.js + AI projects, backend development, and problem-solving using Java.",
      "Whether I'm engineering robust backend services or exploring AI workflows, my goal is always to deliver smooth user experiences backed by solid engineering.",
    ],
    features: [
      {
        id: "fullstack",
        icon: "code",
        title: "Full Stack Development",
        description:
          "Building end-to-end web applications with modern frontend design and robust backend APIs.",
      },
      {
        id: "backend-ai",
        icon: "emoji",
        title: "Backend & AI Projects",
        description:
          "Architecting scalable Node.js backend systems and integrating modern AI technologies.",
      },
      {
        id: "problem-solving",
        icon: "academic",
        title: "Problem Solving (Java)",
        description:
          "Applying strong algorithmic thinking and data structures expertise using Java.",
      },
    ],
  },
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Java", icon: "SiOpenjdk" },
        { name: "Python", icon: "SiPython" },
        { name: "JavaScript", icon: "SiJavascript" },
        { name: "SQL", icon: "SiMysql" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: "SiReact" },
        { name: "HTML5", icon: "SiHtml5" },
        { name: "CSS3", icon: "SiCss3" },
        { name: "Tailwind CSS", icon: "SiTailwindcss" },
      ],
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Node.js", icon: "SiNodedotjs" },
        { name: "Express.js", icon: "SiExpress" },
        { name: "REST APIs", icon: "SiPostman" },
        { name: "MongoDB (Mongoose)", icon: "SiMongodb" },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", icon: "SiGit" },
        { name: "Postman", icon: "SiPostman" },
        { name: "Vercel", icon: "SiVercel" },
        { name: "Render", icon: "SiRender" },
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      institution: "St. Joseph Convent Ranjhi, Jabalpur",
      period: "Mar 2022 - May 2023",
      degree: "Class 12th - Physics, Chemistry, Mathematics",
    },
    {
      id: "edu-2",
      institution: "Vellore Institute of Technology",
      period: "Sep 2023 - May 2027",
      degree: "B.Tech in Computer Science Engineering",
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "College Lost And Found Management System",
      period: "July 2026 - Present",
      description:
        "Developed a comprehensive campus Lost and Found platform helping students easily report, search, and recover lost items on campus.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Jina AI"],
      githubUrl: "https://github.com/tanishqpandey14/College-Lost-And-Found",
      liveUrl: "https://college-lost-and-found-pi.vercel.app/",
    },
    {
      id: "proj-2",
      title: "AI Legal Advisor ChatBot",
      period: "May 2026 - July 2026",
      description:
        "Built a full-stack AI-powered legal assistance chatbot delivering instant, intelligent legal guidance and query analysis.",
      tech: ["React", "Node.js", "Express", "Grok AI"],
      githubUrl: "https://github.com/tanishqpandey14/AI-legal-advisor",
      liveUrl: "https://ai-legal-advisor-six.vercel.app/",
    },
  ],
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" },
  ],
};
