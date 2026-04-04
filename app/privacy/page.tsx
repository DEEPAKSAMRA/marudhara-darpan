import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Privacy Policy — Marudhara Darpan',
};
export default function PrivacyPolicy() {
  return (
    <div style={{maxWidth:680,margin:'0 auto',padding:'24px 20px',fontFamily:"'Noto Sans Devanagari',sans-serif",color:'#2C2C2A',lineHeight:1.8}}>
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:28,paddingBottom:16,borderBottom:'2px solid #EF9F27'}}>
        <img src="/logo.png" alt="logo" style={{width:48,height:48,borderRadius:10}}/>
        <div>
          <div style={{fontSize:20,fontWeight:700}}>Marudhara Darpan</div>
          <div style={{fontSize:13,color:'#5F5E5A'}}>मरूधरा दर्पण — राजस्थान करेंट अफेयर्स</div>
        </div>
      </div>
      <h1 style={{fontSize:22,fontWeight:700,marginBottom:6}}>Privacy Policy</h1>
      <p style={{fontSize:13,color:'#88877F',marginBottom:28}}>Last updated: April 2026</p>
      <div style={{marginBottom:20}}>
        <h2 style={{fontSize:15,fontWeight:600,marginBottom:6,paddingBottom:4,borderBottom:'1px solid #E4E2DA'}}>1. Information We Do NOT Collect</h2>
        <p style={{fontSize:14,color:'#5F5E5A'}}>We do not collect any personal information (name, email, phone, location). No account or login is required. No cookies or tracking technologies are used.</p>
      </div>
      <div style={{marginBottom:20}}>
        <h2 style={{fontSize:15,fontWeight:600,marginBottom:6,paddingBottom:4,borderBottom:'1px solid #E4E2DA'}}>2. How the App Works</h2>
        <p style={{fontSize:14,color:'#5F5E5A'}}>Marudhara Darpan displays current affairs content for Rajasthan government exams. Content is manually curated and stored in Google Sheets (read-only). No user data is stored anywhere.</p>
      </div>
      <div style={{marginBottom:20}}>
        <h2 style={{fontSize:15,fontWeight:600,marginBottom:6,paddingBottom:4,borderBottom:'1px solid #E4E2DA'}}>3. Third-Party Services</h2>
        <p style={{fontSize:14,color:'#5F5E5A'}}>Google Sheets API (read-only content), Google Drive (PDF hosting), Vercel (web hosting). We link to an external Quiz app on Play Store which has its own Privacy Policy.</p>
      </div>
      <div style={{marginBottom:20}}>
        <h2 style={{fontSize:15,fontWeight:600,marginBottom:6,paddingBottom:4,borderBottom:'1px solid #E4E2DA'}}>4. Children's Privacy</h2>
        <p style={{fontSize:14,color:'#5F5E5A'}}>We do not collect any personal data from any user including children under 13. This app is safe for all age groups.</p>
      </div>
      <div style={{marginBottom:20}}>
        <h2 style={{fontSize:15,fontWeight:600,marginBottom:6,paddingBottom:4,borderBottom:'1px solid #E4E2DA'}}>5. No Affiliation</h2>
        <p style={{fontSize:14,color:'#5F5E5A'}}>Marudhara Darpan is an independent educational app. It is not affiliated with RPSC, RSMSSB, or the Government of Rajasthan.</p>
      </div>
      <div style={{marginBottom:20}}>
        <h2 style={{fontSize:15,fontWeight:600,marginBottom:6,paddingBottom:4,borderBottom:'1px solid #E4E2DA'}}>6. Contact</h2>
        <div style={{padding:'12px 16px',background:'#FAEEDA',borderRadius:8,fontSize:14}}>
          <div><strong>App:</strong> Marudhara Darpan</div>
          <div style={{marginTop:4}}><strong>Email:</strong> your[at]email.com</div>
          <div style={{marginTop:4}}><strong>Website:</strong> marudhara-darpan.vercel.app</div>
        </div>
      </div>
      <div style={{marginTop:32,paddingTop:16,borderTop:'1px solid #E4E2DA',textAlign:'center',fontSize:12,color:'#88877F'}}>
        <a href="/" style={{color:'#EF9F27',textDecoration:'none',fontWeight:600}}>← App पर वापस जाएं</a>
        &nbsp;|&nbsp;<a href="/contact" style={{color:'#5F5E5A',textDecoration:'none'}}>Contact</a>
        &nbsp;|&nbsp;<a href="/disclaimer" style={{color:'#5F5E5A',textDecoration:'none'}}>Disclaimer</a>
        <div style={{marginTop:8}}>© 2026 Marudhara Darpan</div>
      </div>
    </div>
  );
}
