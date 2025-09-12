import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import ProjectDetailsMain from '../../sections/project-details/ProjectDetailsMain';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';

const ProjectDetails = () => {
    return (
        <>
            <FreshHelmet title={"Projects Details"} />
            <div className="page-wrapper">
                <BannerOne title='Projects Details' secondTitle='Projects Details' />
                <ProjectDetailsMain />
                <NewsLeterTow />
                <FooterTow />
                <StickyNavTow />

            </div>
        </>
    );
};

export default ProjectDetails;