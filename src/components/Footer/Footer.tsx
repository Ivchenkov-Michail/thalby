import footerInst from '../../assets/footer/inst.svg'
import footerFacebook from '../../assets/footer/facebook.svg'
import footerTwitter from '../../assets/footer/Twitter.svg'
import footerLogo from '../../assets/footer/thalby.svg'

import { NavLink } from 'react-router'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div>
            <NavLink to="/">
              <img src={footerLogo} alt="#" />
            </NavLink>
            <div>
              <img src={footerFacebook} alt="#" />
              <img src={footerInst} alt="#" />
              <img src={footerTwitter} alt="#" />
            </div>
          </div>
          <div>
            <div>
              <ul>
                <p>ABOUT</p>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
                <li>
                  <a href="#">Write for Us</a>
                </li>
              </ul>
              <ul>
                <p>CONTACT</p>
                <li>
                  <a href="#">Email hi@thalby.com</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="licence">Thalby LLC © 2021</p>
      </div>
    </footer>
  )
}

export default Footer
