// ══════════════════════════════════════════════
// lib/sheets.ts — Google Sheets Data Fetcher
// ══════════════════════════════════════════════
// Sheet tabs और उनके ranges यहाँ define हैं
// App Script की जरूरत नहीं — direct Sheets API

const SHEET_ID = process.env.GOOGLE_SHEET_ID ?? '1YHBlN0TwI9Xg4X7hOPhvWKCIotiw_RfqswzWmm5yS3U'; // आपकी Sheet ID
const API_KEY  = process.env.GOOGLE_API_KEY!;
const BASE     = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values`;

async function fetchRange(range: string): Promise<string[][]> {
  const url = `${BASE}/${encodeURIComponent(range)}?key=${API_KEY}`;
  try {
    const res = await fetch(url, { next: { revalidate: 360 } }); // 1 hour cache
    if (!res.ok) return [];
    const json = await res.json();
    return json.values ?? [];
  } catch {
    return [];
  }
}

// ── TYPES ──────────────────────────────────────
export interface NewsItem {
  date: string;
  category: string;
  headline: string;
  bullets: string[];
  source: string;
  active: boolean;
}

export interface AlertItem {
  color: 'red' | 'blue' | 'green';
  icon: string;
  text: string;
  active: boolean;
  type: string;
}

export interface SummaryItem {
  periodLabel: string;
  start: string;
  end: string;
  bullets: string[];
  totalCount: string;
  pdfDriveId: string;
  active: boolean;
}

export interface PdfItem {
  type: string;
  periodLabel: string;
  fileName: string;
  driveId: string;
  pages: string;
  sizeMb: string;
  active: boolean;
}

export interface SheetData {
  alerts: AlertItem[];
  daily: NewsItem[];
  weekly: SummaryItem[];
  days15: SummaryItem[];
  monthly: SummaryItem[];
  pdfs: PdfItem[];
}

// ── PARSERS ────────────────────────────────────

function parseAlerts(rows: string[][]): AlertItem[] {
  return rows.slice(3) // skip title, note, header rows
    .filter(r => r.length >= 4 && r[3]?.toUpperCase() === 'TRUE')
    .map(r => ({
      color: (r[0] as 'red' | 'blue' | 'green') || 'blue',
      icon: r[1] || '📢',
      text: r[2] || '',
      active: true,
      type: r[4] || 'notice',
    }));
}

function parseDaily(rows: string[][]): NewsItem[] {
  return rows.slice(3)
    .filter(r => r.length >= 3 && r[8]?.toUpperCase() !== 'FALSE')
    .map(r => ({
      date: r[0] || '',
      category: r[1] || '',
      headline: r[2] || '',
      bullets: [r[3], r[4], r[5], r[6]].filter(Boolean),
      source: r[7] || '',
      active: r[8]?.toUpperCase() !== 'FALSE',
    }));
}

function parseSummary(rows: string[][]): SummaryItem[] {
  return rows.slice(3)
    .filter(r => r.length >= 4 && r[r.length - 1]?.toUpperCase() !== 'FALSE')
    .map(r => ({
      start: r[0] || '',
      end: r[1] || '',
      periodLabel: r[2] || '',
      // Bullets separated by | character
      bullets: (r[3] || '').split('|').map(b => b.trim()).filter(Boolean),
      totalCount: r[4] || '0',
      pdfDriveId: r[5] || '',
      active: true,
    }));
}

function parsePdfs(rows: string[][]): PdfItem[] {
  return rows.slice(3)
    .filter(r => r.length >= 4 && r[6]?.toUpperCase() !== 'FALSE')
    .map(r => ({
      type: r[0] || '',
      periodLabel: r[1] || '',
      fileName: r[2] || '',
      driveId: r[3] || '',
      pages: r[4] || '',
      sizeMb: r[5] || '',
      active: r[6]?.toUpperCase() !== 'FALSE',
    }));
}

// ── MAIN FETCH ─────────────────────────────────
export async function getAllSheetData(): Promise<SheetData> {
  // Fetch all tabs in parallel
  const [alertRows, dailyRows, weeklyRows, days15Rows, monthlyRows, pdfRows] =
    await Promise.all([
      fetchRange('🔔 Alerts!A1:E20'),
      fetchRange('📅 Daily!A1:I500'),
      fetchRange('📆 Weekly!A1:H50'),
      fetchRange('🗂️ 15Days!A1:G50'),
      fetchRange('📆 Monthly!A1:H50'),
      fetchRange('📥 PDF Links!A1:G30'),
    ]);

  return {
    alerts:  parseAlerts(alertRows),
    daily:   parseDaily(dailyRows),
    weekly:  parseSummary(weeklyRows),
    days15:  parseSummary(days15Rows),
    monthly: parseSummary(monthlyRows),
    pdfs:    parsePdfs(pdfRows),
  };
}
