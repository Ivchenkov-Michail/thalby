import inst from './assets/inst.svg'
import search from './assets/search.svg'
import cart from './assets/cart.svg'
import logo from './assets/logo.svg'
import firstDisplay from './assets/first-display/first-display.png'
import firstItem from './assets/cart/first-item.png'
import secondItem from './assets/cart/second-item.png'
import thirdItem from './assets/cart/third-item.png'
import firstDisc from './assets/discover/first.png'
import secondDisc from './assets/discover/second.png'
import thirdDisc from './assets/discover/third.png'
import footerInst from './assets/footer/inst.svg'
import footerFacebook from './assets/footer/facebook.svg'
import footerTwitter from './assets/footer/Twitter.svg'
import footerLogo from './assets/footer/thalby.svg'
import './App.css'

function App() {
  return (
    <>
      <header className="container">
        <div>
          <div className="header-menu">
            <p>
              <a href="#">Shop</a>
            </p>
            <p>
              <a href="#">Collections</a>
            </p>
            <p>
              <a href="#">Try a Free Guide</a>
            </p>
            <p>
              <a href="#">Stories</a>
            </p>
          </div>
          <img src={logo} alt="#" />
          <div className="header-contact">
            <img src={inst} alt="" />
            <img src={search} alt="" />
            <img src={cart} alt="" />
          </div>
        </div>
      </header>
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
        <section>
          <div className="container cart">
            <h2>Our guides explain countries and cultures.</h2>
            <p>
              Are you curious about the world around you? Our guides are for
              smart global citizens, world travelers and engaged residents who
              want to gain a deeper understanding of the cultures and societies
              they care about.
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
        <section className="section-uneven-description">
          <div className="container">
            <div className="data-description">
              <img src={secondItem} alt="#" />
              <div>
                <h2>People and Society</h2>
                <p>
                  Our guides to society deliver all the social insight you need,
                  helping you understand how people live, love and play today
                  and why communities are the way they are.
                </p>
                <p>
                  <a href="#">Shop Society Guides</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-even-description">
          <div className="container">
            <div className="data-description">
              <img src={firstItem} alt="#" />
              <div>
                <h2>Culture and Heritage</h2>
                <p>
                  As well as covering heritage and tradition, our guides to
                  culture introduce you to the designers, artists and chefs
                  creating at the forefront of today's culture.
                </p>
                <p>
                  <a href="">Shop Culture Guides</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-uneven-description">
          <div className="container">
            <div className="data-description">
              <img src={thirdItem} alt="#" />
              <div>
                <h2>Power and Politics</h2>
                <p>
                  Our guides to power take you behind the scenes to explore the
                  power dynamics, policies and politics shaping a country's
                  future and its global position.
                </p>
                <p>
                  <a href="">Coming 2022!</a>
                </p>
              </div>
            </div>
          </div>
        </section>
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
        <section className="section-discovery">
          <h2>
            Each Thalby guide includes interviews with a range of fascinating
            voices,&nbsp;such&nbsp;as
          </h2>
          <div className="background">
            <div className="container">
              <div className="cards">
                <div className="card">
                  <img src={firstDisc} alt="Camille Muller"></img>
                  <h3 className="quote">
                    "I don’t like things to be conventional. If it’s too nice, I
                    bring disorder."
                  </h3>
                  <div className="name">
                    Camille&nbsp;Muller, Landscape&nbsp;Designer, France
                  </div>
                  <div className="discover">Discover</div>
                </div>
                <div className="card">
                  <img src={secondDisc} alt="Sonia Kowalewski"></img>
                  <h3 className="quote">
                    "Magic is not magic in the sense that I can just wish for
                    anything."
                  </h3>
                  <div className="name">Sonia Kowalewski, Witch, Germany</div>
                  <div className="discover">Discover</div>
                </div>
                <div className="card">
                  <img src={thirdDisc} alt="Lilly Stoephasius"></img>
                  <h3 className="quote">
                    "I was eight years old when I entered my first competition.
                    I won it."
                  </h3>
                  <div className="name">
                    Lilly Stoephasius, Skateboarder, Germany
                  </div>
                  <div className="discover">Discover</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-form">
          <div className="container">
            <div className="form">
              <h2>Keep in touch</h2>
              <p>
                Get our travel advice, global views and travel freebies in your
                inbox
              </p>
              <form className="form-subscribe" action="">
                <div>
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <input type="text" placeholder="Email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="footer">
              <div>
                <img src={footerLogo} alt="#" />
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
      </main>
    </>
  )
}

export default App
