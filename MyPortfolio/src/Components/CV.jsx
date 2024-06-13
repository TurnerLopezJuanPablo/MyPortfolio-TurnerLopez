import '../styles/CV.css'

import Section from './MiniComponents/Section'
import JSConfetti from 'js-confetti'
import DownloadIcon from '../assets/icons8-descargar-48.png'

import { useLanguage } from '../customHooks/useLanguageHook'
import { LanguageContext } from './Context/LanguageContext'

const LanguageResources = {
    SPANISH: {
        download: 'Descargar',
        size: 'Tamaño',
        titleModal: '¡Gracias por descargar mi CV!',
        textModal: 'Espero que encuentres la información útil. Si tienes alguna pregunta o deseas discutir oportunidades de colaboración, no dudes en contactarme.',
        thanksModal: '¡Saludos cordiales!',
        closeModal: 'Click para cerrar el modal',
    },
    ENGLISH: {
        download: 'Download',
        size: 'Size',
        titleModal: 'Thank you for downloading my CV!',
        textModal: 'I hope you find the information useful. If you have any questions or wish to discuss collaboration opportunities, please do not hesitate to contact me.',
        thanksModal: 'Best regards!',
        closeModal: 'Click to close the modal',
    }
}

// CV 
import cvPdf from '../../CV/CV - TurnerLopez JuanPablo.pdf'

import { useRef, useContext } from 'react'

export const CV = () => {
    const modalRef = useRef(null)
    const bgModalRef = useRef(null)
    const jsConfetti = new JSConfetti()

    const handleClick = () => {
        jsConfetti.addConfetti()

        jsConfetti.addConfetti({
            confettiRadius: 8,
            confettiNumber: 250,
        })

        let modal = modalRef.current
        modal.style.display = 'block'
        modal.classList.add('show')

        let bgModal = bgModalRef.current
        bgModal.style.display = 'block'
        setTimeout(() => {
            bgModal.classList.add('show')
        }, 10)

        handleOpenCV()
    }

    const handleClick2 = () => {
        let modal = modalRef.current
        modal.classList.remove('show')

        let bgModal = bgModalRef.current
        bgModal.classList.remove('show')

        setTimeout(() => {
            modal.style.display = 'none'
            bgModal.style.display = 'none'
        }, 1000)
    }

    const handleOpenCV = async () => {
        const link = document.createElement('a')
        link.href = cvPdf
        link.setAttribute('download', 'CV - TurnerLopez JuanPablo.pdf')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const useLanguageContext = useContext(LanguageContext)
    const { getTranslation } = useLanguage(LanguageResources, useLanguageContext.selectedLanguage)

    return (
        <Section idSection='CV' title='Curriculum Vitae'>
            <div className='CV'>
                <button onClick={handleClick}>
                    <span>
                        <img src={DownloadIcon} alt='Download Icon' />
                        {getTranslation('download')} CV
                    </span>
                </button>

                <p style={{ fontStyle: 'italic', marginBottom: '0' }}>{getTranslation('size')}: 1MB</p>
            </div>

            {/* MODAL */}
            <section onClick={handleClick2}>
                <div className='bg-body-withModal' ref={bgModalRef}></div>

                <div className='modal' ref={modalRef}>
                    <div className='modal-content'>
                        <p>{getTranslation('titleModal')}</p>
                        <p>{getTranslation('textModal')}</p>
                        <p>{getTranslation('thanksModal')}</p>
                        <p style={{ textAlign: 'end' }}>Turner Lopez, Juan Pablo 😉👌</p>
                        <p className='modal-last-p'>{getTranslation('closeModal')}</p>
                    </div>
                </div>
            </section>
        </Section>
    )
}

