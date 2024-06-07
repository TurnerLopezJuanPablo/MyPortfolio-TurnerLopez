import '../styles/Scroller.scss'

import Section from '../Components/MiniComponents/Section'

import { useEffect, useRef, useState } from 'react'

// Skills icons imports - Skills icons imports - START
import JavaScript from '../assets/skillsIcons/javascript.svg'
import Node from '../assets/skillsIcons/nodejs.svg'
import Express from '../assets/skillsIcons/expressjs.svg'
import TypeScript from '../assets/skillsIcons/typescript.svg'
import HTML from '../assets/skillsIcons/html5.svg'
import CSS from '../assets/skillsIcons/css.svg'
import Bootstrap from '../assets/skillsIcons/bootstrap5.svg'
import Vue from '../assets/skillsIcons/vuejs.svg'
import React from '../assets/skillsIcons/react.svg'
import Sequelize from '../assets/skillsIcons/sequelize.svg'
import Axios from '../assets/skillsIcons/axios.png'
import Pinia from '../assets/skillsIcons/pinia.svg'
import JWT from '../assets/skillsIcons/jwt.svg'
import BCRYPT from '../assets/skillsIcons/bcrypt.svg'
import JAVA from '../assets/skillsIcons/java.svg'
import OOP from '../assets/skillsIcons/oop.svg'
import Csharp from '../assets/skillsIcons/csharp.svg'
import ASPNET from '../assets/skillsIcons/aspnet.png'
import NETCORE from '../assets/skillsIcons/netcore.svg'
import SQL from '../assets/skillsIcons/sql.svg'
import UML from '../assets/skillsIcons/uml.svg'
import MVC from '../assets/skillsIcons/mvc.svg'
// Skills icons imports - Skills icons imports - Skills icons imports  
const skills = [
  { name: 'JavaScript', image: JavaScript },
  { name: 'Node.JS', image: Node },
  { name: 'Express', image: Express },
  { name: 'TypeScript', image: TypeScript },
  { name: 'HTML', image: HTML },
  { name: 'CSS', image: CSS },
  { name: 'Bootstrap 5', image: Bootstrap },
  { name: 'Vue.JS', image: Vue },
  { name: 'React.JS', image: React },
  { name: 'Sequelize', image: Sequelize },
  { name: 'Axios', image: Axios },
  { name: 'Pinia', image: Pinia },
  { name: 'JWT', image: JWT },
  { name: 'BCRYPT', image: BCRYPT },
  { name: 'JAVA', image: JAVA },
  { name: 'OOP', image: OOP },
  { name: 'C#', image: Csharp },
  { name: 'ASP.NET', image: ASPNET },
  { name: '.NET Core', image: NETCORE },
  { name: 'SQL', image: SQL },
  { name: 'UML', image: UML },
  { name: 'MVC', image: MVC },
]
// Skills icons imports - Skills icons imports - END

const useWindowResize = () => {
  const [windowWidthSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowWidthSize
}

export const Skills = () => {
  const scrollerRef = useRef(null)
  const [isSliding, setIsSliding] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(true)
  const [velocity, setVelocity] = useState(1)
  const [direction, setDirection] = useState(true) // True = ToRight // False = ToLeft

  useEffect(() => {
    const scroller = scrollerRef.current
    const scrollAmount = scroller.scrollWidth / 2

    let animationFrameId

    const animate = () => {
      setScrollPosition((prev) => {
        let newPosition = prev + velocity

        if (direction) {
          if (newPosition >= scrollAmount) {
            newPosition = 0
          }
        } else {
          if (newPosition < 0) {
            newPosition = scrollAmount - velocity
          }
        }

        scroller.scrollTo(newPosition, 0)
        scroller.setAttribute('data-animated', true)
        return newPosition
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    if (isSliding) {
      animationFrameId = requestAnimationFrame(animate)
    }

    return () => cancelAnimationFrame(animationFrameId)
  }, [isSliding, scrollPosition, velocity, direction])

  const handleClick = () => {
    setIsSliding(!isSliding)
  }

  const handleInput = (event) => {
    const value = parseInt(event.target.value, 10)
    value >= 1 ? setDirection(true) : setDirection(false)
    setVelocity(value)
    console.log(accordionRef.current.scrollHeight)
  }

  const [showCards, setShowCards] = useState(false)

  const handleClick2 = () => {
    setShowCards(!showCards)
  }

  const accordionRef = useRef(null)
  const newWidth = useWindowResize()
  const [accHeight, setAccHeight] = useState(null)

  useEffect(() => {
    if (accordionRef.current) { setAccHeight(accordionRef.current.scrollHeight) }
  }, [newWidth])

  return (
    <Section idSection="skills" title="Habilidades">
      <p className='skills-subtitle'>{"No es suficiente ser 'bueno' en programación, debes esforzarte por ser 'excelente' 😉"}</p>

      <div className="skills-scroller" ref={scrollerRef}>
        <div className="skills-scroller__inner scroller__inner">
          {skills.concat(skills).map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="card-skills">
                <img src={skill.image} alt={skill.name} className="scroller-img" />
                <p className="scroller-text">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="checkbox-container">
          <input type="checkbox" id="sliderCheckbox" checked={isSliding} onChange={handleClick} />
          <label htmlFor="sliderCheckbox">Slider</label>

          <p style={{ userSelect: 'none' }}>|</p>

          <div className='slider-velocity-container'>
            <p>Velocity: </p><span className='slider-velocity'>{velocity}</span>
          </div>
        </div>

        <div className="slidecontainer">
          <input type="range" min={-10} max={10} value={velocity} onChange={handleInput} className="slider" id="slider" />
        </div>
      </div>

      <article className="show-cards-container">
        <p className='skills-subtitle'>Clickeando el botón de debajo podrás ver mis habilidades por separado 👌</p>

        <div>
          <div className='skills-center'>
            <button onClick={handleClick2} id="btn-show-cards" />
          </div>

          <div
            ref={accordionRef}
            className='panel'
            style={{
              maxHeight: showCards ? `${accHeight}px` : '0px',
              transition: 'max-height 2s ease-in-out',
            }}
          >
            <div className="skills-cards-normal">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="card-skills card-absolute">
                    <p className="p-normal-cards">{index + 1}</p>
                    <img src={skill.image} alt={skill.name} className="scroller-img" />
                    <p className="scroller-text">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Section>
  )
}