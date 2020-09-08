import React from "react";
import Header from "./Header";
import "./styles/Hero.css";
import Mac from "../img/mac.png";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section className="hero">
      <Header />
      <div className="hero__main">
        <div className="hero__column spacing">
          <div className="hero__txt">
            <h2 className="hero__head">
              #Hi I am &nbsp;
              <span>
                <Typewriter
                  options={{
                    strings: ["Shubham Bundela", "Gamer", "Programmer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>
            <p className="hero__content">
              Hello World! My name is Shubham Bundela. I am a Computer Science
              Student who loves Web Development and App Development with
              JavaScript, Python, Flutter and PHP as my main Technologies.
            </p>
          </div>
        </div>
        <div className="hero__column">
          <div className="hero__img-container">
            <img src={Mac} alt="" className="hero__img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
