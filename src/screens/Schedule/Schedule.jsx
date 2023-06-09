import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { day0Content, day1Content } from "./saturday";
import classes from "./Schedule.module.css";

function Schedule(props) {
  const [showDayNumber, setShowDayNumber] = useState(0);

  return (
    <div className={classes.mainContainer} id="schedule">
      <div className={classes.title}>Schedule</div>
      <div className={classes.buttons}>
        <Button
          className={classes.button}
          onClick={() => setShowDayNumber(0)}
          style={{
            background:
              showDayNumber === 0
                ? "rgba(255, 255, 255, 0.7)"
                : "rgba(255, 255, 255, 0.3)",
          }}
        >
          Saturday
        </Button>
        <Button
          className={classes.button}
          onClick={() => setShowDayNumber(1)}
          style={{
            background:
              showDayNumber === 1
                ? "rgba(255, 255, 255, 0.7)"
                : "rgba(255, 255, 255, 0.3)",
          }}
        >
          Sunday
        </Button>
      </div>
      <div
        style={{
          borderTop: "2px solid #FFF",
          marginLeft: "35vw",
          marginRight: "35vw",
        }}
      ></div>
      {showDayNumber === 0 && day0Content}
      {showDayNumber === 1 && day1Content}
    </div>
  );
}

export default Schedule;
