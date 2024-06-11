import '../../styles/StudyCard.css'
import { LightContext } from '../Studies'
import { useEffect, useRef, useContext } from 'react'

// eslint-disable-next-line react/prop-types
const StudyCard = ({ image, title, school, time, text }) => {
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
        <article className='studyCard' ref={studyCard}>
            {useLight && (<><div className="studyCard-mouseFollowerDiv" ref={radialBackground} /></>)}

            <div className='studyCard-header'>
                <img src={image} alt={'Imagen ' + school} />

                <div className='studyCard-header-titles'>
                    <h3>{school}</h3>
                    <h4>{time}</h4>
                    <h4 className='h4-alt'>{title}</h4>
                </div>
            </div>

            <div className='studyCard-text'>
                <p>{text}</p>
            </div>
        </article>
    )
}

export default StudyCard
