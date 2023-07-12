import React from "react";

const Contact = () => {
  return (
    <>
      <form>
        <div className="contact">
          <div className="left-contact">
            <h1>Contact Me</h1>

            <div className="contact-list">
              <div>
                <input
                  type="text"
                  className="conatct-details"
                  required
                  placeholder="Enter your name"
                  name="name"
                ></input>
              </div>
              <div>
                <input
                  type="number"
                  className="conatct-details"
                  required
                  placeholder="Eneter your contact number"
                  name="number"
                ></input>
              </div>
              <div>
                <input
                  type="eamil"
                  className="conatct-details"
                  required
                  placeholder=" Enter your email"
                  name="email"
                ></input>
              </div>
            </div>
            <div className="button">
              <button className="btn">Submit</button>
            </div>
          </div>
          <div className="right-contact">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_lt8ter7g.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
