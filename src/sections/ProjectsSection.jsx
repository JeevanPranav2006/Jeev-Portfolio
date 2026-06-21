export default function ProjectsSection() {
  return (
    <section id="projects">
      <p className="section-label reveal">04 — Work</p>
      <h2 className="section-title reveal">Projects</h2>
      <div className="projects-grid stagger">
        <div className="project-card">
          <p className="project-num">PROJECT_01</p>
          <h3 className="project-name">Real Estate Management System</h3>
          <p className="project-desc">
            A full-featured platform for managing property listings, client information, and
            transactions — built with a focus on intuitive UX and reliable backend logic.
          </p>
          <div className="project-tags">
            <span className="ptag">Java</span>
            <span className="ptag">Spring Boot</span>
            <span className="ptag">React JS</span>
            <span className="ptag">Database</span>
          </div>
        </div>
        <div className="project-card">
          <p className="project-num">PROJECT_02</p>
          <h3 className="project-name">Turf Booking Application</h3>
          <p className="project-desc">
            A comprehensive multi-portal platform for booking and managing sports turfs. Features role-based access for Users, Owners, and Admins, with real-time scheduling.
          </p>
          <div className="project-tags" style={{ marginBottom: '12px' }}>
            <span className="ptag">React JS</span>
            <span className="ptag">Spring Boot</span>
            <span className="ptag">Java</span>
            <span className="ptag">H2 Database</span>
          </div>
        </div>
      </div>
    </section>
  )
}
