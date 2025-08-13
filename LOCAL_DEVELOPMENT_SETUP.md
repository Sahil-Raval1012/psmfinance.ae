# Local Development Setup for VS Code

This guide will help you run the PSM Financial Broker website on your local machine using VS Code.

## Prerequisites

Make sure you have these installed:
- **Node.js** (version 16 or higher): https://nodejs.org/
- **Git**: https://git-scm.com/
- **VS Code**: https://code.visualstudio.com/

## Quick Setup Commands

1. **Download the project** (if not already done):
```bash
git clone [your-repo-url]
cd psm-financial-broker
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables** (create `.env` file):
```bash
# Create .env file in the root directory
touch .env
```

Add these lines to your `.env` file:
```env
# EmailJS Configuration (optional - for contact form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_REPLY_TEMPLATE_ID=your_reply_template_id

# Firebase/Rowy CMS Configuration (optional - for content management)
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. **Start development server**:
```bash
npm run dev
```

5. **Open in browser**:
   - Go to: `http://localhost:5000`
   - Your website will be running locally!

## VS Code Recommended Extensions

Install these extensions for the best development experience:

1. **ES7+ React/Redux/React-Native snippets**
2. **TypeScript Importer**  
3. **Tailwind CSS IntelliSense**
4. **Auto Rename Tag**
5. **Prettier - Code formatter**
6. **GitLens**

## Available Scripts

```bash
# Development server (recommended)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Database schema deployment (if using PostgreSQL)
npm run db:push
```

## Project Structure in VS Code

```
psm-financial-broker/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utility functions
│   │   └── App.tsx         # Main app component
│   └── index.html
├── server/                 # Backend Express server
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   └── storage.ts          # Data storage interface
├── shared/                 # Shared types and schemas
├── package.json            # Dependencies and scripts
└── README.md
```

## Development Tips

### Hot Reload
- Changes to React components update automatically
- Server changes require restart (Ctrl+C, then `npm run dev`)

### Debugging
- Use VS Code's built-in debugger
- Browser DevTools work normally
- Console logs appear in terminal and browser

### Styling
- Tailwind CSS classes have IntelliSense
- Custom CSS in `client/src/index.css`

### TypeScript
- Full type checking enabled
- Hover over variables to see types
- Auto-imports work perfectly

## Troubleshooting

**Port already in use:**
```bash
# Kill process using port 5000
npx kill-port 5000
npm run dev
```

**Dependencies issues:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
# Check all TypeScript errors
npx tsc --noEmit
```

## Important Notes

1. **Website works without environment variables** - All features have fallbacks
2. **EmailJS setup is optional** - Contact form shows appropriate messages
3. **CMS setup is optional** - Website uses beautiful default content
4. **Database is optional** - Currently uses in-memory storage
5. **Production ready** - Run `npm run build` to create production build

## Next Steps After Setup

1. **Customize content** - Edit components in `client/src/components/`
2. **Add your branding** - Update colors, fonts, and images
3. **Set up EmailJS** - Follow `EMAILJS_SETUP.md` for contact form
4. **Set up Rowy CMS** - Follow `ROWY_CMS_SETUP.md` for content management
5. **Deploy** - Use services like Vercel, Netlify, or your preferred hosting

Your development environment is now ready! The website will run beautifully with all animations, styling, and functionality working perfectly.