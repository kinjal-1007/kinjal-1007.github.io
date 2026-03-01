import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C++', 'SQL'],
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'RESTful APIs'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'HTML', 'CSS'],
  },
  {
    category: 'Cloud & Infra',
    skills: ['AWS', 'GCP', 'Docker', 'PostgreSQL', 'MongoDB', 'Confluent Kafka'],
  },
  {
    category: 'AI & ML',
    skills: ['Gemini APIs', 'Claude', 'LangChain', 'MCP', 'RAG Pipelines', 'Scikit-learn'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Jupyter'],
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="Skills">
      <p className="section-label">Skills</p>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.category}>
            <span className="skill-category">{group.category}</span>
            <div className="skill-chips">
              {group.skills.map((s) => (
                <span className="chip" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
