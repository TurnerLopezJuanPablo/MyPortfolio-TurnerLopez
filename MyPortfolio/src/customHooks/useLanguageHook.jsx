import { useState } from 'react'

import { SPANISH } from '../App'

export const useLanguage = (initialLanguageResources, selectedLanguage) => {
    const [languageResources] = useState(initialLanguageResources)

    const getTranslation = (key) => {
        if (selectedLanguage === SPANISH) return languageResources.SPANISH[key]
        else return languageResources.ENGLISH[key]
    }

    return {
        getTranslation
    }
}