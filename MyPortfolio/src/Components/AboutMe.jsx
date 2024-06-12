import Section from '../Components/MiniComponents/Section'
import '../styles/AboutMe.css'

import { useEffect } from "react"
// import { useLanguage } from "../customHooks/useLanguageHook"

import MyPhoto from '../assets/MyPhoto.jpg'

// const LanguageResources = {
//   SPANISH: {
//     presentation: 'Presentación',
//     aboutMe: 'Sobre Mi',
//     CV: 'CV',
//     studies: 'Estudios',
//     jobs: 'Trabajos',
//     skills: 'Habilidades',
//     projects: 'Proyectos',
//     code: 'Código',
//     contact: 'Contacto',
//     react: 'Mi primer proyecto en REACT.JS',
//     sidenav: 'Click acá para cerrar el menú lateral'
//   },
//   ENGLISH: {
//     presentation: 'Presentation',
//     aboutMe: 'About Me',
//     CV: 'CV',
//     studies: 'Studies',
//     jobs: 'Jobs',
//     skills: 'Skills',
//     projects: 'Projects',
//     code: 'Code',
//     contact: 'Contact',
//     react: 'My first REACT.JS project',
//     sidenav: 'Click here to close side menu'
//   }
// }

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

  // const { getTranslation } = useLanguage(LanguageResources)

  return (
    <Section idSection='aboutMe' title='Sobre mí'>
      <div className="aboutMe-flex">
        <img src={MyPhoto} alt='My Photo' className="aboutMe-myPhoto"></img>
        <div className="aboutMe-div-p">
          <p>
            Recientemente graduado como <span className='aboutMe-color-1'>Analista de Sistemas</span> en el Instituto Tecnológico O.R.T.
            Me especializo en el área de desarrollo tanto como <span className='aboutMe-color-2'>Front-End</span> con
            <span className='aboutMe-color-2'> Vue.JS</span> como principal tecnología, o como <span className='aboutMe-color-2'>Back-End </span>
            con <span className='aboutMe-color-2'>Node.JS, Express, Java o Asp.Net Core.</span>
          </p>

          <p>
            Como proyecto final de la carrera de sistemas, con mi equipo, <span className='aboutMe-color-1'>desarrollamos un software para
              el Club Macabi</span> el cual consistió en una aplicación para que los profesores del club pudieran hacer un mejor seguimiento
            sus alumnos en trabajos como la asistencia, entrenamientos, torneos o acceder a los datos personales de estos de
            ser necesario. He realizado <span className='aboutMe-color-1'>cursos y proyectos personales</span> sobre tecnologías
            web modernas, lo que me ha permitido ganar experiencia en varios lenguajes de programación.
          </p>

          <p>
            Hoy me encuentro en búsqueda de mi primer empleo en area de TI, estoy constantemente aprendiendo sobre nuevas
            tecnologías. Soy una persona <span className='aboutMe-color-3'>responsable, ordenada</span> y estoy siempre dispuesto a <span className='aboutMe-color-3'>aprender</span> cosas
            nuevas que me ayuden a formarme como un mejor profesional.
            Actualmente estoy cursando una <span className='aboutMe-color-1'>Diplomatura en Bases de Datos
            </span> en <span className='aboutMe-color-1'>UTN</span> con finalización a mediados de Julio.
          </p>

          <div className="aboutMe-dots aboutMe-div-p">
            <li className="aboutMe-color-1">Estudios y Proyectos</li>
            <li className="aboutMe-color-2">Lenguajes y Tecnologías</li>
            <li className="aboutMe-color-3">Mis Aptitudes</li>
          </div>
        </div>
      </div>
    </Section>
  )
}