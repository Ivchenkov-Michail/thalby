import NoDataLoyaut from '../components/NoDataLoyaut/NoDataLoyaut'
import ScrollToTop from '../helper/scrollToTop'

const CollectionsPage = () => {
  return (
    <div>
      <ScrollToTop />
      <NoDataLoyaut>
        Ничего не найдено, поэтому здесь побудет грустный смайлик
      </NoDataLoyaut>
    </div>
  )
}

export default CollectionsPage
