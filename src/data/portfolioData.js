/**
 * PORTFOLIO CONFIGURATION DATA - CUDDAPAH HEMKESH
 * -------------------------------------------------------------
 * Grounded strictly in verified credentials, Preflight repo artifacts,
 * and user-supplied data. No invented metrics or links.
 */

export const portfolioData = {
  personal: {
    name: "Cuddapah Hemkesh",
    badge: "B.E. CSE @ CBIT",
    role: "Software engineer (full-stack + ML)",
    tagline: "I build AI-backed systems end to end.",
    proofLine: "Proven by Preflight, an autonomous release-safety gate with persistent memory.",
    targetRole: "Software Engineering Intern",
    targetFocus: "Full-Stack + ML Systems",
    aboutTagline: "Targeting Software Engineering Intern opportunities to build production full-stack and machine learning systems.",
    yearStatus: "Third Year B.E. CSE, CBIT Hyderabad",
    college: "Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad",
    cgpa: "9.05 / 10.0",
    location: "Hyderabad, Telangana",
    status: {
      text: "Targeting Software Engineering Intern roles (Full-Stack + ML)",
      available: true,
    },
    socials: {
      email: "hemkesh.c.18@gmail.com",
      github: "https://github.com/hemkesh18",
      linkedin: "https://www.linkedin.com/in/hemkesh-cuddapah-23a0033a1/",
      leetcode: "https://leetcode.com/u/x35OkJfu7A/",
      resumePdf: "/Hemkesh_Resume.pdf",
    },
    lastUpdated: "October 2026",
  },

  // Key Quick Metrics (Shortened header line for tutoring without duplicate metrics)
  stats: [
    { label: "Current CGPA", value: "9.05", subtext: "CBIT Hyderabad" },
    { label: "JEE Mains", value: "98.6 %ile", subtext: "Top 1.4% Nationwide" },
    { label: "Academic Tutoring", value: "Brain Hub", subtext: "JEE & CBSE Foundation" },
    { label: "Preflight Backtest", value: "4/9 vs 1/9", subtext: "Repeat outage recall" },
  ],

  // About Me Section
  about: {
    overview:
      "I am a third-year Computer Science Engineering student at Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad, maintaining a 9.05 CGPA. Targeting Software Engineering Intern roles where I can contribute to production full-stack web applications and machine learning systems.",
    focus:
      "My primary project is Preflight, an autonomous release safety gate that connects persistent memory to CI/CD pipelines to catch recurring outage patterns before production. Outside software engineering, I teach competitive Mathematics, Physics, and Chemistry to secondary school students at Brain Hub.",
  },

  // Technical Skills grouped into 4 domain cards with verified project usage
  skills: [
    {
      category: "Languages",
      description: "Core languages for systems, algorithms, and applications",
      items: [
        {
          name: "Java",
          level: "Strong",
          usedIn: "LeetCode (100+ Solved), CBIT Coursework",
          icon: "Coffee",
        },
        {
          name: "Python",
          level: "Strong",
          usedIn: "Preflight",
          icon: "Terminal",
        },
        {
          name: "JavaScript",
          level: "Strong",
          usedIn: "Learning Management System, Todo List, Preflight, Portfolio",
          icon: "FileCode",
        },
        {
          name: "SQL",
          level: "Strong",
          usedIn: "Learning Management System, Todo List",
          icon: "Database",
        },
        {
          name: "C",
          level: "Familiar",
          usedIn: "CBIT Coursework",
          icon: "Code",
        },
        {
          name: "C++",
          level: "Familiar",
          usedIn: "CBIT Coursework",
          icon: "Code2",
        },
      ],
    },
    {
      category: "Backend and Data",
      description: "Server runtimes, REST frameworks, and relational databases",
      items: [
        {
          name: "Node.js",
          level: "Strong",
          usedIn: "Learning Management System, Todo List",
          icon: "Server",
        },
        {
          name: "Express",
          level: "Strong",
          usedIn: "Learning Management System, Todo List",
          icon: "Zap",
        },
        {
          name: "FastAPI",
          level: null,
          usedIn: "Preflight",
          icon: "Zap",
        },
        {
          name: "PostgreSQL",
          level: "Strong",
          usedIn: "Learning Management System, Todo List",
          icon: "Database",
        },
        {
          name: "Sequelize",
          level: null,
          usedIn: "Learning Management System, Todo List",
          icon: "Layers",
        },
        {
          name: "EJS",
          level: null,
          usedIn: "Learning Management System, Todo List",
          icon: "Braces",
        },
      ],
    },
    {
      category: "Frontend",
      description: "User interfaces, component styling, and template rendering",
      items: [
        {
          name: "React",
          level: "Strong",
          usedIn: "Preflight, Portfolio",
          icon: "Atom",
        },
        {
          name: "Tailwind CSS",
          level: null,
          usedIn: "Preflight, Portfolio, Todo List",
          icon: "Sparkles",
        },
        {
          name: "Vite",
          level: null,
          usedIn: "Preflight, Portfolio",
          icon: "Zap",
        },
        {
          name: "HTML/CSS",
          level: null,
          usedIn: "Learning Management System, Todo List, Preflight, Portfolio",
          icon: "Layout",
        },
        {
          name: "HTML5",
          level: null,
          usedIn: "Learning Management System, Todo List, Preflight, Portfolio",
          icon: "FileCode",
        },
        {
          name: "Bootstrap",
          level: null,
          usedIn: "CBIT Coursework",
          icon: "Boxes",
        },
      ],
    },
    {
      category: "AI and Agents",
      description: "LLM inference orchestration and persistent memory engines",
      items: [
        {
          name: "Groq LLM API",
          level: null,
          usedIn: "Preflight",
          icon: "Cpu",
        },
        {
          name: "Vectorize Hindsight memory",
          level: null,
          usedIn: "Preflight",
          icon: "Brain",
        },
      ],
    },
    {
      category: "CS Foundations",
      description: "Core computer science fundamentals and systems design principles",
      items: [
        {
          name: "Data Structures",
          level: null,
          usedIn: null,
          icon: "Layers",
        },
        {
          name: "Algorithms",
          level: null,
          usedIn: null,
          icon: "Binary",
        },
        {
          name: "DBMS",
          level: null,
          usedIn: null,
          icon: "Database",
        },
      ],
    },
  ],

  // Flagship Project: Preflight
  preflight: {
    id: "preflight",
    title: "Preflight",
    tagline: "Autonomous Release Safety Gate with Persistent Memory",
    scenario: "Built for simulated fintech Kestrel Pay",
    summary:
      "An AI agent at the CI/CD gate that recalls past deployments, outages, and runbooks from Vectorize Hindsight persistent memory and returns PASS, WARN, or BLOCK with cited evidence.",
    benchmarkType: "Simulated Benchmark",
    setupNote:
      "150 simulated deployments, 9 repeat-outage incidents, comparing memory-enabled Preflight against a stateless baseline without memory.",
    benchmarkResult:
      "Result: with memory, Preflight caught 4 of 9 repeat-outage incidents; the stateless baseline caught 1 of 9.",
    howItWorks: [
      "Vectorize Hindsight memory stores historical deployment manifests, architectural diffs, and incident post-mortems with remediation runbooks.",
      "At deploy time, Preflight semantically compares the proposed release against stored incident patterns and blocks the release (exit code 1) if the risk score exceeds 0.60 or matches a known repeat-outage scenario.",
    ],
    problem:
      "Release pipelines lose institutional memory. When on-call engineers leave or incident post-mortems stay buried in static documentation, known failure patterns repeat silently. Standard CI/CD checks evaluate code syntax and unit tests, but have zero recall of how similar configuration or dependency changes behaved in past production incidents.",
    approach:
      "Preflight intercepts deployment manifests at the CI/CD gate before production rollout. The agent queries Vectorize Hindsight persistent memory using the deployment context as a semantic anchor, retrieves matching historical outages and verified mitigation runbooks, and feeds this grounded context to a Groq open-weights LLM. The system produces a risk classification with verifiable memory IDs, enforces deterministic score clamping, and assigns an automated gate action.",
    stack: [
      "Python 3.11",
      "FastAPI",
      "Vectorize Hindsight",
      "Groq LLMs",
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Recharts",
      "pytest",
      "GitHub Actions",
    ],
    thresholds: [
      { classification: "LOW", range: "0.00 to 0.34", action: "PASS", exitCode: 0, effect: "Automated pass-through. Release proceeds." },
      { classification: "MEDIUM", range: "0.35 to 0.59", action: "WARN", exitCode: 0, effect: "Advisory warning. Publishes risk summary and checklists." },
      { classification: "HIGH", range: "0.60 to 1.00", action: "BLOCK", exitCode: 1, effect: "Halts release. Requires on-call review and runbook remediation." },
    ],
    results: {
      headline: "Simulated Benchmark Replay across 150 Chronological Deployments",
      comparison: [
        { metric: "Repeat incidents flagged HIGH", memoryOn: "4 / 9 (44.4%)", memoryOff: "1 / 9 (11.1%)", note: "Memory quadrupled recall of recurring failure patterns" },
        { metric: "False alarms on healthy releases", memoryOn: "5 / 111 (4.5%)", memoryOff: "5 / 111 (4.5%)", note: "Identical false alarm rate; zero added noise" },
        { metric: "Planted decoy deploys flagged HIGH", memoryOn: "1 / 11", memoryOff: "0 / 11", note: "Safe routine changes correctly passed" },
        { metric: "Safe pattern-matches flagged HIGH", memoryOn: "1 / 2", memoryOff: "0 / 2", note: "Canary overrides flagged as precaution" },
        { metric: "CI build failures flagged HIGH", memoryOn: "2 / 22", memoryOff: "3 / 22", note: "Evaluated before production stage" },
      ],
      confusionMatrix: {
        note: "Evaluated across 128 production rows (17 incidents + 111 healthy releases; 22 pre-deploy build failures excluded)",
        memoryOn: { tp: 8, fp: 11, fn: 9, tn: 100, precision: "42.1%", recall: "47.1%", f1: "0.444" },
        memoryOff: { tp: 9, fp: 16, fn: 8, tn: 95, precision: "36.0%", recall: "52.9%", f1: "0.429" },
      },
    },
    engineeringDecisions: [
      {
        title: "Query-anchored recall to prevent time leakage",
        detail: "Anchors Hindsight memory queries to semantic deployment content rather than timestamp windows, guaranteeing that backtest evaluations never recall future incidents.",
      },
      {
        title: "Hallucinated citation stripping",
        detail: "Validates every memory ID cited by the LLM against the set of IDs actually returned by Hindsight recall. Any invented IDs are stripped before returning the gate verdict.",
      },
      {
        title: "Deterministic score clamping",
        detail: "If the qualitative risk classification contradicts the numeric score (for example, HIGH with a score below 0.60), the score is clamped to 0.75 so labels and metrics never conflict.",
      },
      {
        title: "Invariant pytest test suite",
        detail: "Comprehensive test suite covering temporal leakage prevention, citation validation, boundary clamping, idempotency, and all FastAPI endpoints.",
      },
    ],
    limitations:
      "Simulated benchmark with synthetic operational history and small sample size (N=9 repeat incidents across planted failure patterns). Demonstrates the memory gate mechanism and baseline comparison, not a production claim.",
    links: {
      github: "https://github.com/hemkesh18/preflight",
      liveDemo: "https://preflight-kw3s.vercel.app/",
    },
    simulatorPresets: [
      {
        id: "dep-164",
        service: "ledger-service",
        changeType: "migration",
        pattern: "P2: Column Drop Schema Migration",
        title: "Dropping legacy_settlement_id column",
        author: "infra-team",
        decision: "BLOCK",
        riskScore: 0.90,
        riskLabel: "HIGH",
        exitCode: 1,
        reasoning: "Dropping legacy_settlement_id column mirrors prior migration dep-120 that caused severe merchant transaction search downtime and Kafka DLQ buildup.",
        runbook: "RB-DB-02: Hotfix migration to restore dropped columns as generated columns and reset Kafka consumer offsets.",
        evidenceIds: ["09470a2c-b8fe-4325-ac63-9f6b723f9ebf", "92b6ac59-5a16-4fa4-988d-ea9ef21c3117"],
        memoryOffVerdict: "WARN (Risk: 0.55, Exit: 0) - Missed the repeat outage pattern!",
      },
      {
        id: "dep-219",
        service: "auth-service",
        changeType: "dependency-bump",
        pattern: "P3: PyJWT Upgrade Incompatibility",
        title: "Bump pyjwt from 2.8.0 to 2.10.1",
        author: "sec-team",
        decision: "BLOCK",
        riskScore: 0.90,
        riskLabel: "HIGH",
        exitCode: 1,
        reasoning: "Dependency bump to pyjwt 2.10.1 previously caused authentication token rejections due to strict asymmetric key formatting and zero clock skew leeway.",
        runbook: "RB-SEC-09: Rollback pyjwt to 2.8.0 and configure jwt.decode leeway to 10s.",
        evidenceIds: ["948f0c1d-345b-4657-a3fd-14d56ea7f83f", "b74c1c5d-c803-4abf-b826-ca94ced70750"],
        memoryOffVerdict: "WARN (Risk: 0.30, Exit: 0) - Missed the breaking dependency change!",
      },
      {
        id: "dep-131",
        service: "payments-api",
        changeType: "config",
        pattern: "P1: Friday Connection Pool Tuning",
        title: "Reduce pool_max_connections from 55 to 18",
        author: "backend-core",
        decision: "WARN",
        riskScore: 0.45,
        riskLabel: "MEDIUM",
        exitCode: 0,
        reasoning: "Reducing pool_max_connections while increasing keepalive timeout risks starving DB connections under peak Friday traffic. Warning issued with mitigation checklist.",
        runbook: "RB-PAY-04: Revert pool_max_connections to stable baseline (50+) and perform rolling pod restart.",
        evidenceIds: ["2b7cb407-19a3-4cf1-aecb-58bf0af326e5", "df5b9752-94a2-4569-9208-b9ca04772b98"],
        memoryOffVerdict: "BLOCK (Risk: 0.72, Exit: 1) - Blanket block without operational context",
      },
      {
        id: "dep-165",
        service: "reporting-service",
        changeType: "config",
        pattern: "Routine Config Update",
        title: "Update reporting aggregation window to 15m",
        author: "analytics-team",
        decision: "PASS",
        riskScore: 0.10,
        riskLabel: "LOW",
        exitCode: 0,
        reasoning: "Routine configuration update with zero matching incident precedents across historical runs. All sanity checks satisfied.",
        runbook: "Standard deployment checklist. No active incident precedents.",
        evidenceIds: ["31022606-c96a-4840-9dd4-a20a99545546", "ceca682d-51a6-412c-ac05-d52ff704eb35"],
        memoryOffVerdict: "PASS (Risk: 0.20, Exit: 0) - Both arms correctly passed",
      },
      {
        id: "dep-223",
        service: "payments-api",
        changeType: "config",
        pattern: "P1: Safe Canary Override",
        title: "Payments config update with 5% canary routing",
        author: "release-eng",
        decision: "BLOCK",
        riskScore: 0.85,
        riskLabel: "HIGH",
        exitCode: 1,
        reasoning: "P1 failure signature detected. Flagged as precautionary override for on-call signoff despite canary ratio.",
        runbook: "RB-PAY-04: Ensure canary traffic monitoring and automated rollback alarms are armed.",
        evidenceIds: ["cc472507-8ce1-4146-b750-977a2030b48f"],
        memoryOffVerdict: "WARN (Risk: 0.45, Exit: 0)",
      },
    ],
  },

  // Featured Engineering Projects: Preflight, LMS, Todo List, and Personal Developer Portfolio
  projects: [
    {
      id: "preflight",
      title: "Preflight",
      subtitle: "Autonomous Release Safety Gate with Persistent Memory",
      category: "AI Systems & CI/CD",
      badge: "Flagship AI Project",
      date: "October 2026",
      problem:
        "Release pipelines lose institutional memory. When on-call engineers leave or incident post-mortems stay buried in static documentation, known failure patterns repeat silently in production.",
      whatIBuilt:
        "An autonomous CI/CD release safety gate that retrieves historical outage precedents from Vectorize Hindsight persistent memory and evaluates upcoming deployment risks using Groq LLM API.",
      summary:
        "An AI agent at the CI/CD gate that recalls past deployments, outages, and runbooks from Vectorize Hindsight persistent memory and returns PASS, WARN, or BLOCK with cited evidence.",
      techStackLine: "Python, FastAPI, Groq LLM API, Vectorize Hindsight, React, Tailwind CSS",
      concreteDecision:
        "Vectorize Hindsight memory stores historical deployment manifests, architectural diffs, and incident post-mortems with remediation runbooks, blocking releases (exit code 1) when the risk score exceeds 0.60.",
      bulletPoints: [
        "Integrated Vectorize Hindsight memory to semantically index deployment manifests, architectural diffs, and incident remediation runbooks.",
        "Engineered release risk evaluation using Groq LLM API with hallucinated citation validation and deterministic boundary clamping.",
        "Benchmarked across 150 simulated deployments: caught 4 of 9 repeat incidents with memory enabled vs 1 of 9 in the stateless baseline.",
      ],
      keyTechnicalDecision:
        "Anchored Hindsight queries to semantic deployment content to prevent temporal leakage and stripped hallucinated citation IDs before returning gate verdicts.",
      tech: ["Python", "FastAPI", "Groq LLM", "Hindsight", "React", "Tailwind CSS"],
      github: "https://github.com/hemkesh18/preflight",
      liveDemo: "https://preflight-kw3s.vercel.app/",
      metrics: "4/9 Repeat Outages Flagged",
    },
    {
      id: "learning-management-system",
      title: "Learning Management System",
      subtitle: "Full-Stack Educational Platform with Role-Based Access Control",
      category: "Full-Stack Web",
      badge: "Full-Stack Project",
      date: "November 2025",
      problem:
        "Managing multi-role educational workflows requires strict server-enforced access boundaries between teachers and students while preventing duplicate course enrollments.",
      whatIBuilt:
        "A full-stack learning management platform supporting role-based access for teachers and students, with dynamic course publishing and relational enrollment tracking.",
      summary:
        "A full-stack learning management platform supporting role-based access for teachers and students, with dynamic course publishing and relational enrollment tracking.",
      techStackLine: "Node, Express, PostgreSQL, Sequelize ORM, EJS",
      concreteDecision:
        "Engineered role-based access control separating teacher and student privileges, with relational Sequelize schemas across users, courses, chapters, pages, and enrollments, plus duplicate enrollment checks.",
      bulletPoints: [
        "Built role-based authorization routing teachers to course management dashboards and students to course enrollment views.",
        "Engineered server-rendered dynamic pages using modular EJS templates integrated with Express session validation.",
        "Designed relational PostgreSQL schemas with Sequelize ORM associations across Users, Courses, Chapters, Pages, and Enrollments.",
      ],
      keyTechnicalDecision:
        "Designed relational PostgreSQL schemas with Sequelize ORM associations connecting Users, Courses, Chapters, Pages, and Enrollments with duplicate enrollment validation.",
      tech: ["Node", "Express", "PostgreSQL", "Sequelize ORM", "EJS"],
      github: "https://github.com/hemkesh18/learning-management-system",
      liveDemo: null,
      metrics: "PostgreSQL & Sequelize Associations",
    },
    {
      id: "todo-list-app",
      title: "Todo List Application",
      subtitle: "Task Management Web App with Stateful REST Architecture",
      category: "Full-Stack Web",
      badge: "Web Application",
      date: "July 2025",
      problem:
        "Task management applications often suffer from poor client-server state synchronization, unhandled 422 payload errors, and unorganized task deadlines.",
      whatIBuilt:
        "A responsive task management application enabling users to create, update, complete, and delete tasks with seamless client-server state synchronization.",
      summary:
        "A responsive task management application enabling users to create, update, complete, and delete tasks with seamless client-server state synchronization.",
      techStackLine: "Node, Express, PostgreSQL, Sequelize, EJS",
      concreteDecision:
        "Engineered RESTful CRUD endpoints with HTTP 422 error handling and modular EJS component partials (header.ejs and reusable todos.ejs list sections categorized by overdue, due today, and due later).",
      bulletPoints: [
        "Built RESTful endpoints handling complete task lifecycles (creation, status update, inline editing, and deletion).",
        "Structured frontend with modular EJS partials (header.ejs and reusable todos.ejs categorized by overdue, due today, and due later).",
        "Implemented database queries using Sequelize operators to filter tasks by due date.",
      ],
      keyTechnicalDecision:
        "Engineered RESTful endpoints with HTTP 422 error handling and modular EJS partials ensuring clean separation of concerns across overdue, today, and later task lists.",
      tech: ["Node", "Express", "PostgreSQL", "Sequelize", "EJS"],
      github: "https://github.com/hemkesh18/todo-list",
      liveDemo: null,
      metrics: "RESTful Endpoints & Modular EJS",
    },
    {
      id: "personal-portfolio",
      title: "Personal Developer Portfolio",
      subtitle: "Interactive Single-Page Application with Command Palette and ATS Preview",
      category: "Frontend System",
      badge: "Portfolio System",
      date: "October 2026",
      problem:
        "Standard developer portfolios frequently rely on ungrounded skill percentages, suffer from slow initial load flashes, and lack recruiter-oriented features like printable ATS previews.",
      whatIBuilt:
        "A responsive single-page developer portfolio with persistent dark/light mode theming, an ATS resume modal, a keyboard-driven command palette (Cmd+K), and zero-flash preloading.",
      summary:
        "A responsive single-page developer portfolio with persistent dark/light mode theming, an ATS resume modal, a keyboard-driven command palette (Cmd+K), and zero-flash preloading.",
      techStackLine: "React, Tailwind CSS, Vite, Lucide Icons",
      concreteDecision:
        "Engineered persistent dark/light theme switching with zero white-flash preloader, keyboard-driven Command Palette (Cmd+K), and printable ATS-formatted resume preview modal.",
      bulletPoints: [
        "Engineered client-side dark/light mode state management with localStorage persistence and an inline CSS preloader to prevent white-flash loading.",
        "Built a keyboard-driven Command Palette accessible via Ctrl+K / Cmd+K supporting rapid section navigation.",
        "Developed a printable ATS resume preview modal with structured markdown copy and one-click PDF retrieval.",
        "Integrated an automated node test suite verifying data integrity, project links, and typography invariants.",
      ],
      keyTechnicalDecision:
        "Engineered persistent dark/light theme switching with zero white-flash preloader, keyboard-driven Command Palette (Cmd+K), and printable ATS-formatted resume preview modal.",
      tech: ["React", "Tailwind CSS", "Vite", "Lucide Icons"],
      github: "https://github.com/hemkesh18/portfolio",
      liveDemo: "https://portfolio-phi-sage-60.vercel.app/",
      metrics: "Vite + React + Tailwind",
    },
  ],

  // Hackathons and Competitions: Plain wording ("Built...") with verified outcomes
  hackathons: [
    {
      id: "sih-2026",
      name: "Smart India Hackathon (SIH) 2026",
      role: "Built the Flutter client and connected the machine learning inference backend",
      stack: "Flutter, Dart, Python, FastAPI, PostgreSQL",
      built: "Built cross-platform Flutter mobile client connected to backend PostgreSQL schemas and ML model inference endpoints for live automated telemetry.",
      outcome: "Selected in the college-level round.",
      status: "verified",
      statusBadge: "Selected (College Round)",
    },
    {
      id: "hack-with-hyderabad",
      name: "Hack with Hyderabad 3.0",
      role: "Built Preflight, an agent that uses Vectorize Hindsight persistent memory to block risky deployments",
      stack: "Python, FastAPI, Groq LLM API, Vectorize Hindsight, React, Tailwind CSS",
      built: "Built Preflight, an autonomous CI/CD release safety gate that retrieves historical outage precedents from Vectorize Hindsight persistent memory and evaluates upcoming deployment risks using Groq LLM.",
      outcome: "Built a working prototype within 24 hours. [FILL IN: e.g. shortlisted / finalist / none yet]",
      status: "verified",
      statusBadge: "Working Prototype",
    },
  ],

  // Coding Profiles
  codingProfiles: [
    {
      platform: "LeetCode",
      handle: "x35OkJfu7A",
      stats: "100+ Problems Solved",
      url: "https://leetcode.com/u/x35OkJfu7A/",
    },
  ],

  // Education Timeline
  education: [
    {
      institution: "Chaitanya Bharathi Institute of Technology (CBIT)",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      period: "Aug 2024 to July 2028",
      location: "Hyderabad, Telangana",
      score: "CGPA: 9.05 / 10.0",
      coursework: [
        "Data Structures",
        "Database Management Systems",
        "Data Analysis and Algorithms",
        "Digital Logic Design",
        "Core Java",
      ],
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Class XII (Intermediate) - Maths, Physics, Chemistry (MPC)",
      period: "April 2022 to May 2024",
      location: "Hyderabad, Telangana",
      score: "Percentage: 98.6%",
      coursework: ["Mathematics", "Physics", "Chemistry"],
    },
  ],

  // Work Experience
  experience: [
    {
      role: "Academic Tutor, IIT Foundation",
      organization: "Brain Hub",
      period: "July 2025 to Present",
      location: "Hyderabad, Telangana",
      type: "Academic Tutoring & Mentorship",
      description:
        "Tutor secondary school students preparing for competitive JEE Mains, Advanced, and CBSE syllabi in Mathematics, Physics, and Chemistry. Mentored 10 students with structured problem-solving sessions: 7 students scored above 95% and 3 scored above 92% in CBSE board examinations.",
    },
  ],

  // Honors & Entrance Examinations
  achievements: [
    {
      category: "National & State Entrance Examinations",
      title: "98.6 Percentile in JEE Mains; State Ranks: TS EAPCET 1689, AP EAPCET 2345",
      detail:
        "Secured 98.6 percentile in JEE Mains nationwide among over 1 million candidates. Achieved top state engineering entrance ranks in both Telangana (1689) and Andhra Pradesh (2345).",
    },
    {
      category: "Outside Coding",
      title: "College Carroms League (2nd Place) & Inter-College Free Fire Squad (3rd Place)",
      detail:
        "Secured 2nd place in CBIT college-level carroms tournament and 3rd place in Hyderabad inter-college esports tournament competing as a squad of 4.",
    },
  ],
};
