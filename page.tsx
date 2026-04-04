import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer — Marudhara Darpan',
  description: 'Marudhara Darpan App का Disclaimer',
};

export default function Disclaimer() {
  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '24px 20px', fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif", color: '#2C2C2A', lineHeight: 1.8 }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28, paddingBottom: 16, borderBottom: '2px solid #EF9F27' }}>
        <img src="/logo.png" alt="Marudhara Darpan" style={{ width: 48, height: 48, borderRadius: 10 }} />
        <div>
          <div style={{ fontSize: 20, fontWeight: 700 }}>Marudhara Darpan</div>
          <div style={{ fontSize: 13, color: '#5F5E5A' }}>मरूधरा दर्पण — राजस्थान करेंट अफेयर्स</div>
        </div>
      </div>

      <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Disclaimer</h1>
      <p style={{ fontSize: 13, color: '#88877F', marginBottom: 28 }}>Last updated: April 2026</p>

      {[
        { title: '1. सामग्री की सत्यता', content: 'इस ऐप में प्रकाशित सभी खबरें और जानकारी विभिन्न समाचार स्रोतों से संकलित की गई हैं। हम सटीकता सुनिश्चित करने का प्रयास करते हैं, परंतु किसी भी जानकारी की पूर्ण सत्यता की गारंटी नहीं दी जा सकती। परीक्षा से संबंधित किसी भी जानकारी (तिथि, पद संख्या, पात्रता) को RPSC / RSMSSB की आधिकारिक वेबसाइट से अवश्य सत्यापित करें।' },
        { title: '2. शैक्षिक उद्देश्य', content: 'यह ऐप केवल सरकारी परीक्षा की तैयारी के शैक्षिक उद्देश्य से बनाया गया है। इसका किसी भी सरकारी संस्था (RPSC, RSMSSB, राजस्थान सरकार) से कोई आधिकारिक संबंध नहीं है।' },
        { title: '3. No Affiliation', content: 'Marudhara Darpan is an independent educational app. It is not affiliated with, endorsed by, or associated with RPSC, RSMSSB, or the Government of Rajasthan in any way.' },
        { title: '4. PDF सामग्री', content: 'सभी PDF फाइलें Google Drive पर host की गई हैं। Google Drive की सेवा उपलब्धता के लिए हम जिम्मेदार नहीं हैं।' },
        { title: '5. बाहरी लिंक', content: 'Quiz के लिए बाहरी ऐप का link दिया जाता है। उस ऐप की सामग्री और सेवाओं के लिए उनकी अपनी terms लागू होती हैं।' },
      ].map((s, i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: '#2C2C2A', marginBottom: 6, paddingBottom: 4, borderBottom: '1px solid #E4E2DA' }}>{s.title}</h2>
          <p style={{ fontSize: 14, color: '#5F5E5A' }}>{s.content}</p>
        </div>
      ))}

      <div style={{ marginTop: 40, paddingTop: 16, borderTop: '1px solid #E4E2DA', textAlign: 'center', fontSize: 12, color: '#88877F' }}>
        <a href="/" style={{ color: '#EF9F27', textDecoration: 'none', fontWeight: 600 }}>← App पर वापस जाएं</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="/privacy" style={{ color: '#5F5E5A', textDecoration: 'none' }}>Privacy Policy</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="/contact" style={{ color: '#5F5E5A', textDecoration: 'none' }}>Contact Us</a>
        <div style={{ marginTop: 8 }}>© 2026 Marudhara Darpan · All rights reserved</div>
      </div>
    </div>
  );
}
