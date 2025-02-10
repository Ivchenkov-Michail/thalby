import firstItem from '../../assets/cart/first-item.png'
import secondItem from '../../assets/cart/second-item.png'
import thirdItem from '../../assets/cart/third-item.png'

export enum EOrientClass {
  STANDART = 'section-uneven-description',
  REVERSE = 'section-even-description',
}

type TDescList = {
  className: EOrientClass
  img: string
  title: string
  desc: string
  linkText: string
}

export const descList: TDescList[] = [
  {
    className: EOrientClass.STANDART,
    img: secondItem,
    title: 'People and Society',
    desc: 'Our guides to society deliver all the social insight you need, helping you understand how people live, love and play today and why communities are the way they are.',
    linkText: 'Shop Society Guides',
  },
  {
    className: EOrientClass.REVERSE,
    img: firstItem,
    title: 'Culture and Heritage',
    desc: 'As well as covering heritage and tradition, our guides to culture introduce you to the designers, artists and chefs creating at the forefront of todays culture.',
    linkText: 'Shop Culture Guides',
  },
  {
    className: EOrientClass.STANDART,
    img: thirdItem,
    title: 'Power and Politics',
    desc: 'Our guides to power take you behind the scenes to explore the power dynamics, policies and politics shaping a countrys future and its global position.',
    linkText: 'Coming 2022!',
  },
]
