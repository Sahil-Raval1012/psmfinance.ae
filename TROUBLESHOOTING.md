# Troubleshooting Guide

## Port 5000 Already in Use Error

This is the most common issue when running the project locally.

### Quick Fix:

**Option 1: Kill the process using port 5000**
```bash
# On Mac/Linux:
lsof -ti:5000 | xargs kill -9

# On Windows:
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F
```

**Option 2: Use a different port**
```bash
# Run on port 3000 instead
PORT=3000 npm run dev

# Or port 8000
PORT=8000 npm run dev
```

**Option 3: Check what's using port 5000**
```bash
# See what's running on port 5000
lsof -i :5000

# Common culprits: AirPlay Receiver, other dev servers
```

### For Your Current Situation:

Run these commands in order:

```bash
# 1. Kill any process using port 5000
lsof -ti:5000 | xargs kill -9

# 2. Start the development server
npm run dev
```

If port 5000 is still blocked (often by macOS AirPlay), use an alternative port:

```bash
PORT=3000 npm run dev
```

Then open: `http://localhost:3000`

## Security Vulnerabilities Warning

The npm audit warnings you see are **normal for development** and don't affect your website functionality:

- These are development-only vulnerabilities
- They don't impact your production website
- You can safely ignore them for now
- Your website will work perfectly despite these warnings

## Alternative Port Configuration

If you prefer to permanently use a different port, you can modify the server configuration:

1. Open `server/index.ts`
2. Change the port from 5000 to your preferred port
3. Or set the PORT environment variable

The website will work on any port (3000, 8000, 3001, etc.).