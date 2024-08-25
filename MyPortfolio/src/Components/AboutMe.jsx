import Section from '../Components/MiniComponents/Section'
import '../styles/AboutMe.css'

import { useContext, useRef, useEffect, useState } from "react"

import { useLanguage } from '../customHooks/useLanguageHook'
import { LanguageContext } from './Context/LanguageContext'

import MyPhoto from '../assets/MyPhoto.jpg'

const LanguageResources = {
  SPANISH: {
    title: 'Sobre mí',
    paragraph1: "Graduado como <span class='aboutMe-color-1'>Analista de Sistemas</span> en el Instituto Tecnológico O.R.T. Me especializo en el área de desarrollo tanto como <span class='aboutMe-color-2'>Front-End</span> con <span class='aboutMe-color-2'>Vue.JS</span> como principal tecnología, <span class='aboutMe-color-2'>React.JS</span>, o como <span class='aboutMe-color-2'>Back-End</span> con tecnologías como <span class='aboutMe-color-2'>Node.JS, Express, Java o Asp.Net Core.</span>",
    paragraph2: "He realizado cursos y proyectos personales sobre <span class='aboutMe-color-2'>Tecnologías Web Modernas</span>, lo que me ha permitido ganar <span class='aboutMe-color-3'>experiencia</span> en varios lenguajes de programación y tecnologías como las mencionadas anteriormente, y quiero destacar mis estudios en <span class='aboutMe-color-1'>UTN</span> con la <span class='aboutMe-color-1'>Diplomatura en Bases de Datos</span> que he realizado y terminado de manera satisfactoria.  Soy una persona <span class='aboutMe-color-3'>responsable, ordenada</span> y estoy siempre dispuesto a <span class='aboutMe-color-3'>aprender</span> cosas nuevas que me ayuden a formarme como un mejor profesional.",
    paragraph3: "Actualmente me encuentro trabajando en el <span class='aboutMe-color-1'>Centro de Capitanes de Ultramar y Oficiales de Marina Mercante (CCUOMM)</span> en el área de <span class='aboutMe-color-1'>Soporte Técnico interno</span>, encargándome del <span class='aboutMe-color-3'>mantenimiento, optimización y reparación de equipos informáticos.</span> Mis responsabilidades incluyen la <span class='aboutMe-color-2'>resolución de problemas técnicos, la implementación de actualizaciones de software, la configuración de redes y tecnologías.</span>",
    listItem1: 'Formación y Experiencia',
    listItem2: 'Habilidades y Tecnologías',
    listItem3: 'Cualidades y Aptitudes'
  },
  ENGLISH: {
    title: 'About Me',
    paragraph1: "Graduated as a <span class='aboutMe-color-1'>Systems Analyst</span> from the Instituto Tecnológico O.R.T. I specialize in development both as a <span class='aboutMe-color-2'>Front-End</span> with <span class='aboutMe-color-2'>Vue.JS</span> as the main technology, <span class='aboutMe-color-2'>React.JS</span>, and as a <span class='aboutMe-color-2'>Back-End</span> with technologies such as <span class='aboutMe-color-2'>Node.JS, Express, Java, or Asp.Net Core.</span>",
    paragraph2: "I have completed courses and personal projects on <span class='aboutMe-color-2'>Modern Web Technologies</span>, which has allowed me to gain <span class='aboutMe-color-3'>experience</span> in various programming languages and technologies mentioned above. I also want to highlight my studies at <span class='aboutMe-color-1'>UTN</span> with the <span class='aboutMe-color-1'>Diploma in Databases</span> that I have completed successfully. I am a <span class='aboutMe-color-3'>responsible and organized</span> person, always willing to <span class='aboutMe-color-3'>learn</span> new things that help me grow as a better professional.",
    paragraph3: "I am currently working at the <span class='aboutMe-color-1'>Centro de Capitanes de Ultramar y Oficiales de Marina Mercante (CCUOMM)</span> in the <span class='aboutMe-color-1'>Internal Technical Support</span> area, handling <span class='aboutMe-color-3'>maintenance, optimization, and repair of computer equipment.</span> My responsibilities include <span class='aboutMe-color-2'>troubleshooting technical issues, implementing software updates, and configuring networks and technologies.</span>",
    listItem1: 'Studies and Projects',
    listItem2: 'Languages and Technologies',
    listItem3: 'Skills and Attributes'
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
