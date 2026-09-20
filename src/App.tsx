import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './index.css'

const cards = [
  { title: 'Silence', text: 'Where the ice sits still, the world grows quiet enough to hear time pass.' },
  { title: 'Light', text: 'Sunlight moves across frozen walls and turns every crack into a story.' },
  { title: 'Slow Wonder', text: 'Glaciers change over centuries, and every year the change is harder to ignore.' },
]

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <section
        id="exhibit"
        style={{
          minHeight: '100vh',
          background: '#05080f',
          color: '#fff',
          padding: '120px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '48px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', maxWidth: '700px' }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '56px', margin: 0 }}>
            The Exhibit
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", opacity: 0.7, marginTop: '16px', lineHeight: 1.7 }}>
            A journey through the silence, light, and slow wonder of the world's vanishing ice.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            maxWidth: '1000px',
            width: '100%',
          }}
        >
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              style={{
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '16px',
                padding: '32px 24px',
                background: 'rgba(255,255,255,0.04)',
              }}
            >
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', margin: 0 }}>
                {c.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", opacity: 0.7, lineHeight: 1.7 }}>
                {c.text}
              </p>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'transparent',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.4)',
            borderRadius: '999px',
            padding: '12px 28px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontSize: '11px',
            cursor: 'pointer',
          }}
        >
          Back to top
        </button>
      </section>
    </div>
  )
}

export default App