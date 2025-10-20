import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Tailwind CSS",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "MySQL",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "AWS",
  "Azure",
  "Linux",
];

const labelsThird = ["Scrum", "Kanban"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Frontend Development</h3>
            <p>
              Over 5 years of experience developing responsive, scalable, and
              user-friendly web applications. Proficient in building dynamic
              front end interfaces using React and TypeScript, collaborating
              closely with design and backend teams, and delivering robust
              solutions using modern JavaScript frameworks and best practices.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              Knowledge in containerization, version control and monitoring.
              Able to manage and automate operational processes using modern
              DevOps tools and best practices. Hands-on with Git, Docker, AWS,
              Azure, and Linux for containerized deployments, cloud operations,
              and reliable CI/CD.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCodepen} size="3x" />
            <h3>Agile Methodologies</h3>
            <p>
              Experienced in applying Agile methodologies such as Scrum and
              Kanban to deliver high-quality software efficiently. Skilled at
              working in cross-functional teams, participating in sprint
              planning, daily stand-ups, and retrospectives to ensure continuous
              improvement.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
