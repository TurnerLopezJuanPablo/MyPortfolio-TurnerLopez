import '../../styles/StudyCard.css'
import { LightContext } from '../Studies'
import { useEffect, useRef, useContext } from 'react'

const StudyCard = () => {
    const studyCard = useRef(null)
    const radialBackground = useRef(null)
    const useLight = useContext(LightContext)

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = studyCard.current.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            if (radialBackground.current) {
                radialBackground.current.style.setProperty('--x-pos', `${x}px`)
                radialBackground.current.style.setProperty('--y-pos', `${y}px`)
                radialBackground.current.style.opacity = 1
            }
        }

        const handleMouseLeave = () => {
            if (radialBackground.current) {
                radialBackground.current.style.opacity = 0
            }
        }

        const card = studyCard.current
        card.addEventListener('mousemove', handleMouseMove)
        card.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            card.removeEventListener('mousemove', handleMouseMove)
            card.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <div className='studyCard' ref={studyCard}>
            {useLight && (
                <>
                    <div
                        className="studyCard-mouseFollowerDiv"
                        ref={radialBackground}
                    />
                </>
            )}
            <p>Hola</p>
        </div>
    )
}

export default StudyCard
