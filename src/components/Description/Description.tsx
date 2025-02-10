import { EOrientClass } from './list'

interface IProps {
  className: EOrientClass
  img: string
  title: string
  desc: string
  linkText: string
}
const Description = ({ className, img, title, desc, linkText }: IProps) => {
  return (
    <section className={className}>
      <div className="container">
        <div className={'data-description'}>
          <div>
            <img src={img} alt="#" />
          </div>
          <div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <p>
              <a href="#">{linkText}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description
