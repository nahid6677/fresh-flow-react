import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';
import OfficeMain from '../../sections/services/OfficeMain';


const OfficeCleaning = () => {
    return (
        <div className='page-wrapper'>
            <FreshHelmet title={"Office Cleaning"} />
            <BannerOne title='Office Cleaning' secondTitle='services' secondTitleLink='/services' thirdTitle='Commercial Cleaning' />
            <OfficeMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />

        </div>
    );
};

export default OfficeCleaning;