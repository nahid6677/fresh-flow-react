import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import TeamDetailsMain from '../../sections/team-details/TeamDetailsMain';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';


const TeamDetails = () => {
    
    return (
        <>
            <FreshHelmet title={"Team Details"} />
            <div className="page-wrapper">
                <BannerOne title='Team Details' secondTitle='Team Details' />
                <TeamDetailsMain />
                <NewsLeterTow />
                <FooterTow />
                <StickyNavTow />
            </div>
        </>
    );
};

export default TeamDetails;