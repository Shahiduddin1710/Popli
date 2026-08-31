import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/terms', label: 'Terms & Conditions' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'rgba(250,248,255,0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid #c3c6d7',
      boxShadow: '0 1px 4px rgba(15,23,42,0.04)',
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 32px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
   <NavLink to="/" style={{ textDecoration: 'none' }}>
          <img src="brand_logo.png" alt="POPLI" style={{ height: 36, display: 'block', objectFit: 'contain' }} />
        </NavLink>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28, height: 64 }} className="desktop-nav">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className="nav-link"
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: isActive ? 700 : 400,
                color: isActive ? '#004ac6' : '#434655',
                borderBottom: isActive ? '2px solid #004ac6' : '2px solid transparent',
                paddingBottom: 2,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
              })}
            >{l.label}</NavLink>
          ))}
        </nav>

      
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#131b2e',
            padding: 4,
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <span style={{
            display: 'block',
            transition: 'transform 0.2s ease, opacity 0.2s ease',
          }}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </span>
        </button>
      </div>

      <div
        style={{
          backgroundColor: '#faf8ff',
          borderTop: open ? '1px solid #c3c6d7' : '1px solid transparent',
          padding: open ? '16px 24px' : '0 24px',
          maxHeight: open ? 400 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.28s ease, padding 0.28s ease, border-color 0.28s ease',
        }}
        className="mobile-nav"
      >
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            onClick={() => setOpen(false)}
            style={({ isActive }) => ({
              display: 'block',
              padding: '12px 0',
              textDecoration: 'none',
              fontSize: 15,
              fontWeight: isActive ? 700 : 400,
              color: isActive ? '#004ac6' : '#434655',
              borderBottom: '1px solid #eaedff',
              transition: 'color 0.15s ease',
            })}
          >{l.label}</NavLink>
        ))}
        <button style={{
          marginTop: 16,
          width: '100%',
          backgroundColor: '#2563eb',
          color: '#fff',
          padding: '12px',
          borderRadius: 8,
          border: 'none',
          fontSize: 15,
          fontWeight: 600,
          cursor: 'pointer',
        }} className="btn-primary">Get POPLI</button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .cta-btn { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        .nav-link {
          transition: color 0.18s ease, border-color 0.18s ease !important;
        }
        .nav-link:hover {
          color: #004ac6 !important;
        }
      `}</style>
    </header>
  )
}