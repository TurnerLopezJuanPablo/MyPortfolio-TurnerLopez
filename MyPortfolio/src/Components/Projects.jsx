import Section from '../Components/MiniComponents/Section'
import { useContext } from 'react'

import { useLanguage } from '../customHooks/useLanguageHook'
import { LanguageContext } from './Context/LanguageContext'

const LanguageResources = {
  SPANISH: {
    title: 'Proyectos',
    text: 'Pronto estaré completando esta sección para que puedas disfrutar un poco de lo que es mi trabajo y a lo que me dedico... '
  },
  ENGLISH: {
    title: 'Projects',
    text: 'I will soon be completing this section so you can enjoy a bit of what my work is about and what I do... '
  }
}

export const Projects = () => {

  const useLanguageContext = useContext(LanguageContext)
  const { getTranslation } = useLanguage(LanguageResources, useLanguageContext.selectedLanguage)

  return (
    <Section idSection='projects' title={getTranslation('title')}>
      <p style={{ textAlign: 'center' }}>{getTranslation('text')} 😉🫣</p>
    </Section>
  )
}