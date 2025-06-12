# 🌟 Internship Projects Portfolio – Shifana Ranth

A **Next.js 14** based full-stack internship portfolio showcasing real-world web development skills, including:

- ✅ **Todo List** — A task management app  
- 📝 **NoteSync** — Personal profile notes viewer  
- 🤖 **AI Chatbot** — Real-time chatbot using Gemini API  
- 📄 **Documents** — Document display interface *(optional)*  

---
gitbub:https://github.com/Shifana-Ranth/Fullstack-Intern
versel:https://fullstack-intern-gdyc.vercel.app/

## 📚 Table of Contents

- [Project Overview](#project-overview)  
- [Tech Stack](#tech-stack)  
- [Installation & Setup](#installation--setup)  
- [Running Locally](#running-locally)  
- [Project Structure](#project-structure)  
- [Navigation](#navigation)  
- [Deployment](#deployment)  
- [License](#license)  

---

## 📝 Project Overview

### 1. ✅ Todo List  
A dynamic app to **add**, **complete**, and **delete** daily tasks with live backend updates.

### 2. 📝 NoteSync  
Displays personal information like **name, skills, and hobbies** using a simple note layout.

### 3. 🤖 AI Chatbot  
Integrates with **Google Gemini Pro API** to provide real-time AI conversations.

### 4. 📄 Documents *(Optional)*  
Planned module for document handling — UI prepared but backend pending.

---

## 🧩 Tech Stack

- **Next.js 14 (App Router)**  
- **React** (Functional Components & Hooks)  
- **TypeScript**  
- **CSS / Inline Styling**  
- **Google Gemini AI (chatbot)**  
- **Vercel** (for hosting and deployment)

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/Shifana-Ranth/Fullstack-Intern.git
cd Fullstack-Intern
npm install
## Running Locally

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to:

```
http://localhost:3000
```

---

## Project Structure

```
.vscode/
app/
├── api/
│   ├── chat/
│   │   └── route.ts
│   ├── test-notes/
│   │   └── route.ts
│   └── todos/
│       └── route.ts
├── chat/
│   └── page.tsx
├── components/
│   └── ChatBot.tsx
├── test-notes/
│   └── page.tsx
└── todos/
    ├── page.tsx
---
```
---

## Navigation

The home page (`/`) lists all projects with icons and buttons for navigation. Clicking a project button routes to the respective project page:

| Project    | Route      | 
|------------|------------|
| Todo List  | `/todos`   | 
| NoteSync   | `/test-notes`   | 
| AI Chatbot | `/chat`    | 

---

## Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Import the repo to [Vercel](https://vercel.com/).
3. Set up any environment variables needed (for AI keys, if any).
4. Deploy and get the live URL.

### Netlify

1. Push code to GitHub.
2. Connect your repo in [Netlify](https://netlify.com).
3. Set build command: `npm run build`
4. Set publish directory: `out` (if using static export) or default `.next`
5. Deploy your site.

---

## License

 © 2025 [Shifana Ranth](https://github.com/Shifana-Ranth)
