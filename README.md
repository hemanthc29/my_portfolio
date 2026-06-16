# Professional SDE Portfolio Website

This is a premium, modern, responsive portfolio website built for **Chennuru Venkata Hemanth Kumar**, a Software Development Engineer (SDE) and Computer Science undergraduate. 

It is designed to impress recruiters, hiring managers, and technical interviewers by showcasing coding consistency (6,000+ DSA problems solved), developer intern experience, verified certifications, and leadership highlights.

---

## 🚀 Tech Stack

- **Core**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (using the `@tailwindcss/vite` plugin for lightning-fast, CSS-first optimization)
- **Animations**: Framer Motion 12 (scroll-triggered transitions, staggers, hover effects, and spring actions)
- **Icons**: React Icons (standardized font-awesome, feather, and hi iconography)
- **Fonts**: Outfit (display headings) & Inter (body text) loaded via Google Fonts
- **Assets**: Resume downloaded in original docx format and profile photo optimized.

---

## ✨ Advanced Features Included

1. **Interactive Terminal Loader**: A bash-themed preloader that mocks typical software engineering systems compiling data.
2. **Glassmorphic Navigation Bar**: Responsive header featuring a scroll progress bar, desktop-mobile views, active section indicators, and anchor alignments.
3. **Interactive Skills Matrix**: Multi-tab layout showcasing language, backend, database, and system competencies with progress bars and glowing borders.
4. **Interactive Projects Grid**: Grid panel featuring live search, language-specific tags, constraint-type categorization (e.g. Python, React/Node, DSA), and customized placeholder banners reflecting project color themes.
5. **Polished Timelines**: Smooth scrolling vertical lines for Work Experience and academic credentials.
6. **Detailed Contact System**: Active inputs, clients validation, and simulated mail success notifications.
7. **SEO Optimization**: Configured Title tags, Meta keywords, descriptions, and Open Graph tags directly in `index.html`.
8. **Document Download System**: Direct links supporting downloading the official `Resume_SE.docx` document from the website.

---

## 📂 Project Structure

```
Profile-Anti/
├── public/
│   └── Resume_SE.docx        # Accessible resume download source
├── src/
│   ├── assets/
│   │   └── profile.jpg       # Profile picture copied from raw source
│   ├── components/
│   │   ├── LoadingScreen.jsx # Terminal log screen
│   │   ├── Navbar.jsx        # Glassmorphic header
│   │   ├── Hero.jsx          # Professional introduction
│   │   ├── About.jsx         # Career stats and objectives
│   │   ├── Skills.jsx        # Dashboard of tech competencies
│   │   ├── Experience.jsx    # Work experience timeline
│   │   ├── Projects.jsx      # Gallery with filters and search
│   │   ├── Education.jsx     # Degree timeline
│   │   ├── Certifications.jsx# Grid of certification cards
│   │   ├── Achievements.jsx  # Coding profiles and sports accolades
│   │   ├── Resume.jsx        # Visual card and view modal
│   │   ├── Contact.jsx       # Validation contact form
│   │   ├── Footer.jsx        # Branding and links
│   │   └── BackToTop.jsx     # Floating return key
│   ├── data/
│   │   └── portfolioData.js  # Centralized resume data
│   ├── index.css             # Tailwind imports & customized design system variables
│   ├── main.jsx              # React mounting file
│   └── App.jsx               # Orchestrator app shell
├── index.html                # Main page entry with SEO configurations
├── vite.config.js            # Vite configurations using Tailwind plugin
├── package.json              # System dependencies
└── README.md                 # Document guide
```

---

## 🛠️ Getting Started & Scripts

To run the application locally or build it for production, follow these steps:

### 1. Install Dependencies
Run the following command at the project root to install React, Framer Motion, and Tailwind:
```bash
npm install
```

### 2. Start Local Server
Run this script to start the hot-reloading development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

### 3. Build for Production
Run this to compile optimized assets into the `dist/` directory:
```bash
npm run build
```
You can test the production build locally with `npm run preview`.
