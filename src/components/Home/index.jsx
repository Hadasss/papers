import React from "react";
import arizona from "../../images/arizona1_11.jpg";

function Home() {
  return (
    <section className="hero" id="home">
      <p>
        Hi. My name is <span className="hadas">Hadas</span>,
        <br className="mobile-break" />
        an Arizona based
        <br />
        fullstack software developer.
      </p>

      <img src={arizona} alt="amazing arizona" />
    </section>
  );
}

export default Home;
