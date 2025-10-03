import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import projImg4 from "../assets/img/project-img4.png";
// import projImg5 from "../assets/img/project-img5.png";
// import projImg6 from "../assets/img/project-img6.png";
// import projImg7 from "../assets/img/project-img7.png";
import soar from "../assets/img/soar.png";
import mangcoding from "../assets/img/mangcoding.png";
import online_platform from "../assets/img/learning-platform.png";
import healthPlus from "../assets/img/healthplus.png";
import travelling_app from "../assets/img/travelling-app.png";
import jawed_ai from "../assets/img/jawed-ai.png";
import personalized_math from "../assets/img/personalized-math.png";
import passenger_counter from "../assets/img/passenger-counter.png";
import blackJack from "../assets/img/blackJack.png";
import todo_list from "../assets/img/todo-list.png";
import prayer_times from "../assets/img/prayer-times.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { type } from "@testing-library/user-event/dist/type";

export const Projects = () => {
  const projects = [
    {
      title: "SOAR",
      description: "Educational Web App",
      imgUrl: soar,
      githubUrl: "https://github.com/ghaida-jaaisa/soar",
      demoUrl: "http://soar2024.runasp.net",
      type: "FrontEnd",
    },
    {
      title: "Mangcoding Store",
      description: "Design & Development",
      imgUrl: mangcoding,
      githubUrl: "https://github.com/ghaida-jaaisa/mangcoding-store",
      demoUrl: "https://ghaida-jaaisa.github.io/mangcoding-Store/",
      type: "FrontEnd",
    },
    {
      title: "Online Learning Platform",
      description: "Design & Development",
      imgUrl: online_platform,
      githubUrl: "https://github.com/ghaida-jaaisa/online-learning-platform",
      demoUrl: "https://ghaida-jaaisa.github.io/Online-learning-platform/",
      type: "FrontEnd",
    },
    {
      title: "HealthPlus Pharmacy",
      description: "Pharmacy Management System",
      imgUrl: healthPlus,
      githubUrl: "#",
      demoUrl:
        "https://apex.oracle.com/pls/apex/r/database_programing_project/pharmacy-management-system/",
      type: "Oracle APEX",
    },
    {
      title: "Travelling App",
      description: "Design & Development",
      imgUrl: travelling_app,
      githubUrl: "https://github.com/ghaida-jaaisa/traveling_app",
      demoUrl: "https://traveling-app-inky.vercel.app/",
      type: "Flutter",
    },
    {
      title: "Jawed Al-Quran",
      description: "Design & Development",
      imgUrl: jawed_ai,
      githubUrl: "https://github.com/ghaida-jaaisa/jawed-ai",
      demoUrl: "https://jawed-ai.vercel.app/#/HomePage",
      type: "Flutter",
    },
    {
      title: "Personlized Math Rewriting",
      description: "Design & Development",
      imgUrl: personalized_math,
      githubUrl: "https://github.com/ghaida-jaaisa/jawed-ai",
      demoUrl: "https://personalized-math-rewriting.vercel.app/",
      type: "FrontEnd",
    },
    {
      title: "Passenger Counter",
      description: "Design & Development",
      imgUrl: passenger_counter,
      githubUrl: "https://github.com/Ghaida-jaaisa/Passenger-Counter",
      demoUrl: "https://passengercounter111.netlify.app/",
      type: "FrontEnd",
    },
    {
      title: "BlackJack",
      description: "Design & Development",
      imgUrl: blackJack,
      githubUrl: "https://github.com/Ghaida-jaaisa/Blackjack-game",
      demoUrl: "https://blackjackgame111.netlify.app/",
      type: "FrontEnd",
    },
    {
      title: "To-do List",
      description: "Design & Development",
      imgUrl: todo_list,
      githubUrl: "https://github.com/Ghaida-jaaisa/todo-app-dom-events",
      demoUrl: "https://ghaida-jaaisa.github.io/todo-app-dom-events/",
      type: "FrontEnd",
    },
     {
      title: "Prayer Times App",
      description: "Design & Development",
      imgUrl: prayer_times,
      githubUrl: "https://github.com/Ghaida-jaaisa/Prayer-Times-Web-App",
      demoUrl: "https://ghaida-jaaisa.github.io/Prayer-Times-Web-App/",
      type: "FrontEnd",
    },
  ];

  // Split projects for each tab
  const projectsTab1 = projects.filter(
    (project) => project.type === "FrontEnd"
  );
  const projectsTab2 = projects.filter(
    (project) => project.type === "Oracle APEX"
  );
  const projectsTab3 = projects.filter((project) => project.type === "Flutter");

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here’s a collection of selected projects that highlight my
                    journey in front-end development and cross-platform app
                    building. From crafting responsive web interfaces using
                    HTML, CSS, and JavaScript, to building scalable systems with
                    Oracle APEX and engaging mobile apps with Flutter, each
                    project reflects my passion for clean code, intuitive user
                    experience, and purposeful design. I constantly seek to
                    transform ideas into real, functional, and user-centered
                    solutions.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">HTML - CSS - JS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Oracle APEX</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Flutter</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsTab1.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsTab2.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsTab3.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
