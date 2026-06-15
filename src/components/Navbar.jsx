import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/about',     label: 'About',     sectionId: 'about' },
  { to: '/skills',    label: 'Skills',    sectionId: 'skills' },
  { to: '/education', label: 'Education', sectionId: 'education' },
  { to: '/projects',  label: 'Projects',  sectionId: 'projects' },
  { to: '/contact',   label: 'Contact',   sectionId: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme]       = useState(() => localStorage.getItem('portfolio-theme') || 'dark')
  const navigate  = useNavigate()
  const location  = useLocation()

  // Apply theme to <html>
  useEffect(() => {
    if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light')
    else document.documentElement.removeAttribute('data-theme')
  }, [theme])

  // Nav shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location.pathname])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('portfolio-theme', next)
  }

  const openMenu  = () => { setMenuOpen(true);  document.body.style.overflow = 'hidden' }
  const closeMenu = () => { setMenuOpen(false); document.body.style.overflow = '' }

  // Smooth-scroll to section + update URL immediately
  const handleNavClick = (e, to, sectionId) => {
    e.preventDefault()
    closeMenu()
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      navigate(to, { replace: true })
    }
  }

  // Logo click → scroll to top (hero)
  const handleLogoClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate('/', { replace: true })
  }

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="/" className="nav-logo" onClick={handleLogoClick}>JP_</a>
        <div className="nav-right">
          <ul className="nav-links">
            {NAV_LINKS.map(({ to, label, sectionId }) => (
              <li key={to}>
                <a
                  href={`#${sectionId}`}
                  className={location.pathname === to ? 'active' : ''}
                  onClick={e => handleNavClick(e, to, sectionId)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="theme-toggle"
            id="themeToggle"
            role="button"
            aria-label="Toggle theme"
            tabIndex={0}
            onClick={toggleTheme}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleTheme() } }}
          >
            <span className="theme-toggle-icon moon">🌙</span>
            <span className="theme-toggle-icon sun">☀️</span>
          </div>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            id="hamburger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={menuOpen ? closeMenu : openMenu}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        onClick={e => { if (!e.target.closest('.mobile-menu-panel')) closeMenu() }}
      >
        <div className="mobile-menu-panel">
          {NAV_LINKS.map(({ to, label, sectionId }) => (
            <a
              key={to}
              href={`#${sectionId}`}
              className="mobile-nav-link"
              onClick={e => handleNavClick(e, to, sectionId)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
