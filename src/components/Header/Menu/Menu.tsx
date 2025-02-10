import classNames from 'classnames'
import React, { useState } from 'react'
import { NavLink } from 'react-router'
import styles from './Menu.module.scss'
import inst from '../../../assets/inst.svg'
import search from '../../../assets/search.svg'
import cart from '../../../assets/cart.svg'

interface IProps {
  list: {
    name: string
    route: string
  }[]
  active: boolean
  handleClick: (data: boolean) => void
  isFirstLoading: boolean
}

const Menu = ({ list, active, isFirstLoading, handleClick }: IProps) => {
  // const [isFirstLoading, setIsFirstLoading] = useState(false)
  const [startY, setStartY] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [prevOffsetY, setPrevOffsetY] = useState(0)
  const [swipe, setSwipe] = useState(false)

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY)
    setPrevOffsetY(0) // Сбрасываем предыдущий сдвиг
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    const deltaY = e.touches[0].clientY - startY
    if (deltaY > 30) {
      setSwipe(true)
      // Обновляем предыдущее значение, чтобы отследить последнее направление
      setPrevOffsetY(offsetY)
      setOffsetY(deltaY)
    }
  }

  const handleTouchEnd = () => {
    const lastMovement = offsetY - prevOffsetY // Разница между последним и предпоследним движением

    if (lastMovement > 0 && offsetY > 30) {
      handleClick(!active) // Последнее движение было вниз
    }

    setOffsetY(0)
    setSwipe(false)
  }

  return (
    <div
      className={classNames(
        styles.burger,
        !active && styles.none,
        isFirstLoading && styles.active
      )}
      style={
        swipe
          ? {
              transform: `translateY(${offsetY - 30}px)`,
              transition: offsetY === 0 ? 'transform 0.3s ease-out' : 'none',
            }
          : {}
      }
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ul className="container">
        {list.map((item) => (
          <li key={item.name}>
            <NavLink onClick={() => handleClick(!active)} to={item.route}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="container">
        <img src={inst} alt="" />
        <img src={search} alt="" />
        <img src={cart} alt="" />
      </ul>
    </div>
  )
}

export default Menu
