# Deployment Guide

This React application can be deployed to various platforms. Here are the configurations and instructions for each:

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)
- **Configuration**: `vercel.json` is already set up
- **Steps**:
  1. Push your code to GitHub
  2. Connect your repository to Vercel
  3. Vercel will automatically detect the React app and deploy

### 2. Netlify
- **Configuration**: `netlify.toml` is already set up
- **Steps**:
  1. Push your code to GitHub
  2. Connect your repository to Netlify
  3. Netlify will automatically build and deploy

### 3. GitHub Pages
- **Configuration**: `.github/workflows/deploy.yml` is already set up
- **Steps**:
  1. Push your code to GitHub
  2. Go to repository Settings > Pages
  3. Select "GitHub Actions" as source
  4. The workflow will automatically deploy on every push to main

## 📦 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Production build with type checking and linting
npm run build:production

# Preview production build locally
npm run deploy:preview
```

## 🔧 Manual Deployment

If you need to deploy manually:

1. **Build the project**:
   ```bash
   npm run build:production
   ```

2. **Upload the `dist` folder** to your hosting provider

3. **Configure your server** to serve `index.html` for all routes (SPA routing)

## 🌐 Environment Variables

If you need environment variables, create a `.env` file:
```
VITE_API_URL=your_api_url
VITE_APP_NAME=your_app_name
```

## 📝 Notes

- The app uses Vite for building
- All configurations assume the build output is in the `dist` folder
- SPA routing is configured for all platforms
- Node.js 18+ is recommended for building
