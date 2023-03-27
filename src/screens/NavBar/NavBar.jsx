import React, {useState} from "react";
import classes from "./NavBar.module.css";
import { Button, Image } from "react-bootstrap";
import logo from "../../public/tta-logo.png";
import mlhBadge from "../../public/mlh-badge-2023.svg";

function NavBar() {
  const [open, setOpen] = useState(false);
    return (
      <div>
        <div className={classes.mainContainer}>
          {/*navbar for wide screen (as header) */}
          <a className={classes.brand} href="#home">
            <div style={{ width: "7vh" }}>
              <Image
                src={logo}
                style={{ width: "100%", height: "auto" }}
                href="#home"
              />
            </div>
            <div style={{ color: "white" }}>
              <div style={{ fontWeight: "600" }}>TechTogether</div>
              <div>Atlanta</div>
            </div>
          </a>
          <div className={classes.content}>
            <a href="#about" className={classes.link}>
              ABOUT
            </a>
            <a href="#challenges" className={classes.link}>
              CHALLENGES
            </a>
            <a href="#schedule" className={classes.link}>
              SCHEDULE
            </a>
            <a href="faq" className={classes.link}>FAQ</a>
            {/* <a className={classes.link}>GET INVOLVED</a> */}
            <a href="#sponsors" className={classes.link}>
              SPONSORS
            </a>
          </div>
          <div className={classes.mlhLogo}>
            <Image src={mlhBadge} style={{ height: "18vh" }}></Image>
          </div>
        </div>
        <div className={classes.mainVertical}>
          <div className={classes.vertical}>
            <div>
              <a className={classes.brand} href="#home">
                <div style={{ width: "7vh" }}>
                  <Image
                    src={logo}
                    style={{ width: "100%", height: "auto" }}
                    href="#home"
                  />
                </div>
                <div style={{ color: "white" }}>
                  <div style={{ fontWeight: "600" }}>TechTogether</div>
                  <div>Atlanta</div>
                </div>
              </a>
            </div>
            <div>
              <Button
                className={classes.menuButton}
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="6.5vh"
                  height="6.5vh"
                  viewBox="0 0 30 30"
                  fill="white"
                >
                  <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                </svg>
              </Button>
            </div>
          </div>
          {open && (
            <div className={classes.dropDown}>
              <div className={classes.content}>
                <a href="#about" className={classes.link}>
                  ABOUT
                </a>
                <a href="#challenges" className={classes.link}>
                  CHALLENGES
                </a>
                <a href="#schedule" className={classes.link}>
                  SCHEDULE
                </a>
                <a href="#faq" className={classes.link}>FAQ</a>
                <a className={classes.link}>GET INVOLVED</a>
                <a href="#sponsors" className={classes.link}>
                  SPONSORS
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default NavBar;