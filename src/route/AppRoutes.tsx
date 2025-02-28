import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import ShopPage from '../pages/ShopPage'
import StoriesPage from '../pages/StoriesPage'
import CollectionsPage from '../pages/CollectionsPage'
import GuidePage from '../pages/GuidePage'

import NotPage from '../pages/NotPage'
import Loyaut from '../loyaut'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Loyaut />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/*" element={<NotPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
