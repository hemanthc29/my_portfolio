export const portfolioData = {
  personalInfo: {
    fullName: "Chennuru Venkata Hemanth Kumar",
    firstName: "Hemanth",
    title: "Software Development Engineer (SDE) & Backend Specialist",
    email: "cvhk6300@gmail.com",
    phone: "+91 6300131358",
    location: "Andhra Pradesh, India",
    github: "https://github.com/hemanthc29",
    linkedin: "https://www.linkedin.com/in/hemanthc29/",
    resumeUrl: "/Resume_SE.pdf",
    summary: "Software Development Engineer (SDE) and Computer Science undergraduate (CGPA: 8.82) with hands-on experience building scalable backend systems, RESTful APIs, and full-stack web applications. Strong proficiency in Java, Python, JavaScript, and Data Structures & Algorithms (6,000+ problems solved). Experienced in backend engineering, database design, optimization algorithms, and system-level problem solving. Seeking entry-level SDE / Backend / Full Stack Engineer roles.",
    bio: "I am an SDE and Computer Science undergraduate at Madanapalle Institute of Technology and Science, passionate about creating high-performance backend systems, developing scalable REST APIs, and solving complex algorithmic challenges. With over 6,000 Data Structures & Algorithms problems solved and a Diamond III consistency badge on CCBP, I have developed deep analytical thinking and optimization skills. I've engineered backend services ranging from real-time IoT sensor ingestion to automated timetabling scheduling constraints. My experience as a developer intern and student mentor has allowed me to hone both my technical architecture skills and communication capabilities.",
    stats: [
      { id: 1, value: "6,000+", label: "🧠 DSA Solved", subLabel: "Java & Python" },
      { id: 2, value: "250+", label: "🔥 Consistency", subLabel: "NxtWave Diamond III" },
      { id: 3, value: "2", label: "💼 Internships", subLabel: "Python & Web" },
      { id: 4, value: "8.82", label: "🎓 CS Academics", subLabel: "Top Tier Academics" }
    ]
  },
  skills: {
    languages: [
      { name: "Java", level: 90 },
      { name: "Python", level: 95 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 85 }
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Spring Boot", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "API Design", level: 88 },
      { name: "Backend Engineering", level: 90 }
    ],
    frontend: [
      { name: "React.js", level: 80 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "Bootstrap", level: 80 }
    ],
    databases: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 }
    ],
    tools: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Bitbucket", level: 75 },
      { name: "Postman", level: 90 },
      { name: "VS Code", level: 95 }
    ],
    fundamentals: [
      { name: "Data Structures & Algorithms", level: 95 },
      { name: "Object Oriented Programming (OOP)", level: 88 },
      { name: "DBMS", level: 85 },
      { name: "Operating Systems", level: 80 }
    ]
  },
  experience: [
    {
      role: "🐍 Python Developer Intern",
      company: "Cognifyz Technologies",
      duration: "Mar 2025 – Jun 2025",
      type: "Internship",
      description: "Developed backend Python modules for data processing and REST API integration.",
      achievements: [
        "Developed modular, scalable backend Python scripts for automated data processing tasks, improving processing pipelines.",
        "Created and verified REST API integrations and data payload transformations for corporate solutions.",
        "Identified bottlenecks and improved application performance through extensive debugging and database query optimization."
      ]
    },
    {
      role: "🌐 Web Developer Intern",
      company: "Veknova Private Limited",
      duration: "Aug 2025 – Oct 2025",
      type: "Internship",
      description: "Built responsive frontend components and integrated them with backend APIs.",
      achievements: [
        "Created responsive and visually engaging user interface components using HTML5, CSS3, and JavaScript.",
        "Integrated dynamic frontend client views with backend web APIs, maintaining sub-second API load latency.",
        "Addressed frontend bugs, enhanced UI performance, and resolved cross-browser rendering inconsistencies."
      ]
    },
    {
      role: "💡 Student Mentor",
      company: "NxtWave CCBP Academy",
      duration: "2024 – Present",
      type: "Mentorship",
      description: "Mentored students in DSA, problem solving, and coding best practices.",
      achievements: [
        "Guided a community of 50+ students through complex coding assignments and data structure fundamentals.",
        "Conducted problem-solving reviews and code optimization walk-throughs to emphasize clean, efficient code.",
        "Provided technical support on web development stacks, accelerating peers' learning paths."
      ]
    }
  ],
  projects: [
    {
      id: "jee-prep",
      name: "🤖 JEE Preparation Assistant",
      subtitle: "Scalable Backend & AI System",
      tech: ["Python", "REST APIs", "Data Engineering", "Vite", "JSON"],
      description: "Built scalable backend services to handle document ingestion, query processing, and response generation using modular API design. Implemented efficient data retrieval and processing pipelines, demonstrating strong backend architecture and system design skills.",
      achievements: [
        "Architected document parsing and structured text extraction from standard academic materials.",
        "Developed low-latency query handling APIs using clean design and modular Python services.",
        "Constructed an ingestion pipeline that handles dynamic document uploads and structures content schemas."
      ],
      themeGradient: "from-cyan-500 to-blue-600",
      codeUrl: "https://github.com/hemanthc29/ai_quiz_generator",
      liveUrl: "https://github.com/hemanthc29/ai_quiz_generator"
    },
    {
      id: "event-resource",
      name: "🏛️ College Event & Resource Management System",
      subtitle: "Full Stack Web Application",
      tech: ["React.js", "Node.js", "Spring Boot", "MongoDB"],
      description: "Developed secure RESTful APIs with role-based access control for managing events and resources. Designed optimized MongoDB schemas and backend validation logic for scalability and data integrity.",
      achievements: [
        "Implemented JWT-based authentication combined with secure Role-Based Access Control (RBAC) for admins, coordinators, and students.",
        "Created MongoDB schemas featuring compound indexing, achieving rapid queries on active bookings and available slots.",
        "Configured validation middleware ensuring resource scheduling conflict prevention at the database level."
      ],
      themeGradient: "from-emerald-500 to-teal-600",
      codeUrl: "https://github.com/hemanthc29/Full-Stack-Projects",
      liveUrl: "https://github.com/hemanthc29/Full-Stack-Projects"
    },
    {
      id: "timetable-gen",
      name: "🗓️ Smart Timetable Generator",
      subtitle: "Algorithmic Optimization System",
      tech: ["Python", "DSA", "Constraint Optimization", "Algorithms"],
      description: "Designed and implemented a constraint-based scheduling algorithm to generate conflict-free timetables. Reduced manual scheduling time by ~90%, showcasing strong problem-solving and optimization skills.",
      achievements: [
        "Designed a custom backtracking heuristic algorithm that maps teacher preferences, subject weights, and room availability.",
        "Configured complex scheduling constraints to resolve teacher double-bookings and structural overlaps.",
        "Reduced administrative timetable workload from days to minutes, attaining a ~90% efficiency increase."
      ],
      themeGradient: "from-indigo-500 to-purple-600",
      codeUrl: "https://github.com/hemanthc29/myClassPro",
      liveUrl: "https://github.com/hemanthc29/myClassPro"
    },
    {
      id: "rider-safety",
      name: "🏍️ Rider Safety Application",
      subtitle: "Real-Time Backend System",
      tech: ["Python", "HTTP APIs", "IoT", "Webhooks"],
      description: "Developed backend services for real-time sensor data ingestion and processing with low-latency requirements. Integrated hardware devices with cloud APIs to trigger automated emergency alerts, ensuring system reliability.",
      achievements: [
        "Engineered real-time telemetry processing to evaluate vehicle speed, sudden deceleration, and orientation data.",
        "Built automated, fail-safe emergency alert triggers notifying primary contacts upon detection of accident patterns.",
        "Optimized communication endpoints for microcontrollers, minimizing data transfer payload sizes."
      ],
      themeGradient: "from-rose-500 to-orange-600",
      codeUrl: "https://github.com/hemanthc29/my-openenv",
      liveUrl: "https://github.com/hemanthc29/my-openenv"
    },
    {
      id: "django-projects",
      name: "🐍 Django Enterprise Services",
      subtitle: "Modular Backend Suite",
      tech: ["Python", "Django", "SQLite", "REST APIs", "MVC"],
      description: "Engineered a unified Django backend suite featuring modular applications for College Administration, Hospital Patient Scheduling, and RESTful API endpoints. Implemented robust database schemas and endpoint verification scripts.",
      achievements: [
        "Developed an active Hospital Management module with automated appointment routing schemas.",
        "Designed a Faculty & Student database portal utilizing Django’s object-relational mapping (ORM).",
        "Built a comprehensive verification suite to run tests and validate endpoint status payloads."
      ],
      themeGradient: "from-green-600 to-emerald-800",
      codeUrl: "https://github.com/hemanthc29/DJANGO_Projects",
      liveUrl: "https://github.com/hemanthc29/DJANGO_Projects"
    },
    {
      id: "hotel-booking",
      name: "🏨 Hotel Booking Website",
      subtitle: "Premium Accommodation Portal",
      tech: ["HTML5", "CSS3", "JavaScript", "Local Storage", "State Management"],
      description: "Developed Aura Stays, a premium hotel search and booking platform. Features multi-criteria search filtering, reactive pricing calculators with VAT/coupon logic, interactive FAQs, and local storage bookmarked hotels.",
      achievements: [
        "Programmed a live search and multi-layer filter query matching star ratings, price boundaries, and amenities.",
        "Built a checkout calculator updating room rates, taxes, and service fees dynamically alongside coupon code validation.",
        "Integrated countdown deals timers and bookmarked favorites cached persistently using browser storage."
      ],
      themeGradient: "from-amber-600 to-yellow-500",
      codeUrl: "https://github.com/hemanthc29/Hotel-Booking-Website",
      liveUrl: "https://cvhkhbw.netlify.app/"
    },
    {
      id: "car-website",
      name: "🚗 Car Booking Website",
      subtitle: "Interactive Leasing Platform",
      tech: ["HTML5", "CSS3", "JavaScript", "Local Storage", "UX Design"],
      description: "Designed and built Veloce, a high-conversion, responsive car rental web app featuring client-side leasing calculations, dynamic filtering, technical vehicle comparisons, and persistent bookmarking.",
      achievements: [
        "Implemented an interactive comparison matrix supporting side-by-side specs comparison for up to 3 cars.",
        "Built a live checkout invoice calculator with promo validations, duration mapping, and tax adjustments.",
        "Created an advanced responsive filter sidebar supporting multi-criteria queries with zero lag."
      ],
      themeGradient: "from-blue-600 to-cyan-500",
      codeUrl: "https://github.com/hemanthc29/Car-Website",
      liveUrl: "https://cvhkcr.netlify.app/"
    },
    {
      id: "ott-platform",
      name: "🎬 FlixWave Streaming Platform",
      subtitle: "Single Page Streaming Portal",
      tech: ["JavaScript", "HTML5", "CSS3", "SPA Routing", "State Management"],
      description: "Engineered FlixWave, a responsive single-page web app showcasing video streaming directories. Implemented custom router parsing hashes, category lists, detail modals, and personal lists.",
      achievements: [
        "Developed a lightweight client-side router supporting parametrized paths and queries.",
        "Programmed watch-list toggling and continue-watching cache mechanisms using Local Storage.",
        "Constructed a responsive mega-hero slider showcasing featured content with seamless fading."
      ],
      themeGradient: "from-red-600 to-rose-900",
      codeUrl: "https://github.com/hemanthc29/OTT-Platform",
      liveUrl: "https://cvhkott.netlify.app/"
    },
    {
      id: "music-player",
      name: "🎵 AeroBeat Music Experience",
      subtitle: "Interactive Glassmorphic Player",
      tech: ["HTML5", "CSS3", "JavaScript", "Audio API", "LRC Synchronizer"],
      description: "Developed AeroBeat, a premium glassmorphic audio streaming player with synchronized sliding lyrics, keyboard hotkey bindings, playlist categorizations, and visual equalizer bars.",
      achievements: [
        "Built a lyrics synchronizer centering active lines and skipping audio on tapping lyric lines.",
        "Programmed extensive keyboard controls (Space, Arrows, M) for hands-free player operation.",
        "Structured visual equalizer bars dynamically animated in alignment with track audio feedback."
      ],
      themeGradient: "from-purple-600 to-pink-500",
      codeUrl: "https://github.com/hemanthc29/Music-Player",
      liveUrl: "https://cvhkmp.netlify.app/"
    },
    {
      id: "weather-dashboard",
      name: "🌤 Atmosphere Weather Analytics",
      subtitle: "Real-Time Climate Dashboard",
      tech: ["JavaScript", "Leaflet JS", "Open-Meteo API", "Geolocation", "CSS Particle Effects"],
      description: "Created Atmosphere, a premium real-time weather tracking dashboard featuring detailed climate metrics (AQI, UV, Wind compass), browser geolocation detection, and dynamic weather-based backgrounds.",
      achievements: [
        "Integrated Leaflet JS and the RainViewer API to render live precipitation radar maps.",
        "Built dynamic particle emitters (raindrops, snowflakes) matching real-time weather statuses.",
        "Constructed an active dashboard refreshing logic and favorite city bookmark system."
      ],
      themeGradient: "from-indigo-600 to-blue-400",
      codeUrl: "https://github.com/hemanthc29/Weather-Dashboard",
      liveUrl: "https://cvhkwd.netlify.app/"
    },
    {
      id: "college-website",
      name: "🏫 Apex University Web Portal",
      subtitle: "Academic Management System",
      tech: ["HTML5", "CSS3", "JavaScript", "Local Storage", "Responsive UI"],
      description: "Built Apex University, a multi-page interactive institutional portal containing admissions form caching, faculty directory searches, student resource downloads, and responsive campus galleries.",
      achievements: [
        "Engineered form auto-draft saving to prevent data loss on page refresh via Local Storage.",
        "Developed a client-side search indexing system filtering faculty records instantly by name/dept.",
        "Designed a responsive Lightbox facility gallery overlay displaying campus highlights smoothly."
      ],
      themeGradient: "from-amber-500 to-orange-600",
      codeUrl: "https://github.com/hemanthc29/College-Website",
      liveUrl: "https://cvhkcw.netlify.app/"
    }
  ],
  education: [
    {
      degree: "🎓 Bachelor of Engineering in Computer Science",
      institution: "Madanapalle Institute of Technology and Science",
      location: "Madanapalle, Andhra Pradesh, India",
      duration: "2023–2027",
      score: "CGPA: 8.82/10",
      achievements: [
        "Specialized in core Computer Science fundamentals: Data Structures, DBMS, and Operating Systems.",
        "Consistently ranked in the top tier of the computer engineering division.",
        "Department technical lead activities and technical organizer role."
      ]
    },
    {
      degree: "🏫 Intermediate (TSBIE)",
      institution: "Narayana Junior College",
      location: "Hyderabad, Telangana, India",
      duration: "2021–2023",
      score: "95.6%",
      achievements: [
        "Specialized in MPC (Mathematics, Physics, and Chemistry) streams.",
        "Secured an outstanding academic score of 95.6% in the board examination.",
        "Developed strong analytical reasoning and core science foundations."
      ]
    },
    {
      degree: "🎒 Secondary Schooling / Class X (CBSE)",
      institution: "Montessori High School",
      location: "Kurnool, Andhra Pradesh, India",
      duration: "2016–2021",
      score: "91.8%",
      achievements: [
        "Graduated with distinction securing 91.8% in CBSE board examinations.",
        "Acquired early foundational skills in mathematics and sciences.",
        "Active participant in science exhibitions and competitive school sports."
      ]
    }
  ],
  certifications: [
    {
      name: "🤖 GenAI Powered Data Analytics Job Simulation",
      issuer: "TATA (via Forage)",
      date: "2026",
      highlight: "Exploratory Data Analysis, Delinquency Prediction, AI collections strategy",
      fileUrl: "/certificates/Tata_DA_AI.pdf"
    },
    {
      name: "📊 Data Visualisation: Empowering Business with Insights",
      issuer: "TATA (via Forage)",
      date: "2026",
      highlight: "Business Scenarios, Visual Selection, Communicating Insights",
      fileUrl: "/certificates/Tata_DA_v.pdf"
    },
    {
      name: "⚛️ Quantum Fundamentals Certification",
      issuer: "WISER & Amaravati Quantum Valley",
      date: "2026",
      highlight: "Quantum Computing Basics, Qubitech Academic Program",
      fileUrl: "/certificates/IMG-20260128-WA0003.jpg"
    },
    {
      name: "☁️ Salesforce Agentblazer Workshop",
      issuer: "Salesforce & NxtWave",
      date: "2026",
      highlight: "Agentforce Development, Custom Actions, Salesforce AI Integration",
      fileUrl: "/certificates/IMG-20260128-WA0002.jpg"
    },
    {
      name: "🏆 CCBP Masterclass: Mr Krishna Raghavan (Flipkart CPO)",
      issuer: "NxtWave CCBP Academy",
      date: "2024",
      highlight: "Leadership Training, Career Strategy, 7 Habits for Success",
      fileUrl: "/certificates/IMG-20240319-WA0022.jpg"
    },
    {
      name: "📊 Advanced Data Science & Machine Learning",
      issuer: "CCBP Academy",
      date: "2024",
      highlight: "Algorithms, Pandas, Scikit-Learn, Supervised Learning"
    },
    {
      name: "💻 React.js & Node.js Developer Suite",
      issuer: "CCBP Academy",
      date: "2024",
      highlight: "Single Page Apps, RESTful Backends, State Management, MongoDB"
    },
    {
      name: "🐍 Programming Foundations with Python",
      issuer: "IBM & NASSCOM",
      date: "2023",
      highlight: "Object Oriented Python, File Handling, Logic structures"
    },
    {
      name: "🛠️ Developer Foundations (Git & Command Line)",
      issuer: "IBM & NASSCOM",
      date: "2023",
      highlight: "Version Control, Git Workflows, Branching, Reverting, CLI"
    },
    {
      name: "🏆 Gold Badge – Data Management & Analytics",
      issuer: "Accenture",
      date: "2024",
      highlight: "Data Query Optimization, SQL Schema Design, Big Data Principles"
    }
  ],
  achievements: [
    {
      title: "🏆 Diamond III Badge – NxtWave CCBP",
      description: "Recognized for 250+ days of consecutive coding commitment. Solved over 6,380 Data Structures & Algorithms problems using Java and Python.",
      category: "Coding Profile"
    },
    {
      title: "👥 Coordinator – Code Rush (2025)",
      description: "Led and coordinated Code Rush, the flagship coding contest hosted by the Department Technical Club. Designed problem sets and managed leaderboard infrastructure.",
      category: "Leadership"
    },
    {
      title: "🥊 Gold Medalist – District Level Boxing",
      description: "Achieved the gold medal in district boxing competitions, demonstrating discipline, strategy, and mental resilience under pressure.",
      category: "Sports"
    },
    {
      title: "🏑 Gold Medalist – Hockey",
      description: "Led the college hockey line-up to victory, winning the Gold Medal in the prestigious Dhyaan Chand Hockey Tournament.",
      category: "Sports"
    }
  ]
};
