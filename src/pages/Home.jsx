import React, { useEffect, useState } from "react";
import "../styles/main.css";
import { FaRunning, FaChild, FaDumbbell, FaSpa, FaPlus } from "react-icons/fa";
import Navbar from "../pages/Navbar.jsx";
import axios from "axios";

export default function Home() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axios.get(`https://real-estate-website-backend-clem.onrender.com/api/content?t=${Date.now()}`);
        setPageData(res.data);
      } catch (err) {
        console.error("Failed to fetch fresh content", err);
      }
    };
    fetchContent();
  }, []);

  if (!pageData) return <div className="loading">Loading...</div>;

  return (
    <div className="page-wrapper">
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero-container">
        <div className="hero-left">
          <div className="hero-badge">{pageData.heroBadge}</div>
          <h1>{pageData.heroTitle}</h1>
          <div className="hero-main-img">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" alt="Building Aerial" />
          </div>
        </div>
        
        <div className="hero-right">
          <div className="brand-header">
            <img src="Logo.PNG" alt="Tree Logo" className="tree-logo" />
            <div className="brand-text">
              <span className="brand-sub">{pageData.brandSubName}</span>
              <h2 className="brand-main">{pageData.brandMainName}</h2>
            </div>
          </div>
          
          <div className="pricing-container">
            <div className="price-card">
              <h3>{pageData.label1bhk}</h3>
              <p className="old-price">₹ {pageData.oldPrice1bhk} Lacs*</p>
              <p className="new-price">₹ {pageData.price1bhk} Lacs*</p>
              <span className="onwards">onwards</span>
            </div>
            <div className="divider-v"></div>
            <div className="price-card">
              <h3>{pageData.label2bhk}</h3>
              <p className="old-price">₹ {pageData.oldPrice2bhk} Cr*</p>
              <p className="new-price">₹ {pageData.price2bhk} Lacs*</p>
              <span className="onwards">onwards</span>
            </div>
          </div>

          <div className="location-footer">
            <span className="pin">📍</span>
            <p>{pageData.locationText}</p>
          </div>
        </div>
      </section>

      {/* ABOUT PROJECT */}
      <section className="about-section">
        <div className="about-visuals">
          <div className="circle-main"><img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" alt="Garden" /></div>
          <div className="circle-top"><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80" alt="Interior" /></div>
          <div className="circle-bottom"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" alt="Lobby" /></div>
        </div>
        
        <div className="about-content">
          <h2 className="sec-title">About Project</h2>
          <p>{pageData.overview}</p>
          <p className="quote">"{pageData.quote}"</p>
          <button className="btn-download">Download Brochure</button>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="amenities-section">
        <h2 className="sec-title">Amenities</h2>
        <p className="sec-subtitle">{pageData.amenitiesSubtitle}</p>
        <div className="amenities-grid">
          <div className="amenity-img-box">
            <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80" alt="Pool View" />
          </div>
          <div className="amenity-icons">
            {pageData.amenities?.map((amenity, index) => (
              <div className="icon-item" key={index}>
                <FaPlus /> <span>{amenity.title}</span>
              </div>
            ))}
            <button className="view-more">View More</button>
          </div>
        </div>
      </section>

      {/* DEVELOPER SECTION */}
      <section className="developer-section">
        <h2 className="sec-title">About Developer</h2>
        <div className="stats-grid">
          {pageData.developerStats?.map((stat, i) => (
            <div className="stat-card" key={i}>
              <h4>{stat.value}</h4>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONSTRUCTION UPDATES */}
      <section className="construction-section">
        <h2 className="sec-title">Construction Updates</h2>
        <div className="update-grid">
          {pageData.constructionUpdates?.map((update, i) => (
            <div className="update-card" key={i}>
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80" alt={update.tower} />
              <p>{update.status} - {update.tower}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="sec-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {pageData.faqs?.map((faq, i) => (
            <div className="faq-item" key={i}>
              <span>{faq.question}</span>
              <FaPlus />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}