import Section from "./MiniComponents/Section"
import StudyCard from "./MiniComponents/StudyCard"
import { useState, createContext } from "react"

import '../styles/Studies.css'

export const LightContext = createContext(null)

const mouseSvg = (
  <img className="mouseIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrUlEQVR4nO3Zv6tPYRwH8A9xUbKQkA1lwUCJVZEyGGSzUP4ABjLJxK4MBiWjSTZJBgM2g2yipPxaCLeu+9KTr9yue85x3fs953lO57Wez/B5f7+d87xPJ2IwGAzq4D6eYlOUzB8vsTV6ECR5i51RIn/7hP3RgyDJFxyMkqg2iWPRgyDJFE5FCTSbxtnoQZDfLkfOzM9VLI0eBEluYXnkxv+5g1XRgyDJA6yJXFiYVDbXRQ+CJM+xuQ9B8mjOFk9qzrv6EKTb5mzxddOcjcdk683Z+Ey12pyN13RrzVk7LvQlyPuSgnzFKzzGXdzAFZzB7pyDpJv5MLZg9dgXbbLAf+Fc5EKzHzXX3mBF5EDzwXYcT2pmTkYOVPuOo6OZEzVzL7J4jze3zzgwY2Zi1G6rHMkxyEfsnWPuYk2Qh91sP8OshdKvvqNibj2+1YTZF10yj7c83KwJcru9rau/WKWn0sZ/mN3TcEBui1LgUU2Ya1EKv86VKuke2hAlwDK8rglzKUqB8zVBPqRzJ0qAtaPaXnXST0QpcH1WgGc4jZVREmzHO9zDISzpeqfBIKr9BC6bE85p69PcAAAAAElFTkSuQmCC" />
)

// eslint-disable-next-line react/prop-types
const LightInputBtn = ({ isLightEnabled, handleClick, id }) => {
  return (
    <div className="checkbox-container">
      <input type="checkbox" id={id} checked={isLightEnabled} onChange={handleClick} />
      <label htmlFor={id}>Luz de puntero</label>
    </div>
  );
}

import sfrandesalesLogo from '../assets/sfrandesales-logo.jpg'
import ortLogo from '../assets/ort-logo.png'
import utnLogo from '../assets/utn-logo.jpg'

const loremIpsum = 'Tempor eiusmod ex deserunt dolore excepteur dolore excepteur eiusmod quis. Officia labore sit velit aute elit laborum adipisicing dolore. Incididunt eu adipisicing enim pariatur consequat Lorem ullamco quis ipsum occaecat. Non consectetur ut minim ut esse minim ullamco.'

const studiesInfo = [
  {
    image: ortLogo,
    title: 'Analista de Sistemas',
    school: 'Instituto Tecnológico ORT - Terciario',
    time: '2022 - 2023 (2 años) - Finalizado',
    text: 'Elegí esta carrera, ya que desde mis primeros y básicos trabajos creando circuitos en Arduino en el secundario, mi pasión nació y se alimentó constantemente. Luego de convertirme en Analista en Sistemas, mi siguiente inmediato objetivo fue convertirme en Desarrollador Full Stack para ser el profesional de desarrollo al que siempre apunté.',
  },
  {
    image: utnLogo,
    title: 'Diplomatura en Bases de Datos',
    school: 'UTN - Universidad Tecnológica Nacional - Curso',
    time: 'Mayo - Julio (3 meses) - Cursando',
    text: 'Al finalizar mi carrera, me lleve conmigo toda la teoría en Base de Datos, y mucha práctica, por lo que, con las habilidades conseguidas, decidí mejorar mis conocimientos en esa área. Fue entonces cuando encontré la Diplomatura en Base de Datos, que me brindó la posibilidad de conocer más motores de bases de datos y sus diferencias, aprendí también a optimizar consultas y que sean más complejas, y hacer un buen uso de las transacciones.',
  },
  {
    image: sfrandesalesLogo,
    title: 'Bachillerato en Artes Visuales',
    school: 'San Francisco de sales - Secundario',
    time: '2017 - 2021 (5 años) - Finalizado',
    text: loremIpsum,
  },
]

export const Studies = () => {
  const [isLightEnabled, setIsLightEnabled] = useState(true)

  const handleClick = () => {
    setIsLightEnabled(!isLightEnabled)
  }

  return (
    <LightContext.Provider value={isLightEnabled}>
      <Section idSection='studies' title='Estudios'>
        <LightInputBtn isLightEnabled={isLightEnabled} handleClick={handleClick} id={'light-checkbox-1'} />

        <p className="studies-p-info">
          Luz que sigue al {mouseSvg} dentro de las cartas de estudios. Es algo estético y se puede desactivar aquí si lo deseas.
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
          <p>Espero año a año seguir enriqueciendo mis conocimienos in IT 😊👌</p>
        </div>
      </Section>
    </LightContext.Provider>
  )
}