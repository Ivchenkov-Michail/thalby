import { useNavigate } from 'react-router'
import sad from '../../assets/sad.png'
import styles from './index.module.css'
import classNames from 'classnames'
interface IProps {
  children: string
}

const NoDataLoyaut = ({ children }: IProps) => {
  const navigate = useNavigate()
  return (
    <div style={{ backgroundColor: '#f0efeb', paddingTop: '56px' }}>
      <div className={classNames(styles.noDataLoyaut, 'container')}>
        <img src={sad} alt="#" />
        <div>
          <h2>{children}</h2>
          <button onClick={() => navigate('/')}>Вернуться на главную</button>
        </div>
      </div>
    </div>
  )
}

export default NoDataLoyaut
