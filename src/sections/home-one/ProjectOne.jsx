import { Link } from "react-router-dom";
import proj1 from "../../assets/images/project/project-1-1.jpg";
import proj2 from "../../assets/images/project/project-1-2.jpg";
import proj3 from "../../assets/images/project/project-1-3.jpg";
import proj4 from "../../assets/images/project/project-1-4.jpg";
import proj5 from "../../assets/images/project/project-1-5.jpg";
import proj6 from "../../assets/images/project/project-one-single-two-img-1.png";
import { useState } from "react";
const fixProject = [
  {
    filterName: "Sparkle",
    tag1: "Residential",
    tag2: "November 24",
    title: "Sparkle & Shine Services",
    imgURL: proj1,
  },
  {
    filterName: "Pure",
    tag1: "Commercial",
    tag2: "November 24",
    title: "Pure Clean Solutions",
    imgURL: proj2,
  },
  {
    filterName: "Fresh",
    tag1: "Deep CLEAN",
    tag2: "November 24",
    title: "Fresh Space Experts",
    imgURL: proj3,
  },
  {
    filterName: "Eco",
    tag1: "Moveout",
    tag2: "November 24",
    title: "Eco Gleam Crew",
    imgURL: proj4,
  },
  {
    filterName: "Neat",
    tag1: "Specialized",
    tag2: "November 24",
    title: "Neat Nest Pros",
    imgURL: proj5,
  },
];
const ProjectOne = () => {
  const [last, setLast] = useState(true);
  const [isActive, setActive] = useState("All");
  const [projects, setProject] = useState(fixProject || []);

  const handleAll = () => {
    setProject(fixProject);
    setActive("All");
    setLast(true);
  };
  const corporateOffic = () => {
    const corporate = ["Pure", "Eco", "Neat"];
    setProject(
      fixProject.filter((item) => corporate.includes(item?.filterName))
    );
    setLast(false);
    setActive("Corporate");
  };
  const houseClean = () => {
    const house = ["Sparkle", "Fresh", "Neat"];
    setProject(fixProject.filter((item) => house.includes(item?.filterName)));
    setLast(true);
    setActive("House");
  };
  const carGarage = () => {
    const car = ["Fresh", "Eco"];
    setProject(fixProject.filter((item) => car.includes(item?.filterName)));
    setLast(false);
    setActive("Car");
  };
  const bykeFactory = () => {
    const byke = ["Sparkle", "Pure", "Fresh", "Neat"];
    setProject(fixProject.filter((item) => byke.includes(item?.filterName)));
    setLast(true);
    setActive("Bakery");
  };
  const sparklyClean = () => {
    const spark = ["Sparkle", "Eco"];
    setProject(fixProject.filter((item) => spark.includes(item?.filterName)));
    setLast(true);
    setActive("Sparkly");
  };

  const handleTel = (e) => {
    e.preventDefault()
    alert("tel:120045678910")
  }
  return (
    <section className="project-one">
      <div className="project-one__bg-shape"></div>
      <div className="project-one__bg-shape-2"></div>
      <div className="project-one__shape-1"></div>
      <div className="project-one__shape-2"></div>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-box">
              <div className="section-title__tagline-shape"></div>
              <div className="section-title__tagline-shape-2"></div>
            </div>
            <span className="section-title__tagline">Our Projects</span>
          </div>
          <h2 className="section-title__title title-animation">
            A showcase of projects <span>that</span>
            <br />
            <span>define excellence</span>
          </h2>
        </div>
        <div className="project-one__inner">
          <ul className="project-one__filter style1 post-filter list-unstyled clearfix">
            <li onClick={handleAll} className={`${isActive === "All" ? "active" : ""}`} >
              <p> <span className="icon-catagory"></span>All  </p>
            </li>
            <li onClick={corporateOffic} className={`${isActive === "Corporate" ? "active" : ""}`} >
              <p> <span className="icon-pen-ruler"></span>Corporate Office </p>
            </li>
            <li onClick={houseClean} className={`${isActive === "House" ? "active" : ""}`} >
              <p> <span className="icon-computer"></span>House Cleaning </p>
            </li>
            <li onClick={carGarage} className={`${isActive === "Car" ? "active" : ""}`} >
              <p> <span className="icon-bullhorn"></span>Car Garage </p>
            </li>
            <li onClick={bykeFactory} className={`${isActive === "Bakery" ? "active" : ""}`} >
              <p> <span className="icon-bullhorn"></span>Bakery & Factory </p>
            </li>
            <li onClick={sparklyClean} className={`${isActive === "Sparkly" ? "active" : ""}`} >
              <p> <span className="icon-bullhorn"></span>Sparkly Clean </p>
            </li>
          </ul>
          <div className="row filter-layout">
            {
              projects.map((item, index) => (
                <div
                  key={`ed5G${index}48`}
                  className="col-xl-4 col-lg-4 col-md-6 "
                >
                  <div className="project-one__single">
                    <div className="project-one__img-box">
                      <div className="project-one__img">
                        <img src={item?.imgURL} alt="" />
                      </div>
                      <div className="project-one__view-box">
                        <Link
                          to={"project-details"}
                          className="project-one__view"
                        >
                          <i className="icon-diagonal-arrow"></i>
                          <span>View More</span>
                        </Link>
                      </div>
                    </div>
                    <div className="project-one__content">
                      <p className="project-one__tag">
                        {item?.tag1}
                        <span className="icon-right-arrow"></span>
                        {item?.tag1}
                      </p>
                      <h3 className="project-one__title">
                        <Link to={"project-details"}>{item?.title}</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))
            }

            {last && (
              <div className="col-xl-4 col-lg-4 col-md-6 ">
                <div className="project-one__single-2" style={{height: '350px'}}>
                  <div className="project-one__single-2-img">
                    <img src={proj6} alt="" />
                  </div>
                  <h3 className="project-one__title-2">
                    <Link to={"/project-details"}>
                      Do you have any project
                      <br />
                      ideas in mind?
                    </Link>

                  </h3>
                  <div className="project-one__view-box-2">
                    <Link to={"/project-details"} className="project-one__view-2">
                      <i className="icon-diagonal-arrow"></i>
                      <span>
                        View More
                        <br /> Project
                      </span>
                    </Link>

                  </div>
                  <ul className="project-one__sliding-text-list list-unstyled marquee_mode">
                    <li>
                      <h2
                        data-hover="Get In Touch"
                        className="project-one__sliding-text-title"
                      >
                        Get In Touch
                      </h2>
                    </li>
                  </ul>
                  <div className="project-one__need-help">
                    <p>Need Support?</p>
                    <a onClick={handleTel} href="#">12 (00) 456 78910</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOne;
