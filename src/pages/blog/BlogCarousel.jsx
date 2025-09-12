import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';

import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';
import BlogCarouselMain from '../../sections/blog/BlogCarouselMain';

const BlogCarousel = () => {
    return (
        <div className="page-wrapper">
            <FreshHelmet title='Blog Carousel' />
            <BannerOne title='Blog Carousel' secondTitle='Blog Carousel' />
            <BlogCarouselMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />
        </div>
    );
};

export default BlogCarousel;