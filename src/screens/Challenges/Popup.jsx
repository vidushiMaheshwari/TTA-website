import React, {useEffect} from "react";
import classes from "./Challenges.module.css";

function Popup(props) {
    
    useEffect(() => {
      if (props.show ) { 
        document.body.style.overflow = "hidden"
    }
      else{
        document.body.style.overflow = 'unset';
      }
    }, [props.show]);

    return (
      <div
        style={{ display: props.show === true ? "block" : "none" }}
        className={classes.popup}
      >
        <div className={classes.cross} onClick={() => props.setShow(false)}>
          {" "}
          ❌{" "}
        </div>
        <div className={classes.popup_title}>{props.title}</div>
        <div className={classes.popup_content}>{props.content}</div>
      </div>
    );    
}

export default Popup;