import React from "react";
import classes from "./Sponsors.module.css";
import { Image } from "react-bootstrap";
import balsamiq from "../../public/balsamiq-logo.png";
import microsoft from "../../public/Microsoft-logo.jpg";
import capital_one from "../../public/CapitalOneLogo.png";

function Sponsors() {
    return (
      <div className={classes.mainContainer} id="sponsors">
        <div className={classes.title}>Sponsors</div>
        <div className={classes.sponsorBlock}>
          <div>
            <Image src={balsamiq} style={{ height: "10vh" }} />
          </div>
          <div>
            <Image src={microsoft} style={{ height: "10vh" }} />
          </div>
          <div>
            <Image src={capital_one} style={{ height: "10vh" }} />
          </div>
        </div>
      </div>
    );
}

export default Sponsors;