export default function SkillsSection() {
  const skills = [
    { category: 'Frontend',    name: 'HTML & CSS' },
    { category: 'Frontend',    name: 'React JS' },
    { category: 'Backend',     name: 'Spring Boot' },
    { category: 'Programming', name: 'Java' },
    { category: 'Programming', name: 'C++' },
    { category: 'Programming', name: 'Python' },
    { category: 'Cloud',       name: 'AWS / GCP' },
    { category: 'Analytics',   name: 'Excel & Power BI' },
    { category: 'Mobile',      name: 'App Development' },
    { category: 'Methodology', name: 'Design Thinking' },
  ]
  return (
    <section id="skills" style={{ maxWidth: '100%', borderRadius: 0 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p className="section-label reveal">02 — Capabilities</p>
        <h2 className="section-title reveal">Skills &amp; technologies</h2>
        <div className="skills-grid stagger">
          {skills.map(({ category, name }) => (
            <div className="skill-card" key={name}>
              <p className="skill-category">{category}</p>
              <p className="skill-name">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
