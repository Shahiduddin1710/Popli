import { useState } from 'react'
import { HelpCircle, UserCheck, CreditCard, ShieldCheck, AlertCircle, Handshake, Mail, LayoutGrid, Globe, MessageSquare } from 'lucide-react'
import officeImage from '../assets/images/demo.png'
import ScrollReveal from '../components/ScrollReveal'


const categories = [
  { icon: <HelpCircle size={22} color="#004ac6" />, bg: '#eef2ff', title: 'General Support', desc: 'General queries about using POPLI and its core features.' },
  { icon: <UserCheck size={22} color="#7d4ce7" />, bg: '#f5f0ff', title: 'Account & Login', desc: 'Issues with logging in, verification, or managing your profile.' },
  { icon: <CreditCard size={22} color="#006c49" />, bg: '#f0fdf7', title: 'Creator Earnings', desc: 'Help with wallet balance, view earnings, gift payouts.' },
  { icon: <ShieldCheck size={22} color="#737686" />, bg: '#f8f9fa', title: 'Privacy & Legal', desc: 'Questions regarding our data policies and legal terms.' },
  { icon: <AlertCircle size={22} color="#dc2626" />, bg: '#fef2f2', title: 'Report Content', desc: 'Report violations, harassment, or sensitive content on the platform.' },
  { icon: <Handshake size={22} color="#d97706" />, bg: '#fffbeb', title: 'Brand Campaigns', desc: 'Run sponsored challenges or campaigns on Popli and reach Indian short video creators.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: '', subject: '', message: '', agreed: false })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setError('')
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError('Please fill in all required fields.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (loading) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data?.message || 'Unable to send your message right now. Please try again.')
        return
      }
      setSent(true)
    } catch {
      setError('Unable to send your message right now. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ backgroundColor: '#faf8ff' }}>


<ScrollReveal>
      <section style={{ padding: '80px 32px 60px', textAlign: 'center' }}>
        <h1 style={{
          fontSize: 'clamp(40px, 7vw, 80px)',
          fontWeight: 800,
          color: '#131b2e',
          margin: '0 0 16px',
          letterSpacing: '-0.03em',
        }}>Let's talk.</h1>
           <p style={{ fontSize: 16, color: '#434655', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          Need help with Popli? Whether you're a creator with a withdrawal issue or a brand looking to run a campaign, we're here.
        </p>
      </section>
    
      </ScrollReveal>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px 80px' }}>
<div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          marginBottom: 80,
        }} className="cats-grid">
          {categories.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 80}>
            <div className="card-hover" style={{
              backgroundColor: '#fff',
              borderRadius: 16,
              border: '1px solid #e2e7ff',
              padding: 24,
              cursor: 'pointer',
              height: '100%',
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                {c.icon}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#131b2e', margin: '0 0 8px' }}>{c.title}</h3>
              <p style={{ fontSize: 14, color: '#434655', lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
            </div>
            </ScrollReveal>
          ))}
        </div>

   <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 24, alignItems: 'start' }} className="contact-layout">

          <ScrollReveal direction="right">
          <div style={{
            backgroundColor: '#fff',
            borderRadius: 20,
            border: '1px solid #e2e7ff',
            padding: 40,
          }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#131b2e', margin: '0 0 32px' }}>Send us a message</h2>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>
                  <Mail size={48} color="#004ac6" style={{ margin: '0 auto', display: 'block' }} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#131b2e', margin: '0 0 12px' }}>Message sent!</h3>
                <p style={{ color: '#434655', fontSize: 15, margin: '0 0 24px' }}>We'll get back to you within 24-48 hours.</p>
                <button
                  onClick={() => {
                    setForm({ name: '', email: '', topic: '', subject: '', message: '', agreed: false })
                    setSent(false)
                    setError('')
                  }}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#004ac6',
                    border: '1.5px solid #004ac6',
                    padding: '10px 24px',
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >Send another message</button>
              </div>
            ) : (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="form-row">
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#434655', display: 'block', marginBottom: 8 }}>Full Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Shaho"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 8,
                        border: '1px solid #c3c6d7',
                        fontSize: 14,
                        fontFamily: 'Inter, sans-serif',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#434655', display: 'block', marginBottom: 8 }}>Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="shaho@example.com"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 8,
                        border: '1px solid #c3c6d7',
                        fontSize: 14,
                        fontFamily: 'Inter, sans-serif',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="form-row">
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#434655', display: 'block', marginBottom: 8 }}>Topic</label>
                    <select
                      name="topic"
                      value={form.topic}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 8,
                        border: '1px solid #c3c6d7',
                        fontSize: 14,
                        fontFamily: 'Inter, sans-serif',
                        outline: 'none',
                        backgroundColor: '#fff',
                        boxSizing: 'border-box',
                      }}
                    >
                      <option value="">Select a category</option>
                      <option>General Support</option>
                      <option>Account and Login</option>
                      <option>Creator Earnings</option>
                      <option>Privacy and Legal</option>
                      <option>Report Content</option>
                      <option>Business and Partnerships</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#434655', display: 'block', marginBottom: 8 }}>Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 8,
                        border: '1px solid #c3c6d7',
                        fontSize: 14,
                        fontFamily: 'Inter, sans-serif',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#434655', display: 'block', marginBottom: 8 }}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 8,
                      border: '1px solid #c3c6d7',
                      fontSize: 14,
                      fontFamily: 'Inter, sans-serif',
                      outline: 'none',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>


                {error && (
                  <p style={{ color: '#dc2626', fontSize: 13, marginBottom: 16, margin: '0 0 16px' }}>{error}</p>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    backgroundColor: loading ? '#2a4a99' : '#004ac6',
                    color: '#fff',
                    padding: '14px 32px',
                    borderRadius: 8,
                    border: 'none',
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    width: 'auto',
                    opacity: loading ? 0.8 : 1,
                  }}
                >{loading ? 'Sending...' : 'Send Message'}</button>
              </div>
            )}
        </div>
          </ScrollReveal>

     <ScrollReveal direction="left" delay={100}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{
              backgroundColor: '#004ac6',
              borderRadius: 20,
              padding: 28,
              color: '#fff',
            }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 20px' }}>Direct Support</h3>
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={16} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.7, marginBottom: 2 }}>Email Support</div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>popli.admin@gmail.com</div>
                  </div>
                </div>
              </div>
              <div>

              </div>
            </div>

    
          
     </div>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .cats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .contact-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .cats-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}