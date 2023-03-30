import React, {useState} from "react";
import classes from "./Challenges.module.css";
import Popup from "./Popup";
import { mCloudContent, mPassport, capOne, openMindedAtendee, openMindedAtendeeIntro } from "./Content";

function Challenges() { 
    const [challengesReadMore, setChallengesReadMore] = useState(
      new Array(6).fill(false)
    );
    const [challengesPopup, setChallengesPopup] = useState(
      new Array(6).fill(false)
    );

    const noMouse = !window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches

    console.log(noMouse);

    const hasMore = [
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      true
    ]

    const titleList = [
      "Most Open-Minded Attendee",
      "Most Courageous Hack #1",
      "Most Courageous Hack #2",
      "The Greatest Showstopper Hack",
      "Out of Box Hack",
      "The Ultimate Tumble",
      "Microsoft Cloud Challenge",
      "Microsoft Passport Challenge",
      "Financial Hack with CapitalOne",
    ];


        const cardData = [
          openMindedAtendeeIntro,
          "This prize is for teams with 2 or more first-time hackers. Each team member will receive a TechTogether bucket hat.Each team member will receive a TechTogether bucket hat.",
          "This prize is for teams with 2 or more BIPOC-identifying hackers. Each team member will receive a TechTogether water bottle.",
          "This prize is for the hack with the best design and UI/UX. Each team member will receive a TechTogether bucket hat.",
          "This prize is for the hack with the most unique idea and design. Each team member will receive a TechTogether water bottle.",
          "This prize is for the team who dreamed big and tumbled hard. Each team member will receive a TechTogether water bottle.",
          "Build your hackathon project with the Microsoft Cloud that tackles a social impact issue of your choice",
          "Travel around the Microsoft universe. Complete the three activities to receive a TechTogether sticker pack and digital certificate! Submit your entry once you're done with all the activities",
          "Capital One would like to challenge TechTogether Atlanta to create the best financial hack.",
        ];


    const contentList = [
      openMindedAtendee,
      cardData[1],
      cardData[2],
      cardData[3],
      cardData[4],
      cardData[5],
      mCloudContent,
      mPassport,
      capOne,
    ];

    const popups = [];
    const cards = [];
    for (let i = 0; i < titleList.length; i++) {
      popups.push(
        <Popup 
          show={(hasMore[i] || noMouse) && challengesPopup[i]}
          setShow={(data) => {const newState = [...challengesPopup]; 
                              newState[i] = data; 
                              setChallengesPopup(newState)}}
          title={titleList[i]}
          content={contentList[i]}
        />
      )
      if (!noMouse) {
        cards.push(
          <div
            className={classes.card}
            onMouseEnter={() => {
              const newReadMore = new Array(6).fill(false);
              newReadMore[i] = true;
              setChallengesReadMore(newReadMore);
            }}
            onMouseLeave={() => {
              const newReadMore = [...challengesReadMore];
              newReadMore[i] = false;
              setChallengesReadMore(newReadMore);
            }}
            onClick={() => {
              const newPopup = [...challengesPopup];
              newPopup[i] = true;
              setChallengesPopup(newPopup);
            }}
          >
            {!challengesReadMore[i] && (
              <div className={classes.front}>
                <p>{titleList[i]}</p>
              </div>
            )}
            {challengesReadMore[i] && (
              <div className={classes.back}>
                <p>{titleList[i]}</p>
                <p className={classes.smallerContent}>{cardData[i]}</p>
                {hasMore[i] && <p className={classes.readMore}>Read More ➝</p>}
              </div>
            )}
          </div>
        ); 
      } else {
        cards.push(
          <div
            className={classes.mobileCard}
            onClick={() => {
              const newPopup = new Array(6).fill(false);
              newPopup[i] = true;
              setChallengesPopup(newPopup);
            }}
          >
              <div className={classes.mobileFront}>
                <p>{titleList[i]}</p>
                {/* <p className={classes.smallerContent}>{cardData[i]}</p> */}
                <p className={classes.readMore}>Read More ➝</p>
              </div>
          </div>
        ); 
      }
      
      }
      

    return (
      <div className={classes.mainContainer} id="challenges">
        <div className={classes.title}>Challenges 💪</div>
       {popups}
       <div className={classes.cardContainer}>{cards}</div>
      </div>
    );
}

export default Challenges;