import { useEffect, useRef, useState } from 'react'
import { Globe, Users, IndianRupee, Zap, Shield, TrendingUp, Video, Award, Star, ChevronRight, Play } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import heroImage from '/image1.png'
import ScrollReveal from '../components/ScrollReveal'

const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const features = [
  {
    icon: <Video size={22} color="#004ac6" />,
    bg: '#eef2ff',
    title: 'Short Video Reels',
    desc: 'Upload reels from your gallery or record in-app with music sync, location tagging, and people tagging.',
  },
  {
    icon: <Users size={22} color="#7d4ce7" />,
    bg: '#f5f0ff',
    title: 'Creator Profiles',
    desc: 'Your profile tracks views, gift earnings, and follower growth , your personal analytics dashboard.',
  },
  {
    icon: <Award size={22} color="#006c49" />,
    bg: '#f0fdf7',
    title: 'Milestone Earnings',
   desc: 'Earn ₹5 for every 1,000 views, automatically credited to your wallet at each milestone.',
  },
  {
    icon: <Zap size={22} color="#004ac6" />,
    bg: '#eef2ff',
    title: 'Viral Challenges',
    desc: 'Participate in national challenges and campaigns created by brands and the Popli team.',
  },
  {
    icon: <Star size={22} color="#d97706" />,
    bg: '#fffbeb',
    title: 'Referral Rewards',
    desc: 'Refer a friend and earn 100 coins. They get 25 coins , rewards unlock after both complete KYC and post a reel.',
  },
  {
    icon: <IndianRupee size={22} color="#006c49" />,
    bg: '#f0fdf7',
    title: 'POPLI Coins & Gifts',
    desc: 'Fans buy coins and send you one of 8 virtual gifts. You keep 60% of every gift received.',
  },
]

const trust = [
  {
    icon: <Shield size={22} color="#004ac6" />,
    bg: '#eef2ff',
    title: 'Authentic Engagement',
    desc: 'Zero tolerance for fake likes. Every view you see comes from a real person from a real background.',
  },
  {
    icon: <Users size={22} color="#7d4ce7" />,
    bg: '#f5f0ff',
    title: 'Creator Protection',
    desc: 'Advanced copyright tools and content moderation to keep you safe and focused.',
  },
  {
    icon: <Globe size={22} color="#006c49" />,
    bg: '#f0fdf7',
    title: 'Community Safety',
    desc: 'AI-powered content moderation that respects Indian culture and sensitivities.',
  },
  {
    icon: <IndianRupee size={22} color="#d97706" />,
    bg: '#fffbeb',
    title: 'Transparent Earnings',
    desc: 'Real-time tracking of your revenue with detailed monthly audit reports.',
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const [heroVisible, setHeroVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (reduced) { setHeroVisible(true); return }
    const timer = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(timer)
  }, [])

  const heroStyle = (delay = 0) => ({
    opacity: heroVisible ? 1 : 0,
    transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: reduced ? 'none' : `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  })

  return (
    <div style={{ backgroundColor: '#faf8ff' }}>

      <section style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '64px 32px 80px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 48,
        alignItems: 'center',
      }} className="hero-grid">
        <div>
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
            marginBottom: 24,
            ...heroStyle(0),
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#004ac6', display: 'inline-block' }}></span>
            Built for India
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.05,
            color: '#131b2e',
            margin: '0 0 24px',
            letterSpacing: '-0.02em',
            ...heroStyle(120),
          }}>
            Create.<br />Connect.<br />
            <span style={{ color: '#004ac6' }}>Earn.</span>
          </h1>

          <p style={{
            fontSize: 16,
            color: '#434655',
            lineHeight: 1.7,
            margin: '0 0 36px',
            maxWidth: 420,
            ...heroStyle(220),
          }}>
          India's short video platform where creators earn real money. Share reels, collect virtual gifts from fans, and withdraw directly to your bank account.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', ...heroStyle(320) }}>
  <button className="btn-primary" onClick={() => navigate('/get-popli')} style={{
  backgroundColor: '#004ac6',
  color: '#fff',
  padding: '14px 28px',
  borderRadius: 8,
  border: 'none',
  fontSize: 15,
  fontWeight: 600,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
}}>
  Get POPLI <ChevronRight size={16} />
</button>
       
          </div>
        </div>

        <div style={{
          position: 'relative',
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? 'translateX(0)' : 'translateX(32px)',
          transition: reduced ? 'none' : 'opacity 0.7s ease 200ms, transform 0.7s ease 200ms',
        }}>
       <div className="img-zoom" style={{
  position: 'relative',
}}>
         <img src={heroImage} alt="POPLI app" style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
   <div style={{
  position: 'absolute',
  top: 40,
  left: -10,
  backgroundColor: '#fff',
  borderRadius: 12,
  padding: '10px 16px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  fontSize: 13,
  fontWeight: 600,
  color: '#131b2e',
  opacity: heroVisible ? 1 : 0,
  transform: heroVisible ? 'translateY(0)' : 'translateY(-10px)',
  transition: reduced ? 'none' : 'opacity 0.5s ease 500ms, transform 0.5s ease 500ms',
  zIndex: 2,
}}>
  <div style={{ color: '#737686', fontSize: 11, marginBottom: 2 }}>Views</div>
  13,46,300
</div>
<div style={{
  position: 'absolute',
  bottom: 80,
  left: -10,
  backgroundColor: '#004ac6',
  borderRadius: 12,
  padding: '10px 16px',
  boxShadow: '0 8px 24px rgba(0,74,198,0.3)',
  fontSize: 13,
  fontWeight: 700,
  color: '#fff',
  opacity: heroVisible ? 1 : 0,
  transform: heroVisible ? 'translateY(0)' : 'translateY(10px)',
  transition: reduced ? 'none' : 'opacity 0.5s ease 620ms, transform 0.5s ease 620ms',
  zIndex: 2,
}}>
  <div style={{ fontSize: 11, marginBottom: 2, opacity: 0.8 }}>Earnings</div>
  ₹6,731.50
</div>
        </div>
        </div>
      </section>

  <section style={{
        backgroundColor: '#fff',
        borderTop: '1px solid #e2e7ff',
        borderBottom: '1px solid #e2e7ff',
        padding: '64px 32px',
        textAlign: 'center',
      }}>
        <ScrollReveal>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#737686', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>More than just scrolling.</p>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#131b2e', margin: '0 0 12px', letterSpacing: '-0.01em' }}>POPLI is built for creators who want to earn real money doing what they love.</h2>
        </ScrollReveal>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          maxWidth: 900,
          margin: '48px auto 0',
          textAlign: 'left',
        }} className="three-col">
          {[
         { icon: <Video size={22} color="#004ac6" />, title: 'Create', desc: 'Upload short reels from your gallery or record in-app. Add music, tag people, and drop your location.' },
{ icon: <Globe size={22} color="#7d4ce7" />, title: 'Discover', desc: 'Browse reels from creators across India. Like, comment, reply, and send virtual gifts to your favourites.' },
{ icon: <IndianRupee size={22} color="#006c49" />, title: 'Earn', desc: 'Get paid for every 200 views, receive virtual gifts from fans, and withdraw directly to your bank via RazorpayX.' },
          ].map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 100}>
              <div>
                <div style={{ marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#131b2e', margin: '0 0 8px' }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: '#434655', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

  <section style={{ padding: '80px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <ScrollReveal>
     <h2 style={{ fontSize: 28, fontWeight: 700, color: '#131b2e', textAlign: 'center', margin: '0 0 12px' }}>How Popli Works</h2>
<p style={{ textAlign: 'center', color: '#434655', margin: '0 0 56px', fontSize: 15 }}>From your first reel to your first withdrawal</p>
        </ScrollReveal>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0, justifyContent: 'center', position: 'relative' }} className="steps-row">
          <div style={{ position: 'absolute', top: 28, left: '16.5%', right: '16.5%', height: 2, backgroundColor: '#c3c6d7', zIndex: 0 }} className="steps-line"></div>
          {[
        { n: '1', title: 'Post a Reel', desc: 'Upload a short video, add music, tag people and location , go live in seconds.' },
{ n: '2', title: 'Get Views & Gifts', desc: 'Earn ₹5 for every 1,000 views. Fans can send you virtual gifts using Popli Coins, you keep 60%.' },
{ n: '3', title: 'Withdraw', desc: 'Once you hit ₹100, withdraw directly to your bank account via RazorpayX. Fast, transparent, real.' },
          ].map((s, i) => (
            <ScrollReveal key={s.n} delay={i * 150} style={{ textAlign: 'center', flex: 1, padding: '0 24px', position: 'relative', zIndex: 1 }}>
              <div style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                backgroundColor: '#004ac6',
                color: '#fff',
                fontSize: 22,
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}>{s.n}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#131b2e', margin: '0 0 8px' }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: '#434655', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

<section style={{ backgroundColor: '#fff', borderTop: '1px solid #e2e7ff', borderBottom: '1px solid #e2e7ff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="earnings-grid">
          <ScrollReveal direction="right">
          <div style={{
            backgroundColor: '#faf8ff',
            borderRadius: 16,
            border: '1px solid #e2e7ff',
            padding: 28,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#434655' }}>Creator Rewards</span>
              <span style={{ fontSize: 12, color: '#737686' }}>This Month</span>
            </div>
         <div style={{ fontSize: 36, fontWeight: 800, color: '#131b2e', marginBottom: 4 }}>₹2,500.00</div>
<div style={{ fontSize: 12, color: '#006c49', fontWeight: 600, marginBottom: 20 }}>From views + gifts this month</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 11, color: '#737686', marginBottom: 4 }}>Views</div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>2.4M</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: '#737686', marginBottom: 4 }}>New Followers</div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>+12.5k</div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #e2e7ff', paddingTop: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#434655', marginBottom: 12 }}>Earnings Breakdown</div>
           {[['View Earnings (200 views = ₹1)', '₹1,200'], ['Virtual Gifts (60% share)', '₹1,100'], ['Referral Bonus', '₹200']].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 13 }}>
                  <span style={{ color: '#434655' }}>{k}</span>
                  <span style={{ fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

</ScrollReveal>
          <ScrollReveal direction="left">
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: '#131b2e', margin: '0 0 20px', letterSpacing: '-0.01em' }}>Views that can mean more.</h2>
            <p style={{ fontSize: 15, color: '#434655', lineHeight: 1.7, marginBottom: 24 }}>
              We believe creators are the backbone of the digital economy. That's why POPLI offers the most transparent and rewarding payout system in India.
            </p>
            {[
         'Direct bank transfers via Payouts',
'Minimum withdrawal of ₹100 (2% platform fee)',
'Earn from views, gifts, and referrals simultaneously',
            ].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, fontSize: 14, color: '#131b2e' }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <ChevronRight size={12} color="#004ac6" />
                </div>
                {t}
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>
<section style={{ padding: '80px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <ScrollReveal>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#131b2e', textAlign: 'center', margin: '0 0 8px' }}>Everything you need.</h2>
          <p style={{ textAlign: 'center', color: '#434655', margin: '0 0 48px', fontSize: 15 }}>One platform, infinite possibilities</p>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="features-grid">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 80}>
              <div className="card-hover" style={{
                backgroundColor: '#fff',
                borderRadius: 16,
                border: '1px solid #e2e7ff',
                padding: 24,
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                height: '100%',
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#131b2e', margin: '0 0 8px' }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: '#434655', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>



<section style={{ padding: '0 32px 80px', maxWidth: 1280, margin: '0 auto' }}>
        <ScrollReveal>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#131b2e', textAlign: 'center', margin: '0 0 8px' }}>A space built on trust.</h2>
          <p style={{ textAlign: 'center', color: '#434655', margin: '0 0 48px', fontSize: 15 }}>Safety and transparency at every layer</p>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="trust-grid">
          {trust.map((t, i) => (
            <ScrollReveal key={t.title} delay={i * 100}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  {t.icon}
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: '#131b2e', margin: '0 0 8px' }}>{t.title}</h3>
                <p style={{ fontSize: 13, color: '#434655', lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

   <ScrollReveal>
      <section style={{
        margin: '0 32px 80px',
        borderRadius: 20,
        background: 'linear-gradient(135deg, #004ac6 0%, #2563eb 60%, #7d4ce7 100%)',
        padding: '72px 32px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 800,
          color: '#fff',
          margin: '0 0 16px',
          letterSpacing: '-0.02em',
        }}>Your next reel could be your next paycheck.</h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', margin: '0 0 40px' }}>Join Popli: The platform for Indian creators to earn real money from views, virtual gifts, and referrals.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
               <button className="btn-primary" onClick={() => navigate('/get-popli')} style={{
            backgroundColor: '#fff',
            color: '#004ac6',
            padding: '14px 32px',
            borderRadius: 8,
            border: 'none',
            fontSize: 15,
            fontWeight: 700,
            cursor: 'pointer',
          }}>Get POPLI Now</button>
         
        </div>
      </section>
      </ScrollReveal>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .earnings-grid { grid-template-columns: 1fr !important; }
          .india-grid { grid-template-columns: 1fr !important; }
          .three-col { grid-template-columns: 1fr !important; }
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .steps-line { display: none !important; }
          .steps-row { flex-direction: column !important; align-items: center !important; }
          .india-section { margin: 0 16px 60px !important; }
        }
        @media (max-width: 600px) {
          .trust-grid { grid-template-columns: 1fr !important; }
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
