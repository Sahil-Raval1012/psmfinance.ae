# Step-by-Step CMS Setup Walkthrough

Follow these exact steps to set up Rowy CMS for your PSM Financial website.

## Step 1: Create Firebase Project (5 minutes)

1. Open a new browser tab and go to: https://console.firebase.google.com/
2. Click the blue **"Create a project"** button
3. Enter project name: `psm-financial-cms`
4. Click **"Continue"**
5. When asked about Google Analytics, click **"Not now"** (we don't need it)
6. Click **"Create project"**
7. Wait for setup to complete, then click **"Continue"**

## Step 2: Set Up Firestore Database (3 minutes)

1. In your new Firebase project, look for **"Firestore Database"** in the left menu
2. Click **"Create database"**
3. Choose **"Start in test mode"** (we'll secure it later)
4. Select location closest to UAE: **"asia-south1 (Mumbai)"**
5. Click **"Done"**

## Step 3: Get Your Firebase Configuration (2 minutes)

1. Click the **gear icon** (⚙️) next to "Project Overview" in the left menu
2. Select **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **web icon** `</>`
5. App nickname: `PSM Financial Website`
6. Don't check "Firebase Hosting" checkbox
7. Click **"Register app"**

**IMPORTANT:** Copy the config object that appears. It looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "psm-financial-cms.firebaseapp.com",
  projectId: "psm-financial-cms",
  storageBucket: "psm-financial-cms.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

## Step 4: Add Configuration to Replit (3 minutes)

1. In your Replit project, click the **lock icon** (🔒) in the left sidebar labeled "Secrets"
2. Add each of these 6 secrets by clicking **"New secret"**:

**Secret 1:**
- Name: `VITE_FIREBASE_API_KEY`
- Value: [Copy the apiKey value from your config]

**Secret 2:**
- Name: `VITE_FIREBASE_AUTH_DOMAIN` 
- Value: [Copy the authDomain value from your config]

**Secret 3:**
- Name: `VITE_FIREBASE_PROJECT_ID`
- Value: [Copy the projectId value from your config]

**Secret 4:**
- Name: `VITE_FIREBASE_STORAGE_BUCKET`
- Value: [Copy the storageBucket value from your config]

**Secret 5:**
- Name: `VITE_FIREBASE_MESSAGING_SENDER_ID`
- Value: [Copy the messagingSenderId value from your config]

**Secret 6:**
- Name: `VITE_FIREBASE_APP_ID`
- Value: [Copy the appId value from your config]

## Step 5: Test Firebase Connection (1 minute)

1. After adding all 6 secrets, restart your Replit app (it should restart automatically)
2. Look at your website - the orange indicator in the top-right should change to green
3. Check the console - you should see "Firebase/Rowy CMS initialized successfully"

## Step 6: Set Up Rowy Account (5 minutes)

1. Open a new tab and go to: https://www.rowy.io/
2. Click **"Get started for free"**
3. **IMPORTANT:** Sign up with the SAME Google account you used for Firebase
4. After signing up, click **"Connect to Firebase"**
5. Select your project: `psm-financial-cms`
6. Grant all requested permissions
7. You should now see your Firebase project connected in Rowy

## Step 7: Create Content Tables (10 minutes)

### Create Hero Content Table:
1. In Rowy, click **"Create Table"**
2. Collection ID: `hero`
3. Table name: `Hero Content`
4. Click **"Create"**

Add these columns by clicking **"Add Column"**:
- `title` (Short Text)
- `subtitle` (Long Text) 
- `primaryButtonText` (Short Text)
- `secondaryButtonText` (Short Text)
- `backgroundImage` (Image)

### Add Hero Content:
1. Click **"Add Row"**
2. Set Document ID: `main`
3. Fill in your content:
   - Title: "Elevate Your Financial Legacy"
   - Subtitle: "Exclusive wealth management for UAE's most distinguished families..."
   - Primary Button: "Schedule Consultation"
   - Secondary Button: "Our Services" 
   - Background Image: Upload your preferred image

### Create Services Table:
1. Click **"Create Table"** again
2. Collection ID: `services`
3. Add columns:
   - `title` (Short Text)
   - `description` (Long Text)
   - `icon` (Short Text)
   - `image` (Image)

Add 3 rows for your services (Investment Advisory, Wealth Management, Corporate Finance)

## Step 8: Secure Your Database (2 minutes)

1. Back in Firebase Console, go to **"Firestore Database"**
2. Click **"Rules"** tab
3. Replace the rules with this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{collection}/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

4. Click **"Publish"**

## Step 9: Test Everything (2 minutes)

1. Go back to your website
2. You should see the green CMS indicator
3. Edit content in Rowy and refresh your website to see changes
4. Your website is now fully CMS-powered!

---

**Need Help?**
- Green indicator = CMS working ✅
- Orange indicator = Using fallback data (check secrets)
- Console errors = Check Firebase configuration

**Next Steps:**
- Create more content tables (about, contact, gallery)
- Upload custom images through Rowy
- Invite team members to edit content