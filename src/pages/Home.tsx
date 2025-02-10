import firstDisplay from '../assets/first-display/first-display.png'
import { descList } from '../components/Description/list'

import Cart from '../components/Cart/Cart'
import Discovery from '../components/Discovery/Discovery'
import Description from '../components/Description/Description'
import ScrollToTop from '../helper/scrollToTop'

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <main>
        <section className="section-first-display">
          <div className="container">
            <div className="data-first-display">
              <div>
                <h1>Fall deeper in love with humanity</h1>
                <p>
                  Get to know the world through our concise, informative and
                  inspiring guides.
                </p>
                <button>Shop Now</button>
              </div>
              <div>
                <img src={firstDisplay} alt="#" />
              </div>
            </div>
          </div>
        </section>
        <Cart />
        {descList.map((item) => (
          <Description {...item} />
        ))}
        <section className="section-adventages">
          <div className="container">
            <div className="adventages">
              <p>Some of the features that make Thalby guides unique</p>
              <div>
                <div>
                  <div
                    className="circle"
                    style={{ backgroundColor: '#21F7EC' }}
                  ></div>
                  <h4>Written by locals</h4>
                </div>
                <div>
                  <div
                    className="circle"
                    style={{ backgroundColor: '#33D3BC' }}
                  ></div>
                  <h4>Packed with insight</h4>
                </div>
                <div>
                  <div
                    className="circle"
                    style={{ backgroundColor: '#18A5C6' }}
                  ></div>
                  <h4>Interviews with diverse voices</h4>
                </div>
                <div>
                  <div
                    className="circle"
                    style={{ backgroundColor: '#D38F62' }}
                  ></div>
                  <h4>Key facts and etiquette tips</h4>
                </div>
                <div>
                  <div
                    className="circle"
                    style={{ backgroundColor: '#F94C43' }}
                  ></div>
                  <h4>A concise 1-hour read</h4>
                </div>
                <div>
                  <div
                    className="circle"
                    style={{ backgroundColor: '#D399FF' }}
                  ></div>
                  <h4>Instant digital access</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Discovery />
      </main>
    </>
  )
}

export default Home
