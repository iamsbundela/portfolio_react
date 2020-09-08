import React from "react";
import "./styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__head">
        <h3>Contact Me</h3>
      </div>
      <div className="contact__form">
        <form
          action="https://formspree.io/sbundela88@gmail.com"
          method="post"
          className="spacing"
        >
          <input
            type="text"
            name="Name"
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            name="Mail"
            placeholder="Enter Your email"
            required
          />
          <textarea
            name="Message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
