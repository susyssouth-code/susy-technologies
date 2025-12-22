# Hospital Management System Website

A modern, responsive website for Susy Technologies - a healthcare technology solutions provider. Built with Next.js 14 (App Router), React 18, and SCSS.

## Tech Stack

- **Framework**: Next.js 14.2.28 (App Router)
- **UI Library**: React 18
- **Styling**: Sass/SCSS (CSS Modules)
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Hospital Management System Website"
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── public/
│   └── images/
│       └── logo.png
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── page.module.scss # Page styles
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Navbar.module.scss
│   │   ├── Hero.tsx
│   │   ├── Hero.module.scss
│   │   ├── Services.tsx
│   │   ├── Services.module.scss
│   │   ├── Features.tsx
│   │   ├── Features.module.scss
│   │   ├── About.tsx
│   │   ├── About.module.scss
│   │   ├── Testimonials.tsx
│   │   ├── Testimonials.module.scss
│   │   ├── CTA.tsx
│   │   ├── CTA.module.scss
│   │   ├── Contact.tsx
│   │   ├── Contact.module.scss
│   │   ├── Footer.tsx
│   │   └── Footer.module.scss
│   └── styles/
│       └── globals.scss     # Global styles and variables
├── next.config.js
├── package.json
└── tsconfig.json
```

## Features

- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Modern UI**: Clean, professional healthcare-focused design
- **CSS Modules**: Scoped styling with SCSS modules
- **Image Optimization**: Next.js Image component for optimized images
- **Smooth Scrolling**: Section-based navigation with smooth scroll
- **Form Handling**: Contact form with validation

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Sections

1. **Navbar** - Fixed navigation with mobile responsive menu
2. **Hero** - Main landing section with CTA
3. **Services** - Healthcare technology solutions offered
4. **Features** - Why choose Susy Technologies
5. **About** - Company information, mission & vision
6. **Testimonials** - Client testimonials
7. **CTA** - Call to action section
8. **Contact** - Contact form and information
9. **Footer** - Company links and contact details

## License

Private - All rights reserved
