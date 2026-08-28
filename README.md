# LifeOS

**Your Life. One Command Center.**

LifeOS is an AI-powered personal operating system that brings tasks, projects, goals, calendar, habits, focus sessions, notes, and finances into a single connected application — controlled through both traditional UI and an agentic AI assistant.

## Overview

Most productivity apps operate in isolation: a calendar doesn't know what a task needs, a task doesn't know what goal it serves. LifeOS connects this information into one data model, so the AI assistant can reason across all of it and, with permission, act on the user's behalf.

**Core relationship:**

```
GOAL → PROJECT → TASK → CALENDAR / FOCUS → ACTIVITY → INSIGHTS → AI ASSISTANT
```

## Features

- **Tasks & Projects** — full CRUD, priorities, statuses, subtasks, recurrence
- **Goals** — long-term outcomes linked to projects, tasks, and habits
- **Calendar** — day/week/month/agenda views, task deadlines, event scheduling
- **Habits** — streaks, consistency tracking, GitHub-style heatmap
- **Focus** — Pomodoro/custom timer sessions linked to tasks, projects, or goals
- **Notes** — lightweight Markdown-based knowledge system
- **Finance** — transactions, categories, budgets with threshold warnings
- **AI Assistant** — general Q&A + LifeOS-aware context queries
- **AI Agent** — structured tool-calling with permission tiers (read → create → modify → destructive), confirmations, and an audit trail
- **Insights** — productivity, habit, project, and finance analytics

## Tech Stack

**Frontend:** Next.js · React · TypeScript · Tailwind CSS · shadcn/ui · Lucide Icons · Recharts
**Backend:** Next.js API layer (initial) · Python/FastAPI (advanced AI services)
**Database:** Supabase (PostgreSQL) with Row Level Security
**Auth:** Supabase Auth
**Storage:** Supabase Storage
**AI:** Gemini / Groq via an AI gateway/provider abstraction
**Deployment:** Vercel + Supabase
**CI/CD:** GitHub Actions

## Project Structure

```
lifeos/
├── app/
├── components/
├── features/
│   ├── tasks/
│   ├── projects/
│   ├── goals/
│   ├── habits/
│   ├── calendar/
│   ├── focus/
│   ├── finance/
│   └── ai/
├── lib/
├── hooks/
├── services/
├── types/
├── tests/
├── docs/
├── README.md
├── CONTRIBUTING.md
├── .env.example
└── LICENSE
```

## Roadmap

| Version | Focus |
|---|---|
| **V0.1** | Authentication, database security (RLS), responsive layout, deployment |
| **V1.0** | Core productivity system — tasks, projects, main dashboard |
| **V1.5** | Calendar, focus sessions, habits |
| **V2.0** | AI assistant — safe tool calling, confirmations, audit logs, undo support |
| **V2.5** | Goals, analytics, intelligent planning, basic automation |
| **V3.0** | RAG, document understanding, Google Calendar integration, advanced AI |

## Security

- Supabase Row Level Security on all user-owned tables
- Server-side authorization on every API endpoint
- AI never executes database operations directly — all AI actions pass through schema validation → authorization → permission check → business logic
- Full `ai_actions` audit trail for every AI-initiated change

## Setup

```bash
git clone https://github.com/<your-username>/LifeOS.git
cd LifeOS
npm install
cp .env.example .env
npm run dev
```

## License

MIT — see [LICENSE](./LICENSE).