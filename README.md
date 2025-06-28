# 🎓 EduThought AI

EduThought is an AI-powered web app that lets users understand any topic through the eyes of unique personas — like a Monk, a Farmer, a Child, or a Teacher.

> 🧠 Learn like never before — AI explains based on worldview and tone.

---

## 🚀 Live Demo

🌐 [Click here to try the app (Vercel link)](hhttps://edu-thought-pcj8-git-master-sinchanas-projects-f3f97972.vercel.app)  

---

## ✨ Features

- 🧑‍🏫 Choose a **persona** (Monk, Scientist, Farmer, etc.)
- 💬 Type any **topic** (e.g., Photosynthesis, AI, Democracy)
- 🧠 AI responds with that persona’s tone, style, and perspective
- 💡 Powered by **Groq’s LLaMA 3** model — lightning-fast & free
- 🎨 Clean, responsive UI with TailwindCSS
- 🌐 Full-stack app with Next.js (frontend + backend in one)

---

## 🛠️ Tech Stack

| Layer       | Tech Used              |
|-------------|------------------------|
| Frontend    | React (Next.js 15 App Router) |
| Styling     | Tailwind CSS           |
| Backend API | Next.js API Route      |
| AI Model    | Groq API (LLaMA 3)     |
| Hosting     | Vercel (Frontend + API) |

---

## 🧪 How It Works

1. User enters a **topic** and selects a **persona**
2. Frontend sends data to `/api/generate`
3. API calls Groq with a custom prompt
4. Response is returned and shown on the page

---

## 🗂️ Folder Structure

```
worldview-simulator/
├── src/
│   └── app/
│       ├── page.js                  # Frontend UI
│       └── api/generate/route.js   # Backend API route
├── .env.local                       # Contains GROQ_API_KEY
├── package.json
├── README.md
└── ...
```

---

## Setup Instructions

```bash
git clone https://github.com/ammusin/Edu_Thought.git
cd Edu_Thought
npm install
```

Create a `.env.local` file:

```env
GROQ_API_KEY=your_actual_key_here
```

Then run the app:

```bash
npm run dev
```

---

## 🛡️ Security Note

The Groq API key is stored in `.env.local` and **never committed to GitHub**.

---


## 🏁 Submission Ready!

- ✅ Full-stack (frontend + backend)
- ✅ Responsive & clean
- ✅ Persona-prompting AI
- ✅ No API key exposed
- ✅ GitHub-ready
