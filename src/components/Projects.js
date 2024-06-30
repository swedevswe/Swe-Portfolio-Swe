import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio Website",
      description: "Created a personal portfolio website to showcase my software projects and technical skills. Employed advanced CSS for styling and React for dynamic content management.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/swedevswe/Swe-Portfolio.git"
    },
    {
      title: "Youtube Transcribe and Translate Web Application",
      description: "Developed a web app to transcribe and translate YouTube videos using React for the frontend, and Dockerized Node.js and Express.js for the backend. Integrated PayPal API for payments and deployed the frontend on GitHub Pages, with backend API hosted on Render.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/swedevswe/yt-tt.git"
    },
    {
      title: "Weather App",
      description: "Developed a desktop application that provides real-time weather updates and forecasts, integrating graphical user interface components for enhanced user interactions.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/swedevswe/WeatherApp.git"
    },
    {
      title: "Interactive Excel Dashboard",
      description: "Created an interactive dashboard for analyzing coffee sales, enhancing data-driven decision-making using PivotTables and VLookup.",
      imgUrl: projImg4,
      githubUrl: "https://github.com/swedevswe/Interactive-Excel-Dashboard.git"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore my portfolio of projects where I've applied cutting-edge technologies and innovative solutions to solve complex problems across various domains. Each project showcases my skills in software development, ranging from full-stack web applications to data-driven machine learning models. Through these projects, I demonstrate my ability to effectively combine programming expertise with critical thinking to deliver functional, user-centric software solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Work in Progress.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Work in Progress.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>

    )

};