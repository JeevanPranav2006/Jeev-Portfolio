import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const navigate = useNavigate()

  const handleNavClick = (e, to, sectionId) => {
    e.preventDefault()
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      navigate(to, { replace: true })
    }
  }

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
            <a href="#projects" className="btn-primary" onClick={(e) => handleNavClick(e, '/projects', 'projects')}>View projects →</a>
            <a href="#contact" className="btn-outline" onClick={(e) => handleNavClick(e, '/contact', 'contact')}>Get in touch</a>
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
