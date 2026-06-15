import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    // Reset visible class so animations re-trigger on page change
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger').forEach(el => {
      el.classList.remove('visible')
    })

    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const staggerEls = document.querySelectorAll('.stagger')

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    revealEls.forEach(el => revealObserver.observe(el))

    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          staggerObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })

    staggerEls.forEach(el => staggerObserver.observe(el))

    return () => {
      revealObserver.disconnect()
      staggerObserver.disconnect()
    }
  }, [])
}
