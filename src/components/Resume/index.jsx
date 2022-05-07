import React from "react";
import resume from "../../images/CV.pdf";
import resumeIcon from "../../images/icons8-download-resume-64.png";

function Resume() {
  return (
    <section className="cv" id="resume">
      <h2 className="borderized">Resume and Skills</h2>
      <div className="other-stuff">
        <div className="work-experience">
          <div className="m-3">
            <h3>Resume</h3>
            <p>
              Click to download <br />
            </p>
            <a href={resume} download>
              <img src={resumeIcon} alt="CV"></img>
            </a>
          </div>
          <div>
            <h4 className="m-3">My Skills:</h4>
            <ul>
              <li>Html5</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>ES6</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>TDD</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Node.js</li>
              <li>OOP</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>RESTful API</li>
              <li>PWA</li>
              <li>React</li>
              <li>SPA</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
