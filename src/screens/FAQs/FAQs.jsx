import React, { useState } from "react";
import classes from "./FAQs.module.css";
import down_arrow from "../../public/down-arrow.png";
import up_arrow from "../../public/up-arrow.png";
import { Image } from "react-bootstrap";

function FAQs() {
  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  const [hide4, setHide4] = useState(false);
  const [hide5, setHide5] = useState(false);

  return (
    <div className={classes.mainContainer} id="faq">
      <div className={classes.title}>FAQs </div>
      <div className={classes.content}>
        <div className={classes.question} onClick={() => setHide1(!hide1)}>
          <div className={classes.questionContent}>
            <div className={classes.questionText}>
              Where do I submit my projects/ solutions?
            </div>
            <div className={classes.dropImageDiv}>
              {!hide1 && (
                <Image src={down_arrow} className={classes.dropImage}></Image>
              )}
              {hide1 && (
                <Image src={up_arrow} className={classes.dropImage}></Image>
              )}
            </div>
          </div>
          <div
            style={{ display: hide1 ? "block" : "none" }}
            className={classes.answer}
          >
            Your project will be submitted through Devpost. Click on the "Submit
            Project" button at the top of the site to access the Devpost. Your
            submission must include a video (no longer than 2 minutes) that
            showcases your project, a basic description of your project, and the
            challenge(s) for which you want your project to be considered.
          </div>
        </div>

        <div className={classes.question} onClick={() => setHide2(!hide2)}>
          <div className={classes.questionContent}>
            <div className={classes.questionText}>
              Where do I go attend a session?
            </div>
            <div className={classes.dropImageDiv}>
              {!hide2 && (
                <Image src={down_arrow} className={classes.dropImage}></Image>
              )}
              {hide2 && (
                <Image src={up_arrow} className={classes.dropImage}></Image>
              )}
            </div>
          </div>
          <div
            style={{ display: hide2 ? "block" : "none" }}
            className={classes.answer}
          >
            Locations of all workshops, activities, and events throughout the
            weekend will be on ythe event schedule
          </div>
        </div>

        <div className={classes.question} onClick={() => setHide3(!hide3)}>
          <div className={classes.questionContent}>
            <div className={classes.questionText}>
              What is the project submission deadline?
            </div>
            <div className={classes.dropImageDiv}>
              {!hide3 && (
                <Image src={down_arrow} className={classes.dropImage}></Image>
              )}
              {hide3 && (
                <Image src={up_arrow} className={classes.dropImage}></Image>
              )}
            </div>
          </div>
          <div
            style={{ display: hide3 ? "block" : "none" }}
            className={classes.answer}
          >
            Make sure to check the event schedule to stay up to date on
            important hackathon deadlines and everything you need to know about
            what's going on throughout the weekend! Announcements and reminders
            will also be broadcasted on the Discord server in case you forget.
          </div>
        </div>

        <div className={classes.question} onClick={() => setHide4(!hide4)}>
          <div className={classes.questionContent}>
            <div className={classes.questionText}>
              How do I find a team to join?
            </div>
            <div className={classes.dropImageDiv}>
              {!hide4 && (
                <Image src={down_arrow} className={classes.dropImage}></Image>
              )}
              {hide4 && (
                <Image src={up_arrow} className={classes.dropImage}></Image>
              )}
            </div>
          </div>
          <div
            style={{ display: hide4 ? "block" : "none" }}
            className={classes.answer}
          >
            All teams must be between 2-4 people. While you have the option to
            work alone, if you want to submit your project you must work with at
            least one other person. Don't worry if you don't have a team—you'll
            have plenty of opportunities to find one! TechTogether will be
            hosting a variety of team formation activities throughout the first
            day, and we will also have a space dedicated to team formation
            during the event.
          </div>
        </div>

        <div className={classes.question} onClick={() => setHide5(!hide5)}>
          <div className={classes.questionContent}>
            <div className={classes.questionText}>
              Where do I submit my projects/ solutions?
            </div>
            <div className={classes.dropImageDiv}>
              {!hide1 && (
                <Image src={down_arrow} className={classes.dropImage}></Image>
              )}
              {hide1 && (
                <Image src={up_arrow} className={classes.dropImage}></Image>
              )}
            </div>
          </div>
          <div
            style={{ display: hide5 ? "block" : "none" }}
            className={classes.answer}
          >
            Your projects will be submitted through [this link] and much more
            information. Stay tuned.
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
