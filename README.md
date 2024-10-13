# SentiMu Analytics Frontend

This repository contains the frontend application for the SentiMu Analytics Dashboard platform, built using Next.js and React. The application provides a user-friendly interface for visualizing and interacting with customer review data and sentiment analysis results.

## 🚀 Features

- Dashboard with sentiment analysis overview
- Recent Reviews display
- Word Cloud visualization
- Top Repeating Reviewers analysis
- Time series analysis with pipeline API integration
- Integration status page
- About page
- Responsive design with Tailwind CSS

## 🔧 Tech Stack

- Next.js 14
- React 18
- TypeScript
- TailwindCSS
- React Query (TanStack Query)
- ApexCharts
- Framer Motion
- Axios

## 📋 Prerequisites

Please refer to `package.json` for a complete list of dependencies. Key requirements include:

```json
{
  "dependencies": {
    "next": "14.2.14",
    "react": "^18",
    "react-dom": "^18",
    "@tanstack/react-query": "^5.59.9",
    "apexcharts": "^3.54.0",
    "axios": "^1.7.7"
  }
}
```

## 🏃‍♂️ Running the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sentimu-frontend.git
   cd sentimu-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The application will be available at `http://localhost:3000`

The app will soon be available online for everyone to access.
## 📚 Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run start` - Runs the built app in production mode
- `npm run lint` - Runs the linter

## 🏗️ Project Structure

```
.
├── public/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── analytics/
│   │   ├── integration/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── providers.tsx
│   ├── assets/
│   ├── css/
│   ├── fonts/
│   ├── hooks/
│   ├── libs/
│   ├── types/
│   └── utils/
├── .env
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## 🔄 State Management

- React Query is used for server state management and data fetching
- Local state is managed using React's built-in hooks

## 🔍 Performance Considerations

- Next.js provides automatic code splitting and optimized loading
- React Query implements caching and background updates
- Tailwind CSS for optimized styling

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## 🔮 Future Improvements

- [ ] Integrate to more platform for better sentiment analysis
- [ ] Add more interactive visualizations
- [ ] Improve accessibility
- [ ] Implement error boundaries for better error handling
- [ ] Add end-to-end tests