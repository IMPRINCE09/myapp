import React from "react";

const Blog = () => {
  return (
    <>
      <div className="main-section">
        <div className="main-section-left">
          <h1>BLOGS</h1>
          <p>
            The React.js blog is the most authoritative place to learn about new
            React features. If something is baking in the oven, then it will be
            definitely published here. Building Great User Experiences with
            Concurrent Mode and Suspense You Probably Don’t Need Derived Stat
            Error Handling in React 16
          </p>
        </div>
        <div className="main-section-rigth">
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_WVX6cZ8q1b.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </>
  );
};

export default Blog;
