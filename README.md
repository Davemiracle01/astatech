# David Kiama — Portfolio Files

## Folder Structure
```
david-kiama/
├── index.html            ← Your main portfolio
├── store.html            ← A.S.T.A.™ TECH Store (likes, comments, visitor tracking)
├── dashboard.html        ← Your private admin dashboard (password protected)
├── README.md             ← This file
└── music/
    ├── config.js         ← ★ EDIT THIS to change songs, top pick, labels
    ├── firebase.js       ← ★ EDIT THIS to connect Firebase + set dashboard password
    ├── casino.js         ← Slot machine engine (don't edit)
    └── player.js         ← YouTube player engine (don't edit)
```

---

## Setting Up Firebase (free, ~5 minutes)

1. Go to https://console.firebase.google.com
2. Click Add project → name it anything → Create
3. Click the </> Web icon → register a web app → give it a name
4. Copy the firebaseConfig object they show you
5. Open music/firebase.js and paste your values
6. In Firebase console → Build → Realtime Database → Create database
   → Choose a region → Start in TEST MODE → Done
7. Deploy. Everything works.

---

## Dashboard
Visit: yourdomain.com/dashboard.html
Password is set in music/firebase.js — change DASHBOARD_PASSWORD to whatever you want.

What you see:
- Total visits, comments, likes, countries
- Every visitor: city, country, IP, browser, device, time
- Likes per track with a visual bar
- All comments with visitor location and time

---

## How To Change Songs
Open music/config.js — full instructions inside.
1. Get the YouTube video ID from any URL
2. Edit/add entries in PLAYLIST
3. Change TOP_PICK_INDEX to crown a track as #1
4. Save. Done.

---

## Deploying to Vercel / GitHub Pages
Upload the entire david-kiama/ folder as-is.
The music/ subfolder must stay next to store.html and dashboard.html.
No build step needed.
