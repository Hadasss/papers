import React from "react";
import resume from "../../images/CV.pdf";
import resumeIcon from "../../images/icons8-download-resume-64.png";

import bootstrap from "../../images/bootstrap.svg";
import css from "../../images/css.svg";
import es6 from "../../images/es61.png";
import express from "../../images/express1.png";
import git from "../../images/git.svg";
import github from "../../images/github.svg";
import html from "../../images/html.svg";
import js from "../../images/javascript.svg";
import jquery from "../../images/jquery.svg";
import mongo from "../../images/mongodb.svg";
import mysql from "../../images/mysql.svg";
import node from "../../images/nodejs.svg";
import react from "../../images/react.svg";
import oop from "../../images/oop.png";

function Resume() {
  return (
    <section className="cv" id="resume">
      <h2 className="borderized">Resume and Skills</h2>
      <div>
        <div className="work-experience d-flex p-4">
          <div className="skills col-9">
            <h4 className="display-6 m-3">My Skills:</h4>

            <div>
              <img src={bootstrap} alt="bootstrap"></img>
              <img src={css} alt="css"></img>
              <img className="m-2" src={es6} alt="ES6"></img>
              <img className="m-2" src={express} alt="express.js"></img>
              <img src={git} alt="git"></img>
              <img src={github} alt="github"></img>
              <img src={html} alt="html"></img>
              <img src={js} alt="javascript"></img>
              <img src={jquery} alt="jquery"></img>
              <img src={mongo} alt="MongoDB"></img>
              <img className="m-2" src={mysql} alt="MySQL"></img>
              <img className="m-2" src={node} alt="Node.js"></img>
              <img src={react} alt="react"></img>
              <img
                className="m-2"
                src={oop}
                alt="Object Oriented Programming"
              ></img>
            </div>
            <h4>And some more...</h4>
            <ul className="list-unstyled">
              {/* <li>Html5</li> */}
              {/* <li>CSS</li> */}
              {/* <li>Javascript</li> */}
              {/* <li>ES6</li> */}
              {/* <li>Git</li>
              <li>GitHub</li> */}
              <li>TDD</li>
              {/* <li>jQuery</li> */}
              {/* <li>Bootstrap</li> */}
              {/* <li>Node.js</li>
              <li>OOP</li> */}
              {/* <li>Express.js</li> */}
              {/* <li>MongoDB</li> */}
              {/* <li>SQL</li> */}
              <li>RESTful API</li>
              <li>PWA</li>
              {/* <li>React</li> */}
              <li>SPA</li>
            </ul>
          </div>
          <div className="col-3 m-3">
            <h3 className="display-6">Resume</h3>
            <p>
              Click to download <br />
            </p>
            <a href={resume} download>
              <img src={resumeIcon} alt="CV"></img>
            </a>
          </div>
        </div>
        <div className="volunteering p-4">
          <h4 className="display-6">Volunteer Work</h4>
          <h6>
            <strong>she codes;</strong> / Front End Track Coordinator / June
            2021 - Present
          </h6>
          <p>
            she codes; is a NGO that thrives to match female representation in
            dev positions to their representation in population: 51%.
          </p>
          <h6>
            <strong>Code For Israel</strong> / Front End Developer / June 2021 -
            Present
          </h6>
          <p>
            Code For Israel in a NGO that assists the government in solving
            social challenges with technical solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
