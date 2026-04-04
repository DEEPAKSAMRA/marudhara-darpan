# 🚀 Marudhara Darpan — Vercel Deploy Guide
# कुल समय: लगभग 15 मिनट

---

## Step 1: Google Sheets API Key बनाएं (5 मिनट)

1. console.cloud.google.com खोलें (Google account से login करें)
2. "Select a project" → New Project → नाम: "Marudhara Darpan" → Create
3. APIs & Services → Library → Search: "Google Sheets API" → Enable
4. APIs & Services → Credentials → + Create Credentials → API Key
5. API Key copy करें → notepad में save करें

---

## Step 2: Google Sheet को Public करें (1 मिनट)

1. आपकी Google Sheet खोलें
2. Share button → "Anyone with the link" → Viewer → Done
3. अब App Sheet का data पढ़ सकेगा

आपकी Sheet ID पहले से set है:
  1YHBlN0TwI9Xg4X7hOPhvWKCIotiw_RfqswzWmm5yS3U

---

## Step 3: GitHub पर Upload करें (5 मिनट)

1. github.com → New Repository → नाम: marudhara-darpan → Create
2. "uploading an existing file" → इस ZIP की सभी files drag & drop
3. Commit changes

---

## Step 4: Vercel पर Deploy करें (5 मिनट)

1. vercel.com → Sign up with GitHub
2. New Project → Import → marudhara-darpan repo
3. Environment Variables में सिर्फ यह 1 variable add करें:

   Name               Value
   ─────────────────  ─────────────────────────────
   GOOGLE_API_KEY  →  [Step 1 में copy की API Key]

   (Sheet ID और Quiz URL code में पहले से set हैं)

4. Deploy → 2-3 मिनट में live!

---

## Step 5: Custom Domain (Optional)

Vercel → Settings → Domains → अपना domain add करें

---

## Daily Workflow

  रोज सुबह:
  1. Google Sheet खोलें
  2. 🔔 Alerts tab → exam dates update करें (Active TRUE/FALSE)
  3. 📅 Daily tab → आज की खबरें type करें
  4. App 1 घंटे में automatically refresh होगा

  तुरंत refresh: Vercel → Deployments → Redeploy

---

## Important Notes

  Sheet ID कहाँ है?      → Code में पहले से set है (lib/sheets.ts)
  Quiz App link?          → Code में पहले से set है (app/page.tsx)
  API Key कहाँ डालें?    → Vercel Environment Variables में
  Admin Panel कैसे?       → App में Logo पर 5 बार tap करें
  Data refresh?           → हर 1 घंटे में automatically

---

## Troubleshooting

  Sheet data नहीं आ रहा?
  - Sheet public है? (Anyone with link → Viewer) ✓
  - Vercel में GOOGLE_API_KEY सही है? ✓
  - Tab names exact हैं? जैसे: 📅 Daily, 🔔 Alerts ✓

  Local test:
  npm install
  cp .env.local.example .env.local
  # .env.local में GOOGLE_API_KEY भरें (बाकी पहले से है)
  npm run dev
  # Browser: http://localhost:3000
