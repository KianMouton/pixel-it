import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer>
            <p>Check out my Facebook</p>
            <a href="https://www.facebook.com/PixelItCPT">
            <FontAwesomeIcon icon={faFacebook} size="2x" /> 
            </a>
        </footer>
    )
}

export default Footer;