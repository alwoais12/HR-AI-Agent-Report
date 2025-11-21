// Audio utilities handling file playback

const hoverAudio = new Audio('/hover.wav')
const clickAudio = new Audio('/click.wav')

// Preload sounds
hoverAudio.volume = 0.4
clickAudio.volume = 0.5

export const playHoverSound = () => {
    try {
        hoverAudio.currentTime = 0
        hoverAudio.play().catch(() => {})
    } catch (e) {}
}

export const playClickSound = () => {
    try {
        clickAudio.currentTime = 0
        clickAudio.play().catch(() => {})
    } catch (e) {}
}

// Deprecated synthesis functions (kept empty to avoid breaking imports if any remain)
export const startCrowdAmbience = () => {}
export const stopCrowdAmbience = () => {}
export const playCameraShutter = () => {}
export const playShutterBurst = () => {}
