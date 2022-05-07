import React from "react";
import phone from "../../images/icons8-phone-48.png";
import linkedin from "../../images/icons8-linkedin-45.png";
import email from "../../images/icons8-email-60.png";
import github from "../../images/icons8-github-48.png";
import stack from "../../images/icons8-stack-overflow-45.png";

function Footer() {
  return (
    <section className="contact pt-3" id="contact">
      <div className="contact-info">
        <h2>Let's Connect!</h2>
      </div>
      <div className="social">
        <a href="tel:480-123-1234">
          <img src={phone} alt="telephone" />
        </a>
        <a
          href="mailto:hadas.gadish@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={email} alt="email" />
        </a>
        <a
          href="https://www.linkedin.com/in/hadas-kamin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://github.com/Hadasss/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github" />
        </a>

        <a
          href="https://stackoverflow.com/users/16410567/hades"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={stack} alt="stack-overflow" />
        </a>
      </div>
    </section>
  );
}

export default Footer;
