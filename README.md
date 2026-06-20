# CogniCall

An AI-powered video calling platform that enables intelligent real-time conversations, meeting management, and AI-assisted communication workflows.

## Overview

CogniCall is a modern video communication application built with Next.js and TypeScript. The platform combines real-time video interactions with AI capabilities to create smarter and more productive virtual meetings.

The application leverages a scalable architecture using modern web technologies, cloud-hosted databases, and AI integrations to provide a seamless communication experience.

---

## Features

### Video Communication
- Real-time video calling
- High-quality audio and video streaming
- Meeting management interface
- Interactive call experience

### AI-Powered Capabilities
- AI-assisted conversations
- Intelligent meeting workflows
- OpenAI integration
- Smart content generation and processing

### Authentication & User Management
- Secure user authentication
- Session management
- Protected routes
- User-specific meeting access

### Modern Developer Experience
- End-to-end type safety
- Server-side rendering
- Component-driven architecture
- Scalable backend APIs

---

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- ShadCN UI

### Backend
- Next.js Server Actions
- tRPC
- React Query

### Database
- PostgreSQL
- Neon Database
- Drizzle ORM

### AI & Automation
- OpenAI API
- Inngest Workflows

### Development Tools
- ESLint
- TypeScript
- PostCSS

---

## Project Structure

```bash
Cognicall/
│
├── app/                # Next.js App Router
├── components/         # Reusable UI components
├── db/                 # Database schemas and configuration
├── hooks/              # Custom React hooks
├── inngest/            # Background jobs and workflows
├── lib/                # Utility functions
├── modules/            # Feature modules
├── public/             # Static assets
├── trpc/               # API routes and procedures
│
├── drizzle.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/imam-haris/Cognicall.git

cd Cognicall
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env.local` file:

```env
# Database
DATABASE_URL=""

# Auth (Better Auth)
BETTER_AUTH_SECRET=""
BETTER_AUTH_URL=""

# OAuth Providers
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# App Config
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Video (Stream)
NEXT_PUBLIC_STREAM_VIDEO_API_KEY=""

# AI
OPENAI_API_KEY=""

# Payments / Infra
POLAR_ACCESS_TOKEN=""

# Background Jobs
INNGEST_EVENT_KEY=""

Add the corresponding credentials for your setup.

---

## Database Setup

Run database migrations:

```bash
npx drizzle-kit push
```

or

```bash
npx drizzle-kit migrate
```

---

## Running Locally

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Available Scripts

```bash
npm run dev        # Start development server

npm run build      # Production build

npm run start      # Start production server

npm run lint       # Run ESLint
```

---

## Architecture

```text
Frontend (Next.js)
        │
        ▼
      tRPC
        │
        ▼
   Application Layer
        │
 ┌──────┴──────┐
 ▼             ▼
Database      AI Services
(Neon +       (OpenAI)
 Drizzle)
```

---

## Future Improvements

- Meeting transcription
- AI meeting summaries
- Smart scheduling
- Voice agents
- Real-time analytics
- Multi-user collaboration
- AI-generated action items

---

## Contributing

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

---

## Author

Developed by Haris Imam

GitHub:
https://github.com/imam-haris

---

## Acknowledgements

- Next.js
- React
- tRPC
- Drizzle ORM
- Neon Database
- OpenAI
- ShadCN UI
- Tailwind CSS
