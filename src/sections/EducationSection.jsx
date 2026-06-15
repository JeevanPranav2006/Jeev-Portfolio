export default function EducationSection() {
  return (
    <section id="education">
      <p className="section-label reveal">03 — Background</p>
      <h2 className="section-title reveal">Education</h2>
      <div className="education-timeline stagger">
        <div className="edu-item">
          <p className="edu-period">2023 — 2027 (ongoing)</p>
          <h3 className="edu-degree">B.Tech — Information Technology</h3>
          <p className="edu-school">Sri Krishna College of Engineering and Technology, Coimbatore</p>
          <span className="edu-highlight">⭐ NAAC A++ · NIRF Top 100</span>
          &nbsp;
          <span className="edu-detail">6.75 CGPA</span>
        </div>
        <div className="edu-item">
          <p className="edu-period">2022 — 2023</p>
          <h3 className="edu-degree">Higher Secondary (HSC) — Class XII</h3>
          <p className="edu-school">Rasi International School · CBSE Board</p>
          <span className="edu-detail">Mathematics · Physics · Chemistry · Computer Science</span>
          &nbsp;
          <span className="edu-detail">62%</span>
        </div>
        <div className="edu-item">
          <p className="edu-period">2020 — 2021</p>
          <h3 className="edu-degree">Secondary School (SSLC) — Class X</h3>
          <p className="edu-school">Green Park Matric Hr. Sec. School · Matriculation Board</p>
          <span className="edu-detail">Computer Science &amp; Mathematics focus</span>
        </div>
      </div>
    </section>
  )
}
