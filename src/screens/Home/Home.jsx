
import React, { useEffect } from "react";
import classes from "./Home.module.css"
import {Button, Image} from "react-bootstrap"
import NavBar from "../NavBar/NavBar";
import background from "../../public/image6.png";

function Home() {

    return (
      <div id="home">
        <div className={classes.mainContainer}>
          <div className={classes.background}>
            {/*store backgrounds */}
            <div className={classes.colorBackground} />
            <div className={classes.imageBackground} />
          </div>

          <div className={classes.body}>
            <div className={classes.content}>
              <div>
                <b style={{ fontSize: "4vh" }}>Tech Together Atlanta </b> <br />
                <span style={{ fontSize: "3vh" }}>
                  April 22-23 | Klaus Advanced Computing{" "}
                </span>
              </div>
              <div className={classes.bigRect}>
                <p className={classes.bigRectTitle}>Come One, Come ALL!</p>
                <div className={classes.buttonsContainer}>
                  <a className={classes.button} href="#challenges">
                    Challenges
                  </a>
                  <a
                    className={classes.button}
                    href="https://hackp.ac/techtogetheratlanta"
                    target="_blank"
                  >
                    Register
                  </a>
                  <Button className={classes.button} href="#faq"> FAQs </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;