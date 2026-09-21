# Modern B.Tech Student Portfolio (React + Tailwind CSS)

A clean, modern, recruiter-focused developer portfolio designed specifically for a **3rd-Year B.Tech Computer Science Engineering student** to feature on resumes, LinkedIn, and internship applications.

Built with **React 19**, **Vite 8**, **Tailwind CSS v4**, and **Lucide Icons**.

---

## ⚡ Quick Start

### 1. Run Locally
```bash
cd portfolio
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```
The compiled, optimized static assets will be output in the `dist/` directory.

---

## 🛠️ How to Customize in 2 Minutes

All your personal data, links, projects, skills, education, and achievements are isolated in a single configuration file:
👉 **`src/data/portfolioData.js`**

### What you can customize there:
- **`personal`**: Name, headline, short bio, location, email, LinkedIn, GitHub, LeetCode profile links.
- **`stats`**: Year of graduation, DSA problems solved count, CGPA, projects count.
- **`skills`**: Add or reorder your languages, frameworks, AI/ML tools, databases, and core CS fundamentals.
- **`projects`**: Pre-loaded with your Smart India Hackathon **ZeroDrift** project + full-stack projects. You can add more, update URLs, or modify resume-style impact bullet points.
- **`education`**: College name, degree, current CGPA, relevant coursework (DSA, OS, DBMS, CN).
- **`experience`**: Hackathons, student societies, internships, and technical leadership roles.
- **`achievements`**: Competitive coding, hackathons, and certifications.

### 📄 Adding Your Resume PDF
1. Copy your actual resume PDF into the `public/` directory (e.g. `public/my-resume.pdf`).
2. In `src/data/portfolioData.js`, update:
   ```javascript
   resumePdf: "/my-resume.pdf"
   ```

---

## 🚀 Free Deployment Guide (2 Minutes)

### Option A: Vercel (Recommended)
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository, leave defaults (Framework: Vite, Build: `npm run build`), and click **Deploy**.
4. You get an instant `https://yourname.vercel.app` URL to put on your resume!

### Option B: Netlify
1. Go to [netlify.com](https://netlify.com) and connect your GitHub repo.
2. Set Build command to `npm run build` and Publish directory to `dist`.
3. Click **Deploy Site**.

### Option C: GitHub Pages
1. In `vite.config.js`, set `base: '/<repo-name>/'`.
2. Run `npm run build` and deploy the `dist/` folder using `gh-pages` or GitHub Actions.

---

## 💡 Key Design Decisions
- **No Overkill / Recruiter-First**: No laggy 3D canvases or bloated dependencies that crash laptops or slow down mobile recruiters.
- **Dark / Light Mode**: Seamless toggle with persistent storage and system theme detection.
- **One-Click Email Copy**: Recruiters can copy your email in one click or send a direct inquiry.
- **ATS-Optimized Formatting**: Project descriptions follow the standard "Action Verb + Technical Implementation + Quantified Impact" structure preferred by technical interviewers.
