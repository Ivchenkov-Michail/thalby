import styles from './index.module.scss'
import success from '../../assets/success.png'
import close from '../../assets/close.png'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
interface IModalProps {
  setIsOpen: () => void
  isOpen: boolean
}

const ModalWindow = ({ setIsOpen, isOpen }: IModalProps) => {
  const [firstLoad, setFirstLoad] = useState(false)

  useEffect(() => {
    if (!firstLoad && isOpen) {
      setFirstLoad(true)
    }
  }, [isOpen])

  return (
    <div
      className={classNames(
        isOpen ? styles.visible : styles.none,
        !firstLoad && styles.firstNone
      )}
    >
      <div className={styles.background} onClick={() => setIsOpen()}></div>
      <div className={styles.window}>
        <div>
          <h2>Форма успешно отправлена</h2>
          <div onClick={() => setIsOpen()}>
            <img src={close} alt="#" />
          </div>
        </div>
        <img src={success} alt="#" width="200px" />
      </div>
    </div>
  )
}

export default ModalWindow
