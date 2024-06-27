import '../styles/Footer.css'
import emoji from '../assets/emoji.png'

import { useState, useEffect, useContext } from 'react'

import { useLanguage } from '../customHooks/useLanguageHook'
import { LanguageContext } from './Context/LanguageContext'

const API_URL = import.meta.env.VITE_API_URL
const url = new URL(API_URL)

const LanguageResources = {
    SPANISH: {
        timePassed: 'Tiempo total pasado: ',
        myRights: ' Todos los derechos reservados',
        likesMessage: ' personas les gustó la página',
        a: 'A '
    },
    ENGLISH: {
        timePassed: 'Total time passed: ',
        myRights: ' All rights reserved',
        likesMessage: ' people liked the page',
    }
};


import '../styles/HeartButton.scss'

// eslint-disable-next-line react/prop-types
const HeartButton = ({ onClick }) => {
    const [liked, setLiked] = useState(JSON.parse(localStorage.getItem('isLikedPage')) || false)
    const [canClick, setCanClick] = useState(true)

    const heartit = (e) => {
        const hearts = document.createElement('div')
        hearts.innerHTML = `
      <svg class="heart heart-pop one" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg>
      <svg class="heart heart-pop two" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg>
      <svg class="heart heart-pop three" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg>
      <svg class="heart heart-pop four" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg>
      <svg class="heart heart-pop five" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg>
      <svg class="heart heart-pop six" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg>
      <svg class="heart heart-pop seven" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg>
      <svg class="heart heart-pop eight" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg>
      <svg class="heart heart-pop nine" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg>
    `
        e.target.appendChild(hearts)
        setLiked(!liked)
        setTimeout(function () {
            e.target.removeChild(hearts)
        }, 3000)
    }

    const handleClick = (e) => {
        if (!canClick) return

        setCanClick(false)
        setTimeout(() => {
            setCanClick(true)
        }, 1500)

        onClick()
        heartit(e)
    }

    return (
        <button className={`heart-btn ${liked ? 'liked' : ''}`} onClick={handleClick}>
            <svg className="heart heart-icon" viewBox="0 0 32 29.6">
                <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
            </svg>
        </button>
    )
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

    const [likes, setLikes] = useState(0)
    const [likedPage, setLikedPage] = useState(JSON.parse(localStorage.getItem('isLikedPage')) || false)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: { 'content-type': 'application/json' },
                })

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const result = await response.json()
                const { likes } = result[0]
                setLikes(likes)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    const putData = async (newLikes) => {
        try {
            const response = await fetch(`${url}/1`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ "likes": newLikes })
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
        } catch (error) {
            setError(error)
        }
    }

    const handleClick = () => {
        setLikedPage(!likedPage)
    }

    useEffect(() => {
        if (!isLoading) {
            let newLikes

            if (likedPage) { newLikes = likes + 1 }
            else { newLikes = likes - 1 }

            setLikes(newLikes)
            putData(newLikes)
            localStorage.setItem('isLikedPage', likedPage)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [likedPage])

    const useLanguageContext = useContext(LanguageContext)
    const { getTranslation } = useLanguage(LanguageResources, useLanguageContext.selectedLanguage)

    return (
        <footer>
            <article className='footer-article-2'>
                {/* Loading */}
                {isLoading && <p>Loading...</p>}

                {/* Error */}
                {error && <p>Error: {error.message}</p>}

                {/* Data */}
                {!isLoading && !error && (
                    <div className='footer-article'>
                        <p>{getTranslation('a')} <span className='show-number'>{likes}</span> {getTranslation('likesMessage')}</p>
                        <HeartButton onClick={handleClick} />
                    </div>
                )}
            </article>

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