import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router'
import { describe, expect, test } from 'vitest'
import Loyaut from '../loyaut'
import Home from '../pages/Home'
import ShopPage from '../pages/ShopPage'
import CollectionsPage from '../pages/CollectionsPage'
import GuidePage from '../pages/GuidePage'
import StoriesPage from '../pages/StoriesPage'
import NotPage from '../pages/NotPage'
import userEvent from '@testing-library/user-event'

const HelpRenderDom = (routes: string[]) => {
  return render(
    <MemoryRouter initialEntries={routes}>
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
    </MemoryRouter>
  )
}

describe('Тестирование роутинга', () => {
  test('Тестирования главной', async () => {
    HelpRenderDom(['/shop'])

    await userEvent.click(screen.getByTestId('LinkToHome'))
    const home = screen.getByText('Fall deeper in love with humanity')

    expect(home).toBeInTheDocument()
  })

  test('Tecтирование /shop', async () => {
    HelpRenderDom(['/'])

    await userEvent.click(screen.getByText('Shop'))

    const shop = screen.getByText(
      'К сожалению дизайнер не сверстал страницу "Shop", поэтому здесь побудет грустный смайлик'
    )

    expect(shop).toBeInTheDocument()
  })

  test('Tecтирование /collections', async () => {
    HelpRenderDom(['/'])

    await userEvent.click(screen.getByText('Collections'))

    const shop = screen.getByText(
      'К сожалению дизайнер не сверстал страницу "Collections", поэтому здесь побудет грустный смайлик'
    )

    expect(shop).toBeInTheDocument()
  })

  test('Tecтирование /guide', async () => {
    HelpRenderDom(['/'])

    await userEvent.click(screen.getByText('Try a Free Guide'))

    const shop = screen.getByText(
      'К сожалению дизайнер не сверстал страницу "Try a Free Guide", поэтому здесь побудет грустный смайлик'
    )

    expect(shop).toBeInTheDocument()
  })

  test('Tecтирование /NotPages', async () => {
    HelpRenderDom(['/random-pages007'])

    const shop = screen.getByText(
      'Ничего не найдено, поэтому здесь побудет грустный смайлик'
    )

    expect(shop).toBeInTheDocument()
  })
})
