import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="section experience" id="Experience">
      <p className="section-label">Work Experience</p>

      <div className="exp-entry">
        <div className="exp-header">
          <div>
            <span className="exp-company">PanScience Innovations</span>
            <span className="exp-role"> — Software Development Engineer, Full Stack &amp; AI</span>
          </div>
          <span className="exp-period">Jan 2025 – Present</span>
        </div>

        <div className="exp-project">
          <p className="exp-project-title">
            PARCHAA — AI-powered Healthcare &amp; HMIS Platform
          </p>
          <ul className="exp-bullets">
            <li>
              Led full-stack development of production healthcare platform deployed at a
              Telangana hospital (40–80 patients/day, peak 150+);{' '}
              <a
                href="https://play.google.com/store/apps/details?id=com.continentalhealthcare.patientrecords&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="exp-link"
              >
                Android app live on Google Play
              </a>
            </li>
            <li>
              Designed FastAPI services for patient onboarding, appointments, medical
              records, payments (CC Avenue), notifications (Firebase), and Zoom-based
              scheduling
            </li>
            <li>
              Integrated Gemini multimodal APIs for prescription parsing, audio symptom
              input, and patient summary generation
            </li>
          </ul>
        </div>

        <div className="exp-project">
          <p className="exp-project-title">ABDM / PHR Application — National Digital Health Stack</p>
          <ul className="exp-bullets">
            <li>
              Maintained a Personal Health Record app compliant with India's ABDM
              (Ayushman Bharat Digital Mission), deployed across 4 AIIMS hospitals
              (1,000 daily users)
            </li>
            <li>
              Ensured production stability and resolved backend performance issues via
              service and database scaling
            </li>
          </ul>
        </div>

        <div className="exp-project">
          <p className="exp-project-title">CHOICE — Content Moderation &amp; Streaming Infrastructure</p>
          <ul className="exp-bullets">
            <li>
              Developed cloud-based content moderation backend on AWS using Rekognition
              for image/video analysis, with S3 and Lambda for async processing
            </li>
            <li>
              Architected event-driven streaming pipelines with Confluent Kafka for
              real-time moderation workflows; integrated Gemini for speech-to-text and
              profanity detection
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
