import React from "react"
import classes from "./About.module.css";
import { Image } from "react-bootstrap";
import logo from "../../public/tta-logo.png";
import NavBar from "../NavBar/NavBar";

function About() {
    return (
        <div className={classes.mainContainer}>
          <NavBar className={classes.navBar} />

          <div className={classes.brand}>
            <div style={{ width: "7vh" }}>
              <Image src={logo} style={{ width: "100%", height: "auto" }} />
            </div>
            <div>
              <div style={{ fontWeight: "600" }}>TechTogether</div>
              <div>Atlanta</div>
            </div>
          </div>

          <div className={classes.rect}>
            We are excited to welcome you to TrchTogether Atlanta  - Atlanta's biggest gender inclusive hack focued on helping you cretae innovative solutions to real worls problems <br />
            📍This hackathon will be held in Klaus Auditorim, Georgia Tech on April 22-23
            <br />
            Our goal is to equip you with hands-on experience, an inclusive community and a diverse network. Take a look at challenges, tracks and workshops to get the best of this opportunity.
            <br />
            This year's theme is circus. So, unleash your creativity and let the show begin! 🤩

          </div>
        </div>
    );
}

export default About;