import '../styles/Contact.css'

export const Contact = () => {
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
        Si tienes una idea o necesitas asesoramiento, no dudes en contactarme.
        Conecta conmigo a través de mis redes sociales o envíame un correo electrónico,
        los detalles están justo abajo.
      </h3>
    </section>
  )
}
