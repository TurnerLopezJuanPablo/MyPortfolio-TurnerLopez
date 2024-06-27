import '../styles/Contact.css'
import GitHubLogo from '../assets/icons8-github-60.png'
import LinkedInLogo from '../assets/icons8-linkedin-50.png'
import WhatsAppLogo from '../assets/icons8-whatsapp-48.png'
import EmailLogo from '../assets/icons8-email-48.png'

import { useRef, useContext } from 'react'

import { useLanguage } from '../customHooks/useLanguageHook'
import { LanguageContext } from './Context/LanguageContext'

const LanguageResources = {
  SPANISH: {
    copyText: '¡Copiado al portapapeles!',
    title: '¡Impulsa tus proyectos con mi ayuda!',
    subtitle: 'Contacto',
    name: 'Nombre',
    email: 'Correo Electrónico',
    msg: 'Mensaje',
    sendMsg: 'Enviar Mensaje',
    bottomText: 'Si tienes una idea o necesitas asesoramiento, no dudes en contactarme. Conecta conmigo a través de mis redes sociales o envíame un correo electrónico, los detalles están justo abajo.',
    goToCV: 'Ir a Descargar mi CV',
  },
  ENGLISH: {
    copyText: 'Copied to the clipboard!',
    title: 'Boost your projects with my help!',
    subtitle: 'Contact',
    name: 'Name',
    email: 'Email',
    msg: 'Message',
    sendMsg: 'Send Message',
    bottomText: 'If you have an idea or need advice, do not hesitate to contact me. Connect with me through my social networks or send me an email, the details are just below.',
    goToCV: 'Go to Download my CV',
  }
}

export const Contact = ({ updateToggleSlider }) => {
  const useLanguageContext = useContext(LanguageContext)
  const { getTranslation } = useLanguage(LanguageResources, useLanguageContext.selectedLanguage)

  const whatsappTooltipRef = useRef(null)
  const emailTooltipRef = useRef(null)
  const copyText = getTranslation('copyText')

  const handleClick = (ref) => {
    if (ref.current) {
      const pElements = ref.current.querySelectorAll('p')

      navigator.clipboard.writeText(pElements[0].innerText).then(() => {
        pElements[0].classList.add('no-show')
        pElements[1].classList.remove('no-show')

        setTimeout(() => {
          pElements[0].classList.remove('no-show')
          pElements[1].classList.add('no-show')
        }, 1500)
      }).catch(err => {
        console.error('Failed to copy: ', err)
      })
    }
  }

  const timeoutRef = useRef(null)

  const handleClick2 = (e, href) => {
    e.preventDefault()

    updateToggleSlider(false)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    /* 
      If you are here it is because you notice that when you click on an anchor the skills slider
      stops for around a second (exactly 750ms), well... skills cards overflow makes anchors to fail due to its 
      size of +20 cards off screen, idk why this happens but preventing default event from anchors
      and using it with timeouts while slider is off works well :D

      If you have a better solution please share it! I would appreciate it 😊👌
    */

    setTimeout(() => {
      window.location.href = href
    }, 50)

    timeoutRef.current = setTimeout(() => {
      updateToggleSlider(true)
      timeoutRef.current = null
    }, 750)
  }

  return (
    <section id='contact' className="contact-container">
      <h2 className='title' style={{ marginBottom: '3rem' }}>{getTranslation('title')}</h2>

      <div className="form-container card">
        <h2>{getTranslation('subtitle')}</h2>
        <form name='contact' method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" id='form-hidden-name' />

          <div className="form-group">
            <label htmlFor="name">{getTranslation('name')}:</label>
            <input type="text" id="name" name="name" required autoComplete='true' />
          </div>

          <div className="form-group">
            <label htmlFor="email">{getTranslation('email')}:</label>
            <input type="email" id="email" name="email" required autoComplete='true' />
          </div>

          <div className="form-group">
            <label htmlFor="message">{getTranslation('msg')}:</label>
            <textarea id="message" name="message" rows="5" required autoComplete='false'></textarea>
          </div>

          <div className="form-group">
            <button type="submit">{getTranslation('sendMsg')}</button>
          </div>
        </form>
      </div>

      <h3>{getTranslation('bottomText')}</h3>

      <div className='link-CV-Container'>
        <a href='#CV' onClick={(e) => handleClick2(e, '#CV')}>{getTranslation('goToCV')}</a>
      </div>

      <div className="contact-container-fotos">
        <a href="https://github.com/TurnerLopezJuanPablo" target="_blank" rel="noopener noreferrer">
          <div className='div-tooltip'>
            <p>Turner Lopez Juan Pablo</p>
          </div>

          <img src={GitHubLogo} alt='GitHub Logo' height={40} />
        </a>

        <a href="https://linkedin.com/in/juan-pablo-turner-lopez-a713a427b" target="_blank" rel="noopener noreferrer">
          <div className='div-tooltip'>
            <p>Juan Pablo Turner Lopez</p>
          </div>

          <img src={LinkedInLogo} alt='LinkedIn Logo' height={40} />
        </a>

        <a onClick={() => handleClick(whatsappTooltipRef)}>
          <div className='div-tooltip' ref={whatsappTooltipRef}>
            <p>+54 9 11 4407-1307</p>
            <p className='no-show'>{copyText}</p>
          </div>

          <img src={WhatsAppLogo} alt='WhatsApp Logo' height={40} />
        </a>

        <a onClick={() => handleClick(emailTooltipRef)}>
          <div className='div-tooltip email-tooltip' ref={emailTooltipRef}>
            <p>turnerlopezjuanpablo@gmail.com</p>
            <p className='no-show'>{copyText}</p>
          </div>

          <img src={EmailLogo} alt='Email Logo' height={40} />
        </a>
      </div>
    </section>
  )
}
