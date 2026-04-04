'use client';
import { useState, useEffect } from 'react';
import type { SheetData } from '@/lib/sheets';

// Fallback data जब Sheet connect नहीं हो
export const FALLBACK: SheetData = {
  alerts: [
    { color: 'red', icon: '🔔', text: 'पटवारी आवेदन: 30 अप्रैल 2026 · RAS Pre: 20 जुलाई · REET: 15 जून 2026', active: true, type: 'exam' },
    { color: 'blue', icon: '📢', text: 'RPSC: RAS 2026 आवेदन 15 अप्रैल से शुरू होगा', active: true, type: 'notice' },
  ],
  daily: [
    { date: '2026-04-03', category: 'नौकरी', headline: 'RSMSSB पटवारी भर्ती 2026 — 3896 पद अधिसूचित', bullets: ['आवेदन: 30 अप्रैल 2026', 'परीक्षा: अगस्त 2026', 'योग्यता: स्नातक + कंप्यूटर'], source: 'RSMSSB', active: true },
    { date: '2026-04-03', category: 'शिक्षा', headline: 'REET 2026 परीक्षा तिथि घोषित — 15 जून', bullets: ['1.5 लाख शिक्षक पद', 'नया पैटर्न: 150 प्रश्न 3 घंटे', 'हिंदी व अंग्रेजी माध्यम'], source: 'RPSC', active: true },
    { date: '2026-04-03', category: 'ऊर्जा', headline: 'राजस्थान — देश का सबसे बड़ा सौर ऊर्जा उत्पादक', bullets: ['सौर क्षमता 22,000 MW', 'बाड़मेर में 5000 MW नया पार्क', '2030 तक 50,000 MW लक्ष्य'], source: 'Energy Dept', active: true },
  ],
  weekly: [
    { start: '2026-03-28', end: '2026-04-03', periodLabel: '28 मार्च – 3 अप्रैल 2026', bullets: ['इन्वेस्ट समिट 2.5 लाख करोड़', 'RAS Pre 20 जुलाई', 'पटवारी 3896 पद', 'सौर ऊर्जा नंबर 1', 'हाईस्पीड कॉरिडोर मंजूर'], totalCount: '52', pdfDriveId: '', active: true },
  ],
  days15: [
    { start: '2026-03-20', end: '2026-04-03', periodLabel: '20 मार्च – 3 अप्रैल 2026', bullets: ['पटवारी 3896', 'REET 15 जून', 'RAS 20 जुलाई', 'GDP 8.3%', 'सौर 22000 MW', 'जल जीवन 90%'], totalCount: '97', pdfDriveId: '', active: true },
  ],
  monthly: [
    { start: '2026-03-01', end: '2026-03-31', periodLabel: 'मार्च 2026', bullets: ['विधानसभा 3 विधेयक', 'GDP 8.3%', 'RPSC 12000+ पद', 'पर्यटन 85000 करोड़', '10000 डिजिटल स्कूल'], totalCount: '310', pdfDriveId: '', active: true },
  ],
  pdfs: [
    { type: 'Monthly', periodLabel: 'मार्च 2026', fileName: '', driveId: '', pages: '48', sizeMb: '2.1', active: true },
    { type: '6Month', periodLabel: 'अक्टूबर 2025 – मार्च 2026', fileName: '', driveId: '', pages: '280', sizeMb: '12', active: true },
    { type: '12Month', periodLabel: 'अप्रैल 2025 – मार्च 2026', fileName: '', driveId: '', pages: '540', sizeMb: '24', active: true },
  ],
};

export function useSheetData() {
  const [data, setData] = useState<SheetData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/data')
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(() => { setData(FALLBACK); setLoading(false); });
  }, []);

  return { data: data ?? FALLBACK, loading };
}
