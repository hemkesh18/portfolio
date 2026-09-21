/**
 * PORTFOLIO CONFIGURATION DATA - CUDDAPAH HEMKESH
 * -------------------------------------------------------------
 * Updated with exact resume credentials:
 * CBIT Hyderabad, 9.05 CGPA, 98.6% Intermediate,
 * IIT Foundation Tutor at Brain Hub, LMS & Todo List Projects,
 * High Ranks in JEE Mains & EAPCET.
 */

export const portfolioData = {
  // Personal & Header Information
  personal: {
    name: "Cuddapah Hemkesh",
    badge: "B.E. CSE @ CBIT",
    title: "Bachelor of Engineering in Computer Science and Engineering",
    tagline: "CSE Undergrad at CBIT Hyderabad | Full-Stack Developer & Academic Tutor",
    shortBio:
      "Computer Science Engineering student at Chaitanya Bharathi Institute of Technology (CGPA: 9.05) with expertise in Data Structures, Database Systems (PostgreSQL/SQL), Full-Stack Web Development (Node.js/Express), and Core Java. Academic Tutor for IIT Foundation at Brain Hub.",
    location: "Hyderabad, Telangana",
    status: {
      text: "Open to Software Engineering & Full-Stack Internships",
      available: true,
    },
    // Links to your profiles
    socials: {
      email: "hemkesh.c.18@gmail.com",
      github: "https://github.com/hemkesh18",
      linkedin: "https://www.linkedin.com/in/hemkesh-cuddapah-23a0033a1/",
      leetcode: "https://github.com/hemkesh18", // fallback to github or leetcode handle
      resumePdf: "/sample-resume.pdf",
    },
  },

  // Key Quick Metrics for Resume/Portfolio
  stats: [
    { label: "Current CGPA", value: "9.05", subtext: "CBIT Hyderabad" },
    { label: "Intermediate", value: "98.6%", subtext: "Sri Chaitanya Jr. College" },
    { label: "JEE Mains", value: "98.6 %ile", subtext: "National Level Exam" },
    { label: "TS EAPCET", value: "Rank 1689", subtext: "AP Rank: 2345" },
  ],

  // About Me Section
  about: {
    overview:
      "I am a Computer Science and Engineering undergraduate at Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad, maintaining a strong academic standing with a 9.05 CGPA. My focus spans core computer science concepts, database architectures, algorithmic problem solving, and modern web application development.",
    passion:
      "I believe in blending conceptual depth with practical engineering. I build robust full-stack applications with Node.js, Express, PostgreSQL, and modular templating. Concurrently, as an Academic Tutor for IIT Foundation at Brain Hub, I guide aspiring engineering students in JEE Mathematics, Physics, and Chemistry problem-solving techniques.",
    focusAreas: [
      "CS Core Subjects (Data Structures, Database Management Systems, Digital Logic Design, Data Analysis and Algorithms)",
      "Programming Languages (Core Java, SQL, Python, C, C++ Basics)",
      "Full-Stack Web Engineering (HTML, CSS, JavaScript, Node.js, Express.js, EJS, RESTful APIs)",
      "Databases & Modeling (PostgreSQL, Relational Schemas, Indexing, CRUD)",
      "Engineering Tools (Git, GitHub, VS Code, Jupyter Notebook, Google Colab, LaTeX, Terminal)",
      "Analytical Thinking & Inclusive Leadership (Cross-functional Teamwork, Growth Mindset)",
    ],
  },

  // Technical Skills Categorized for Recruiters
  skills: [
    {
      category: "CS Core Subjects",
      items: [
        { name: "Data Structures", level: "Core" },
        { name: "Database Management Systems", level: "Core" },
        { name: "Data Analysis and Algorithms", level: "Core" },
        { name: "Digital Logic Design", level: "Core" },
      ],
    },
    {
      category: "Programming Languages",
      items: [
        { name: "Core Java", level: "Proficient" },
        { name: "Structured Query Language (SQL)", level: "Proficient" },
        { name: "Python", level: "Proficient" },
        { name: "C", level: "Proficient" },
        { name: "C++ Basics", level: "Intermediate" },
        { name: "JavaScript (ES6+)", level: "Proficient" },
      ],
    },
    {
      category: "Web Technologies",
      items: [
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
        { name: "JavaScript", level: "Proficient" },
        { name: "Node.js Basics", level: "Proficient" },
        { name: "Express.js", level: "Proficient" },
        { name: "EJS (Embedded JS)", level: "Proficient" },
        { name: "RESTful APIs", level: "Proficient" },
      ],
    },
    {
      category: "Developer Tools",
      items: [
        { name: "Git", level: "Proficient" },
        { name: "GitHub", level: "Proficient" },
        { name: "VS Code", level: "Advanced" },
        { name: "PostgreSQL", level: "Proficient" },
        { name: "Jupyter Notebook", level: "Proficient" },
        { name: "Google Colaboratory", level: "Proficient" },
        { name: "Terminal / Bash", level: "Proficient" },
        { name: "LaTeX", level: "Proficient" },
      ],
    },
    {
      category: "Soft Skills & Leadership",
      items: [
        { name: "Cross-Functional Teamwork", level: "Active" },
        { name: "Growth Mindset", level: "Core" },
        { name: "Inclusive Leadership", level: "Active" },
        { name: "Analytical Thinking", level: "Core" },
      ],
    },
  ],

  // Projects Directly from Resume
  projects: [
    {
      id: "learning-management-system",
      title: "Learning Management System",
      subtitle: "Full-Stack Educational Platform",
      category: "Full-Stack Web",
      badge: "Featured Project",
      date: "November 2025",
      summary:
        "A full-stack Learning Management System supporting role-based access for administrators, instructors, and students, streamlining digital course creation, enrollments, and secure user authentication.",
      bulletPoints: [
        "Built a full-stack Learning Management System supporting role-based access for administrators, instructors, and students.",
        "Implemented course creation, enrollment management, and user authentication to streamline digital learning workflows.",
        "Developed dynamic server-rendered pages using EJS templates integrated with a Node.js and Express.js backend.",
        "Designed and managed relational data models using PostgreSQL, storing user credentials, course information, and enrollment data.",
      ],
      tech: ["Node.js", "Express.js", "PostgreSQL", "EJS", "JavaScript", "HTML/CSS", "SQL"],
      github: "https://github.com/hemkesh18/learning-management-system",
      liveDemo: null,
      metrics: "Role-based Auth & PostgreSQL",
    },
    {
      id: "todo-list-app",
      title: "Todo List Application",
      subtitle: "Task Management Web App",
      category: "Full-Stack Web",
      badge: "Web Application",
      date: "July 2025",
      summary:
        "A responsive task management application enabling users to create, update, complete, and delete tasks with seamless client-server synchronization.",
      bulletPoints: [
        "Developed a task management application enabling users to create, update, complete, and delete tasks through a responsive web interface.",
        "Built the frontend using HTML and Embedded JavaScript with modular components to provide an interactive user experience.",
        "Implemented backend APIs using Node.js and Express.js to handle task operations and maintain application logic.",
        "Designed RESTful endpoints enabling seamless communication between the client and server for real-time task updates.",
      ],
      tech: ["Node.js", "Express.js", "JavaScript", "EJS", "HTML", "CSS", "REST APIs"],
      github: "https://github.com/hemkesh18/todo-list/tree/main/todo-app",
      liveDemo: null,
      metrics: "RESTful Endpoints & Modular EJS",
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio & ATS Resume Suite",
      subtitle: "Component-Driven Web Application",
      category: "Full-Stack Web",
      badge: "React & Tailwind",
      date: "2025 - 2026",
      summary:
        "A responsive, recruiter-oriented developer portfolio and interactive resume suite engineered with React 19, Tailwind CSS v4, and Vite for showcasing engineering projects, academic credentials, and competitive achievements.",
      bulletPoints: [
        "Architected a responsive Single Page Application with modular React components, smooth scrolling, and sub-350ms production builds.",
        "Engineered class-based dark and light theme switching with persistent local storage and CSS custom variants.",
        "Implemented interactive ATS-formatted resume preview modal, copy-to-clipboard contact APIs, and dynamic configuration architecture.",
      ],
      tech: ["React.js", "Tailwind CSS v4", "Vite", "JavaScript (ES6+)", "Lucide Icons"],
      github: "https://github.com/hemkesh18",
      liveDemo: "#",
      metrics: "Sub-350ms Vite Build & 100% Responsive",
    },
  ],

  // Education Timeline Directly from Resume
  education: [
    {
      institution: "Chaitanya Bharathi Institute of Technology (CBIT)",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      period: "Aug. 2024 – July 2028",
      location: "Hyderabad, Telangana",
      score: "CGPA: 9.05 / 10.0",
      coursework: [
        "Data Structures",
        "Database Management Systems",
        "Digital Logic Design",
        "Data Analysis and Algorithms",
        "Core Java",
      ],
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Class XII (Intermediate) - Maths, Physics, Chemistry (MPC)",
      period: "April 2022 – May 2024",
      location: "Hyderabad, Telangana",
      score: "Percentage: 98.6%",
      coursework: ["Mathematics", "Physics", "Chemistry"],
    },
  ],

  // Work Experience Directly from Resume
  experience: [
    {
      role: "Academic Tutor – IIT Foundation",
      organization: "Brain Hub",
      period: "July 2025 – Present",
      type: "Teaching & Mentorship",
      description:
        "Tutoring students preparing for JEE foundation in Mathematics, Physics, and Chemistry. Explain complex problem-solving techniques and strengthen conceptual understanding through structured practice sessions.",
    },
  ],

  // Leadership / Extracurricular & Competitive Exam Honors
  achievements: [
    {
      title: "98.6 Percentile in JEE Mains Exam",
      detail: "Conducted at National Level across India, demonstrating top-tier analytical and problem-solving capability in PCM.",
      category: "National Examination",
    },
    {
      title: "Rank 1689 in TS EAPCET & Rank 2345 in AP EAPCET",
      detail: "Achieved top ranks in both Telangana and Andhra Pradesh State Engineering Entrance Examinations.",
      category: "State Rank",
    },
    {
      title: "Second Place in College Level Carroms League",
      detail: "Showcased strategic precision and competitive sportsmanship in intra-college sports tournaments.",
      category: "Sports & Extracurricular",
    },
    {
      title: "Third Position in Inter-College Free Fire Tournaments",
      detail: "Placed 3rd in Hyderabad inter-college esports tournament competing as a strategic squad of 4 members.",
      category: "Esports & Teamwork",
    },
  ],
};
