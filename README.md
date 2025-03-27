# Videfly Frontend Intern Quest

This project is developed for the Videfly Frontend Intern Quest number 3, which is Mobile Product Showcase. The goal of this quest is to make a mobile-friendly product page with some functionalities showed in the [design prototype](https://www.figma.com/design/DPvxQXFgxLUtYkamgh4veA/Videfly-Front-End-Quest?node-id=1-2108&p=f&t=H0agfnUo3YEmK2M0-0)

## Tech Stack
- Runtime: Node v21.7.3
- Package Manager: pnpm
- Framework: React with Vite
- Language: TypeScript
- Styling: Tailwind CSS
- State Management: Zustand
- UI Components: Shadcn UI
- Notifications: React Hot Toast

Additionally, the project uses [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) to automatically sort Tailwind CSS classes for consistency and readability.

## Image Optimization
All images are stored in **WEBP** format to optimize resource loading and improve performance.

## Project Structure
```

├── .gitignore
├── .prettierrc
├── README.md
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public/
├── src/
│   ├── components/
│   │   ├── composite/
│   │   ├── icons/
│   │   └── ui/
│   ├── hooks/
│   ├── index.css
│   ├── layouts/
│   ├── lib/
│   │   ├── static/
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages/
│   ├── routes/
│   ├── store/
│   ├── types/
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Installation
Clone this repository in your local machine
```sh
git clone https://github.com/LeonardTarigan/videfly-fe-intern-quest.git
```
Navigate to the directory
```sh
cd ./videfly-fe-intern-quest
```
Install the dependencies
```sh
pnpm i
```
Run the dev server
```sh
pnpm dev
```
