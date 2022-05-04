import React from "react";

function Work() {
  return (
    <div>
      <section className="cv" id="work-experience">
        <h2 className="borderized">Work Experience, Education and More</h2>
        <div className="other-stuff">
          <div className="work-experience">
            <h3>Work Experience</h3>

            <h6>Brand Manager / Neopharm Consumer Products</h6>
            <p>
              Oversaw 360° brand life cycle. Initiated and implemented marketing
              strategies, accountable for launches and delivery, P&L reports and
              budget status. <br />
            </p>
            <h6>
              Digital Marketing Communication Manager / Israel Credit Cards
            </h6>
            <p>
              Monitored, analyzed, and executed all advertising activities in
              the credit (personal loan) field. Close work with R&D on all dev
              cycle – specification document to deployment, through production
              and various version releases. <br />
            </p>
            <h6>Advertising Manager / Mish’an Senior Living</h6>
            <p>
              Managed all marketing, advertising and PR activities for a chain
              of 13 senior living homes. Developed the digital infrastructure.
              Tight working relations with sales.
              <br />
            </p>
            <h6>Google AdWords Manager / IBP Digital Ad Agency</h6>
            <p>
              Hands on SEM account management.
              <br />
            </p>
            <h6>Account Supervisor / Yehoshua\TBWA Ad Agency</h6>
            <p>
              In charge of all clients’ advertising activities while
              representing both client and agency interests. Managed six account
              managers. Strategic planning and production.
            </p>
          </div>
          <div className="education" id="education">
            <h3>Education</h3>
            <p>
              Bachelor of Arts, Political Science / Ben-Gurion University /
              Israel
              <br />
              graduated with honors
            </p>
          </div>
          <div className="volunteer-work" id="volunteer-work">
            <h3>Volunteer Work</h3>
            <h6>
              she codes; / Front End Track Coordinator / June 2021 - Present
            </h6>
            <p>
              she codes; is a NGO that thrives to match female representation in
              dev positions to their representation in population: 51%.
            </p>
            <h6>Code For Israel / Front End Developer / June 2021 - Present</h6>
            <p>
              Code For Israel in a NGO that assists the government in solving
              social challenges with technical solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
