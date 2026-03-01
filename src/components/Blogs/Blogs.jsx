import React from 'react';
import './Blogs.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import coding1 from '../../img/coding1.jpg';
import leetcode from '../../img/leetcode.png';
import leetcode2 from '../../img/leetcode2.jpg';
import myntra from '../../img/myntra.jpg';

// ─── ADD NEW BLOGS HERE ───────────────────────────────────────────────────────
// To add a new blog:
//   1. Add your image to src/img/ and import it above (like the others)
//   2. Copy one of the objects below and paste it at the end of this array
//   3. Fill in: img, head (title), desc (plain text or HTML string)
// ─────────────────────────────────────────────────────────────────────────────
const blog = [
  {
    img: coding1,
    head: 'Building AI for Hospitals: What No Tutorial Prepares You For',
    desc: "When I joined PanScience, I thought building an AI-powered healthcare platform would be mostly about models and APIs. It's not. The hardest part is the gap between what technology can do and what a busy doctor at 9 AM actually needs.\n\nWe were integrating Gemini multimodal APIs to extract medicines from handwritten prescriptions. The model was impressive in demos — but real prescriptions are smudged, rotated, half-torn. I spent weeks handling edge cases that no dataset anticipated. The lesson: production AI is 20% model and 80% everything wrapped around it — validation, fallbacks, logging, and building enough trust that a nurse actually clicks 'confirm'.\n\nDeploying to a live hospital with 40–80 patients a day was humbling. A bug isn't just a bug — it's a delayed appointment or a missed medication. That responsibility changed how I write code.",
  },
  {
    img: myntra,
    head: 'My Myntra HackerRamp Experience',
    desc: "Participating in Myntra HackerRamp, I knew standing out would be no easy feat. My challenge was to create an AI fashion generator that could revolutionize customer engagement. Late nights refining prompts, debugging code, and aligning with Myntra's needs — making it to the top 70 teams felt like a huge win.",
  },
  {
    img: coding1,
    head: 'My Failed Attempt at Learning Dev',
    desc: "Once upon a time, I embarked on a quest to master development. Armed with enthusiasm and a stack of programming books, I dove headfirst into coding. My code was riddled with bugs and projects broke more than they worked. Today I look back and laugh — every mistake was a step closer to success.",
  },
  {
    img: leetcode,
    head: 'My 100-Day LeetCode Journey',
    desc: "I've always found problem solving difficult because it's not intuitive — you can't see what you're making. The LeetCode daily challenges pushed me to tackle at least one problem every day. After 100 days, I developed a routine that makes coding part of my daily life.",
  },
  {
    img: leetcode2,
    head: 'Questions That Break You in Interviews',
    desc: "During my LeetCode journey, I stumbled upon questions that are famously challenging and test not just coding skills but problem-solving creativity. Feel free to explore them <a href='https://leetcode.com/problem-list/o10qntr1/' target='_blank' rel='noopener noreferrer' style='color: var(--accent); text-decoration: none; font-weight: 500;'>here</a>.",
  },
];

const Blogs = () => {
  return (
    <section className="blogs section" id="Blogs">
      <div className="blogs-header">
        <p className="section-label" style={{ margin: 0 }}>Blogs</p>
        <div className="blog-nav">
          <button className="blog-prev" aria-label="Previous">&#8592;</button>
          <button className="blog-next" aria-label="Next">&#8594;</button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{ prevEl: '.blog-prev', nextEl: '.blog-next' }}
        pagination={{ clickable: true, el: '.blog-pagination' }}
        spaceBetween={32}
        slidesPerView={1}
        grabCursor={true}
        className="blogs-slider"
      >
        {blog.map((b, index) => (
          <SwiperSlide key={index}>
            <div className="blog-card">
              <div
                className="blog-image"
                style={{ backgroundImage: `url(${b.img})` }}
              />
              <div className="blog-body">
                <h3 className="blog-title">{b.head}</h3>
                <p
                  className="blog-desc"
                  dangerouslySetInnerHTML={{ __html: b.desc }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="blog-pagination" />
    </section>
  );
};

export default Blogs;
