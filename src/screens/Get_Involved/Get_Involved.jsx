import React from "react"
import classes from "./Get_Involved.module.css";
import { Image } from "react-bootstrap";
import logo from "../../public/tta-logo.png";
import ticket from "../../public/get-involved-ticket.png";
import NavBar from "../NavBar/NavBar";

function Get_Involved() {
    return (
      <div className={classes.mainContainer}>
        <div className={classes.content}>
          <div className={classes.ticketContainerLeft}>
            <a href="https://organize.mlh.io/participants/events/9242-techtogether-atlanta">
              <Image src={ticket} className={classes.ticket}></Image>
            </a>
            <br />
            Hacker
          </div>

          <div className={classes.ticketContainerRight}>
            <a href="https://organize.mlh.io/participants/events/9242-techtogether-atlanta">
              <Image src={ticket} className={classes.ticket}></Image>
            </a>
            <br />
            Judge
          </div>

          <div className={classes.ticketContainerLeft}>
            <a href="https://organize.mlh.io/participants/events/9242-techtogether-atlanta">
              <Image src={ticket} className={classes.ticket}></Image>
            </a>
            <br />
            Mentor
          </div>
        </div>
      </div>
    );
}

export default Get_Involved;