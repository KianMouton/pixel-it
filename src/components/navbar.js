import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <div className="navbar">
        <Link to='/'>
        <h1 id="pixel-logo">Pixel it</h1>
        </Link>
        <div className="icons">
        <a href="https://www.facebook.com/PixelItCPT">
        <FontAwesomeIcon icon={faFacebook} size="2x" /> 
        </a>
        </div>
      </div>
    )
}

export default Navbar;