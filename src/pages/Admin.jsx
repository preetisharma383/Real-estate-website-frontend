import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";

const initialDataStructure = {
  heroTitle: "THINKING OF A FANTASTIC VICINITY?",
  heroBadge: "20+ Podium Luxurious Amenities | Spacious Balcony Homes",
  brandSubName: "VIGHNAHARTA",
  brandMainName: "INFINITY",
  locationText: "BLDG NO. 221/224, CIRCLE - KANNAMWAR NAGAR 1, VIKHROLI (EAST)",
  label1bhk: "SMART 1 BHK",
  oldPrice1bhk: "74.99",
  price1bhk: "69.99",
  label2bhk: "PREMIUM 2 BHK",
  oldPrice2bhk: "1.05",
  price2bhk: "96.99",
  overview: "At Vighnaharta Infinity, every detail reflects...",
  quote: "The moment I entered the house, it felt welcomed.",
  amenitiesSubtitle: "Thoughtfully crafted surroundings that reflect tradition...",
  amenities: [{ title: "Gymnasium" }, { title: "Kids Play Area" }, { title: "Jogging Track" }],
  developerStats: [
    { value: "6", label: "Projects" },
    { value: "1.32 LAC", label: "sq. ft. developed" },
    { value: "449+", label: "Happy Families" },
    { value: "3.77 LAC", label: "sq. ft. ongoing" }
  ],
  constructionUpdates: [
    { tower: "Tower A", status: "Under Construction" },
    { tower: "Tower B", status: "Completed" }
  ],
  faqs: [{ question: "What makes Swastik Group a trusted name?", answer: "Experience and quality." }]
};

export default function Admin() {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("hero");
  const nav = useNavigate();

  useEffect(() => {
    axios.get("https://real-estate-website-backend-clem.onrender.com/api/content")
      .then(res => setData({ ...initialDataStructure, ...res.data }))
      .catch(() => setData(initialDataStructure));
  }, []);

  const save = async () => {
    try {
      const res = await axios.post("https://real-estate-website-backend-clem.onrender.com/api/content", data);
      if (res.status === 200) {
        alert("Changes Published Successfully!");
        window.location.href = "/";
      }
    } catch (err) {
      alert("Error saving changes. Check backend.");
    }
  };

  if (!data) return <div className="loading">Initializing...</div>;

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="header-info">
          <h1>Admin Control Panel</h1>
          <p>Updating Content Live</p>
        </div>
        <div className="header-actions">
          <button className="preview-btn" onClick={() => nav('/')}>View Site</button>
          <button className="save-btn" onClick={save}>Save & Publish</button>
        </div>
      </header>

      <div className="admin-grid">
        <aside className="admin-sidebar">
          <nav>
            <button className={activeTab === 'hero' ? 'active' : ''} onClick={() => setActiveTab('hero')}>Hero & Pricing</button>
            <button className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab('about')}>About & Stats</button>
            <button className={activeTab === 'amenities' ? 'active' : ''} onClick={() => setActiveTab('amenities')}>Amenities</button>
            <button className={activeTab === 'construction' ? 'active' : ''} onClick={() => setActiveTab('construction')}>Construction</button>
            <button className={activeTab === 'faq' ? 'active' : ''} onClick={() => setActiveTab('faq')}>FAQ</button>
          </nav>
        </aside>

        <main className="admin-main-content">
          {activeTab === 'hero' && (
            <div className="form-card">
              <h3>Branding & Hero</h3>
              <div className="form-group">
                <label>Headline</label>
                <input value={data.heroTitle} onChange={e => setData({...data, heroTitle: e.target.value})} />
              </div>
              <div className="form-row">
                <div className="form-group"><label>Brand Sub</label><input value={data.brandSubName} onChange={e => setData({...data, brandSubName: e.target.value})} /></div>
                <div className="form-group"><label>Brand Main</label><input value={data.brandMainName} onChange={e => setData({...data, brandMainName: e.target.value})} /></div>
              </div>
              <div className="form-group">
                <label>Address</label>
                <input value={data.locationText} onChange={e => setData({...data, locationText: e.target.value})} />
              </div>
              <h3>Pricing Content</h3>
              <div className="form-row">
                <div className="form-group"><label>1BHK Label</label><input value={data.label1bhk} onChange={e => setData({...data, label1bhk: e.target.value})} /></div>
                <div className="form-group"><label>Price (Lacs)</label><input value={data.price1bhk} onChange={e => setData({...data, price1bhk: e.target.value})} /></div>
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="form-card">
              <h3>Project Overview</h3>
              <textarea rows="4" value={data.overview} onChange={e => setData({...data, overview: e.target.value})} />
              <label>Quote</label>
              <input value={data.quote} onChange={e => setData({...data, quote: e.target.value})} />
              <h3>Developer Statistics</h3>
              {data.developerStats.map((s, i) => (
                <div key={i} className="form-row" style={{marginBottom: '10px'}}>
                  <input value={s.value} placeholder="Value (e.g. 6)" onChange={e => {
                    const stats = [...data.developerStats];
                    stats[i].value = e.target.value;
                    setData({...data, developerStats: stats});
                  }} />
                  <input value={s.label} placeholder="Label (e.g. Projects)" onChange={e => {
                    const stats = [...data.developerStats];
                    stats[i].label = e.target.value;
                    setData({...data, developerStats: stats});
                  }} />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'amenities' && (
            <div className="form-card">
              <h3>Amenities Subtitle</h3>
              <input value={data.amenitiesSubtitle} onChange={e => setData({...data, amenitiesSubtitle: e.target.value})} />
              {data.amenities.map((a, i) => (
                <div key={i} className="dynamic-row">
                  <input value={a.title} onChange={e => {
                    const am = [...data.amenities];
                    am[i].title = e.target.value;
                    setData({...data, amenities: am});
                  }} />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'construction' && (
            <div className="form-card">
              <h3>Progress Updates</h3>
              {data.constructionUpdates.map((u, i) => (
                <div key={i} className="form-row">
                  <input value={u.tower} onChange={e => {
                    const c = [...data.constructionUpdates];
                    c[i].tower = e.target.value;
                    setData({...data, constructionUpdates: c});
                  }} />
                  <input value={u.status} onChange={e => {
                    const c = [...data.constructionUpdates];
                    c[i].status = e.target.value;
                    setData({...data, constructionUpdates: c});
                  }} />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="form-card">
              <h3>FAQs</h3>
              {data.faqs.map((f, i) => (
                <div key={i} className="faq-edit-box">
                  <input value={f.question} onChange={e => {
                    const faqs = [...data.faqs];
                    faqs[i].question = e.target.value;
                    setData({...data, faqs});
                  }} />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}