# Orphan Prosperity — Web Version

Charity financial management system (Dari/Farsi interface).

## Deploy to Render.com

### Method 1 — Connect GitHub repo (recommended)
1. Push this repo to GitHub (all files must be at the **root** of the repo, not inside a subfolder)
2. Go to https://render.com → New → Web Service
3. Connect your GitHub repository
4. Render auto-detects settings from `render.yaml`:
   - **Build command**: `npm install`
   - **Start command**: `npm start`
5. Click **Create Web Service** — done

### Method 2 — Manual settings on Render
If auto-detect fails, set manually:
| Field | Value |
|-------|-------|
| Environment | Node |
| Root Directory | *(leave blank)* |
| Build Command | `npm install` |
| Start Command | `npm start` |

## Important: GitHub upload structure

Files must be at the **root level** of the repository:
```
your-repo/
├── package.json      ← must be here, NOT inside a subfolder
├── server.js
├── render.yaml
├── .gitignore
├── README.md
└── public/
    └── index.html
```

**Wrong** (causes "Couldn't find package.json" error):
```
your-repo/
└── orphan-prosperity-web/   ← do NOT have a subfolder
    ├── package.json
    └── ...
```

## Local development
```bash
npm install
npm start
# Open http://localhost:3000
```
