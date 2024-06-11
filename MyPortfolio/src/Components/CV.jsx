import '../styles/CV.css'

import Section from './MiniComponents/Section'
import JSConfetti from 'js-confetti'
import DownloadIcon from '../assets/icons8-descargar-48.png'

import { useRef } from 'react'

export const CV = () => {
    const modalRef = useRef(null)
    const bgModalRef = useRef(null)
    const jsConfetti = new JSConfetti()

    const handleClick = () => {
        jsConfetti.addConfetti()

        setTimeout(() => {
            handleOpenCV()

            let modal = modalRef.current
            modal.style.display = 'block'
            modal.classList.add('show')

            let bgModal = bgModalRef.current
            bgModal.style.display = 'block'
            setTimeout(() => {
                bgModal.classList.add('show')
            }, 10)
        }, 1500)
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

    const handleOpenCV = () => {
        const fileUrl = '../../CV-PDF/CV - TurnerLopez JuanPablo.pdf'
        window.open(fileUrl, '_blank')
    }

    return (
        <Section idSection='CV' title='Curriculum Vitae'>
            <div className='CV'>
                <button onClick={handleClick}>
                    <span>
                        <img src={DownloadIcon} alt='Download Icon' />
                        Descargar CV
                    </span>
                </button>
            </div>

            {/* MODAL */}
            <section onClick={handleClick2}>
                <div className='bg-body-withModal' ref={bgModalRef}></div>

                <div className='modal' ref={modalRef}>
                    <div className='modal-content'>
                        <p>¡Gracias por descargar mi CV!</p>
                        <p>Espero que encuentres la información útil. Si tienes alguna pregunta o deseas discutir oportunidades de colaboración, no dudes en contactarme.</p>
                        <p>¡Saludos cordiales!</p>
                        <p style={{ textAlign: 'end' }}>Turner Lopez, Juan Pablo 😉👌</p>
                        <p className='modal-last-p'>Click para cerrar el modal</p>
                    </div>
                </div>
            </section>
        </Section>
    )
}

