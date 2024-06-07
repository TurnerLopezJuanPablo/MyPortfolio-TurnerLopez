import Section from "./MiniComponents/Section"
import StudyCard from "./MiniComponents/StudyCard"
import { useState, createContext } from "react"

import '../styles/Studies.css'

export const LightContext = createContext(null)

export const Studies = () => {
  const studyCards = Array.from({ length: 4 })

  const [isLightEnabled, setIsLightEnabled] = useState(true)

  const handleClick = () => {
    setIsLightEnabled(!isLightEnabled)
  }

  return (
    <LightContext.Provider value={isLightEnabled}>
      <Section idSection='studies' title='Estudios'>
        <div className="studies-container">
          {studyCards.map((_, index) => (
            <StudyCard key={index} />
          ))}
        </div>

        <div className="checkbox-container">
          <input type="checkbox" id="lightCheckbox" checked={isLightEnabled} onChange={handleClick} />
          <label htmlFor="lightCheckbox">Luz de puntero</label>
        </div>

        <div className="studies-last-p">
          <p>Espero año a año seguir enriqueciendo mis conocimienos in IT 😊👌</p>
        </div>
      </Section>
    </LightContext.Provider>
  )
}