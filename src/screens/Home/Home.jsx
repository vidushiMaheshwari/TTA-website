
import React, { useEffect, useState } from "react";
import classes from "./Home.module.css"
import {Button} from "react-bootstrap"
import BigBackground from "../../public/image6.png";
import smallBackground from "../../public/smaller-background.png"

function Home() {
  const [width, setWidth] = useState(window.innerWidth);
   const imgUrl = width >= 650 ? BigBackground : smallBackground;

  useEffect(() => {
     const handleWindowResize = () => {
       setWidth(window.innerWidth);
     };
    window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };  

  }, []);

    return (
      <div id="home">
        <div className={classes.mainContainer}>
          <div className={classes.background}>
            {/*store backgrounds */}
            <div className={classes.colorBackground} />
            <div
              // style={{
              //   background: `url(${imgUrl}) no-repeat`,
              //   backgroundSize: "100vw 70vh",
              //   height: "100vh",
              //   width: "100vw",
              //   marginTop: "20vh"
              // }}
              className={classes.imageBackground}
            />
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
                  <Button className={classes.button} href="#faq">
                    {" "}
                    FAQs{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;