# EvenRise Events

A modern, responsive, and elegant event management agency website built with Next.js 15, React 19, Tailwind CSS v4, Framer Motion, and shadcn/ui.

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: Custom components built with accessibility in mind, inspired by [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email API**: [Resend](https://resend.com)

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy the `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```
Update `.env.local` with your Resend API Key:
```env
RESEND_API_KEY=your_resend_api_key_here
```
*(To get an API key, sign up at [resend.com](https://resend.com), verify your sending domain, and generate a key).*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Guide

### Site Constants & Contact Info
Update the business name, WhatsApp number, email, address, and social links in:
`lib/constants.ts`

### Events Catalog
The events shown on the homepage and `/events` catalog are driven by data in:
`data/events.ts`
To add or edit events, modify the `EVENTS` array in this file. You can set `featured: true` to make an event appear on the homepage.

### Images & Placeholders
Currently, the site uses placeholder images from Unsplash (configured in `next.config.ts`).
**Before going live**, you should replace these URLs in `data/events.ts` and the various component files (e.g. `HeroSection.tsx`, `AboutSection.tsx`) with real client photography.

## Deployment (Vercel)
This project is optimized for deployment on Vercel:
1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Import the project in your Vercel dashboard.
3. In the project settings, add the `RESEND_API_KEY` to the **Environment Variables**.
4. Deploy!

---
*Developed as a premium portfolio showcase.*
