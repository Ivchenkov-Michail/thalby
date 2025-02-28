import Header from './components/Header/Header'
import { Outlet } from 'react-router'

import Footer from './components/Footer/Footer'
import FormSubscribe from './components/FormSubscribe/FormSubscribe'

const Loyaut = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FormSubscribe />
      <Footer />
    </>
  )
}

export default Loyaut
