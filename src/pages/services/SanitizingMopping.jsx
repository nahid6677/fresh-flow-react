import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import CommercialMain from '../../sections/services/CommercialMain';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';
import SanitizingMain from '../../sections/services/SanitizingMain';

const SanitizingMopping = () => {
    return (
        <div className='page-wrapper'>
            <FreshHelmet title={"Sanitizing & Mopping"} />
            <BannerOne title='Sanitizing & Mopping' secondTitle='services' secondTitleLink='/services' thirdTitle='Commercial Cleaning' />
            <SanitizingMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />

        </div>
    );
};

export default SanitizingMopping;