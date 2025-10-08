import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              At our Restaurant, we’re passionate about creating memorable dining experiences through delicious food, warm hospitality, and a welcoming atmosphere. Our chefs craft each dish with fresh, high-quality ingredients, blending tradition with creativity to bring bold flavors to your table. Whether you're joining us for a casual lunch or a special dinner, we’re here to serve meals that satisfy both the palate and the soul.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
           <img src="/about.png" alt="about" />

          </div>
        </div>
      </section>
    </>
  );
};

export default About;