import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { playHoverSound, playClickSound } from '../utils/audio'

interface IntroProps {
  onComplete: () => void
}

// ... Layout components remain unchanged ...
const Layout1 = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', height: '100%', gap: '20px', padding: '20px', boxSizing: 'border-box', background: '#f0f0f0' }}>
    <div style={{ background: '#ddd', height: '100%' }} /> {/* Sidebar */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ background: '#333', height: '60px', width: '100%' }} /> {/* Nav */}
      <div style={{ background: '#ccc', height: '300px', width: '100%' }} /> {/* Hero */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
        <div style={{ background: '#ddd', height: '150px' }} />
        <div style={{ background: '#ddd', height: '150px' }} />
        <div style={{ background: '#ddd', height: '150px' }} />
      </div>
    </div>
  </div>
)

const Layout2 = () => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '20px', padding: '40px', boxSizing: 'border-box', background: '#e0e0e0' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ background: '#000', height: '40px', width: '150px' }} /> {/* Logo */}
        <div style={{ background: '#999', height: '20px', width: '400px' }} /> {/* Menu */}
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', height: '100%' }}>
      <div style={{ background: '#fff', height: '100%', border: '1px solid #999' }} /> {/* Main Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ background: '#bbb', height: '200px' }} />
        <div style={{ background: '#bbb', height: '200px' }} />
        <div style={{ background: '#bbb', flex: 1 }} />
      </div>
    </div>
  </div>
)

const Layout3 = () => (
  <div style={{ height: '100%', padding: '0', background: '#111', color: '#333' }}>
     <div style={{ height: '80px', borderBottom: '2px solid #333', display: 'flex', alignItems: 'center', padding: '0 50px' }}>
         <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#333' }} />
     </div>
     <div style={{ padding: '50px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
         {[...Array(12)].map((_, i) => (
             <div key={i} style={{ background: '#222', height: '200px' }} />
         ))}
     </div>
  </div>
)

const Layout4 = () => (
  <div style={{ height: '100%', background: '#fff', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ width: '60%', height: '80px', background: '#000', margin: '0 auto' }} />
      </div>
      <div style={{ columns: '3 300px', gap: '40px' }}>
          {[...Array(6)].map((_, i) => (
              <div key={i} style={{ marginBottom: '40px', breakInside: 'avoid' }}>
                  <div style={{ height: '200px', background: '#ddd', marginBottom: '10px' }} />
                  <div style={{ height: '20px', background: '#eee', width: '90%', marginBottom: '5px' }} />
                  <div style={{ height: '20px', background: '#eee', width: '60%' }} />
              </div>
          ))}
      </div>
  </div>
)

export const Intro = ({ onComplete }: IntroProps) => {
  const [phase, setPhase] = useState<'start' | 'video' | 'continue'>('start')
  const [layoutIndex, setLayoutIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [animInterval, setAnimInterval] = useState<number | null>(null)
  
  useEffect(() => {
      if (phase === 'video') {
          // Faster cuts: 80ms instead of 150ms
          const interval = setInterval(() => {
              setLayoutIndex(prev => (prev + 1) % 4)
          }, 80)
          setAnimInterval(Number(interval))

          if (videoRef.current) {
              videoRef.current.currentTime = 0
              videoRef.current.muted = false
              videoRef.current.volume = 1.0
              // Speed up video playback to make sound finish faster
              videoRef.current.playbackRate = 1.5
              videoRef.current.play().catch(e => console.error("Video play failed", e))
          }

          return () => clearInterval(interval)
      }
  }, [phase])

  const handleStartClick = () => {
      playClickSound()
      setPhase('video')
  }

  const handleVideoEnded = () => {
      if (animInterval !== null) clearInterval(animInterval)
      setPhase('continue')
  }

  const handleContinueClick = () => {
      playClickSound()
      onComplete()
  }

  const Layouts = [Layout1, Layout2, Layout3, Layout4]
  const CurrentLayout = Layouts[layoutIndex]

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'black',
        zIndex: 1000,
        overflow: 'hidden',
        cursor: 'default',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* Video Element */}
      <video 
        ref={videoRef}
        src="/intro.mp4"
        style={{ 
            position: 'absolute', 
            opacity: 0, 
            pointerEvents: 'none',
            width: '1px',
            height: '1px'
        }}
        playsInline
        onEnded={handleVideoEnded}
      />

      {/* Animation Layer */}
      {phase === 'video' && (
        <div style={{ 
            position: 'absolute', 
            top: 0, left: 0, right: 0, bottom: 0, 
            opacity: 0.6, 
            filter: 'grayscale(100%) blur(2px)' 
        }}>
            <CurrentLayout />
        </div>
      )}

      {/* Overlay */}
      {(phase === 'video' || phase === 'continue') && (
        <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)'
        }} />
      )}

      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        width: '100%'
      }}>
          {/* Headline - Only shows in Video and Continue phases */}
          <AnimatePresence>
            {(phase === 'video' || phase === 'continue') && (
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                        color: 'white',
                        fontFamily: 'Impact, sans-serif', 
                        fontSize: 'min(5rem, 10vw)', 
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        letterSpacing: '5px',
                        textShadow: '0 0 30px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,1)',
                        margin: '0 0 40px 0',
                        padding: '20px',
                        background: 'rgba(0,0,0,0.5)', 
                        backdropFilter: 'blur(5px)'
                    }}
                >
                    HR AI AGENT REPORT
                </motion.h1>
            )}
          </AnimatePresence>

          {/* Buttons */}
          <AnimatePresence mode="wait">
            {phase === 'start' && (
                <motion.button
                    key="start-btn"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    whileHover={{ scale: 1.1, backgroundColor: '#fff', color: '#000' }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={playHoverSound}
                    onClick={handleStartClick}
                    style={{
                        padding: '20px 80px',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: 'white',
                        background: 'transparent',
                        border: '2px solid white',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '8px'
                    }}
                >
                    Start
                </motion.button>
            )}

            {phase === 'continue' && (
                <motion.button
                    key="continue-btn"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.1, backgroundColor: '#fff', color: '#000' }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={playHoverSound}
                    onClick={handleContinueClick}
                    style={{
                        padding: '15px 60px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: 'white',
                        background: 'transparent',
                        border: '2px solid white',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '4px'
                    }}
                >
                    Continue
                </motion.button>
            )}
          </AnimatePresence>
      </div>
    </motion.div>
  )
}
