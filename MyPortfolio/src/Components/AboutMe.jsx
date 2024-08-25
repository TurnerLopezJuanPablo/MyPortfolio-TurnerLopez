import Section from '../Components/MiniComponents/Section'
import '../styles/AboutMe.css'

import { useContext, useRef, useEffect, useState } from "react"

import { useLanguage } from '../customHooks/useLanguageHook'
import { LanguageContext } from './Context/LanguageContext'

import MyPhoto from '../assets/MyPhoto.jpg'

const LanguageResources = {
  SPANISH: {
    title: 'Sobre mí',
    paragraph1: "Recientemente graduado como <span class='aboutMe-color-1'>Analista de Sistemas</span> en el Instituto Tecnológico O.R.T. Me especializo en el área de desarrollo tanto como <span class='aboutMe-color-2'>Front-End</span> con <span class='aboutMe-color-2'>Vue.JS</span> como principal tecnología, o como <span class='aboutMe-color-2'>Back-End</span> con <span class='aboutMe-color-2'>Node.JS, Express, Java o Asp.Net Core.</span>",
    paragraph2: "Como proyecto final de la carrera de sistemas, con mi equipo, <span class='aboutMe-color-1'>desarrollamos un software para el Club Macabi</span> el cual consistió en una aplicación para que los profesores del club pudieran hacer un mejor seguimiento de sus alumnos en trabajos como la asistencia, entrenamientos, torneos o acceder a los datos personales de estos de ser necesario. He realizado <span class='aboutMe-color-1'>cursos y proyectos personales</span> sobre tecnologías web modernas, lo que me ha permitido ganar experiencia en varios lenguajes de programación.",
    paragraph3: "Hoy me encuentro en búsqueda de mi primer empleo en el área de TI, estoy constantemente aprendiendo sobre nuevas tecnologías. Soy una persona <span class='aboutMe-color-3'>responsable, ordenada</span> y estoy siempre dispuesto a <span class='aboutMe-color-3'>aprender</span> cosas nuevas que me ayuden a formarme como un mejor profesional. Actualmente estoy cursando una <span class='aboutMe-color-1'>Diplomatura en Bases de Datos</span> en <span class='aboutMe-color-1'>UTN</span> con finalización a mediados de julio.",
    listItem1: 'Estudios y Proyectos',
    listItem2: 'Lenguajes y Tecnologías',
    listItem3: 'Mis Aptitudes'
  },
  ENGLISH: {
    title: 'About Me',
    paragraph1: "Recently graduated as a <span class='aboutMe-color-1'>Systems Analyst</span> from the Instituto Tecnológico O.R.T. I specialize in development both as a <span class='aboutMe-color-2'>Front-End</span> with <span class='aboutMe-color-2'>Vue.JS</span> as the main technology, and as a <span class='aboutMe-color-2'>Back-End</span> with <span class='aboutMe-color-2'>Node.JS, Express, Java or Asp.Net Core</span>.",
    paragraph2: "As a final project for my systems career, my team and I <span class='aboutMe-color-1'>developed a software for the Macabi Club</span>, which consisted of an application for the club teachers to have better track of their students' work such as attendance, training, tournaments, or accessing their personal data if needed. I have taken <span class='aboutMe-color-1'>courses and made personal projects</span> on modern web technologies, which has allowed me to gain experience in various programming languages.",
    paragraph3: "Today I am looking for my first job in the IT field, I am constantly learning about new technologies. I am a <span class='aboutMe-color-3'>responsible, organized</span> person and I am always willing to <span class='aboutMe-color-3'>learn</span> new things that help me become a better professional. I am currently taking a <span class='aboutMe-color-1'>Diploma in Databases</span> at <span class='aboutMe-color-1'>UTN</span> with completion expected by mid-July.",
    listItem1: 'Studies and Projects',
    listItem2: 'Languages and Technologies',
    listItem3: 'My Skills'
  }
}

export const AboutMe = () => {
  const useLanguageContext = useContext(LanguageContext)
  const { getTranslation } = useLanguage(LanguageResources, useLanguageContext.selectedLanguage)
  
  const aboutMeDiv = useRef(null)
  const [colorElements, setColorElements] = useState({
    color1: [],
    color2: [],
    color3: [],
  })

  useEffect(() => {
    if (aboutMeDiv.current) {
      const color1Elements = aboutMeDiv.current.querySelectorAll('.aboutMe-color-1')
      const color2Elements = aboutMeDiv.current.querySelectorAll('.aboutMe-color-2')
      const color3Elements = aboutMeDiv.current.querySelectorAll('.aboutMe-color-3')

      setColorElements({
        color1: color1Elements,
        color2: color2Elements,
        color3: color3Elements,
      });
    }
  }, [useLanguageContext.selectedLanguage])

  const handleMouseOver = (e) => {
    const isOverColor1 = Array.from(colorElements.color1).includes(e.target)
    const isOverColor2 = Array.from(colorElements.color2).includes(e.target)
    const isOverColor3 = Array.from(colorElements.color3).includes(e.target)

    const color1Arr = Array.from(colorElements.color1)
    const color2Arr = Array.from(colorElements.color2)
    const color3Arr = Array.from(colorElements.color3)

    color1Arr.forEach(el => el.classList.remove('hover1'))
    color2Arr.forEach(el => el.classList.remove('hover2'))
    color3Arr.forEach(el => el.classList.remove('hover3'))

    if (isOverColor1) { color1Arr.forEach(el => el.classList.add('hover1')) }
    else if (isOverColor2) { color2Arr.forEach(el => el.classList.add('hover2')) }
    else if (isOverColor3) { color3Arr.forEach(el => el.classList.add('hover3')) }
  }

  return (
    <Section idSection='aboutMe' title={getTranslation('title')}>
      <div className="aboutMe-flex">
        <img src={MyPhoto} alt='My Photo' className="aboutMe-myPhoto" />
        <div className="aboutMe-div-p" ref={aboutMeDiv} onMouseOver={handleMouseOver}>
          <p dangerouslySetInnerHTML={{ __html: getTranslation('paragraph1') }} />
          <p dangerouslySetInnerHTML={{ __html: getTranslation('paragraph2') }} />
          <p dangerouslySetInnerHTML={{ __html: getTranslation('paragraph3') }} />

          <div className="aboutMe-dots aboutMe-div-p">
            <li className="aboutMe-color-1">{getTranslation('listItem1')}</li>
            <li className="aboutMe-color-2">{getTranslation('listItem2')}</li>
            <li className="aboutMe-color-3">{getTranslation('listItem3')}</li>
          </div>
        </div>
      </div>
    </Section>
  )
}
