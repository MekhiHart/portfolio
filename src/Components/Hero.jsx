import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile, faGamepad } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero--container fullScreen" id="HERO">
      <div className="hero--intro">
        <h1 className="hero--name" style={{ marginBottom: "-15px" }}>
          Mekhi Hart Dela Cruz
        </h1>
        <h2>
          {" "}
          Software Engineer @{"  "}
          <span
            id="netflix--name"
            style={{
              color: "#e50a14",
              fontWeight: "bold",
              fontFamily: "Bebas Neue",
              letterSpacing: "2px",
              textDecoration: "none",
            }}
          >
            Netflix
          </span>{" "}
        </h2>
        <h3 style={{ marginBottom: "-20px" }}>
          California State University Long Beach
        </h3>
        <h4>
          B.S. in <i>Computer Science</i> | December 2024
        </h4>
      </div>

      <div className="hero--links">
        <a href="https://github.com/MekhiHart" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/mekhihart-delacruz/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://bropharah.itch.io/" target="_blank">
          <FontAwesomeIcon icon={faGamepad} size="2x" />
        </a>
      </div>
    </div>
  );
}
