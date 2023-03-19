
import React from "react";
import classes from "./Home.module.css"
import {Button} from "react-bootstrap"
import NavBar from "../NavBar/NavBar";
import background from "../../public/hero-background.svg";

function Home() {
    return (
      <div>
        <div className={classes.mainContainer}>
          <NavBar />
          <div className={classes.imageBackground}>
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
                  <Button className={classes.button}> Challenges </Button>
                  <Button className={classes.button}> Register </Button>
                  <Button className={classes.button}> FAQs </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;