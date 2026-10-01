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
    yearStatus: "Third Year B.E. CSE, CBIT Hyderabad",
    college: "Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad",
    cgpa: "9.05 / 10.0",
    location: "Hyderabad, Telangana",
    status: {
      text: "Seeking Software Engineering Internships",
      available: true,
    },
    socials: {
      email: "hemkesh.c.18@gmail.com",
      github: "https://github.com/hemkesh18",
      linkedin: "https://www.linkedin.com/in/hemkesh-cuddapah-23a0033a1/",
      resumePdf: "/Hemkesh_Resume.pdf",
    },
    lastUpdated: "October 2026",
  },

  // Key Quick Metrics
  stats: [
    { label: "Current CGPA", value: "9.05", subtext: "CBIT Hyderabad" },
    { label: "JEE Mains", value: "98.6 %ile", subtext: "National rank percentile" },
    { label: "State Ranks", value: "1689", subtext: "TS EAPCET (AP: 2345)" },
    { label: "Preflight Backtest", value: "4/9 vs 1/9", subtext: "Repeat outage recall" },
  ],

  // About Me Section
  about: {
    overview:
      "I am a Computer Science Engineering student at Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad, maintaining a 9.05 CGPA. I build AI-backed systems end to end, focusing on persistent memory architectures, backend reliability, and full-stack engineering.",
    focus:
      "My primary project is Preflight, an autonomous release safety gate that connects persistent memory to CI/CD pipelines to catch recurring outage patterns before production. Outside software engineering, I teach competitive Mathematics, Physics, and Chemistry problem solving to secondary school students at Brain Hub.",
  },

  // Technical Skills Regrouped: Strong / Working / Familiar
  skills: [
    {
      group: "Strong",
      description: "Technologies I build with daily and can explain in depth",
      items: [
        "Core Java",
        "Python",
        "JavaScript (ES6+)",
        "PostgreSQL / SQL",
        "Node.js",
        "Express.js",
        "React.js",
        "REST APIs",
        "Data Structures & Algorithms",
      ],
    },
    {
      group: "Working",
      description: "Tools and frameworks used in active projects and coursework",
      items: [
        "FastAPI",
        "Tailwind CSS",
        "Git / GitHub",
        "DBMS",
        "EJS",
      ],
    },
    {
      group: "Familiar",
      description: "Libraries, runtime engines, and concepts explored through prototypes",
      items: [
        "C",
        "C++ Basics",
        "Vectorize Hindsight",
        "PyTorch / ONNX",
        "Groq LLM APIs",
        "LaTeX",
        "Jupyter Notebook",
        "Google Colab",
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
      headline: "Backtest on 150 simulated deployments (chronological replay)",
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
      "Synthetic operational history and small sample size (N=9 repeat incidents across planted patterns). These findings demonstrate the mechanism and baseline comparison, not a production claim.",
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

  // Secondary and Placeholder Projects
  projects: [
    {
      id: "learning-management-system",
      title: "Learning Management System",
      subtitle: "Full-Stack Educational Platform with Role-Based Access Control",
      category: "Full-Stack Web",
      badge: "Core Project",
      date: "November 2025",
      summary:
        "A full-stack learning management platform supporting role-based access for administrators, instructors, and students, with dynamic course publishing and relational enrollment tracking.",
      bulletPoints: [
        "Built full-stack role-based access control (RBAC) separating administrative, instructor, and student permissions.",
        "Engineered course publishing workflows and student enrollments using server-rendered EJS templates on Express.js.",
        "Designed and normalized PostgreSQL schemas with explicit indexes on user credentials and course enrollments.",
      ],
      keyTechnicalDecision:
        "Designed relational PostgreSQL schemas with explicit indexes on user credentials, courses, and enrollments to prevent N+1 query degradation during peak enrollment windows.",
      tech: ["Node.js", "Express.js", "PostgreSQL", "EJS", "JavaScript", "HTML/CSS", "SQL"],
      github: "https://github.com/hemkesh18/learning-management-system",
      liveDemo: "[TODO: LMS live demo URL]",
      metrics: "PostgreSQL RBAC & Indexed Schemas",
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio & ATS Resume Suite",
      subtitle: "Component-Driven Web Application with Live Telemetry",
      category: "Full-Stack Web",
      badge: "React & Tailwind",
      date: "2025 to 2026",
      summary:
        "A responsive, recruiter-oriented developer portfolio and interactive resume suite engineered with React 19, Tailwind CSS v4, and Vite for showcasing engineering projects, academic credentials, and competitive achievements.",
      bulletPoints: [
        "Architected a responsive Single Page Application with modular React components, smooth scrolling, and sub-second production builds.",
        "Engineered class-based dark and light theme switching with persistent local storage and CSS custom variants.",
        "Implemented interactive ATS-formatted resume preview modal, command palette (Ctrl+K), and dynamic client-side GitHub API integration with local caching.",
      ],
      keyTechnicalDecision:
        "Engineered a resilient client-side GitHub API integration with 1-hour local storage caching and graceful static fallbacks to guarantee zero layout shifts or empty states during API rate limits.",
      tech: ["React.js", "Tailwind CSS v4", "Vite", "JavaScript (ES6+)", "Lucide Icons"],
      github: "https://github.com/hemkesh18/portfolio",
      liveDemo: "https://portfolio-phi-sage-60.vercel.app/",
      metrics: "Sub-Second Builds & 100% Responsive",
    },
  ],

  // Hackathons and Competitions
  hackathons: [
    {
      id: "hack-with-hyderabad",
      name: "Hack with Hyderabad 3.0",
      role: "Full-Stack Developer and Core Architect",
      built: "Engineered core application workflows, database schema, and full-stack responsive web client.",
      outcome: "Participant with Verified Certificate",
      status: "verified",
    },
    {
      id: "sih-2026",
      name: "Smart India Hackathon (SIH) 2026",
      role: "Mobile and ML Integration Developer",
      built: "Built Flutter mobile client integrated with database endpoints and connected to machine learning inference backend.",
      outcome: "Collegiate Internal Round Participant",
      status: "verified",
    },
  ],

  // Coding Profiles
  codingProfiles: [
    {
      platform: "LeetCode",
      handle: "hemkesh18",
      stats: "100+ Problems Solved",
      url: "https://leetcode.com/u/hemkesh18/",
    },
  ],

  // Education Timeline
  education: [
    {
      institution: "Chaitanya Bharathi Institute of Technology (CBIT)",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      period: "Aug. 2024 to July 2028",
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

  // Honors, Entrance Examinations, and Beyond Code
  achievements: [
    {
      category: "National & State Entrance Examinations",
      title: "98.6 Percentile in JEE Mains; State Ranks: TS EAPCET 1689, AP EAPCET 2345",
      detail:
        "Secured 98.6 percentile in JEE Mains nationwide among over 1 million candidates. Achieved top state engineering entrance ranks in both Telangana and Andhra Pradesh.",
    },
    {
      category: "Beyond Code & Collegiate Activities",
      title: "College Carroms League (2nd Place) & Inter-College Free Fire Squad (3rd Place)",
      detail:
        "Secured 2nd place in CBIT college-level carroms tournament and 3rd place in Hyderabad inter-college esports tournament competing as a squad of 4.",
    },
  ],
};
