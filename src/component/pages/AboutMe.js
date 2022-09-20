import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import bcg1 from "../../images/back3.jpg";
import profile from "../../images/profile.jpeg";
import me from "../../images/profile_pic.jpeg";

function AboutMe() {
  return (
    <div id="about_me">
      <ParallaxBanner
        className="image_background"
        style={{
          width: "100%",
          display: "flex",
          height: "90vh",
          alignItems: "center",
          justifyContent: "center",
        }}
        layers={[
          {
            image: `${bcg1}`,
            speed: 10,
          },
        ]}
      >
        <div className="box_container">
          <div className="page1_row1">
            <img
              src={`${me}`}
              alt="profile"
              className="profile_image"
              data-aos="fade-right"
            />
            <div className="profile_box" data-aos="fade-left">
              <div className="padding_40">
                <h4 className="profile_name1">Swaroop Chandra</h4>
                <p className="font_14">Full Stack Developer</p>
                <div className="margin_top15">
                  <p className="font_14">Phone:</p>
                  <p className="font_14_300">8660253870</p>
                </div>
                <div className="margin_top15">
                  <p className="font_14">Email:</p>
                  <p className="font_14_300">swaroop.chandra666@gmail.com</p>
                </div>
                <div className="margin_top15">
                  <p className="font_14">Address:</p>
                  <p className="font_14_300">
                    K.S.Nayak Compound,near Medical Chamber,
                    <br />
                    Don Bosco Hall cross road, Mangalore - 1
                  </p>
                </div>
                <div className="margin_top15">
                  <p className="font_14">Phone:</p>
                  <p className="font_14_300">8660253870</p>
                </div>
              </div>
            </div>
          </div>
          <div className="page1_row2">
            <div
              className="flex_between"
              style={{ width: "30%", margin: "10px" }}
            >
              <a
                href="https://www.facebook.com/swaroop.chandra.39/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={
                    window.location.origin + "/images/svg/facebook_white.svg"
                  }
                  alt="profile"
                  className="icon_svg"
                />
              </a>
              <a
                href="https://www.instagram.com/swapo_chan/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={
                    window.location.origin + "/images/svg/instagram_white.svg"
                  }
                  alt="profile"
                  className="icon_svg"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/swaroop-chandra/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={
                    window.location.origin + "/images/svg/linkedin_white.svg"
                  }
                  alt="profile"
                  className="icon_svg"
                />
              </a>
              <a
                href="https://github.com/swaroop-chandra"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={window.location.origin + "/images/svg/git_hub.svg"}
                  alt="profile"
                  className="icon_svg"
                />
              </a>
            </div>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
}

export default AboutMe;
