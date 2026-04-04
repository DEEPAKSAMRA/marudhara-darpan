'use client';
import { useState, useRef } from 'react';
import { useSheetData } from '@/components/useSheetData';
import NewsCard from '@/components/NewsCard';
import DetailView from '@/components/DetailView';
import { PrivacyPage, ContactPage, DisclaimerPage } from '@/components/StaticPages';
import type { SummaryItem } from '@/lib/sheets';

type Tab = 'daily' | 'weekly' | '15d' | 'monthly' | 'pdf';
type StaticPage = 'privacy' | 'contact' | 'disclaimer' | null;

const TAB_META: Record<Tab, { label: string; count: (n: number) => string; nav: string | null }> = {
  daily:   { label: '📰 आज की खबरें', count: n => `${n} समाचार`, nav: 'nav-daily' },
  weekly:  { label: '📊 साप्ताहिक संकलन', count: n => `${n} सप्ताह`, nav: 'nav-weekly' },
  '15d':   { label: '🗂️ पखवाड़ा संकलन', count: n => `${n} पखवाड़े`, nav: null },
  monthly: { label: '📆 माह-वार संकलन', count: n => `${n} माह`, nav: 'nav-monthly' },
  pdf:     { label: '📥 PDF डाउनलोड', count: () => 'PDF लिंक', nav: 'nav-pdf' },
};

const QUIZ_URL = process.env.NEXT_PUBLIC_QUIZ_URL ?? 'https://play.google.com/store/apps/details?id=co.khal.cxxfj&hl=en_SG';

const PDF_ICON: Record<string, string> = { Monthly: '📄', '6Month': '📚', '12Month': '🗃️', Weekly: '📰' };

export default function Home() {
  const { data, loading } = useSheetData();
  const [tab, setTab] = useState<Tab>('daily');
  const [detailItem, setDetailItem] = useState<SummaryItem | null>(null);
  const [staticPage, setStaticPage] = useState<StaticPage>(null);
  const [adminOpen, setAdminOpen] = useState(false);
  const tapCount = useRef(0);
  const tapTimer = useRef<ReturnType<typeof setTimeout>>();

  const today = new Date().toLocaleDateString('hi-IN', { day: 'numeric', month: 'short' });
  const meta = TAB_META[tab];
  const countVal = {
    daily: data.daily.length, weekly: data.weekly.length,
    '15d': data.days15.length, monthly: data.monthly.length, pdf: data.pdfs.length,
  }[tab];

  function handleLogoTap() {
    tapCount.current++;
    clearTimeout(tapTimer.current);
    tapTimer.current = setTimeout(() => { tapCount.current = 0; }, 2000);
    if (tapCount.current >= 5) { tapCount.current = 0; setAdminOpen(true); }
  }

  function SummarySection({ items, quizLabel, quizSub }: {
    items: SummaryItem[]; quizLabel: string; quizSub: string;
  }) {
    return (
      <>
        <a className="quiz-card" href={QUIZ_URL} target="_blank" rel="noreferrer">
          <div className="quiz-icon">🧠</div>
          <div className="quiz-info">
            <div className="quiz-title">{quizLabel}</div>
            <div className="quiz-sub">{quizSub}</div>
          </div>
          <div className="quiz-arrow">→</div>
        </a>
        {items.map((item, i) => (
          <div key={i} className={`summary-card${i > 0 ? ' plain' : ''}`}>
            <div className="summary-head">
              <div>
                <div className="summary-period">{item.periodLabel}</div>
                <div className="summary-meta">प्रमुख घटनाएं — संक्षेप</div>
              </div>
              <div className="summary-count">{item.totalCount} खबरें</div>
            </div>
            <ul className="bullets">
              {item.bullets.slice(0, 5).map((b, j) => (
                <li key={j} className="bullet"><span className="b-dot">●</span>{b}</li>
              ))}
            </ul>
            <button className="see-all-btn" onClick={() => setDetailItem(item)}>
              <span className="see-all-text">📋 सभी {item.totalCount} खबरें पढ़ें</span>
              <span className="see-all-arrow">→</span>
            </button>
          </div>
        ))}
      </>
    );
  }

  return (
    <div className="app">
      {/* HEADER */}
      <div className="header">
        <div className="header-top">
          <div className="logo" onClick={handleLogoTap}>
            <img src="/logo.png" alt="Marudhara Darpan" />
          </div>
          <div style={{ flex: 1 }}>
            <div className="brand-title">Marudhara Darpan</div>
            <div className="brand-sub">
              <span className="scroll-text">
                RPSC · RSMSSB · लेक्चरर · CET · पटवारी · जेल प्रहरी · वनपाल · Lab Asst. &nbsp;&nbsp;&nbsp; RPSC · RSMSSB · लेक्चरर · CET · पटवारी · जेल प्रहरी · वनपाल · Lab Asst.
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
            <div className="ai-badge"><div className="ai-dot" />Live</div>
            <div style={{ fontSize: 10, color: 'var(--text3)' }}>{today}</div>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="tabs-wrap">
        <div className="tabs">
          {(['daily','weekly','15d','monthly','pdf'] as Tab[]).map(t => (
            <button key={t} className={`tab${tab === t ? ' active' : ''}`} onClick={() => setTab(t)}>
              {{ daily:'📰 दैनिक', weekly:'📊 साप्ताहिक', '15d':'🗂️ 15 दिन', monthly:'📆 मासिक', pdf:'📥 PDF' }[t]}
            </button>
          ))}
        </div>
      </div>

      {/* SEC BAR */}
      <div className="sec-bar">
        <span className="sec-bar-label">{meta.label}</span>
        <span className="count-pill">{meta.count(countVal)}</span>
      </div>

      {/* ── DAILY ── */}
      {tab === 'daily' && (
        <div className="scroll-area">
          {/* Alerts */}
          {data.alerts.length > 0 && (
            <div className="alerts-wrap">
              {data.alerts.map((a, i) => (
                <div key={i} className={`alert ${a.color}`}>
                  <span className="alert-icon">{a.icon}</span>
                  <div className="alert-text" dangerouslySetInnerHTML={{ __html: a.text }} />
                </div>
              ))}
            </div>
          )}
          {/* Quiz */}
          <a className="quiz-card" href={QUIZ_URL} target="_blank" rel="noreferrer">
            <div className="quiz-icon">🧠</div>
            <div className="quiz-info">
              <div className="quiz-title">आज की Quiz खेलें!</div>
              <div className="quiz-sub">आज की खबरों पर 10 सवाल · अभी test करें</div>
            </div>
            <div className="quiz-arrow">→</div>
          </a>
          {/* News Cards */}
          {loading
            ? [1,2,3].map(i => <div key={i} className="skeleton loading-card" />)
            : data.daily.map((item, i) => <NewsCard key={i} item={item} />)
          }
        </div>
      )}

      {/* ── WEEKLY ── */}
      {tab === 'weekly' && (
        <div className="scroll-area">
          <SummarySection items={data.weekly} quizLabel="साप्ताहिक Quiz Challenge!" quizSub="इस सप्ताह की खबरों पर Quiz · कितने सही होंगे?" />
        </div>
      )}

      {/* ── 15 DAYS ── */}
      {tab === '15d' && (
        <div className="scroll-area">
          <SummarySection items={data.days15} quizLabel="15 दिन की Quiz!" quizSub="पखवाड़े की टॉप खबरों पर MCQ · अभी खेलें" />
        </div>
      )}

      {/* ── MONTHLY ── */}
      {tab === 'monthly' && (
        <div className="scroll-area">
          <SummarySection items={data.monthly} quizLabel="मासिक Mega Quiz!" quizSub="पूरे माह की खबरों पर 30 सवाल · Score करें" />
        </div>
      )}

      {/* ── PDF ── */}
      {tab === 'pdf' && (
        <div className="scroll-area">
          {(['Monthly','6Month','12Month','Weekly'] as const).map(type => {
            const items = data.pdfs.filter(p => p.type === type && p.active);
            if (!items.length) return null;
            const labels: Record<string,string> = { Monthly:'📄 मासिक PDF', '6Month':'📚 6 माह PDF', '12Month':'🗃️ 12 माह PDF', Weekly:'📰 साप्ताहिक PDF' };
            return (
              <div key={type}>
                <div className="pdf-label">{labels[type]}</div>
                {items.map((pdf, i) => (
                  <div key={i} className="pdf-card" style={{ marginBottom: 8 }}>
                    <div className="pdf-top">
                      <div className="pdf-icon">{PDF_ICON[pdf.type] ?? '📄'}</div>
                      <div className="pdf-info">
                        <div className="pdf-title-text">{pdf.periodLabel}</div>
                        <div className="pdf-meta">{pdf.pages} पृष्ठ · {pdf.sizeMb} MB</div>
                      </div>
                    </div>
                    <div className="pdf-btns">
                      <button className="pdf-view-btn"
                        onClick={() => pdf.driveId && window.open(`https://drive.google.com/file/d/${pdf.driveId}/preview`, '_blank')}>
                        👁 देखें
                      </button>
                      <button className="pdf-dl-btn"
                        onClick={() => pdf.driveId && window.open(`https://drive.google.com/uc?export=download&id=${pdf.driveId}`, '_blank')}>
                        ⬇ डाउनलोड
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
          {/* Footer Links */}
          <div className="footer-links">
            <span className="footer-link" onClick={() => setStaticPage('privacy')}>🔒 Privacy Policy</span>
            <span className="footer-link" onClick={() => setStaticPage('contact')}>📧 Contact Us</span>
            <span className="footer-link" onClick={() => setStaticPage('disclaimer')}>⚠️ Disclaimer</span>
          </div>
          <div className="footer-copy">© 2026 Marudhara Darpan · सभी अधिकार सुरक्षित</div>
        </div>
      )}

      {/* BOTTOM NAV */}
      <div className="bottom-nav">
        {([['daily','📰','दैनिक'],['weekly','📊','साप्ताहिक'],['monthly','📆','मासिक'],['pdf','📥','PDF']] as const).map(([t,icon,label]) => (
          <button key={t} id={`nav-${t}`} className={`nav-btn${tab === t ? ' active' : ''}`} onClick={() => setTab(t as Tab)}>
            <span className="nav-icon">{icon}</span>{label}
          </button>
        ))}
      </div>

      {/* DETAIL VIEW */}
      <DetailView
        open={detailItem !== null}
        summary={detailItem}
        dailyNews={data.daily}
        onClose={() => setDetailItem(null)}
      />

      {/* STATIC PAGES */}
      <PrivacyPage    open={staticPage === 'privacy'}    onClose={() => setStaticPage(null)} />
      <ContactPage    open={staticPage === 'contact'}    onClose={() => setStaticPage(null)} />
      <DisclaimerPage open={staticPage === 'disclaimer'} onClose={() => setStaticPage(null)} />

      {/* ADMIN PANEL (Logo 5-tap) */}
      <div className={`admin-panel${adminOpen ? ' open' : ''}`}>
        <div className="static-header">
          <div className="static-title">⚙️ Admin Panel</div>
          <button className="close-btn" onClick={() => setAdminOpen(false)}>✕ बंद करें</button>
        </div>
        <div className="panel-scroll">
          <div className="manual-note">📝 <strong>Manual Entry Mode</strong> — Google Sheet में खबरें type करें → App अगले refresh पर display करेगा।</div>
          <div className="card" style={{ marginTop: 10 }}>
            <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 8 }}>📋 Daily Sheet — Column Guide</div>
            <table className="admin-table">
              <thead><tr><th>Column</th><th>क्या लिखें</th><th>Example</th></tr></thead>
              <tbody>
                {[['A','Date','2026-04-03'],['B','Category','शिक्षा'],['C','Headline','REET 2026 घोषित'],['D–G','Bullet 1–4','15 जून को परीक्षा'],['H','Source','RPSC'],['I','Active','TRUE / FALSE']].map(([c,w,e],i)=>(
                  <tr key={i}><td><strong>{c}</strong></td><td>{w}</td><td>{e}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card" style={{ marginTop: 10 }}>
            <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 8 }}>🔔 Alerts Sheet — Column Guide</div>
            <table className="admin-table">
              <thead><tr><th>Column</th><th>क्या लिखें</th></tr></thead>
              <tbody>
                {[['A','Color: red / blue / green'],['B','Icon: 🔔 / 📢 / ✅'],['C','Alert Text (पूरा message)'],['D','Active: TRUE / FALSE']].map(([c,w],i)=>(
                  <tr key={i}><td><strong>{c}</strong></td><td>{w}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: 'center', fontSize: 10.5, color: 'var(--text3)', padding: '10px 0' }}>
            🔒 Logo पर 5 बार tap → Admin Panel · Users को नहीं दिखता
          </div>
        </div>
      </div>
    </div>
  );
}
