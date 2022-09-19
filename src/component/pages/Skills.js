import React, { useEffect, useState } from "react";
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
} from "react-scroll-parallax";
import bcg2 from "../../images/back4.jpg";
import { Controller, Scene } from "react-scrollmagic";
import { useSpring, animated } from "react-spring";
import "../css/Skills.css";

function Skills() {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(60%,0)" },
    to: { transform: "translate(-60%,0)" },
    config: { duration: 20000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });
  return (
    <div id="skills">
      <ParallaxBanner
        className="image_background"
        // bgImageAlt="background"
        // strength={600}
        style={{
          width: "100%",
          display: "flex",
          height: "90vh",
          alignItems: "center",
          justifyContent: "center",
        }}
        layers={[
          {
            image: `${bcg2}`,
            speed: 30,
          },
        ]}
      >
        <div className="box_container1" style={{ width: "100%" }}>
          <h1 className="title_h1">SKILLS</h1>
          <div
            key={key}
            style={{ margin: "30px 0" }}
            className="marquee-wrapper"
          >
            <div className="to-left">
              <img
                src={window.location.origin + "/images/png/redux.png"}
                alt="skills_logo"
                style={{
                  marginLeft: "20px",
                  width: "120px",
                  height: "75px",
                }}
                className="skills_logo_class"
              />

              <img
                src={window.location.origin + "/images/png/node.png"}
                alt="skills_logo"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
                className="skills_logo_class"
              />
              <img
                src={window.location.origin + "/images/png/express.jpeg"}
                alt="skills_logo"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
                className="skills_logo_class"
              />
              <img
                src={window.location.origin + "/images/png/js.png"}
                alt="skills_logo"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
                className="skills_logo_class"
              />
              <img
                src={window.location.origin + "/images/png/html.png"}
                alt="skills_logo"
                className="skills_logo_class"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
              />
              <img
                src={window.location.origin + "/images/png/css.jpeg"}
                alt="skills_logo"
                className="skills_logo_class"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
              />
              <img
                src={window.location.origin + "/images/png/mysql.jpeg"}
                alt="skills_logo"
                className="skills_logo_class"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
              />
              <img
                src={window.location.origin + "/images/png/postgrey.jpeg"}
                alt="skills_logo"
                className="skills_logo_class"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
              />
              <img
                src={window.location.origin + "/images/png/mongodb.jpeg"}
                alt="skills_logo"
                className="skills_logo_class"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
              />
              <img
                src={window.location.origin + "/images/png/git.jpeg"}
                alt="skills_logo"
                className="skills_logo_class"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
              />
            </div>
            <div className="to-delay-left">
              <img
                src={window.location.origin + "/images/png/redux.png"}
                alt="skills_logo"
                style={{
                  marginLeft: "20px",
                  width: "120px",
                  height: "75px",
                }}
                className="skills_logo_class"
              />

              <img
                src={window.location.origin + "/images/png/node.png"}
                alt="skills_logo"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
                className="skills_logo_class"
              />
              <img
                src={window.location.origin + "/images/png/express.jpeg"}
                alt="skills_logo"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
                className="skills_logo_class"
              />
              <img
                src={window.location.origin + "/images/png/js.png"}
                alt="skills_logo"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
                className="skills_logo_class"
              />
              <img
                src={window.location.origin + "/images/png/html.png"}
                alt="skills_logo"
                className="skills_logo_class"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
              />
              <img
                src={window.location.origin + "/images/png/css.jpeg"}
                alt="skills_logo"
                className="skills_logo_class"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
              />
              <img
                src={window.location.origin + "/images/png/mysql.jpeg"}
                alt="skills_logo"
                className="skills_logo_class"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
              />
              <img
                src={window.location.origin + "/images/png/postgrey.jpeg"}
                alt="skills_logo"
                className="skills_logo_class"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
              />
              <img
                src={window.location.origin + "/images/png/mongodb.jpeg"}
                alt="skills_logo"
                className="skills_logo_class"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
              />
              <img
                src={window.location.origin + "/images/png/git.jpeg"}
                alt="skills_logo"
                className="skills_logo_class"
                style={{ marginLeft: "20px", width: "120px", height: "75px" }}
              />
            </div>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
}

export default Skills;
