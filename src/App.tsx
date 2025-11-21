import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import { Interface } from './components/Interface'
import { Intro } from './components/Intro'
import { useState, useRef, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [activeMonthIndex, setActiveMonthIndex] = useState(0)
  const [started, setStarted] = useState(false)
  const [muted, setMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Handle BGM
  useEffect(() => {
    if (started && audioRef.current) {
      audioRef.current.volume = 0.3
      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked, will play on interaction")
      })
    }
  }, [started])

  // Handle Mute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted
    }
  }, [muted])

  return (
    <>
      {/* Background Music */}
      <audio ref={audioRef} src="/bgm.mp3" loop />

      <AnimatePresence>
        {!started && <Intro onComplete={() => setStarted(true)} />}
      </AnimatePresence>
      
      {started && (
        <>
          <Canvas shadows camera={{ position: [0, 3, 8], fov: 42 }}>
            <color attach="background" args={['#303030']} />
            <Experience activeMonthIndex={activeMonthIndex} />
          </Canvas>
          <Interface activeMonthIndex={activeMonthIndex} setActiveMonthIndex={setActiveMonthIndex} />
          
          {/* Global Mute Button */}
          <button 
            onClick={() => setMuted(!muted)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              zIndex: 100,
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px'
            }}
          >
            {muted ? '🔇' : '🔊'}
          </button>
        </>
      )}
    </>
  )
}

export default App
