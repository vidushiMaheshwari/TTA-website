import React from "react"
import classes from "./Get_Involved.module.css";
import { Image } from "react-bootstrap";
import logo from "../../public/tta-logo.png";
import NavBar from "../NavBar/NavBar";

function Get_Involved() {
    return (
      <div className={classes.mainContainer}>
        <div className={classes.brand}>
          <div style={{ width: "7vh" }}>
            <Image src={logo} style={{ width: "100%", height: "auto" }} />
          </div>
          <div>
            <div style={{ fontWeight: "600" }}>TechTogether</div>
            <div>Get Involved</div>
          </div>
        </div>

         <div className={classes.rect}>
          <div className={classes.text}>
            <p>
              <a href="https://organize.mlh.io/participants/events/9242-techtogether-atlanta
              ">Hacker</a>
            </p>
            <p>
              <a href="https://organize.mlh.io/participants/events/9242-techtogether-atlanta
              <a href=">Mentor</a>
            </p>
            <p>
              <a href="https://organize.mlh.io/participants/events/9242-techtogether-atlanta
            <a href=">Judge</a>
            </p>
            
          </div>
        </div>
      </div>
    );
}

export default Get_Involved;