# ChessNation.us Website

## Overview
ChessNation is a training-first chess institution website focused on developing tomorrow's chess talents through world-class coaching, competitive exposure, and cutting-edge chess technology.

**Mission:** Training and building tomorrow's chess talents by combining world-class coaching, competitive exposure, and cutting-edge chess technology.

**Tagline:** Master the Royal Game – Conquer the World

## Tech Stack
- React 18 with TypeScript
- Vite 5 build tool
- Tailwind CSS for styling
- Shadcn UI components
- React Router v6 for routing
- TanStack Query for data fetching
- React Hook Form + Zod for form validation

## Project Structure

```
src/
├── assets/          # Static assets (images)
├── components/      # Reusable components
│   ├── ui/          # Shadcn UI components
│   ├── Navbar.tsx   # Main navigation
│   ├── Footer.tsx   # Site footer
│   ├── HeroSection.tsx  # Home page hero
│   └── ...
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Page components
│   ├── Index.tsx    # Home page
│   ├── Training.tsx # Training programs
│   ├── Tournaments.tsx # Tournament info
│   ├── Technology.tsx  # ChessEvents.AI
│   ├── Franchise.tsx   # Franchise opportunities
│   ├── Initiatives.tsx # Community initiatives
│   ├── About.tsx    # About ChessNation
│   ├── Contact.tsx  # Contact form
│   └── NotFound.tsx # 404 page
├── App.tsx          # Main app with routes
└── main.tsx         # Entry point
```

## Pages

1. **Home** - Hero with mission, three core pillars (Training, Technology, Ecosystem), section teasers
2. **Training** - Training philosophy, structured development, tournament preparation, inquiry CTA
3. **Tournaments** - Tournament categories (Scholastic, Open/Rated, Championships), upcoming events
4. **Technology** - ChessEvents.AI platform for players and organizers
5. **Franchise** - Training, Tournament, and Hybrid franchise models
6. **Initiatives** - Women & Girls chess, Regional championships, Community impact
7. **About** - Mission, vision, core pillars, leadership (Dr. Antony Joseph)
8. **Contact** - Contact form with email, phone, address, social links

## Contact Information
- Email: chessnation.us@gmail.com
- Phone: (770) 858-5756
- Address: 11340 Lakefield Dr, STE#200, Johns Creek, GA 30097
- YouTube: https://youtube.com/@chessnation_us
- Facebook: https://www.facebook.com/profile.php?id=61570828734641

## Development

### Running Locally
```bash
npm run dev
```
The development server runs on port 5000.

### Building for Production
```bash
npm run build
```
Output goes to the `dist/` folder.

### Deployment
Static deployment configured:
- Build command: `npm run build`
- Public directory: `dist`

## Recent Changes
- January 2026: Complete website modernization
  - Updated to 9-page architecture (added Gallery page)
  - New mission and positioning focused on training
  - Added ChessEvents.AI technology section
  - Added Franchise and Initiatives pages
  - Added Gallery page with 6 AI-generated facility images
  - Updated contact information
  - New navigation structure
  - Hero section with golden "Royal" text and enlarged "Conquer the World"
  - Glass-panel styling (glass-panel-strong) on all page headers for improved readability
  - Background images visible at 50% opacity with gradient overlay
  - EmailJS integration for contact form (requires VITE_EMAILJS_* env vars)
  - Login page with coming soon placeholder
