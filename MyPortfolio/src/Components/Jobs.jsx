import Section from '../Components/MiniComponents/Section'
import { useContext } from 'react'

import { useLanguage } from '../customHooks/useLanguageHook'
import { LanguageContext } from './Context/LanguageContext'

const LanguageResources = {
  SPANISH: {
    title: 'Trabajos',
    text: 'No mucho que poner acá pero pueden ayudarme a expandir esta sección si lo deseas... '
  },
  ENGLISH: {
    title: 'Jobs',
    text: 'Not much to put here but you can help me expand this section if you wish... '
  }
}

export const Jobs = () => {

  const useLanguageContext = useContext(LanguageContext)
  const { getTranslation } = useLanguage(LanguageResources, useLanguageContext.selectedLanguage)

  return (
    <Section idSection='jobs' title={getTranslation('title')}>
      <p style={{ textAlign: 'center' }}>{getTranslation('text')} 🫢</p>
    </Section>
  )
}