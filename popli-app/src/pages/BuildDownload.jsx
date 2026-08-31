import { Smartphone, ShieldAlert, ExternalLink } from 'lucide-react'

export default function BuildDownload() {
  const downloadUrl = 'https://upload.app/download/popli/com.shaho.popli/f2c3be16e42d535ba9ec9a1fa017ba9921e1977933f9abcd02b5af023f055830'

  return (
    <div style={{ backgroundColor: '#faf8ff', minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '48px 24px 80px', width: '100%' }}>

        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 24,
          border: '1px solid #e2e7ff',
          padding: 32,
          boxShadow: '0 4px 12px rgba(0,74,198,0.06)',
          animation: 'fadeInUp 0.5s ease-out',
        }}>

          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 16,
            marginBottom: 28,
            paddingBottom: 24,
            borderBottom: '1px solid #e2e7ff',
          }}>
            <div style={{
              width: 56,
              height: 56,
              background: 'linear-gradient(135deg, #004ac6 0%, #2563eb 100%)',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 4px 12px rgba(0,74,198,0.25)',
              flexShrink: 0,
            }}>
              <Smartphone size={32} />
            </div>
            <div>
              <h1 style={{
                fontSize: 20,
                fontWeight: 700,
                color: '#131b2e',
                marginBottom: 6,
                margin: '0 0 6px',
              }}>Popli: Earn from your First Video</h1>
              <p style={{
                fontSize: 14,
                color: '#737686',
                margin: 0,
                lineHeight: 1.5,
              }}>
                Internal distribution build. Install directly on your Android device.
              </p>
            </div>
          </div>

          {/* Details */}
          <div style={{
            backgroundColor: '#faf8ff',
            borderRadius: 16,
            padding: 20,
            marginBottom: 28,
          }}>
            {[
              { label: 'Build artifact', value: 'APK' },
              { label: 'Platform', value: 'Android internal distribution build' },
              { label: 'Version', value: 'v1.0.0' },
              { label: 'Status', value: null },
            ].map(({ label, value }) => (
              <div key={label} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                borderBottom: '1px solid #e2e7ff',
              }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#737686', letterSpacing: '0.3px' }}>
                  {label}
                </span>
                {value ? (
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#131b2e' }}>{value}</span>
                ) : (
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: '#004ac6' }}>
                    <span style={{
                      width: 8,
                      height: 8,
                      backgroundColor: '#004ac6',
                      borderRadius: '50%',
                      display: 'inline-block',
                      animation: 'pulse 1.5s infinite',
                    }} />
                    Finished
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Download Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                backgroundColor: '#004ac6',
                color: '#ffffff',
                fontSize: 15,
                fontWeight: 600,
                padding: '14px 36px',
                border: 'none',
                borderRadius: 12,
                cursor: 'pointer',
                textDecoration: 'none',
                minWidth: 200,
              }}
            >
              <ExternalLink size={18} />
              Download the App
            </a>
          </div>

      

        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 640px) {
          .build-inner { padding: 24px !important; }
        }
      `}</style>
    </div>
  )
}