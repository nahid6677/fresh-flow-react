import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerHomeTow from '../../sections/home-2/BannerHomeTow';
import HomeTowMain from '../../sections/home-2/HomeTowMain';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavHomeTow from '../../sections/home-2/StickyNavHomeTow';

const HomeTow = () => {
    return (
        <div className="page-wrapper">
            <FreshHelmet title={"Home Tow"} />
            <BannerHomeTow />
            <HomeTowMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavHomeTow />
        </div>
    );
};

export default HomeTow;