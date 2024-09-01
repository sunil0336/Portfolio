import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import distanz from "../../Assets/Projects/distanz.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={distanz}
              isBlog={false}
              title="Distanz"
              description="The project Distanz includes registration of users(Passengers as well as drivers owning LMV), storing their details in database. users can book cab easily for long-distance and driver can register their vehicle and accept bookings."
              ghLink="https://github.com/sunil0336/Distanz"
              demoLink="https://sunil0336.github.io/Distanz/customer/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={distanz}
              isBlog={false}
              title="Distanz"
              description="The project Distanz includes registration of users(Passengers as well as drivers owning LMV), storing their details in database. users can book cab easily for long-distance and driver can register their vehicle and accept bookings."
              ghLink="https://github.com/sunil0336/Distanz"
              demoLink="https://sunil0336.github.io/Distanz/customer/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Blood Bank Management System"
              description="The project Distanz includes registration of users(Passengers as well as drivers owning LMV), storing their details in database. users can book cab easily for long-distance and driver can register their vehicle and accept bookings."
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
