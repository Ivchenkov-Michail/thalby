import firstDisc from '../../assets/discover/first.png'
import secondDisc from '../../assets/discover/second.png'
import thirdDisc from '../../assets/discover/third.png'
import styles from './Discovery.module.scss'

const Discovery = () => {
  return (
    <section className={styles.discovery}>
      <h2>
        Each Thalby guide includes interviews with a range of fascinating
        voices,&nbsp;such&nbsp;as
      </h2>
      <div className={styles.background}>
        <div className="container">
          <div className={styles.cards}>
            <div className={styles.card}>
              <img src={firstDisc} alt="Camille Muller"></img>
              <h3 className={styles.quote}>
                "I don’t like things to be conventional. If it’s too nice, I
                bring disorder."
              </h3>
              <div className={styles.name}>
                Camille&nbsp;Muller, Landscape&nbsp;Designer, France
              </div>
              <div className={styles.discover}>Discover</div>
            </div>
            <div className={styles.card}>
              <img src={secondDisc} alt="Sonia Kowalewski"></img>
              <h3 className={styles.quote}>
                "Magic is not magic in the sense that I can just wish for
                anything."
              </h3>
              <div className={styles.name}>
                Sonia Kowalewski, Witch, Germany
              </div>
              <div className={styles.discover}>Discover</div>
            </div>
            <div className={styles.card}>
              <img src={thirdDisc} alt="Lilly Stoephasius"></img>
              <h3 className={styles.quote}>
                "I was eight years old when I entered my first competition. I
                won it."
              </h3>
              <div className={styles.name}>
                Lilly Stoephasius, Skateboarder, Germany
              </div>
              <div className={styles.discover}>Discover</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discovery
