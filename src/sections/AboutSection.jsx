export default function AboutSection() {
  return (
    <section id="about">
      <p className="section-label reveal">01 — About me</p>
      <h2 className="section-title reveal">Who I am</h2>
      <div className="about-grid">
        <div className="about-left">
          <div className="avatar-wrap reveal-left">
            <img src="/IMG_6567.jpg" alt="Jeevan Pranav" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="avatar-badge">📍 Coimbatore, Tamil Nadu</div>
          </div>
          <div className="contact-pills">
            <a href="tel:+919843850482" className="contact-pill">
              <span className="contact-icon">📞</span>+91 98438 50482
            </a>
            <a href="mailto:jeevanpranav69@gmail.com" className="contact-pill">
              <span className="contact-icon">✉️</span>jeevanpranav69@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/jeevan-pranav-b-s-a997592a0/" target="_blank" rel="noreferrer" className="contact-pill">
              <span className="contact-icon">💼</span>linkedin.com/in/jeevan-pranav
            </a>
          </div>
        </div>
        <div className="about-right reveal-right">
          <p className="about-text">
            I'm a <strong>B.Tech Information Technology</strong> student at Sri Krishna College of Engineering and
            Technology (SKCET) — an NAAC A++ accredited institution in the NIRF Top 100. Currently in my second year
            with a <strong>6.75 CGPA</strong>.
          </p>
          <p className="about-text">
            I'm passionate about <strong>Software Development</strong> and <strong>Data Analytics</strong>, with
            hands-on experience building full-stack applications and cloud-powered solutions using <strong>AWS and GCP</strong>.
            My work ranges from management systems to financial analytics dashboards.
          </p>
          <p className="about-text">
            I'm looking to contribute my technical skills to a <strong>forward-thinking team</strong> where I can keep
            learning and ship meaningful products.
          </p>
          <div className="tag-cloud">
            <span className="tag accent">Software Development</span>
            <span className="tag accent">Data Analytics</span>
            <span className="tag accent">Cloud (AWS / GCP)</span>
            <span className="tag">React JS</span>
            <span className="tag">Spring Boot</span>
            <span className="tag">Power BI</span>
            <span className="tag">App Development</span>
          </div>
        </div>
      </div>
    </section>
  )
}
