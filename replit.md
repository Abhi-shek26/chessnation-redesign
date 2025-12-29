# ChessNation - Online Chess Tournament Platform

## Overview
ChessNation is a modern chess tournament platform built with React, TypeScript, and Vite. The application allows users to compete in online chess tournaments, view results, and connect with the chess community.

## Project Structure
```
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # Shadcn UI components
│   │   └── *.tsx      # Feature components (Hero, About, etc.)
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # Route pages
│   ├── assets/        # Static assets
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── public/            # Public assets
├── vite.config.ts     # Vite configuration
└── package.json       # Dependencies
```

## Tech Stack
- **Frontend**: React 18, TypeScript
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS, Shadcn UI
- **State Management**: TanStack React Query
- **Routing**: React Router DOM v6
- **Forms**: React Hook Form with Zod validation

## Running the Project
The development server runs on port 5000:
```bash
npm run dev
```

## Deployment
Static deployment with built assets in the `dist` folder:
```bash
npm run build
```

## Recent Changes
- December 29, 2025: Migrated from Lovable to Replit environment
  - Updated Vite config to use port 5000
  - Configured allowedHosts for Replit proxy
  - Set up static deployment configuration

## User Preferences
- No specific preferences documented yet
