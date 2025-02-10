import NoDataLoyaut from '../components/NoDataLoyaut/NoDataLoyaut'
import ScrollToTop from '../helper/scrollToTop'

const GuidePage = () => {
  return (
    <div>
      <ScrollToTop />
      <NoDataLoyaut>
        К сожалению дизайнер не сверстал страницу "Try a Free Guide", поэтому
        здесь побудет грустный смайлик
      </NoDataLoyaut>
    </div>
  )
}

export default GuidePage
