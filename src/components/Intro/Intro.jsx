import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import ProfilePic from '../../img/profile.jpg';

const Intro = () => {
  return (
    <section className="intro section" id="Intro">
      <div className="intro-inner">
        {/* Left: text */}
        <div className="intro-left">
          <div className="intro-badge">SDE · AI Solutions · Full Stack</div>

          <h1 className="intro-name">Kinjal Gupta</h1>

          <p className="intro-role">
            Software Development Engineer at{' '}
            <a
              href="https://panscience.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="intro-company"
            >
              PanScience Innovations
            </a>
          </p>

          <p className="intro-bio">
            Building production-grade AI and full-stack systems — from healthcare
            platforms serving hospitals to event-driven streaming pipelines and
            multi-agent LLM workflows. Gold Medalist, B.Tech CSE (CGPA 9.52/10).
          </p>

          <div className="intro-links">
            <a
              href="https://github.com/kinjal-1007"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              <img src={Github} alt="GitHub" className="intro-icon" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kinjalgupta1007/"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              <img src={LinkedIn} alt="LinkedIn" className="intro-icon" />
              LinkedIn
            </a>
            {/* ── RESUME LINK: update the href below with your new resume URL ── */}
            <a
              href="https://docs.google.com/document/d/1hokwIn-gIHpVmIBFTLNfBHy_YT5ERxgeINpAIzxQeBY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="button primary"
            >
              Resume ↗
            </a>
          </div>

          <div className="intro-highlights">
            <span>🥇 Gold Medalist — IET Lucknow</span>
            <span>·</span>
            <span>1000+ LeetCode problems</span>
            <span>·</span>
            <span>kinjal150922@gmail.com</span>
          </div>
        </div>

        {/* Right: photo */}
        <div className="intro-right">
          <img src={ProfilePic} alt="Kinjal Gupta" className="intro-photo" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
