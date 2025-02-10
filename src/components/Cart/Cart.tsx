import classNames from 'classnames'
import firstItem from '../../assets/cart/first-item.png'
import secondItem from '../../assets/cart/second-item.png'
import thirdItem from '../../assets/cart/third-item.png'
import styles from './Cart.module.scss'
const Cart = () => {
  return (
    <section>
      <div className={classNames('container', styles.cart)}>
        <h2>Our guides explain countries and cultures.</h2>
        <p>
          Are you curious about the world around you? Our guides are for smart
          global citizens, world travelers and engaged residents who want to
          gain a deeper understanding of the cultures and societies they care
          about.
        </p>
        <p>Available as ebooks here and on Amazon.</p>
        <h2>Our best sellers</h2>
        <div>
          <div>
            <img src={firstItem} alt="#" />
            <h3>Thalby Guide to French Culture and Heritage</h3>
            <p>USD 6.99</p>
            <a href="#">Add to cart</a>
          </div>
          <div>
            <img src={secondItem} alt="#" />
            <h3>Thalby Guide to French People and Society</h3>
            <p>USD 6.99</p>
            <a href="#">Add to cart</a>
          </div>
          <div>
            <img src={thirdItem} alt="#" />
            <h3>Thalby Guide to French People and Society</h3>
            <p>USD 6.99</p>
            <a href="#">Add to cart</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
