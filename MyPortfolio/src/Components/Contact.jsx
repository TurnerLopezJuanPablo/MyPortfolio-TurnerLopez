import '../styles/Contact.css'
import GitHubLogo from '../assets/icons8-github-60.png'
import LinkedInLogo from '../assets/icons8-linkedin-50.png'
import WhatsAppLogo from '../assets/icons8-whatsapp-48.png'
import EmailLogo from '../assets/icons8-email-48.png'

import { useRef } from 'react'

export const Contact = () => {
  const whatsappTooltipRef = useRef(null)
  const emailTooltipRef = useRef(null)
  const copyText = '¡Copiado al portapapeles!'

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

  return (
    <section id='contact' className="contact-container">
      <h2>¡Impulsa tus proyectos con mi ayuda!</h2>

      <div className="form-container card">
        <h2>Contacto</h2>
        <form name='contact' method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          <div className="form-group">
            <button type="submit">Enviar mensaje</button>
          </div>
        </form>
      </div>

      <h3>
        Si tenes una idea o necesitas asesoramiento, no dudes en contactarme.
        Conecta conmigo a través de mis redes sociales o envíame un correo electrónico,
        los detalles están justo abajo.
      </h3>

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
