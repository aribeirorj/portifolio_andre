import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2025 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              GFT - Technologies SE.
            </h3>
            <h4 className="vertical-timeline-element-title">
              Sr Front End Developer
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              Home Office, Rio de Janeiro, RJ - Brasil
            </h4>
            <p>
              Frontend Development, Project Management, Agile Methodologies,
              Customer Support.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019 - 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AMERICANAS.</h3>
            <h4 className="vertical-timeline-element-title">
              Sr Front End Developer
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              Home Office, Rio de Janeiro, RJ - Brasil
            </h4>
            <p>
              Frontend Development, Project Management, Agile Methodologies,
              Customer Support.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2019"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              DHM - Engineering.
            </h3>
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Rio de Janeiro, RJ - Brasil
            </h4>
            <p>
              Frontend Development, Backend Development, User Experience, Team
              Leading, Project Management, Agile Methodologies, Customer
              Support.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2004 - 2015"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              PETROBRAS - Brazilian Petroleum Inc.
            </h3>
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Rio de Janeiro, RJ - Brasil
            </h4>
            <p>
              Frontend Development, Backend Development, User Experience, Team
              Leading, Project Management, Agile Methodologies, Customer
              Support.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
