import { Globe, Users, IndianRupee, Heart, ChevronRight } from 'lucide-react'
import storyImage from '/image2.png'
import visionImage from '/image3.jpg'
import ScrollReveal from '../components/ScrollReveal'

const differentiators = [
  {
    icon: <Globe size={20} color="#004ac6" />,
    bg: '#eef2ff',
    accent: '#004ac6',
    title: 'India-First',
    desc: 'Built specifically for Indian creators , supports local content, culture, and payment .',
  },
  {
    icon: <Users size={20} color="#7d4ce7" />,
    bg: '#f5f0ff',
    accent: '#7d4ce7',
    title: 'Creator-First Payouts',
    desc: 'Creators keep 60% of every virtual gift received. View earnings, gift income, and referral bonuses , all in one wallet.',
  },
  {
    icon: <Heart size={20} color="#dc2626" />,
    bg: '#fef2f2',
    accent: '#dc2626',
    title: 'Real Engagement',
    desc: 'Fans can send virtual gifts, comment, reply, and connect directly , not just passive scrolling.',
  },
  {
    icon: <IndianRupee size={20} color="#006c49" />,
    bg: '#f0fdf7',
    accent: '#006c49',
    title: 'Multiple Earning Streams',
    desc: 'Earn from views (₹5 per 1,000), virtual gifts, and referrals , withdraw directly to your bank with a low ₹100 threshold.',
  },
]
export default function About() {
  return (
    <div style={{ backgroundColor: '#faf8ff' }}>

   <ScrollReveal>
      <section style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '80px 32px 40px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          backgroundColor: '#eef2ff',
          border: '1px solid #c3c6d7',
          borderRadius: 9999,
          padding: '4px 14px',
          fontSize: 11,
          fontWeight: 700,
          color: '#004ac6',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: 28,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#004ac6', display: 'inline-block' }}></span>
          Mission Driven
        </div>

          <h1 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 800,
          lineHeight: 1.1,
          color: '#131b2e',
          margin: '0 0 24px',
          letterSpacing: '-0.02em',
        }}>
          Short videos.<br />
          <span style={{ color: '#004ac6' }}>Real earnings.</span>
        </h1>

        <p style={{
          fontSize: 17,
          color: '#434655',
          lineHeight: 1.7,
          margin: '0 auto 40px',
          maxWidth: 520,
        }}>
          Popli is India's short video platform where creators earn real money from views, virtual gifts, and referrals , and withdraw directly to their bank accounts.
        </p>
      
      </section>
      </ScrollReveal>

<section style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 32px 80px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 56,
          alignItems: 'center',
        }} className="story-grid">
          <ScrollReveal direction="right">
          <div className="img-zoom" style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3' }}>
            <img src={storyImage} alt="POPLI story" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          </ScrollReveal>
          <ScrollReveal direction="left">
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#004ac6', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>Our Story</p>
                <p style={{ fontSize: 16, color: '#434655', lineHeight: 1.8, marginBottom: 16 }}>
              Popli was built because Indian creators deserved better. Platforms built for other markets don't understand Indian payment rails, cultural context, or the scale of talent waiting to be discovered here.
            </p>
            <p style={{ fontSize: 16, color: '#434655', lineHeight: 1.8, marginBottom: 16 }}>
              We built a full creator economy from scratch , a <strong style={{ color: '#004ac6' }}>Coin system</strong> for fans, a <strong style={{ color: '#7d4ce7' }}>virtual gift economy</strong> for creators, and a <strong style={{ color: '#006c49' }}>KYC-verified withdrawal system</strong> that pays directly to bank accounts via RazorpayX.
            </p>
            <p style={{ fontSize: 16, color: '#434655', lineHeight: 1.8 }}>
              Every feature , from milestone view earnings to referral rewards , was designed with one goal: make it possible for Indian creators to earn a real income doing what they love.
            </p>
          </div>
          </ScrollReveal>
        </div>
      </section>

 <ScrollReveal>
      <section style={{
        backgroundColor: '#004ac6',
        padding: '80px 32px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24 }}>Our Core Mission</p>
        <blockquote style={{
          fontSize: 'clamp(24px, 4vw, 48px)',
          fontWeight: 800,
          fontStyle: 'italic',
          color: '#fff',
          margin: '0 auto',
          maxWidth: 800,
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
        }}>
          "To give every Indian creator a fair platform to earn real money from their content."
        </blockquote>
  <div style={{
          position: 'absolute',
          top: -20,
          right: 40,
          fontSize: 160,
          color: 'rgba(255,255,255,0.07)',
          lineHeight: 1,
          fontFamily: 'Georgia, serif',
          pointerEvents: 'none',
        }}>"</div>
      </section>
      </ScrollReveal>

<section style={{ padding: '80px 32px', maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
        <ScrollReveal>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#131b2e', margin: '0 0 12px' }}>What Makes Us Different</h2>
          <p style={{ fontSize: 15, color: '#434655', margin: '0 0 56px' }}>Redefining the relationship between platforms and people.</p>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, maxWidth: 860, margin: '0 auto' }} className="diff-grid">
          {differentiators.map((d, i) => (
            <ScrollReveal key={d.title} delay={i * 100}>
            <div className="card-hover" style={{
              backgroundColor: '#fff',
              borderRadius: 16,
              border: '1px solid #e2e7ff',
              padding: 28,
              textAlign: 'left',
              display: 'flex',
              gap: 20,
              alignItems: 'flex-start',
              height: '100%',
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: d.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {d.icon}
              </div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: d.accent, margin: '0 0 8px' }}>{d.title}</h3>
                <p style={{ fontSize: 14, color: '#434655', lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        <div style={{
          marginTop: 24,
          borderRadius: 16,
          background: 'linear-gradient(90deg, #004ac6 0%, #2563eb 100%)',
          padding: '28px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 860,
          margin: '24px auto 0',
        }} className="community-banner">
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 6px' }}>Community-driven discovery</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', margin: 0, maxWidth: 400, lineHeight: 1.6 }}>
              Our algorithms are powered by shared values and human connection, not just mindless scrolling. Discover creators who actually matter to your world.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0, marginLeft: 24 }}>
            {[
              { initials: 'AK', bg: '#7d4ce7' },
              { initials: 'PR', bg: '#006c49' },
              { initials: 'SM', bg: '#d97706' },
            ].map((a, i) => (
              <div key={i} style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                backgroundColor: a.bg,
                border: '2px solid #fff',
                marginLeft: i > 0 ? -8 : 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                fontWeight: 700,
                color: '#fff',
              }}>{a.initials}</div>
            ))}
            <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', marginLeft: 8 }}>+1M creators</span>
          </div>
        </div>
      </section>

    <section style={{ padding: '0 32px 80px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center',
        }} className="vision-grid">
          <ScrollReveal direction="right">
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#004ac6', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Our Vision</p>
                 <h2 style={{ fontSize: 32, fontWeight: 800, color: '#131b2e', margin: '0 0 20px', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
              A creator economy built for India, by India.
            </h2>
            <p style={{ fontSize: 16, color: '#434655', lineHeight: 1.8, marginBottom: 32 }}>
              We're building toward a future where every Indian creator , whether in Tier 1 cities or small towns , has a transparent, fair platform to earn from their content with no gatekeeping.
            </p>
            <div style={{ display: 'flex', gap: 40 }}>
              <div>
                <div style={{ fontSize: 32, fontWeight: 800, color: '#004ac6' }}>2025</div>
                <div style={{ fontSize: 12, color: '#737686', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Ecosystem</div>
              </div>
              <div>
                <div style={{ fontSize: 32, fontWeight: 800, color: '#004ac6' }}>10M+</div>
                <div style={{ fontSize: 12, color: '#737686', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Empowered Creators</div>
              </div>
            </div>
        </div>
          </ScrollReveal>
          <ScrollReveal direction="left">
          <div className="img-zoom" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #e2e7ff' }}>
            <img src={visionImage} alt="India's creative network" style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }} />
          </div>
          </ScrollReveal>
        </div>
      </section>



      <style>{`
        @media (max-width: 768px) {
          .story-grid { grid-template-columns: 1fr !important; }
          .diff-grid { grid-template-columns: 1fr !important; }
          .vision-grid { grid-template-columns: 1fr !important; }
          .community-banner { flex-direction: column !important; gap: 20px !important; }
        }
      `}</style>
    </div>
  )
}
