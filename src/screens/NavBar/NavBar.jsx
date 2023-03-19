import React from "react";
import classes from "./NavBar.module.css";
import { Image, NavLink } from "react-bootstrap";
import logo from "../../public/tta-logo.png";
import mlhBadge from "../../public/mlh-badge-2023.svg";

function NavBar() {
    return (
      <div className={classes.mainContainer}>
        <div className={classes.brand}>
          <div style={{width: "7vh"}}>
            <Image src={logo} style={{ width: "100%" , height: "auto" }} />
          </div>
          <div>
            <div style={{fontWeight: "600"}}>TechTogether</div>
            <div>Atlanta</div>
          </div>
        </div>
        <div className={classes.content}>
          <NavLink to="/" className={classes.link}>
            ABOUT
          </NavLink>
          <NavLink to="/" className={classes.link}>
            CHALLENGES
          </NavLink>
          <NavLink to="/" className={classes.link}>
            SCHEDULE
          </NavLink>
          <NavLink to="/" className={classes.link}>
            FAQ
          </NavLink>
          <NavLink to="/" className={classes.link}>
            GET INVOLVED
          </NavLink>
          <NavLink to="/" className={classes.link}>
            SPONSORS
          </NavLink>
        </div>
        <div className={classes.mlhLogo}>
          <Image src={mlhBadge} style={{ height: "18vh" }}></Image>
        </div>
      </div>
    );
}

export default NavBar;