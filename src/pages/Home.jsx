import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import HeroSection      from '../sections/HeroSection'
import AboutSection     from '../sections/AboutSection'
import SkillsSection    from '../sections/SkillsSection'
import EducationSection from '../sections/EducationSection'
import ProjectsSection  from '../sections/ProjectsSection'
import ContactSection   from '../sections/ContactSection'

// Maps section id → URL route
const SECTIONS = [
  { id: 'hero',      route: '/' },
  { id: 'about',     route: '/about' },
  { id: 'skills',    route: '/skills' },
  { id: 'education', route: '/education' },
  { id: 'projects',  route: '/projects' },
  { id: 'contact',   route: '/contact' },
]

export default function Home() {
  const navigate = useNavigate()
  const location = useLocation()
  useScrollReveal()

  // On first load: if URL is /about, /skills etc. → scroll to that section
  useEffect(() => {
    const path = location.pathname.replace('/', '') // e.g. "about"
    if (path) {
      const el = document.getElementById(path)
      if (el) el.scrollIntoView({ behavior: 'instant' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Scroll-spy: update URL as sections enter the viewport
  useEffect(() => {
    const observers = []

    SECTIONS.forEach(({ id, route }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            navigate(route, { replace: true })
          }
        },
        {
          // Fires when section crosses the vertical midpoint of the viewport
          rootMargin: '-45% 0px -45% 0px',
          threshold: 0,
        }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [navigate])

  return (
    <>
      <div id="hero">
        <HeroSection />
      </div>
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
