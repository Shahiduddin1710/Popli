import { Link } from 'react-router-dom'
import { Globe, MessageSquare, Share2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f2f3ff',
      borderTop: '1px solid #c3c6d7',
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '48px 32px 32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
      }} className="footer-grid">
        <div>
       <img src="/brand_logo.png" alt="POPLI" style={{ height: 32, display: 'block', objectFit: 'contain', marginBottom: 12 }} />
          <p style={{
            fontSize: 13,
            color: '#434655',
            lineHeight: 1.6,
            margin: 0,
          }}>Empowering the next generation of Indian creators. Connect, create, and grow.</p>
        </div>

        <div>
          <h4 style={{ fontSize: 11, fontWeight: 700, color: '#131b2e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16, marginTop: 0 }}>Company</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[['/', 'Home'], ['/about', 'About'], ['/contact', 'Contact Us']].map(([to, label]) => (
              <Link key={to} to={to} style={{ fontSize: 13, color: '#434655', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#004ac6'}
                onMouseLeave={e => e.target.style.color = '#434655'}
              >{label}</Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 style={{ fontSize: 11, fontWeight: 700, color: '#131b2e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16, marginTop: 0 }}>Legal</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[['/terms', 'Terms & Conditions'], ['/privacy', 'Privacy Policy']].map(([to, label]) => (
              <Link key={to} to={to} style={{ fontSize: 13, color: '#434655', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#004ac6'}
                onMouseLeave={e => e.target.style.color = '#434655'}
              >{label}</Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 style={{ fontSize: 11, fontWeight: 700, color: '#131b2e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16, marginTop: 0 }}>Support</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[['/contact', 'Help & Support'], ['/contact', 'Report an Issue']].map(([to, label]) => (
              <Link key={label} to={to} style={{ fontSize: 13, color: '#434655', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#004ac6'}
                onMouseLeave={e => e.target.style.color = '#434655'}
              >{label}</Link>
            ))}
          </nav>

    
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(195,198,215,0.4)',
        textAlign: 'center',
        padding: '16px 32px',
        fontSize: 12,
        color: '#737686',
      }}>
&copy; {new Date().getFullYear()} POPLI. All rights reserved. Made for India
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
