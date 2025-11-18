# Irara Express

Irara Express is a modern, responsive web application for a delivery and logistics service based in Algeria. Built with Next.js, it provides a comprehensive platform for customers, drivers, and businesses to manage deliveries efficiently.

## Vision

Irara Express is transforming delivery services in Algeria. We connect you with verified, professional drivers who deliver your parcels quickly and safely—all tracked in real-time on your phone. We believe everyone deserves reliable, professional delivery service. By combining cutting-edge technology with local expertise, we're making express delivery accessible, affordable, and trustworthy for all Algerians.

## Features

- **Real-Time GPS Tracking**: Live location updates and ETA calculations for all deliveries
- **Secure Cash-on-Delivery**: Safe payment handling with automated settlement workflows
- **Verified Driver Network**: Background-checked independent drivers
- **AI-Powered Matching**: Intelligent proximity-based driver assignment for faster delivery
- **Same-Day Delivery**: Urgent deliveries completed within hours or scheduled for later
- **Corporate API Solutions**: Enterprise-grade integration for business logistics needs
- **Driver Management Panel**: Tools for drivers to manage their profiles and earnings
- **Multi-language Support**: Designed for Algerian market with Arabic and French support
- **Dark Mode**: User-friendly interface with theme switching
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## Tech Stack

- **Framework**: Next.js 16
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email Integration**: EmailJS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd irara-express
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Project Structure

```
irara-express/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── drivers/        # Drivers page
│   │   ├── how-it-works/   # How it works page
│   │   ├── services/       # Services page
│   │   └── layout.tsx      # Root layout
│   ├── components/         # Reusable React components
│   ├── data/               # Static data and constants
│   ├── hooks/              # Custom React hooks
│   └── routes.ts           # Route definitions
├── public/                 # Static assets
│   ├── images/            # Image files
│   └── videos/            # Video files
└── package.json           # Dependencies and scripts
```

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.
