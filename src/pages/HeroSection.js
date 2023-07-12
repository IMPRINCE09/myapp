import React from "react";

const HeroSection = () => {
  return (
    <div className="container-hero">
      <div className="left-hero-data">
        <h1>I am</h1>
        <h2>Prince Patel</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          itaque eius at animi exercitationem laborum, sunt esse officia
          adipisci! Neque!
        </p>
        <button>Share</button>
      </div>
      <div className="right-hero-data">
        <lottie-player
          src="https://assets6.lottiefiles.com/packages/lf20_dvl7j8ix.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default HeroSection;
