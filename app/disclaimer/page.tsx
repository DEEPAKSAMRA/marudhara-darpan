import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Disclaimer — Marudhara Darpan',
};
export default function Disclaimer() {
  return (
    <div style={{maxWidth:680,margin:'0 auto',padding:'24px 20px',fontFamily:"'Noto Sans Devanagari',sans-serif",color:'#2C2C2A',lineHeight:1.8}}>
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:28,paddingBottom:16,borderBottom:'2px solid #EF9F27'}}>
        <img src="/logo.png" alt="logo" style={{width:48,height:48,borderRadius:10}}/>
        <div>
          <div style={{fontSize:20,fontWeight:700}}>Marudhara Darpan</div>
          <div style={{fontSize:13,color:'#5F5E5A'}}>मरूधरा दर्पण — राजस्थान करेंट अफेयर्स</div>
        </div>
      </div>
      <h1 style={{fontSize:22,fontWeight:700,marginBottom:6}}>Disclaimer</h1>
      <p style={{fontSize:13,color:'#88877F',marginBottom:28}}>Last updated: April 2026</p>
      {[
        {title:'1. सामग्री की सत्यता',content:'इस ऐप में खबरें विभिन्न स्रोतों से संकलित हैं। किसी भी परीक्षा जानकारी को RPSC/RSMSSB की आधिकारिक वेबसाइट से सत्यापित करें।'},
        {title:'2. No Affiliation',content:'Marudhara Darpan is an independent educational app. Not affiliated with RPSC, RSMSSB, or Government of Rajasthan.'},
        {title:'3. शैक्षिक उद्देश्य',content:'यह ऐप केवल सरकारी परीक्षा की तैयारी के शैक्षिक उद्देश्य से बनाया गया है।'},
        {title:'4. External Links',content:'We link to Google Drive PDFs and an external Quiz app. Their respective terms apply.'},
      ].map((s,i)=>(
        <div key={i} style={{marginBottom:20}}>
          <h2 style={{fontSize:15,fontWeight:600,marginBottom:6,paddingBottom:4,borderBottom:'1px solid #E4E2DA'}}>{s.title}</h2>
          <p style={{fontSize:14,color:'#5F5E5A'}}>{s.content}</p>
        </div>
      ))}
      <div style={{marginTop:32,paddingTop:16,borderTop:'1px solid #E4E2DA',textAlign:'center',fontSize:12,color:'#88877F'}}>
        <a href="/" style={{color:'#EF9F27',textDecoration:'none',fontWeight:600}}>← App पर वापस जाएं</a>
        &nbsp;|&nbsp;<a href="/privacy" style={{color:'#5F5E5A',textDecoration:'none'}}>Privacy Policy</a>
        &nbsp;|&nbsp;<a href="/contact" style={{color:'#5F5E5A',textDecoration:'none'}}>Contact Us</a>
        <div style={{marginTop:8}}>© 2026 Marudhara Darpan</div>
      </div>
    </div>
  );
}
