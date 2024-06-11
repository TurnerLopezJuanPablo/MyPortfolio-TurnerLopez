import Section from "./MiniComponents/Section"
import StudyCard from "./MiniComponents/StudyCard"
import { useState, createContext } from "react"

import '../styles/Studies.css'

export const LightContext = createContext(null)

// eslint-disable-next-line react/prop-types
const LightInputBtn = ({ isLightEnabled, handleClick, id }) => {
  return (
    <div className="checkbox-container">
      <input type="checkbox" id={id} checked={isLightEnabled} onChange={handleClick} />
      <label htmlFor={id}>Luz de puntero</label>
    </div>
  );
}

import sfrandesalesLogo from '../assets/sfrandesales-logo.png'
import ortLogo from '../assets/ort-logo.png'
import utnLogo from '../assets/utn-logo.jpg'

const loremIpsum = 'Tempor eiusmod ex deserunt dolore excepteur dolore excepteur eiusmod quis. Officia labore sit velit aute elit laborum adipisicing dolore. Incididunt eu adipisicing enim pariatur consequat Lorem ullamco quis ipsum occaecat. Non consectetur ut minim ut esse minim ullamco.'

const studiesInfo = [
  {
    image: sfrandesalesLogo,
    school: 'San Francisco de sales',
    title: 'Secundario',
    time: '2017 - 2021 (5 años) - Finalizado',
    text: loremIpsum,
  },
  {
    image: ortLogo,
    school: 'Instituto Tecnológico ORT',
    title: 'Terciario',
    time: '2022 - 2023 (2 años) - Finalizado',
    text: loremIpsum,
  },
  {
    image: utnLogo,
    school: 'UTN - Universidad Tecnológica Nacional',
    title: 'Curso',
    time: 'Mayo - Julio (3 meses) - Cursando',
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
          Luz que sigue al mouse dentro de las cartas de estudios. Es algo estético y se puede desactivar aquí.
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