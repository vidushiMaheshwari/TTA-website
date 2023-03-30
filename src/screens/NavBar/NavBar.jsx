import React, {useState} from "react";
import classes from "./NavBar.module.css";
import { Button, Image } from "react-bootstrap";
import logo from "../../public/tta-logo.png";
import mlhBadge from "../../public/mlh-badge-2023.svg";
import VerticalNavBar from "./VerticalNavBar";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);


  if (width > 1000) {
    return (
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
          <a href="#faq" className={classes.link}>
            FAQ
          </a>
          {/* <a className={classes.link}>GET INVOLVED</a> */}
          <a href="#sponsors" className={classes.link}>
            SPONSORS
          </a>
        </div>
        <div className={classes.mlhLogo}>
          <Image src={mlhBadge} style={{ height: "18vh" }}></Image>
        </div>
      </div>
    );
  } else {
    return (
        <VerticalNavBar open={open} setOpen={setOpen} />
    );
  }
}

export default NavBar;