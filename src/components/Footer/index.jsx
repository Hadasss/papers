import React from "react";

function Footer() {
  return (
    <div>
      <section className="contact" id="contact">
        <div className="contact-info">
          <h2>Let's Connect!</h2>
        </div>
        <div className="social">
          <a href="tel:480-123-1234">
            <img src="./assets/images/icons8-phone-64.png" alt="telephone" />
          </a>
          <a href="mailto:hadas.gadish@gmail.com" target="_blank">
            <img src="./assets/images/icons8-email-64.png" alt="email" />
          </a>
          <a href="https://www.linkedin.com/in/hadas-kamin/" target="_blank">
            <img src="./assets/images/icons8-linkedin-60.png" alt="linkedin" />
          </a>
          <a href="https://github.com/Hadasss/" target="_blank">
            <img src="./assets/images/icons8-github-48.png" alt="github" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;
