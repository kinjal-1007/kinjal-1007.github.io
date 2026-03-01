import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'AI Agents & Tool-Orchestrated Workflows (MCP)',
    tags: ['FastAPI', 'LangChain', 'MCP', 'Gemini', 'Claude', 'OpenRouter'],
    desc:
      'MCP servers for a Shopping Agent, YouTube Tracker, and Kafka Management Agent. LangChain-based MCP client with Geoapify and Google Calendar for location-based recommendations and event scheduling.',
    link: 'https://github.com/kinjal-1007/mcp-ai-agents',
    linkLabel: 'GitHub ↗',
  },
  {
    title: 'Financial Insights Dashboard with Revenue Forecasting',
    tags: ['MERN Stack', 'Recharts', 'Regression.js', 'Python', 'Pandas'],
    desc:
      'Web dashboard for SMEs to upload CSV data and analyze sales, customer, and product metrics with interactive visualizations. Integrated regression forecasting and rule-based business insights.',
    link: 'https://github.com/kinjal-1007/FinMaster-Dashboard-App',
    linkLabel: 'GitHub ↗',
  },
  // {
  //   title: 'Hype Fashion Community',
  //   tags: ['React', 'Node.js', 'MongoDB', 'Stable Diffusion API'],
  //   desc:
  //     'AI-powered fashion design generator with a community sharing platform — generate designs from prompts, share with others, like and comment.',
  //   link: 'https://fashion-community-app-frontend.onrender.com/list',
  //   linkLabel: 'Live ↗',
  // },
  // {
  //   title: 'WanderVerse',
  //   tags: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
  //   desc:
  //     'Platform for listing and exploring properties in picturesque locations with full CRUD and user authentication.',
  //   link: 'https://wanderverse.onrender.com/listings',
  //   linkLabel: 'Live ↗',
  // },
];

const Projects = () => {
  return (
    <section className="projects section" id="Projects">
      <p className="section-label">Projects</p>
      <div className="projects-list">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-card-top">
              <span className="project-title">{p.title}</span>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {p.linkLabel}
              </a>
            </div>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span className="project-tag" key={t}>{t}</span>
              ))}
            </div>
            <p className="project-desc">{p.desc}</p>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/kinjal-1007"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
        style={{ marginTop: '1.5rem' }}
      >
        View all on GitHub ↗
      </a>
    </section>
  );
};

export default Projects;
