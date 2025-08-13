# Rowy CMS Integration Setup Guide

This guide will help you set up Rowy as a headless CMS for the PSM Financial Broker website, allowing you to manage all website content through a user-friendly spreadsheet interface.

## What is Rowy?

Rowy is a low-code platform that provides a spreadsheet-like interface for managing data in Firebase Firestore. It's perfect for content management because:
- Non-technical users can edit content easily
- Real-time collaboration
- Powerful data validation
- Built-in image uploads
- Version control and history

## 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **Create a project**
3. Name your project: `psm-financial-cms`
4. Disable Google Analytics (not needed for CMS)
5. Click **Create project**

## 2. Set up Firestore Database

1. In your Firebase project, go to **Firestore Database**
2. Click **Create database**
3. Choose **Start in test mode** (we'll secure it later)
4. Select your preferred location (Middle East: `asia-south1`)
5. Click **Done**

## 3. Get Firebase Configuration

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to **Your apps**
3. Click **Web app** icon (`</>`)
4. Register app name: `PSM Financial Website`
5. **Copy the config object** - you'll need these values:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

## 4. Add Firebase Config to Replit

1. In your Replit project, click the **Secrets** tab (lock icon)
2. Add these environment variables:

```
Key: VITE_FIREBASE_API_KEY
Value: your-api-key-here

Key: VITE_FIREBASE_AUTH_DOMAIN
Value: your-project.firebaseapp.com

Key: VITE_FIREBASE_PROJECT_ID
Value: your-project-id

Key: VITE_FIREBASE_STORAGE_BUCKET
Value: your-project.appspot.com

Key: VITE_FIREBASE_MESSAGING_SENDER_ID
Value: 123456789

Key: VITE_FIREBASE_APP_ID
Value: your-app-id
```

## 5. Set up Rowy

1. Go to [Rowy.io](https://www.rowy.io/)
2. Sign up with the **same Google account** used for Firebase
3. Click **Connect to Firebase**
4. Select your Firebase project: `psm-financial-cms`
5. Grant necessary permissions

## 6. Create CMS Collections in Rowy

### Hero Section Content

1. In Rowy, click **Create Table**
2. Table name: `hero`
3. Add these columns:

| Column Name | Type | Description |
|-------------|------|-------------|
| title | Short Text | Main headline |
| subtitle | Long Text | Supporting text |
| primaryButtonText | Short Text | Main CTA button |
| secondaryButtonText | Short Text | Secondary button |
| backgroundImage | Image | Hero background |

4. Create a single row with ID: `main`

### Services Content

1. Create table: `services`
2. Add columns:

| Column Name | Type | Description |
|-------------|------|-------------|
| title | Short Text | Service name |
| description | Long Text | Service description |
| icon | Short Text | Lucide icon name |
| image | Image | Service image |

3. Create rows for each service (Investment Advisory, Wealth Management, etc.)

### About Section Content

1. Create table: `about`
2. Add columns:

| Column Name | Type | Description |
|-------------|------|-------------|
| title | Short Text | Section title |
| subtitle | Long Text | Section subtitle |
| description | Long Text | Main description |
| features | JSON | Array of feature objects |
| backgroundImage | Image | Section background |

3. Create a single row with ID: `main`

For the `features` JSON column, use this structure:
```json
[
  {
    "title": "Exclusive Market Mastery",
    "description": "Privileged access to elite investment opportunities...",
    "icon": "Award"
  },
  {
    "title": "Ultra-High-Net-Worth Focus", 
    "description": "Specialized wealth solutions...",
    "icon": "Users"
  }
]
```

### Contact Information

1. Create table: `contact`
2. Add columns:

| Column Name | Type | Description |
|-------------|------|-------------|
| address | JSON | Array of address lines |
| phone | JSON | Array of phone numbers |
| email | JSON | Array of email addresses |
| hours | JSON | Array of business hours |

3. Create a single row with ID: `info`

Example JSON values:
```json
// address
["Dubai International Financial Centre", "Level 45, Emirates Towers", "Dubai, UAE"]

// phone  
["+971 4 123 4567"]

// email
["info@psmfinancial.ae"]

// hours
["Sunday - Thursday: 9:00 AM - 6:00 PM", "Friday - Saturday: Closed"]
```

### Gallery Images

1. Create table: `gallery`
2. Add columns:

| Column Name | Type | Description |
|-------------|------|-------------|
| url | Image | Gallery image |
| alt | Short Text | Alt text |
| caption | Long Text | Optional caption |

3. Add multiple rows for gallery images

### Company Credentials

1. Create table: `credentials`
2. Add columns:

| Column Name | Type | Description |
|-------------|------|-------------|
| name | Short Text | Credential name |
| description | Long Text | Credential description |
| logo | Image | Credential logo |
| url | URL | Optional credential URL |

3. Add rows for each credential (SCA, DIFC, ISO, etc.)

## 7. Configure Firestore Security Rules

1. In Firebase Console, go to **Firestore Database**
2. Click **Rules** tab
3. Replace with these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to CMS content for website
    match /{collection}/{document} {
      allow read: if true;
      
      // Allow write access for authenticated Rowy users
      allow write: if request.auth != null;
    }
  }
}
```

4. Click **Publish**

## 8. Test the Integration

1. Restart your Replit application
2. Check browser console for "Firebase/Rowy CMS initialized successfully"
3. Edit content in Rowy tables
4. Refresh your website to see changes

## 9. Content Management Workflow

### Editing Content
1. Log into Rowy at [rowy.io](https://www.rowy.io/)
2. Select your Firebase project
3. Navigate to the table you want to edit
4. Click any cell to edit content
5. Changes are saved automatically
6. Website updates in real-time

### Adding New Services
1. Open the `services` table in Rowy
2. Click **Add Row** at the bottom
3. Fill in the service details
4. The service will appear on your website automatically

### Uploading Images
1. Click any image cell in Rowy
2. Upload your image file
3. Rowy automatically optimizes and stores in Firebase Storage
4. The image URL is updated on your website

### Managing Gallery
1. Open the `gallery` table
2. Add/remove rows for gallery images
3. Edit captions and alt text for SEO
4. Reorder images by dragging rows

## 10. Advanced Features

### Content Scheduling
- Use Rowy's date columns to schedule content publication
- Add `publishDate` and `hideDate` columns to any table

### Multi-language Support
- Create separate collections for each language
- Use language codes: `hero_en`, `hero_ar`, etc.

### Content Approval Workflow
- Add `status` column with options: Draft, Review, Published
- Set up Rowy automation rules for approval workflows

## Troubleshooting

### "Configuration incomplete" message
- Verify all Firebase environment variables are set in Replit Secrets
- Ensure no typos in variable names (must start with `VITE_`)
- Restart your Replit application after adding secrets

### Content not updating
- Check browser console for Firebase errors
- Verify Firestore security rules allow read access
- Ensure the document IDs match exactly (case-sensitive)

### Images not loading
- Check Firebase Storage permissions
- Verify image URLs in Firestore documents
- Test image accessibility in incognito mode

### Rowy access issues
- Ensure you're using the same Google account for Firebase and Rowy
- Check that Rowy has permission to access your Firebase project
- Try disconnecting and reconnecting Rowy to Firebase

## Content Best Practices

### SEO Optimization
- Write descriptive alt text for all images
- Keep titles under 60 characters
- Use compelling meta descriptions under 160 characters

### Performance
- Optimize images before uploading (WebP format recommended)
- Keep JSON arrays reasonable in size
- Use descriptive but concise content

### Brand Consistency
- Maintain luxury tone throughout all content
- Use consistent terminology for financial services
- Follow UAE business communication standards

## Security Best Practices

1. **Regular Backups**: Export your Firestore data regularly
2. **Access Control**: Only give Rowy access to trusted team members
3. **Content Review**: Implement approval workflows for public content changes
4. **Monitoring**: Set up Firebase alerts for unusual activity

Your Rowy CMS is now fully integrated! You can manage all website content through the user-friendly Rowy interface while your website automatically updates with the latest content.