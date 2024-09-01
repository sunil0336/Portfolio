import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sunil Rathod </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently pursuing <span className="purple"> MSc Computer Science</span> at <span className="purple"> Fergusson College.</span>
            <br />
            I have completed BSc Computer Science From Fergusson College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling, Trekking
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work towards creating things that have a meaningful impact!"{" "}
          </p>
          <footer className="blockquote-footer">Sunil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
