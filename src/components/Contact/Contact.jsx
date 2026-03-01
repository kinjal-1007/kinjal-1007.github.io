import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_v3nhoti', 'template_5znhtql', form.current, {
        publicKey: '64IeDixCe_MI_TIKG',
      })
      .then(
        () => { setDone(true); },
        (error) => { console.log('FAILED...', error.text); }
      );
  };

  return (
    <section className="contact section" id="contact">
      <p className="section-label">Get in Touch</p>
      <p className="contact-sub">
        Open to interesting projects and collaborations.
      </p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="user_name"
          className="contact-input"
          placeholder="Your name"
          required
        />
        <input
          type="email"
          name="user_email"
          className="contact-input"
          placeholder="Your email"
          required
        />
        <textarea
          name="message"
          className="contact-input contact-textarea"
          placeholder="Message"
          required
        />
        <div className="contact-footer-row">
          <button type="submit" className="button primary">
            Send message
          </button>
          {done && <span className="contact-done">Sent! I'll get back to you soon.</span>}
        </div>
      </form>
    </section>
  );
};

export default Contact;
