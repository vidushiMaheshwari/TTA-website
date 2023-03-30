import React from "react";
import classes from "./Footer.module.css";
import { Image } from "react-bootstrap";
import instaBage from "../../public/instagram.svg"
import facebook from "../../public/facebook.svg";
import linkedin from "../../public/linkedin.svg";

function Footer() {
    return (
      <div className={classes.background}>
        <div>Copyright © 2023 TechTogether Atlanta</div>
        <div>
          <a href="https://www.instagram.com/techtogetheratlanta_/">
            <Image src={instaBage}></Image>
          </a>
          <a href="https://www.facebook.com/TechTogetherAtlanta/">
            <Image src={facebook}></Image>
          </a>
          <a href="https://www.linkedin.com/company/techtogether-atlanta/">
            <Image src={linkedin} />
          </a>
        </div>
        <div>
          <div
            onClick={() =>
              (window.location = "mailto:info.atlanta@techtogether.io")
            }
            className={classes.mail}
          >
            info.atlanta@techtogether.io
          </div>
          <a href="https://techtogether.io/imgs/policies/TechTogether_CodeofConduct.pdf">
            {" "}
            Code of Conduct
          </a>
        </div>
      </div>
    );
}

export default Footer;