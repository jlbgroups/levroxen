import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    text: "Levroxen Software Innovations completely transformed our IT infrastructure. Their team's expertise in cloud migration saved us both time and money. Highly recommended!",
    author: "Sarah Jenkins",
    role: "CTO, TechFlow Solutions",
    avatar: "S"
  },
  {
    text: "We needed specialized SAP consultants urgently, and Levroxen delivered top-tier talent within days. Their staffing process is seamless and highly professional.",
    author: "Michael Chang",
    role: "VP of Engineering, InnovateCorp",
    avatar: "M"
  },
  {
    text: "From custom software development to managed IT services, they are our go-to tech partners. The dedication and quality of code are simply outstanding.",
    author: "Emily Roberts",
    role: "Founder, DataSync Analytics",
    avatar: "E"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testi-header">
          <span className="text-gradient testi-badge">SUCCESS STORIES</span>
          <h2 className="testi-title">Trusted by Industry Leaders</h2>
          <p className="testi-desc">Don't just take our word for it. Here is what our clients have to say about partnering with Levroxen Software Innovations.</p>
        </div>

        <div className="testi-grid">
          {testimonials.map((item, index) => (
            <div className="testi-card glass" key={index}>
              <Quote className="quote-icon" size={32} />
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <p className="testi-text">"{item.text}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{item.avatar}</div>
                <div>
                  <h4>{item.author}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
