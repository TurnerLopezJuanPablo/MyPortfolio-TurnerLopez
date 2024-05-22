import '../styles/Presentation.css'
import computerIllustration from '../../public/computer-illustration.png'
import locationIcon from '../assets/icons8-location-48.png'

import { useEffect, useState } from 'react'

import Section from "../Section"

export const Presentation = () => {
  const fullName = 'Juan Pablo, Turner Lopez'
  const [displayedText, setDisplayedText] = useState(fullName.split(''))
  const [isFull, setIsFull] = useState(true)

  useEffect(() => {
    isFull ? clearText(displayedText) : writeText('')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFull])

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
    return Math.floor(Math.random() * (280 - 180 + 1)) + 180
  }

  // The name should be 'show|' but idk what's the name of that thing
  const [show, setShow] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(prevShow => !prevShow)
    }, 400)

    return () => clearInterval(interval)
  }, [])

  return (
    <Section idSection='presentation' title='Presentación' iconRoute='presentationIcon'>
      <h1 className='presentation-title'>
        <span className='presentation-span'>a</span>{displayedText}{show ? '|' : ''}
      </h1>
      <div className='presentation-section'>
        <div>
          <h2 className='presentation-subTitle'>
            <li>Analista de Sistemas</li>
            <li>Fullstack Developer</li>
          </h2>
          <h3 className='presentation-h3'>
            <img src={locationIcon} alt='Location Icon'></img>
            Buenos Aires - Argentina.
          </h3>
        </div>

        <div>
          <img src={computerIllustration} alt='Computer Illustration'></img>
        </div>
      </div>
    </Section>
  )
}