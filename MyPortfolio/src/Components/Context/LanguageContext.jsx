import { useState, useEffect, createContext } from 'react'
import { SPANISH } from '../../App'

export const LanguageContext = createContext()

// eslint-disable-next-line react/prop-types
export const LanguageProvider = ({ children}) => {
    const [selectedLanguage, setSelectedLanguageState] = useState(() => {
        return localStorage.getItem('language') || SPANISH
    })

    useEffect(() => {
        localStorage.setItem('language', selectedLanguage)
    }, [selectedLanguage])

    const setSelectedLanguage = (language) => {
        setSelectedLanguageState(language)
    }

    return (
        <LanguageContext.Provider
            value={{
                selectedLanguage,
                setSelectedLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}