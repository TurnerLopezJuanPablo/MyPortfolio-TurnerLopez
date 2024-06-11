import '../styles/CV.css'

import Section from './MiniComponents/Section'
import JSConfetti from 'js-confetti'
import DownloadIcon from '../assets/icons8-descargar-48.png'

// CV 
import cvPdf from '../../CV/CV - TurnerLopez JuanPablo.pdf'
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/web/pdf_viewer.css';

// Configurar la URL del worker
pdfjsLib.GlobalWorkerOptions.workerSrc = '//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js'

import { useRef } from 'react'

export const CV = () => {
    const modalRef = useRef(null)
    const bgModalRef = useRef(null)
    const jsConfetti = new JSConfetti()

    const handleClick = () => {
        jsConfetti.addConfetti()

        let modal = modalRef.current
        modal.style.display = 'block'
        modal.classList.add('show')

        let bgModal = bgModalRef.current
        bgModal.style.display = 'block'
        setTimeout(() => {
            bgModal.classList.add('show')
        }, 10)

        setTimeout(() => {
            handleOpenCV()
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

    const handleOpenCV = async () => {
        try {
            const response = await fetch(cvPdf)
            const blob = await response.blob()
            const fileURL = window.URL.createObjectURL(blob)

            // Abre el PDF en una nueva pestaña utilizando PDF.js
            const newTab = window.open()
            const pdfData = await fetch(fileURL).then(res => res.arrayBuffer())
            const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise

            // Generar un elemento canvas en la nueva pestaña
            const canvas = newTab.document.createElement('canvas')
            newTab.document.body.appendChild(canvas)
            const context = canvas.getContext('2d')

            // Renderizar la primera página del PDF
            const page = await pdf.getPage(1)
            const viewport = page.getViewport({ scale: 1.5 })
            canvas.height = viewport.height
            canvas.width = viewport.width

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            }

            page.render(renderContext)
        } catch (error) {
            console.error('Error opening the PDF:', error)
        }
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

