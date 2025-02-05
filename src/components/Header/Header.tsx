import { useState } from 'react'
import useScreenSize from '../../hooks/useScreenSize'
import inst from '../../assets/inst.svg'
import search from '../../assets/search.svg'
import cart from '../../assets/cart.svg'
import logo from '../../assets/logo.svg'
import menuImg from '../../assets/menu.png'
import closeImg from '../../assets/close.png'
import styles from './Header.module.css'
import classNames from 'classnames'
const headerMenuList = ['Shop', 'Collections', 'Try a Free Guide', 'Stories']

const Header = () => {
  const screenSize = useScreenSize()
  const [active, setActive] = useState(true)
  if (screenSize.width >= 1080 && !active) {
    setActive(true)
  }
  if (!active) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'scroll'
  }
  return (
    <header>
      <div className="container">
        {screenSize.width >= 1080 ? (
          <div className="header-menu">
            {headerMenuList.map((item) => (
              <p key={item}>
                <a>{item}</a>
              </p>
            ))}
          </div>
        ) : (
          ''
        )}

        <img src={logo} alt="#" />

        {screenSize.width >= 1080 ? (
          <>
            <div className="header-contact">
              <img src={inst} alt="" />
              <img src={search} alt="" />
              <img src={cart} alt="" />
            </div>
          </>
        ) : (
          <>
            <div
              onClick={() => setActive(!active)}
              style={{ width: '20px', height: '20px' }}
            >
              {active ? (
                <img src={menuImg} alt="#" />
              ) : (
                <>
                  <img src={closeImg} alt="#" />
                </>
              )}
            </div>
            <div className={classNames(styles.burger, active && styles.none)}>
              <ul className="container">
                {headerMenuList.map((item) => (
                  <li key={item}>
                    <a>{item}</a>
                  </li>
                ))}
              </ul>
              <ul className="container">
                <img src={inst} alt="" />
                <img src={search} alt="" />
                <img src={cart} alt="" />
              </ul>
            </div>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
