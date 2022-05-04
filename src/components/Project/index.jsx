import React from "react";

function Projects() {
  const projectArr = [
    {
      name: "Memory Game",
      description: "Memory card game.",
      technologies: "Javascript, CSS, HTML",
      imgLink: "./assets/images/project1_1.JPG",
      link: "https://hadasss.github.io/Avengers-Memory-Game/",
    },
    {
      name: "Beat The Dice",
      description: "A two player dice game.",
      technologies: "CSS, Javascript, HTML",
      imgLink: "./assets/images/project2.JPG",
      link: "https://hadasss.github.io/Beat-The-Dice/",
    },
    {
      name: "Musical Gallery",
      description: "Gallery of pictures, each pic plays a song.",
      technologies: "HTML, CSS, Javascript, jQuery",
      imgLink: "./assets/images/project3.JPG",
      link: "https://hadasss.github.io/jquery-musical-gallery/",
    },
    {
      name: "Workday Planner",
      description: "Manage your workday with persistent data.",
      technologies: "Javascript, CSS, HTML, Bootstrap",
      imgLink: "./assets/images/project6_1.JPG",
      link: "https://hadasss.github.io/planogramma/",
    },
    {
      name: "Coding Quiz",
      description: "Coding quiz game against the clock.",
      technologies: "Javascript, HTML, CSS",
      imgLink: "./assets/images/project8_1.JPG",
      link: "https://hadasss.github.io/coding-quiz/",
    },
    {
      name: "Happy Trails",
      description:
        "Weather Dashboard, pulls data from API, 5 day future forecast, search history.",
      technologies: "Javascript, CSS, Bulma, HTML",
      imgLink: "./assets/images/project 7_1.JPG",
      link: "https://hadasss.github.io/happy-trails/",
    },
    {
      name: "Marvel Mayhem",
      description:
        "Find your favorite Marvel superhero in featured appearances.",
      technologies: "Javascript, Tailwind, CSS, Bulma, Server side APIs",
      imgLink: "./assets/images/project5.JPG",
      link: "https://hadasss.github.io/marvel-mayhem/",
    },
    {
      name: "Fav-Dash",
      description:
        " A friendly, easy and elegant web based favorites dashboard.",
      technologies:
        "Node.js, Express, Express-session, Sequelize, Handlebars, bCrypt, JS, Bulma",
      imgLink: "./assets/images/project9.jpg",
      link: "https://fav-dash.herokuapp.com/",
    },
  ];

  return (
    <div>
      <section className="projects" id="projects">
        <h1 className="borderized">Some of My Projects</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {projectArr.map((project) => (
            <div className="col">
              <div className="card">
                <img src={project.imgLink} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">
                    <br />
                    {project.description}
                    <br />
                    {project.technologies}
                    <br />
                    <a href={project.link} target="_blank">
                      Live Deployment
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
