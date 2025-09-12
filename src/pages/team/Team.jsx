import React from 'react';
import { Helmet } from 'react-helmet-async';
import BannerOne from '../../sections/common/BannerOne';
import TeamMain from '../../sections/team/TeamMain';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';

const Team = () => {
    return (
        <>
            <Helmet>
                <title>Team | Fresh Flow</title>
                <meta name="description" content="Learn more about us" />
            </Helmet>
            <div className='page-wrapper' >
                <BannerOne title='Team Member' secondTitle='Team Member' />
                <TeamMain />
                <NewsLeterTow />
                <FooterTow />
                <StickyNavTow />
            </div>
        </>
    );
};

export default Team;