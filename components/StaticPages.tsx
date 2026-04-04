'use client';

interface StaticPageProps { open: boolean; onClose: () => void; }

export function PrivacyPage({ open, onClose }: StaticPageProps) {
  return (
    <div className={`static-panel${open ? ' open' : ''}`}>
      <div className="static-header">
        <div className="static-title">🔒 Privacy Policy</div>
        <button className="close-btn" onClick={onClose}>✕ बंद करें</button>
      </div>
      <div className="static-scroll">
        <div className="static-section">
          <div className="static-section-title">डेटा संग्रह</div>
          <div className="static-para">यह ऐप आपकी कोई भी व्यक्तिगत जानकारी (नाम, ईमेल, फोन) संग्रहित नहीं करता। कोई account या login नहीं है।</div>
          <div className="static-para">सभी data (खबरें, PDF लिंक) केवल Google Sheets से पढ़े जाते हैं।</div>
        </div>
        <div className="static-section">
          <div className="static-section-title">Cookies और Tracking</div>
          <div className="static-para">यह ऐप किसी भी cookies या tracking technology का उपयोग नहीं करता। कोई third-party analytics नहीं है।</div>
        </div>
        <div className="static-section">
          <div className="static-section-title">बाहरी लिंक</div>
          <div className="static-para">PDF के लिए Google Drive और Quiz के लिए बाहरी ऐप का link है। इन सेवाओं की अपनी Privacy Policy होती है।</div>
        </div>
        <div className="static-section">
          <div className="static-section-title">नीति में बदलाव</div>
          <div className="static-para">बदलाव होने पर इसी page पर update किया जाएगा। अंतिम अपडेट: अप्रैल 2026।</div>
        </div>
      </div>
    </div>
  );
}

export function ContactPage({ open, onClose }: StaticPageProps) {
  return (
    <div className={`static-panel${open ? ' open' : ''}`}>
      <div className="static-header">
        <div className="static-title">📧 Contact Us</div>
        <button className="close-btn" onClick={onClose}>✕ बंद करें</button>
      </div>
      <div className="static-scroll">
        <div className="static-section">
          <div className="static-section-title">हमसे संपर्क करें</div>
          <div className="static-para">सुझाव, त्रुटि सूचना, या सहयोग के लिए संपर्क करें।</div>
          <div className="contact-row"><span className="contact-icon">📧</span><div><div className="contact-label">Email</div><div className="contact-val">your[at]email.com</div></div></div>
          <div className="contact-row"><span className="contact-icon">📱</span><div><div className="contact-label">WhatsApp</div><div className="contact-val">+91 XXXXX XXXXX</div></div></div>
          <div className="contact-row"><span className="contact-icon">📸</span><div><div className="contact-label">Instagram</div><div className="contact-val">@yourhandle</div></div></div>
          <div className="contact-row"><span className="contact-icon">▶️</span><div><div className="contact-label">YouTube</div><div className="contact-val">Your Channel</div></div></div>
        </div>
        <div className="static-section">
          <div className="static-section-title">Response Time</div>
          <div className="static-para">सामान्यतः 24–48 घंटों में उत्तर मिलता है।</div>
        </div>
      </div>
    </div>
  );
}

export function DisclaimerPage({ open, onClose }: StaticPageProps) {
  return (
    <div className={`static-panel${open ? ' open' : ''}`}>
      <div className="static-header">
        <div className="static-title">⚠️ Disclaimer</div>
        <button className="close-btn" onClick={onClose}>✕ बंद करें</button>
      </div>
      <div className="static-scroll">
        <div className="static-section">
          <div className="static-section-title">सामग्री की सत्यता</div>
          <div className="static-para">खबरें विभिन्न स्रोतों से संकलित हैं। पूर्ण सत्यता की गारंटी नहीं दी जा सकती।</div>
          <div className="static-para">परीक्षा जानकारी (तिथि, पद) को <strong>RPSC/RSMSSB की आधिकारिक वेबसाइट</strong> से सत्यापित करें।</div>
        </div>
        <div className="static-section">
          <div className="static-section-title">शैक्षिक उद्देश्य</div>
          <div className="static-para">यह ऐप केवल सरकारी परीक्षा तैयारी के लिए है। इसका किसी सरकारी संस्था से कोई संबंध नहीं है।</div>
        </div>
        <div className="static-section">
          <div className="static-section-title">Quiz ऐप</div>
          <div className="static-para">Quiz के लिए बाहरी ऐप का link है। उनकी अपनी terms लागू होती हैं।</div>
        </div>
      </div>
    </div>
  );
}
