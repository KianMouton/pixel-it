import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

function Navbar() {
    return (
      <div className="navbar">
        <h1 id="pixel-logo">Pixel it</h1>
        <div className="icons">
          <a href="https://www.facebook.com/PixelItCPT">
            <FontAwesomeIcon icon={faFacebook} size="2x" /> 
          </a>
        </div>
        <catalogue />
      </div>
    )
}

export default Navbar;