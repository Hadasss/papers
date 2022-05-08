import React from "react";
import Accordion from "react-bootstrap/Accordion";
import memory from "../../images/project1.JPG";
import dice from "../../images/project2.JPG";
import gallery from "../../images/project3.JPG";
import marvel from "../../images/project5.JPG";
import planner from "../../images/project6.JPG";
import weather from "../../images/project7.JPG";
import quiz from "../../images/project8.JPG";
import favdash from "../../images/project9.jpg";
import blob from "../../images/project10.jpg";
import notes from "../../images/project11.jpg";

function Project() {
  const projectArr = [
    {
      name: "Memory Game",
      description: "Memory card game.",
      technologies: "Javascript, CSS, HTML",
      imgLink: memory,
      githubLink: "https://github.com/Hadasss/Avengers-Memory-Game",
      link: "https://hadasss.github.io/Avengers-Memory-Game/",
    },
    {
      name: "Beat The Dice",
      description: "A two player dice game.",
      technologies: "CSS, Javascript, HTML",
      imgLink: dice,
      githubLink: "https://github.com/Hadasss/Beat-The-Dice",
      link: "https://hadasss.github.io/Beat-The-Dice/",
    },
    {
      name: "Musical Gallery",
      description: "Gallery of pictures, each pic plays a song.",
      technologies: "HTML, CSS, Javascript, jQuery",
      imgLink: gallery,
      githubLink: "https://github.com/Hadasss/jquery-musical-gallery",
      link: "https://hadasss.github.io/jquery-musical-gallery/",
    },
    {
      name: "Workday Planner",
      description: "Manage your workday with persistent data.",
      technologies: "Javascript, CSS, HTML, Bootstrap",
      imgLink: planner,
      githubLink: "https://github.com/Hadasss/planogramma",
      link: "https://hadasss.github.io/planogramma/",
    },
    {
      name: "Coding Quiz",
      description: "Coding quiz game against the clock.",
      technologies: "Javascript, HTML, CSS",
      imgLink: quiz,
      githubLink: "https://github.com/Hadasss/coding-quiz",
      link: "https://hadasss.github.io/coding-quiz/",
    },
    {
      name: "Happy Trails",
      description:
        "Weather Dashboard, pulls data from API, 5 day forecast, search history.",
      technologies: "Javascript, CSS, Bulma, HTML",
      imgLink: weather,
      githubLink: "https://github.com/Hadasss/happy-trails",
      link: "https://hadasss.github.io/happy-trails/",
    },
    {
      name: "Marvel Mayhem",
      description:
        "Find your favorite Marvel superhero in featured appearances.",
      technologies: "Javascript, Tailwind, CSS, Bulma, Server side APIs",
      imgLink: marvel,
      githubLink: "https://github.com/Hadasss/marvel-mayhem",
      link: "https://hadasss.github.io/marvel-mayhem/",
    },
    {
      name: "Notepad--",
      description: "A note taking app.",
      technologies: "Node.js, Express",
      imgLink: notes,
      githubLink: "https://github.com/Hadasss/notepad",
      link: "https://notepad1234.herokuapp.com/",
    },
    {
      name: "Tech Blob",
      description: "A blog for sharing thoughts and insights with other users.",
      technologies:
        "Express, Express-session, Sequelize, connect-session-sequelize, Handlebars, bCrypt, JS, Bulma",
      imgLink: blob,
      githubLink: "https://github.com/Hadasss/tech-blob",
      link: "https://tech-blob.herokuapp.com/",
    },
    {
      name: "Fav-Dash",
      description:
        "A friendly, easy and elegant web based favorites dashboard.",
      technologies:
        "Node.js, Express, Express-session, Sequelize, Handlebars, bCrypt, JS, Bulma",
      imgLink: favdash,
      githubLink: "https://github.com/Hadasss/favdash",
      link: "https://fav-dash.herokuapp.com/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h1 className="borderized">Some of My Projects</h1>

      <Accordion defaultActiveKey={["0"]}>
        {projectArr.map((project, index) => (
          <Accordion.Item eventKey={index} key={project.name}>
            <Accordion.Header className="fw-bolder">
              {project.name}
            </Accordion.Header>
            <Accordion.Body>
              <img
                className="d-block w-100"
                src={project.imgLink}
                alt="Project"
              />
              <p>{project.description}</p>
              <p className="fw-bolder">
                {project.technologies}
                <br></br>
                <a
                  className="text-primary text-decoration-none"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub repo
                </a>
              </p>
              <a
                className="text-primary text-decoration-none fw-bolder"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Deployment
              </a>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}

export default Project;
