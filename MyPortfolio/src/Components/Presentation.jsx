import '../styles/Presentation.css'
import computerIllustration from '../assets/computer-illustration.png'
import locationIcon from '../assets/icons8-location-48.png'

import { useEffect, useState, useContext } from 'react'

import { useLanguage } from '../customHooks/useLanguageHook'
import { LanguageContext } from './Context/LanguageContext'

const LanguageResources = {
  SPANISH: {
    systems: 'Analista de sistemas',
    desc: 'Explorando nuevas tecnologías',
    btnText: 'escritura de texto',
    activate: 'Activar',
    deactivate: 'Desactivar'
  },
  ENGLISH: {
    systems: 'Systems Analyst',
    desc: 'Exploring new technologies',
    btnText: 'text writing',
    activate: 'Activate',
    deactivate: 'Deactivate'
  }
}

export const Presentation = () => {
  const fullName = 'Juan Pablo, Turner Lopez'
  const [displayedText, setDisplayedText] = useState(fullName.split(''))
  const [isFull, setIsFull] = useState(true)

  const [isWritting, setIsWritting] = useState(true)

  const handleClick = () => {
    setIsWritting(!isWritting)
  }

  const [start, setStart] = useState(false)

  setTimeout(() => {
    setStart(true)
  }, 3000)

  useEffect(() => {
    if (start) {
      isFull ? clearText(displayedText) : writeText('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFull, start])

  function clearText(text) {
    if (text.length > 0) {
      setTimeout(() => {
        const newText = text.slice(0, -1)
        setDisplayedText(newText)
        clearText(newText)
      }, getRandomNumber())
    } else {
      setTimeout(() => {
        setIsFull(false)
        setCont(0)
      }, 3000)
    }
  }

  const [cont, setCont] = useState(0)

  function writeText(text) {
    setTimeout(() => {
      setCont(cont + 1);

      if (cont < fullName.length) {
        const newText = text + fullName[cont]
        setDisplayedText(newText);
      }

    }, getRandomNumber());
  }

  useEffect(() => {
    if (!isFull) {
      writeText(displayedText)
      if (displayedText.length === fullName.length) {
        setTimeout(() => {
          setIsFull(true)
        }, 3000);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFull, displayedText])

  function getRandomNumber() {
    return Math.floor(Math.random() * (250 - 180 + 1)) + 180
  }

  // The name should be 'show|' but idk what's the name of that thing
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setShow(prevShow => !prevShow)
      }, 400)

      return () => clearInterval(interval)
    }
  }, [start])

  const useLanguageContext = useContext(LanguageContext)
  const { getTranslation } = useLanguage(LanguageResources, useLanguageContext.selectedLanguage)

  return (
    <section id='presentation'>
      <div className='presentation-mainDiv'>
        <h1 className='presentation-title'>
          <span className='presentation-span'>.</span>
          {isWritting ? (
            <>
              {displayedText}
              {show ? '|' : ''}
            </>
          ) : (
            fullName
          )}
        </h1>
      </div>

      <div className='presentation-section'>
        <div>
          <h2 className='presentation-subTitle'>
            <p>💻 {getTranslation('systems')}</p>
            <p>🔥 Fullstack Developer</p>
            <p>🤔 {getTranslation('desc')}</p>
          </h2>

          <h3 className='presentation-h3'>
            <img src={locationIcon} alt='Location Icon'></img>
            Buenos Aires - Argentina.
          </h3>

          <div className='presentation-btn-div'>
            <button type='button' className='presentation-button' onClick={handleClick}>{!isWritting ? getTranslation('activate') : getTranslation('deactivate')} {getTranslation('btnText')}</button>
          </div>
        </div>

        <div>
          <img src={computerIllustration} alt='Computer Illustration' className='presentation-img'></img>
        </div>
      </div>
    </section >
  )
}