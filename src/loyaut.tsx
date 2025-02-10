import Header from './components/Header/Header'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import ShopPage from './pages/ShopPage'
import StoriesPage from './pages/StoriesPage'
import CollectionsPage from './pages/CollectionsPage'
import GuidePage from './pages/GuidePage'
import Footer from './components/Footer/Footer'
import FormSubscribe from './components/FormSubscribe/FormSubscribe'
import NotPage from './pages/NotPage'

const loyaut = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* <ScrollToTop /> */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/*" element={<NotPage />} />
      </Routes>
      <FormSubscribe />
      <Footer />
    </>
  )
}

export default loyaut
