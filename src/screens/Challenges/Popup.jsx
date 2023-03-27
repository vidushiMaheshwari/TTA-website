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
        <div style={{display: (props.show === true) ? 'block': 'none'}} className={classes.popup} onClick={() => props.setShow(false)}>
            HELLO
        </div>
    )    
}

export default Popup;