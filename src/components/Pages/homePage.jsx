import HomeSlider from '../.././components/HomeSlider/Home-Slider'
import CollectionOverview from '../../components/Collections/CollectionOverview'
import ShopCarousel from '../../components/ShopCarousel/ShopCarousel'
import Promotion from '../../components/PromotionSlider/Promotion'
import Newsletter from '../../components/NewsLetter/Newsletter'

const HomePage = () => {
    return (
        <div>
            <HomeSlider />
            <CollectionOverview />
            <ShopCarousel />
            <Promotion />
            <Newsletter />
        </div>
    )
}

export default HomePage
