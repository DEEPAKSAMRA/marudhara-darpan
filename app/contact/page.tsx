import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact Us — Marudhara Darpan',
};
export default function ContactUs() {
  return (
    <div style={{maxWidth:680,margin:'0 auto',padding:'24px 20px',fontFamily:"'Noto Sans Devanagari',sans-serif",color:'#2C2C2A',lineHeight:1.8}}>
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:28,paddingBottom:16,borderBottom:'2px solid #EF9F27'}}>
        <img src="/logo.png" alt="logo" style={{width:48,height:48,borderRadius:10}}/>
        <div>
          <div style={{fontSize:20,fontWeight:700}}>Marudhara Darpan</div>
          <div style={{fontSize:13,color:'#5F5E5A'}}>मरूधरा दर्पण — राजस्थान करेंट अफेयर्स</div>
        </div>
      </div>
      <h1 style={{fontSize:22,fontWeight:700,marginBottom:20}}>Contact Us — हमसे संपर्क करें</h1>
      <p style={{fontSize:14,color:'#5F5E5A',marginBottom:24}}>सुझाव, त्रुटि सूचना, या सहयोग के लिए संपर्क करें।</p>
      {[
        {icon:'📧',label:'Email',value:'junctionteacher@gmail.com'},
        {icon:'📱',label:'WhatsApp',value:'+91 7014067853'},
        {icon:'📸',label:'Instagram',value:'@yourhandle'},
        {icon:'▶️',label:'YouTube',value:'Your Channel'},
      ].map((c,i)=>(
        <div key={i} style={{display:'flex',alignItems:'center',gap:12,padding:'12px 16px',background:'#FAFAF8',border:'1px solid #E4E2DA',borderRadius:10,marginBottom:10}}>
          <span style={{fontSize:22}}>{c.icon}</span>
          <div>
            <div style={{fontSize:11,color:'#88877F'}}>{c.label}</div>
            <div style={{fontSize:14,fontWeight:500,color:'#185FA5'}}>{c.value}</div>
          </div>
        </div>
      ))}
      <div style={{marginTop:24,padding:'14px 16px',background:'#FAEEDA',borderRadius:10,fontSize:13,color:'#854F0B'}}>
        ⏰ Response Time: सामान्यतः 24–48 घंटों में उत्तर मिलता है।
      </div>
      <div style={{marginTop:32,paddingTop:16,borderTop:'1px solid #E4E2DA',textAlign:'center',fontSize:12,color:'#88877F'}}>
        <a href="/" style={{color:'#EF9F27',textDecoration:'none',fontWeight:600}}>← App पर वापस जाएं</a>
        &nbsp;|&nbsp;<a href="/privacy" style={{color:'#5F5E5A',textDecoration:'none'}}>Privacy Policy</a>
        &nbsp;|&nbsp;<a href="/disclaimer" style={{color:'#5F5E5A',textDecoration:'none'}}>Disclaimer</a>
        <div style={{marginTop:8}}>© 2026 Marudhara Darpan</div>
      </div>
    </div>
  );
}
