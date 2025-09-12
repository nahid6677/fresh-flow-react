import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';

import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';
import BlogOne from '../../sections/home-one/BlogOne';
import blogImg1 from "../../assets/images/blog/blog-1-1.jpg"
import blogImg2 from "../../assets/images/blog/blog-1-2.jpg"
import blogImg3 from "../../assets/images/blog/blog-1-3.jpg"
import blogImg4 from "../../assets/images/blog/blog-1-4.jpg"
import blogImg5 from "../../assets/images/blog/blog-1-5.jpg"
import blogImg6 from "../../assets/images/blog/blog-1-6.jpg"
import blogImg7 from "../../assets/images/blog/blog-1-7.jpg"
import blogImg8 from "../../assets/images/blog/blog-1-8.jpg"
const Allblogs = [
    {
        id: 1,
        image: blogImg1,
        date: {
            day: "05",
            month: "NOV"
        },
        links: {
            link1: "Cleaning",
            link2: "Sparkling",
        },
        title: "10 Simple Cleaning Hacks for a Spotless Home",
        text: "Discover quick and effective cleaning tips to keep your home sparkling"
    },
    {
        id: 2,
        image: blogImg2,
        date: {
            day: "24",
            month: "APR"
        },
        links: {
            link1: "Moping",
            link2: "Sparkling",
        },
        title: "Top 5 Reasons Your Business Needs Expert Cleaning Services",
        text: "Explore how a clean workplace boosts productivity, impresses clients"
    },
    {
        id: 3,
        image: blogImg3,
        date: {
            day: "24",
            month: "APR"
        },
        links: {
            link1: "Cleaning",
            link2: "Moping",
        },
        title: "How Our Cleaning Agency Makes a Difference",
        text: "A behind-the-scenes look at how a professional cleaning team transforms messy spaces"
    },
    {
        id: 4,
        image: blogImg4,
        date: {
            day: "30",
            month: "DEC"
        },
        links: {
            link1: "Sparkling",
            link2: "Moping",
        },
        title: "Cleaning Hacks vs Professional Help: When to Call the Experts",
        text: "Learn when DIY cleaning falls short and why professional services"
    },
    {
        id: 5,
        image: blogImg5,
        date: {
            day: "05",
            month: "NOV"
        },
        links: {
            link1: "Cleaning",
            link2: "Sparkling",
        },
        title: "10 Simple Cleaning Hacks for a Spotless Home",
        text: "Discover quick and effective cleaning tips to keep your home sparkling"
    },
    {
        id: 6,
        image: blogImg6,
        date: {
            day: "24",
            month: "APR"
        },
        links: {
            link1: "Moping",
            link2: "Sparkling",
        },
        title: "Top 5 Reasons Your Business Needs Expert Cleaning Services",
        text: "Explore how a clean workplace boosts productivity, impresses clients"
    },
    {
        id: 7,
        image: blogImg7,
        date: {
            day: "24",
            month: "APR"
        },
        links: {
            link1: "Cleaning",
            link2: "Moping",
        },
        title: "How Our Cleaning Agency Makes a Difference",
        text: "A behind-the-scenes look at how a professional cleaning team transforms messy spaces"
    },
    {
        id: 8,
        image: blogImg8,
        date: {
            day: "30",
            month: "DEC"
        },
        links: {
            link1: "Sparkling",
            link2: "Moping",
        },
        title: "Cleaning Hacks vs Professional Help: When to Call the Experts",
        text: "Learn when DIY cleaning falls short and why professional services"
    },
]
const Blog = () => {
    return (
        <div className="page-wrapper">
            <FreshHelmet title='Blog' />
            <BannerOne title='Blog' secondTitle='Blog' />
            <BlogOne pagination={true} blogs={Allblogs} />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />
        </div>
    );
};

export default Blog;