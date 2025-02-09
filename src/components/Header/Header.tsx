import { useState } from 'react'
import useScreenSize from '../../hooks/useScreenSize'
import inst from '../../assets/inst.svg'
import search from '../../assets/search.svg'
import cart from '../../assets/cart.svg'
import logo from '../../assets/logo.svg'
import menuImg from '../../assets/menu.png'
import closeImg from '../../assets/close.png'
import { NavLink } from 'react-router'
import Menu from './Menu/Menu'
import { useScrollDirection } from '../../hooks/useScrollDirection'

const headerMenuList = [
  { name: 'Shop', route: '/shop' },
  { name: 'Collections', route: '/collections' },
  { name: 'Try a Free Guide', route: '/guide' },
  { name: 'Stories', route: '/stories' },
]

const Header = () => {
  const screenSize = useScreenSize()
  const [active, setActive] = useState(false)
  const [isFirstLoading, setIsFirstLoading] = useState(false)
  const direction = useScrollDirection()

  const handleClick = (data: boolean) => {
    if (!isFirstLoading && !active) setIsFirstLoading(!isFirstLoading)
    setActive(data)
  }

  if (screenSize.width >= 1080 && active) {
    setActive(true)
  }
  if (active) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'scroll'
  }
  return (
    <header
      style={{
        transition: 'transform 0.2s ease-in',
        transform: `translateY(${direction || active ? '0px' : '-56px'})`,
      }}
    >
      <div className="container">
        {screenSize.width >= 1080 ? (
          <div className="header-menu">
            {headerMenuList.map((item) => (
              <p key={item.name}>
                <NavLink to={item.route}>{item.name}</NavLink>
              </p>
            ))}
          </div>
        ) : (
          ''
        )}

        <NavLink to="/" onClick={() => setActive(false)}>
          <img src={logo} alt="#" />
        </NavLink>

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
              onClick={() => handleClick(!active)}
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            >
              {!active ? (
                <img src={menuImg} alt="#" />
              ) : (
                <>
                  <img src={closeImg} alt="#" />
                </>
              )}
            </div>
            <Menu
              list={headerMenuList}
              active={active}
              handleClick={handleClick}
              isFirstLoading={isFirstLoading}
            />
          </>
        )}
      </div>
    </header>
  )
}

export default Header
