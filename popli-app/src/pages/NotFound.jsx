import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '120px 32px' }}>
      <div style={{ fontSize: 80, fontWeight: 800, color: '#e2e7ff', marginBottom: 16 }}>404</div>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: '#131b2e', margin: '0 0 12px' }}>Page not found</h1>
      <p style={{ fontSize: 16, color: '#434655', margin: '0 0 32px' }}>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" style={{
        backgroundColor: '#004ac6',
        color: '#fff',
        padding: '14px 28px',
        borderRadius: 8,
        textDecoration: 'none',
        fontSize: 15,
        fontWeight: 600,
      }}>Back to Home</Link>
    </div>
  )
}
