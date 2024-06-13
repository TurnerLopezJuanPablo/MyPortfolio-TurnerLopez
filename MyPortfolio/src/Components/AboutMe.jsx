import Section from '../Components/MiniComponents/Section'
import '../styles/AboutMe.css'

import { useEffect, useContext } from "react"

import { useLanguage } from '../customHooks/useLanguageHook'
import { LanguageContext } from './Context/LanguageContext'

import MyPhoto from '../assets/MyPhoto.jpg'

const LanguageResources = {
  SPANISH: {
    title: 'Sobre mí',
    // ***********
    // Paragraph 1
    paragraph1a: 'Recientemente graduado como ',
    paragraph1b: 'Analista de Sistemas',
    paragraph1c: ' en el Instituto Tecnológico O.R.T. Me especializo en el área de desarrollo tanto como ',
    paragraph1d: ' como principal tecnología, o como ',
    paragraph1e: ' o ',
    paragraph1with: ' con ',
    // Paragraph 1
    // ***********
    // Paragraph 2
    paragraph2a: 'Como proyecto final de la carrera de sistemas, con mi equipo, ',
    paragraph2b: ' desarrollamos un software para el Club Macabi ',
    paragraph2c: ' el cual consistió en una aplicación para que los profesores del club pudieran hacer un mejor seguimiento sus alumnos en trabajos como la asistencia, entrenamientos, torneos o acceder a los datos personales de estos de ser necesario. He realizado ',
    paragraph2d: ' cursos y proyectos personales ',
    paragraph2e: ' sobre tecnologías web modernas, lo que me ha permitido ganar experiencia en varios lenguajes de programación.',
    // Paragraph 2
    // ***********
    // Paragraph 3
    paragraph3a: 'Hoy me encuentro en búsqueda de mi primer empleo en area de TI, estoy constantemente aprendiendo sobre nuevas tecnologías. Soy una persona ',
    paragraph3b: ' responsable, ordenada ',
    paragraph3c: '  y estoy siempre dispuesto a ',
    paragraph3d: ' aprender ',
    paragraph3e: ' cosas nuevas que me ayuden a formarme como un mejor profesional.',
    paragraph3f: ' Actualmente estoy cursando una ',
    paragraph3g: ' Diplomatura en Bases de Datos ',
    paragraph3h: ' en ',
    paragraph3i: ' con finalización a mediados de Julio.',
    // Paragraph 3
    // ***********
    listItem1: 'Estudios y Proyectos',
    listItem2: 'Lenguajes y Tecnologías',
    listItem3: 'Mis Aptitudes'
  },
  ENGLISH: {
    title: 'About Me',
    // ***********
    // Paragraph 1
    paragraph1a: 'Recently graduated as a ',
    paragraph1b: 'Systems Analyst',
    paragraph1c: ' from the "Instituto Tecnológico O.R.T." I specialize in development both as a ',
    paragraph1d: ' as the main technology, and as a ',
    paragraph1e: ' or ',
    paragraph1with: ' with ',
    // Paragraph 1
    // ***********
    // Paragraph 2
    paragraph2a: 'As a final project for my systems career, my team and I ',
    paragraph2b: ' developed a software for the "Macabi Club" ',
    paragraph2c: " which consisted of an application for the club's teachers to have better track of their students work such as attendance, training, tournaments, or accessing to their personal data if needed. I have taken ",
    paragraph2d: ' courses and made personal projects ',
    paragraph2e: ' on modern web technologies, which has allowed me to gain experience in various programming languages.',
    // Paragraph 2
    // ***********
    // Paragraph 3
    paragraph3a: 'Today I am looking for my first job in the IT field, I am constantly learning about new technologies. I am a ',
    paragraph3b: ' responsible, organized ',
    paragraph3c: '  person and I am always willing to ',
    paragraph3d: ' learn ',
    paragraph3e: ' new things that help me become a better professional.',
    paragraph3f: 'I am currently taking  ',
    paragraph3g: ' Diploma in Databases ',
    paragraph3h: ' at ',
    paragraph3i: ' with completion expected by mid-July.',
    // Paragraph 3
    listItem1: 'Studies and Projects',
    listItem2: 'Languages and Technologies',
    listItem3: 'My Skills'
  }
}

export const AboutMe = () => {
  useEffect(() => {
    const elements_1 = document.querySelectorAll('.aboutMe-color-1')
    const elements_2 = document.querySelectorAll('.aboutMe-color-2')
    const elements_3 = document.querySelectorAll('.aboutMe-color-3')

    const handleMouseEnter_1 = () => {
      elements_1.forEach(el => el.classList.add('hover'))
    }
    const handleMouseLeave_1 = () => {
      elements_1.forEach(el => el.classList.remove('hover'))
    }

    const handleMouseEnter_2 = () => {
      elements_2.forEach(el => el.classList.add('hover'))
    }
    const handleMouseLeave_2 = () => {
      elements_2.forEach(el => el.classList.remove('hover'))
    }

    const handleMouseEnter_3 = () => {
      elements_3.forEach(el => el.classList.add('hover'))
    }
    const handleMouseLeave_3 = () => {
      elements_3.forEach(el => el.classList.remove('hover'))
    }

    elements_1.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter_1)
      element.addEventListener('mouseleave', handleMouseLeave_1)
    })

    elements_2.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter_2)
      element.addEventListener('mouseleave', handleMouseLeave_2)
    })

    elements_3.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter_3)
      element.addEventListener('mouseleave', handleMouseLeave_3)
    })

    return () => {
      elements_1.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter_1)
        element.removeEventListener('mouseleave', handleMouseLeave_1)
      })

      elements_2.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter_2)
        element.removeEventListener('mouseleave', handleMouseLeave_2)
      })

      elements_3.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter_3)
        element.removeEventListener('mouseleave', handleMouseLeave_3)
      })
    }
  }, [])

  const useLanguageContext = useContext(LanguageContext)
  const { getTranslation } = useLanguage(LanguageResources, useLanguageContext.selectedLanguage)

  return (
    <Section idSection='aboutMe' title={getTranslation('title')}>
      <div className="aboutMe-flex">
        <img src={MyPhoto} alt='My Photo' className="aboutMe-myPhoto"></img>
        <div className="aboutMe-div-p">
          <p>
            {getTranslation('paragraph1a')}<span className='aboutMe-color-1'>{getTranslation('paragraph1b')}</span>{getTranslation('paragraph1c')}
            <span className='aboutMe-color-2'> Front-End </span>{getTranslation('paragraph1with')}<span className='aboutMe-color-2'> Vue.JS </span>
            {getTranslation('paragraph1d')} <span className='aboutMe-color-2'>Back-End </span>
            {getTranslation('paragraph1with')}<span className='aboutMe-color-2'>Node.JS, Express, Java {getTranslation('paragraph1e')} Asp.Net Core.</span>
          </p>

          <p>
            {getTranslation('paragraph2a')}<span className='aboutMe-color-1'>{getTranslation('paragraph2b')}</span>{getTranslation('paragraph2c')}
            <span className='aboutMe-color-1'>{getTranslation('paragraph2d')}</span>{getTranslation('paragraph2e')}
          </p>

          <p>
            {getTranslation('paragraph3a')}<span className='aboutMe-color-3'>{getTranslation('paragraph3b')}</span>{getTranslation('paragraph3c')}
            <span className='aboutMe-color-3'>{getTranslation('paragraph3d')}</span>{getTranslation('paragraph3e')}
            {getTranslation('paragraph3f')}<span className='aboutMe-color-1'>{getTranslation('paragraph3g')}
            </span>{getTranslation('paragraph3h')}<span className='aboutMe-color-1'>UTN</span>{getTranslation('paragraph3i')}
          </p>

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