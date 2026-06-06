import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt =
  'Adeyemi Ayobami Samson | Full Stack Developer'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0F172A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Brand Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 'fit-content',
            padding: '10px 20px',
            borderRadius: '999px',
            background: 'rgba(6,182,212,0.12)',
            border: '1px solid rgba(6,182,212,0.25)',
            color: '#06B6D4',
            fontSize: 24,
            fontWeight: 700,
            marginBottom: 30,
          }}
        >
          AYTECH
        </div>

        {/* Name */}
        <h1
          style={{
            color: '#FFFFFF',
            fontSize: 76,
            fontWeight: 800,
            margin: 0,
            lineHeight: 1.05,
          }}
        >
          Adeyemi Ayobami Samson
        </h1>

        {/* Role */}
        <p
          style={{
            color: '#06B6D4',
            fontSize: 38,
            fontWeight: 600,
            marginTop: 24,
            marginBottom: 0,
          }}
        >
          Full Stack Developer & Software Engineer
        </p>

        {/* Description */}
        <p
          style={{
            color: '#CBD5E1',
            fontSize: 28,
            maxWidth: '950px',
            lineHeight: 1.5,
            marginTop: 28,
          }}
        >
          Building scalable web applications, enterprise software,
          and digital solutions that solve real-world business challenges.
        </p>

        {/* Tech Stack */}
        <div
          style={{
            display: 'flex',
            gap: '14px',
            flexWrap: 'wrap',
            marginTop: '20px',
          }}
        >
          {[
            'Laravel',
            'Next.js',
            'TypeScript',
            'PHP',
            'MySQL',
            'VB.NET',
          ].map((tech) => (
            <div
              key={tech}
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#E2E8F0',
                padding: '8px 16px',
                borderRadius: '999px',
                fontSize: 20,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Accent Line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '8px',
            background:
              'linear-gradient(90deg, #06B6D4, #3B82F6, #8B5CF6)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}