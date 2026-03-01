import React from 'react';
import './Activity.css';

const Activity = () => {
  const stats = [
    { value: '1000+', label: 'LeetCode problems', sub: 'solved' },
    { value: '150+', label: 'patients/day', sub: 'production platform' },
    { value: '4', label: 'AIIMS hospitals', sub: 'PHR deployed' },
  ];

  return (
    <section className="activity section">
      {stats.map((s, i) => (
        <div className="achieve" key={i}>
          <span className="achieve-value">{s.value}</span>
          <span className="achieve-label">{s.label}</span>
          <span className="achieve-sub">{s.sub}</span>
        </div>
      ))}
    </section>
  );
};

export default Activity;
