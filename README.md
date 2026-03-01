# Kinjal Gupta — Portfolio

Personal portfolio website built with React. Live at **https://kinjal-1007.github.io/**

---

## Local Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start dev server (runs on http://localhost:3000)
npm start
```

---

## First-Time GitHub Setup

Do this once when setting up on a new machine or new repo.

```bash
# 1. Initialize git (only if .git folder doesn't exist)
git init

# 2. Stage all files
git add .

# 3. First commit
git commit -m "Initial commit: portfolio"

# 4. Link to your GitHub repo (replace URL if repo name changes)
git remote add origin https://github.com/kinjal-1007/Portfolio.git

# 5. Push to main branch
git branch -M main
git push -u origin main
```

---

## Deploying to GitHub Pages

Run this whenever you want to publish your latest changes live:

```bash
npm run deploy
```

This automatically:
1. Builds the production bundle (`npm run build`)
2. Pushes the `build/` folder to the `gh-pages` branch on GitHub

Your site updates at **https://kinjal-1007.github.io/** within ~1–2 minutes.

> **First time only:** Go to your repo on GitHub → Settings → Pages → set Branch to `gh-pages` → Save.

---

## Day-to-Day Workflow

```bash
# 1. Make your changes in src/

# 2. Check them locally
npm start

# 3. Commit your changes
git add .
git commit -m "describe what you changed"

# 4. Push source code to GitHub
git push

# 5. Deploy updated site to GitHub Pages
npm run deploy
```

---

## Customisation Guide

| What to change | File |
|---|---|
| Name, bio, role, resume link | `src/components/Intro/Intro.jsx` |
| Work experience | `src/components/Experience/Experience.jsx` |
| Skills list | `src/components/Skills/Skills.jsx` |
| Projects + links | `src/components/Projects/Projects.jsx` |
| Achievements + certificate links | `src/components/Achievements/Achievements.jsx` |
| Blog posts | `src/components/Blogs/Blogs.jsx` |
| Contact email (EmailJS keys) | `src/components/Contact/Contact.jsx` |
| Color theme | `src/App.css` (CSS variables at top) |
| Profile photo | Replace `src/img/profile.jpg` |

---

## Tech Stack

- React 17 (Create React App)
- Swiper.js — blog carousel
- EmailJS — contact form
- gh-pages — GitHub Pages deployment
