import React from "react";
import "./styles/Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__content spacing">
        <h4>Thanks</h4>
        <p>For any suggestion or wanna talk to me just reach me out.</p>
        <p>
          Copyright &copy;{currentYear}. This site is made by{" "}
          <span className="name">Shubham Bundela</span>.{" "}
        </p>
      </div>
      <div className="footer__social">
        <p>Let us be social</p>
        <div className="footer__icons">
          <a
            href="https://www.instagram.com/iamsbundela/"
            className="footer__icon"
          >
            <InstagramIcon />
          </a>
          <a href="https://github.com/iamsbundela/" className="footer__icon">
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-b-b82844125"
            className="footer__icon"
          >
            <LinkedInIcon />
          </a>
          <a href="https://twitter.com/iam_sbundela/" className="footer__icon">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
