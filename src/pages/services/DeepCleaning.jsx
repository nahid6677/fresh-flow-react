import FreshHelmet from '../../components/common/FreshHelmet';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';
import BannerOne from '../../sections/common/BannerOne';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import DeepMain from '../../sections/services/DeepMain';
const DeepCleaning = () => {
    return (
        <div className='page-wrapper'>
            <FreshHelmet title={"Deep Cleaning"} />
            <BannerOne title='Deep Cleaning' secondTitle='services' secondTitleLink='/services' thirdTitle='Commercial Cleaning' />
            <DeepMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />
        </div>
    );
};

export default DeepCleaning;