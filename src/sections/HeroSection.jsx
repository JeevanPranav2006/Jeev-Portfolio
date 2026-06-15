import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2.5rem', position: 'relative' }}>
      <div className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">// B.Tech IT Student &amp; Developer</p>
          <h1 className="hero-name">Jeevan<br />Pranav <span>B S</span></h1>
          <p className="hero-tagline">
            Building software, analyzing data, and shipping projects — from web apps to cloud-powered analytics dashboards.
          </p>
          <div className="hero-cta-row">
            <Link to="/projects" className="btn-primary">View projects →</Link>
            <Link to="/contact"  className="btn-outline">Get in touch</Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item"><span className="stat-num">6.75</span><span className="stat-label">CGPA</span></div>
            <div className="stat-item"><span className="stat-num">2+</span><span className="stat-label">Projects</span></div>
            <div className="stat-item"><span className="stat-num">8+</span><span className="stat-label">Technologies</span></div>
            <div className="stat-item"><span className="stat-num">2027</span><span className="stat-label">Graduating</span></div>
          </div>
        </div>
        <div className="hero-bg-text">IT</div>
      </div>
    </div>
  )
}
