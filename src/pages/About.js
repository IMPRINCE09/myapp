import React from "react";
import Title from "../components/Title";

const About = () => {
  return (
    <>
      <div className="container-about">
        <Title title="About" />
        <div className="aboute-data">
          <div className="left-about-data">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_3ntisyac.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="right-about-data">
            <h1>Prince Kumar Patel</h1>
            <p>
              I am Prince kumar Patel . Persuing Btech from Gla University and i
              am a final year student. I want to become a FullStack Dveloper.and
              want to expore more in this field
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
