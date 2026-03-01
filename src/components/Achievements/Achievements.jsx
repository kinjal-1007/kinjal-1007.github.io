import React from 'react';
import './Achievements.css';

// ── ADD / EDIT ACHIEVEMENTS HERE ─────────────────────────────────────────────
// Each entry: { icon, title, subtitle, link (optional), linkLabel }
// Set link to null if there is no certificate / URL yet.
// ─────────────────────────────────────────────────────────────────────────────
const achievements = [
  {
    icon: '🥇',
    title: 'Gold Medal — B.Tech CSE',
    subtitle: 'Awarded at Convocation 2025, IET Lucknow · Highest CGPA in the institute (9.52 / 10)',
    link: null,          // ← paste your convocation link here when available
    linkLabel: 'View',
  },
  {
    icon: '🏆',
    title: '1st Place — HackIET (GDSC IET Lucknow)',
    subtitle: 'Won the intra-college hackathon organised by Google Developer Student Clubs, IET Lucknow',
    link: 'https://github.com/Aditya210703/GrievEase',  // ← replace with your HackIET certificate / post link
    linkLabel: 'Project Link ↗',
  },
  {
    icon: '🎯',
    title: 'Pre-Finalist — Myntra HackerRamp: We for She 2024',
    subtitle: 'Selected in the top 70 teams nationally for the Myntra HackerRamp hackathon',
    link: 'https://drive.google.com/file/d/1IdYD4pO26ODwToCL0q9Ii8zU9tfEJDbW/view?usp=sharing',          // ← paste your Myntra certificate link here
    linkLabel: 'Certificate ↗',
  },
  {
    icon: '💻',
    title: '1000+ Problems — LeetCode',
    subtitle: 'Consistent daily problem-solving practice across Data Structures & Algorithms',
    link: 'https://leetcode.com/u/kin107/',  // ← replace with your LeetCode profile URL
    linkLabel: 'Profile ↗',
  },
];

const Achievements = () => {
  return (
    <section className="achievements section" id="Achievements">
      <p className="section-label">Achievements</p>
      <div className="achievements-list">
        {achievements.map((a, i) => (
          <div className="achievement-row" key={i}>
            <span className="achievement-icon">{a.icon}</span>
            <div className="achievement-body">
              <p className="achievement-title">{a.title}</p>
              <p className="achievement-sub">{a.subtitle}</p>
              {a.link && (
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-link"
                >
                  {a.linkLabel}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
