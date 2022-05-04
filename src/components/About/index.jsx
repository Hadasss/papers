import React from "react";

function About() {
  return (
    <div>
      <section className="personal" id="about-me">
        <h2 className="borderized">About Me</h2>
        <article className="about-me">
          <img
            src="./assets/images/imageedit_8_6943131314.jpg"
            alt="Hadas Kamin"
          />
          <p>
            I am an aspiring fullstack developer, currently a UofA boot camp
            student, graduating end of May.
            <br />
            I am on a career changing path from being a marketing and
            advertising specialist for over 15 years and enjoying my newfound
            passion.
            <br />
            For the past 2.5 years I've been living the good life in Arizona
            with my family and loving every minute of it! <br />
            These days I'm especially enjoying exploring server side APIs,
            writing controllers, routing and debugging. Who knew?
          </p>
        </article>
      </section>
    </div>
  );
}

export default About;
