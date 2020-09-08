import React from "react";
import "./styles/About.css";
function About() {
  return (
    <section className="about" id="about">
      <div className="section__head">
        <h2>About</h2>
      </div>
      <h3 className="about__name">Shubham Bundela</h3>
      <p className="about__info">
        Problem solving and good techincal skills aiming to use them for the
        development and improvement of the respective organization. I am
        Energetic and passionate about learning new skills and technology.
      </p>
      <h3 className="about__sub-head ">Hobbies:</h3>
      <ul className="about__hobbies-list">
        <li>Gaming</li>
        <li>Watching E-Sports</li>
        <li>Listening Music</li>
        <li>Reading Books</li>
      </ul>
    </section>
  );
}

export default About;
