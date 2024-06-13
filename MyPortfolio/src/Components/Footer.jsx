import '../styles/Footer.css'
import emoji from '../assets/emoji.png'

import { useState, useEffect, useContext } from 'react'

import { useLanguage } from '../customHooks/useLanguageHook'
import { LanguageContext } from './Context/LanguageContext'

const LanguageResources = {
    SPANISH: {
        timePassed: 'Tiempo total pasado: ',
        myRights: ' Todos los derechos reservados',
    },
    ENGLISH: {
        timePassed: 'Total time passed: ',
        myRights: ' All rights reserved',
    }
}

export const Footer = () => {
    const initialCount = parseInt(localStorage.getItem('timeSpentOnPage') || '0', 10)
    const [count, setCount] = useState(initialCount)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                const newCount = prevCount + 1
                localStorage.setItem('timeSpentOnPage', newCount)
                return newCount
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600)
        const mins = Math.floor((seconds % 3600) / 60)
        const secs = seconds % 60

        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    const useLanguageContext = useContext(LanguageContext)
    const { getTranslation } = useLanguage(LanguageResources, useLanguageContext.selectedLanguage)

    return (
        <footer>
            <article className='footer-article'>
                <p>{getTranslation('timePassed')}</p>
                <span className='footer-styled'>{formatTime(count)}</span>
            </article>

            <section className="footer">
                <div className="footer-content">
                    <div className="footer-photo">
                        <img src={emoji} alt="My Photo" height={60} />
                    </div>

                    <div className="footer-text">
                        <p>Turner Lopez, Juan Pablo</p>
                        <p>&copy; {new Date().getFullYear()} {getTranslation('myRights')}</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}