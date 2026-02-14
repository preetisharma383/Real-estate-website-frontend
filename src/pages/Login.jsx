import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://real-estate-website-backend-one.vercel.app/api/auth/login", {
        email,
        password
      });
      if (res.data.success) {
        nav("/admin");
      }
    } catch {
      alert("Invalid credentials");
    }
  };

 // Keep your logic, update the return structure:
return (
  <div className="auth-page">
    <div className="login-container">
      <div className="login-sidebar">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Building" />
        <div className="overlay-text">
          <h3>Vighnaharta Infinity</h3>
          <p>Management Control Panel</p>
        </div>
      </div>
      
      <div className="login-form-area">
        <form className="login-form" onSubmit={submit}>
          <h2>Welcome Back</h2>
          <p className="subtitle">Login to manage your property content</p>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="admin@vighnaharta.com" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>

          <button type="submit" className="login-submit-btn">Login to Dashboard</button>
        </form>
      </div>
    </div>
  </div>
);
}
