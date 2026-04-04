'use client';
import { useState } from 'react';
import type { NewsItem } from '@/lib/sheets';

const TAG_MAP: Record<string, string> = {
  'राजनीति': 'tag-pol', 'शिक्षा': 'tag-edu', 'पर्यावरण': 'tag-env',
  'अवसंरचना': 'tag-inf', 'ऊर्जा': 'tag-ene', 'स्वास्थ्य': 'tag-hlth',
  'नौकरी': 'tag-job', 'अर्थव्यवस्था': 'tag-eco',
};
const ICON_MAP: Record<string, string> = {
  'राजनीति': '🏛️', 'शिक्षा': '🎓', 'पर्यावरण': '💧',
  'अवसंरचना': '🏗️', 'ऊर्जा': '⚡', 'स्वास्थ्य': '🏥',
  'नौकरी': '💼', 'अर्थव्यवस्था': '📈',
};

export default function NewsCard({ item }: { item: NewsItem }) {
  const [expanded, setExpanded] = useState(false);
  const tagClass = TAG_MAP[item.category] || 'tag-eco';
  const icon = ICON_MAP[item.category] || '📰';
  const visible = expanded ? item.bullets : item.bullets.slice(0, 3);
  const hidden = item.bullets.slice(3);

  return (
    <div className="card">
      <div className={`card-tag ${tagClass}`}>{icon} {item.category}</div>
      <div className="card-title">{item.headline}</div>
      <ul className="bullets">
        {visible.map((b, i) => (
          <li key={i} className="bullet">
            <span className="b-dot">●</span>{b}
          </li>
        ))}
      </ul>
      {!expanded && hidden.length > 0 && (
        <button className="read-more-btn" onClick={() => setExpanded(true)}>
          ▾ {hidden.length} और बुलेट देखें
        </button>
      )}
      <div className="card-footer">
        <span className="card-src">📰 {item.source}</span>
        <span className="card-time">{item.date}</span>
      </div>
    </div>
  );
}
