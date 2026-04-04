'use client';
import { useEffect, useRef } from 'react';
import type { SummaryItem, NewsItem } from '@/lib/sheets';
import NewsCard from './NewsCard';

interface Props {
  open: boolean;
  summary: SummaryItem | null;
  dailyNews: NewsItem[]; // all daily news to filter from
  onClose: () => void;
}

export default function DetailView({ open, summary, dailyNews, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  let touchStartX = 0;

  // Filter daily news for this period
  const filtered = summary
    ? dailyNews.filter(n => n.date >= summary.start && n.date <= summary.end)
    : [];

  useEffect(() => {
    if (open && ref.current) ref.current.scrollTop = 0;
  }, [open, summary]);

  return (
    <div className={`slide-panel${open ? ' open' : ''}`}>
      <div className="panel-header">
        <button className="back-btn" onClick={onClose}>← वापस</button>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="panel-title">{summary?.periodLabel ?? ''}</div>
          <div className="panel-sub">{summary?.totalCount} समाचार</div>
        </div>
      </div>
      <div
        className="panel-scroll"
        ref={ref}
        onTouchStart={e => { touchStartX = e.touches[0].clientX; }}
        onTouchEnd={e => { if (e.changedTouches[0].clientX - touchStartX > 60) onClose(); }}
      >
        {summary && (
          <div className="detail-banner">
            <div>
              <div className="detail-banner-title">{summary.periodLabel}</div>
              <div className="detail-banner-sub">{summary.totalCount} समाचार</div>
            </div>
            <span style={{ fontSize: 22 }}>📋</span>
          </div>
        )}

        {/* Show filtered daily news if available, otherwise show summary bullets */}
        {filtered.length > 0
          ? filtered.map((item, i) => <NewsCard key={i} item={item} />)
          : summary?.bullets.map((b, i) => (
              <div key={i} className="card">
                <div className="bullet" style={{ fontSize: 13 }}>
                  <span className="b-dot">●</span>{b}
                </div>
              </div>
            ))
        }

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', fontSize: 11.5, color: 'var(--text3)', padding: '8px 0' }}>
            — Daily tab में उस period की खबरें add होने पर यहाँ दिखेंगी —
          </div>
        )}
      </div>
    </div>
  );
}
