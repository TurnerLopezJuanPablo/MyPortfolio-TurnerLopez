import '../styles/Footer.css'
import emoji from '../assets/emoji.png'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-photo">
                    <img src={emoji} alt="My Photo" height={60} />
                </div>

                <div className="footer-text">
                    <p>Turner Lopez, Juan Pablo</p>
                    <p>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}