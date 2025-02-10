import NoDataLoyaut from '../components/NoDataLoyaut/NoDataLoyaut'
import ScrollToTop from '../helper/scrollToTop'

const StoriesPage = () => {
  return (
    <div>
      <ScrollToTop />
      <NoDataLoyaut>
        К сожалению дизайнер не сверстал страницу "Stories", поэтому здесь
        побудет грустный смайлик
      </NoDataLoyaut>
    </div>
  )
}

export default StoriesPage
