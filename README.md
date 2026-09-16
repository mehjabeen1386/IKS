# Prakruti

Prakruti is a multi-page educational website for **Ayurveda Classification as a Rule-Based Expert System**, created as an Indian Knowledge Systems (IKS) course project.

The website introduces the three doshas, guides users through a short constitution assessment, and explains how each result is produced through visible rules rather than a hidden model.

> This is an educational demonstration, not a medical diagnostic tool or a substitute for advice from a qualified Ayurvedic practitioner.

## Features

- Interactive three-step prakruti classifier
- Vata, Pitta, and Kapha overview cards
- Explainable point-based classification logic
- Result guidance with educational recommendations
- Separate methodology and project-information pages
- Responsive design for desktop and mobile screens
- No account or backend required

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Introduction, dosha guide, classifier, and result view |
| `/method` | Explanation of the rule-based expert system |
| `/about` | Project context, IKS background, and limitations |

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

### Create a production build

```bash
npm run build
npm run start
```

## Folder Structure

```text
iks-temp/
├── public/                    # Static public assets
├── src/
│   └── app/
│       ├── about/
│       │   └── page.tsx       # Project and IKS context page
│       ├── method/
│       │   └── page.tsx       # Rule-engine explanation page
│       ├── favicon.ico        # Browser icon
│       ├── globals.css        # Shared visual system and responsive styles
│       ├── layout.tsx         # Root metadata and document layout
│       └── page.tsx           # Home page and interactive classifier
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Scripts and dependencies
├── postcss.config.mjs         # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                 # Project documentation
```

## Classification Logic

Each assessment answer maps to one dosha:

1. The user selects the answer that best describes their usual pattern.
2. The system adds one point to the corresponding dosha.
3. The dosha with the highest score is returned as the primary result.

The logic is intentionally simple and inspectable so learners can understand how a rule-based expert system works.

## Technology

- Next.js
- React
- TypeScript
- Tailwind CSS v4 through PostCSS

## Copyright and License

Copyright © 2026 Mehjabeen. All rights reserved.

This project is provided for academic and educational demonstration purposes. No permission is granted to copy, modify, distribute, sublicense, or use this project commercially without prior written permission from the copyright holder.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
