import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function ScrollReveal({ children, direction = 'up', delay = 0, className = '', style = {} }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const reduced = prefersReducedMotion()

  useEffect(() => {
    if (reduced) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [reduced])

  const getTransform = () => {
    if (reduced) return 'none'
    if (visible) return 'translate3d(0,0,0)'
    if (direction === 'up') return 'translate3d(0,24px,0)'
    if (direction === 'down') return 'translate3d(0,-24px,0)'
    if (direction === 'left') return 'translate3d(28px,0,0)'
    if (direction === 'right') return 'translate3d(-28px,0,0)'
    return 'translate3d(0,24px,0)'
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: reduced ? 1 : visible ? 1 : 0,
        transform: getTransform(),
        transition: reduced ? 'none' : `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        willChange: 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </div>
  )
}