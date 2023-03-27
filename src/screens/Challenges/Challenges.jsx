import React, {useState} from "react";
import classes from "./Challenges.module.css";
import Popup from "./Popup";

function Challenges() { 
    const [microsoftCloudReadMore, setMCloudReadMore] = useState(false);
    const [microsoftPassportReadMore, setMPassportReadMore] = useState(false);
    const [capitalOneReadMore, setCapitalOneReadMore] = useState(false);
    const [mCloudPopup, setMCloudPopup] = useState(false);

    return (
      <div className={classes.mainContainer} id="challenges">
        <div className={classes.title}>Challenges 💪</div>
        <Popup show={mCloudPopup} setShow={setMCloudPopup} />
        <div className={classes.cardContainer}>
          <div
            className={classes.card}
            onMouseEnter={() => setMCloudReadMore(true)}
            onMouseLeave={() => setMCloudReadMore(false)}
            onClick={() => setMCloudPopup(true)}
          >
            <p>Microsoft Cloud's Expert</p>
            {!microsoftCloudReadMore && (
              <>
                <div
                  style={{
                    borderTop: "2px solid #000 ",
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                ></div>
                <p className={classes.readMore}>
                  Build your hackathon project with the Microsoft Cloud that
                  tackles a social impact issue of your choice, and have a
                  chance to win a LinkedIn Premium 12-Month subscription and an
                  XBox Ultimate 3-Month Game Pass.
                </p>
              </>
            )}
            {microsoftCloudReadMore && (
              <p className={classes.readMore}>Read More ➝</p>
            )}
          </div>
          <div
            className={classes.card}
            onMouseEnter={() => setMPassportReadMore(true)}
            onMouseLeave={() => setMPassportReadMore(false)}
          >
            <p>Microsoft's Passport Challenge</p>
            {!microsoftPassportReadMore && (
              <>
                <div
                  style={{
                    borderTop: "2px solid #000 ",
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                ></div>
                <p className={classes.readMore}>
                  Deploy a Service to Azure using your Azure for Students
                  subscription, and receive a TechTogether sticker pack and
                  digital certificate.
                </p>
              </>
            )}
            {microsoftPassportReadMore && (
              <p className={classes.readMore}>Read More ➝</p>
            )}
          </div>
          <div
            className={classes.card}
            onMouseEnter={() => setCapitalOneReadMore(true)}
            onMouseLeave={() => setCapitalOneReadMore(false)}
          >
            <p>Capital One's Financial Hack</p>
            {!capitalOneReadMore && (
              <>
                <div
                  style={{
                    borderTop: "2px solid #000 ",
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                ></div>
                <p className={classes.readMore}>
                  Details to come soon
                </p>
              </>
            )}
            {capitalOneReadMore && (
              <p className={classes.readMore}>Read More ➝</p>
            )}
          </div>
        </div>
      </div>
    );
}

export default Challenges;