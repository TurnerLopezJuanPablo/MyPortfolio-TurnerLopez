import Section from "./MiniComponents/Section"
import StudyCard from "./MiniComponents/StudyCard"
import { useState, createContext, useContext } from "react"


import '../styles/Studies.css'

export const LightContext = createContext(null)

const mouseSvg = (
  <img className="mouseIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrUlEQVR4nO3Zv6tPYRwH8A9xUbKQkA1lwUCJVZEyGGSzUP4ABjLJxK4MBiWjSTZJBgM2g2yipPxaCLeu+9KTr9yue85x3fs953lO57Wez/B5f7+d87xPJ2IwGAzq4D6eYlOUzB8vsTV6ECR5i51RIn/7hP3RgyDJFxyMkqg2iWPRgyDJFE5FCTSbxtnoQZDfLkfOzM9VLI0eBEluYXnkxv+5g1XRgyDJA6yJXFiYVDbXRQ+CJM+xuQ9B8mjOFk9qzrv6EKTb5mzxddOcjcdk683Z+Ey12pyN13RrzVk7LvQlyPuSgnzFKzzGXdzAFZzB7pyDpJv5MLZg9dgXbbLAf+Fc5EKzHzXX3mBF5EDzwXYcT2pmTkYOVPuOo6OZEzVzL7J4jze3zzgwY2Zi1G6rHMkxyEfsnWPuYk2Qh91sP8OshdKvvqNibj2+1YTZF10yj7c83KwJcru9rau/WKWn0sZ/mN3TcEBui1LgUU2Ya1EKv86VKuke2hAlwDK8rglzKUqB8zVBPqRzJ0qAtaPaXnXST0QpcH1WgGc4jZVREmzHO9zDISzpeqfBIKr9BC6bE85p69PcAAAAAElFTkSuQmCC" />
)

import { useLanguage } from '../customHooks/useLanguageHook'
import { LanguageContext } from './Context/LanguageContext'

const LanguageResources = {
  SPANISH: {
    title: 'Estudios',
    pointerTextMain: 'Luz de puntero',
    pointerTextBelow1: 'Luz que sigue al ',
    pointerTextBelow2: ' dentro de las cartas de estudios. Es algo estético y se puede desactivar aquí si lo deseas.',
    lastText: 'Espero año a año seguir enriqueciendo mis conocimienos in IT',

    OrtTitle: 'Analista de Sistemas',
    OrtSchool: 'Instituto Tecnológico ORT - Terciario',
    OrtTime: '2022 - 2023 (2 años) - Finalizado',
    OrtText: 'Elegí esta carrera, ya que desde mis primeros y básicos trabajos creando circuitos en Arduino en el secundario, mi pasión nació y se alimentó constantemente. Luego de convertirme en Analista en Sistemas, mi siguiente inmediato objetivo fue convertirme en Desarrollador Full Stack para ser el profesional de desarrollo al que siempre apunté.',

    UtnTitle: 'Diplomatura en Bases de Datos',
    UtnSchool: 'UTN - Universidad Tecnológica Nacional - Curso',
    UtnTime: 'Mayo - Julio (3 meses - 2024) - Finalizado',
    UtnText: 'Al finalizar mi carrera, me lleve conmigo toda la teoría en Base de Datos, y mucha práctica, por lo que, con las habilidades conseguidas, decidí mejorar mis conocimientos en esa área. Fue entonces cuando encontré la Diplomatura en Base de Datos, que me brindó la posibilidad de conocer más motores de bases de datos y sus diferencias, aprendí también a optimizar consultas y que sean más complejas, y hacer un buen uso de las transacciones.',

    SfsTitle: 'Bachillerato en Artes Visuales',
    SfsSchool: 'San Francisco de sales - Secundario',
    SfsTime: '2017 - 2021 (5 años) - Finalizado',
    SfsText: 'Secundario en donde pude aprender conceptos básicos de diseño los cuales me esfuerzo por poner en mis proyectos y así crear soluciones mas profesionales, creativas y originales.',
  },
  ENGLISH: {
    title: 'Studies',
    pointerTextMain: 'Pointer light',
    pointerTextBelow1: 'Light that follows the ',
    pointerTextBelow2: ' within the study cards. It is an aesthetic feature and can be turned off here if you wish.',
    lastText: 'I hope to continue enriching my knowledge in IT year after year',

    OrtTitle: 'Systems Analyst',
    OrtSchool: 'ORT Technological Institute - Tertiary',
    OrtTime: '2022 - 2023 (2 years) - Completed',
    OrtText: 'I chose this career because, from my first and basic works creating circuits in Arduino in high school, my passion was born and constantly fueled. After becoming a Systems Analyst, my next immediate goal was to become a Full Stack Developer to be the professional I always aimed to be.',

    UtnTitle: 'Diploma in Databases',
    UtnSchool: 'UTN - National Technological University - Course',
    UtnTime: 'May - July (3 months - 2024) - Completed',
    UtnText: 'After finishing my degree, I took with me all the theory in Databases, and a lot of practice, so with the skills acquired, I decided to improve my knowledge in that area. It was then that I found the Diploma in Databases, which gave me the opportunity to learn about more database engines and their differences, I also learned to optimize queries to make them more complex, and to make good use of transactions.',

    SfsTitle: 'High School Diploma in Visual Arts',
    SfsSchool: 'San Francisco de Sales - High School',
    SfsTime: '2017 - 2021 (5 years) - Completed',
    SfsText: 'High school where I could learn basic design concepts which I strive to apply in my projects to create more professional, creative, and original solutions.',
  }
}

import sfrandesalesLogo from '../assets/sfrandesales-logo.jpg'
import ortLogo from '../assets/ort-logo.png'
import utnLogo from '../assets/utn-logo.jpg'

export const Studies = () => {
  const [isLightEnabled, setIsLightEnabled] = useState(true)

  const handleClick = () => {
    setIsLightEnabled(!isLightEnabled)
  }

  const useLanguageContext = useContext(LanguageContext)
  const { getTranslation } = useLanguage(LanguageResources, useLanguageContext.selectedLanguage)

  const studiesInfo = [
    {
      image: ortLogo,
      title: getTranslation('OrtTitle'),
      school: getTranslation('OrtSchool'),
      time: getTranslation('OrtTime'),
      text: getTranslation('OrtText'),
    },
    {
      image: utnLogo,
      title: getTranslation('UtnTitle'),
      school: getTranslation('UtnSchool'),
      time: getTranslation('UtnTime'),
      text: getTranslation('UtnText'),
    },
    {
      image: sfrandesalesLogo,
      title: getTranslation('SfsTitle'),
      school: getTranslation('SfsSchool'),
      time: getTranslation('SfsTime'),
      text: getTranslation('SfsText'),
    },
  ]

  // eslint-disable-next-line react/prop-types
  const LightInputBtn = ({ isLightEnabled, handleClick, id }) => {
    return (
      <div className="checkbox-container">
        <input type="checkbox" id={id} checked={isLightEnabled} onChange={handleClick} />
        <label htmlFor={id}>{getTranslation('pointerTextMain')}</label>
      </div>
    )
  }

  return (
    <LightContext.Provider value={isLightEnabled}>
      <Section idSection='studies' title={getTranslation('title')}>
        <LightInputBtn isLightEnabled={isLightEnabled} handleClick={handleClick} id={'light-checkbox-1'} />

        <p className="studies-p-info">
          {getTranslation('pointerTextBelow1')} {mouseSvg} {getTranslation('pointerTextBelow2')}
        </p>

        <div className="studies-container">
          {studiesInfo.map((study, index) => (
            <StudyCard
              key={index}
              image={study.image}
              title={study.title}
              school={study.school}
              time={study.time}
              text={study.text}
            />
          ))}
        </div>

        <LightInputBtn isLightEnabled={isLightEnabled} handleClick={handleClick} id={'light-checkbox-2'} />

        <div className="studies-last-p">
          <p>{getTranslation('lastText')} 😊👌</p>
        </div>
      </Section>
    </LightContext.Provider>
  )
}