# Buff’d — Wellington Car Wash Website

A modern, mobile-first web experience for car washing and detailing services in Wellington, New Zealand.

## Overview

This repository contains a Next.js + Tailwind CSS website for a premium car detailing service - Buff'd. The site includes:

- A landing page with service highlights and local trust indicators
- Multi-step booking flow for service selection, vehicle details, suburb, time, and contact info
- Dynamic price estimate based on selected package, vehicle type, doors, and suburb
- Live chat UI with FAQ prompts and quick booking actions
- Testimonial section, gallery placeholders, and donation progress tracker
- Mobile-friendly navbar, dark mode toggle, and responsive design

## Features

- Service cards for Basic, Standard, Deluxe, and Premium+ packages
- Booking workflow with step validation and confirmation summary
- Interactive Live Chat component driven by FAQ data
- Hero section with donation / progress tracker
- Local service focus: Wellington CBD and surrounding suburbs
- Static frontend app built with React and Next.js App Router

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- PostCSS

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 after starting the development server.

## Build

```bash
npm run build
npm run start
```

## Project Structure

- `app/` — Next.js app router pages and global layout
- `components/` — UI components like `Navbar`, `ServiceCard`, `LiveChat`, and `TestimonialCard`
- `data/` — site data for FAQ prompts and pricing logic
- `public/brand/` — brand assets and logo files

## Notes

- The booking flow currently logs booking submissions to the console.
- Gallery sections use placeholder panels for future image assets.
- Pricing and availability are derived from the booking flow logic in `app/page.tsx`.

## License

MIT

