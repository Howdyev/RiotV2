import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollNextButton: FunctionComponent = function (props) {
  return (
    <div className="next_btn">
      <button className="slider_next" type="button">
        {props.gPageNo < 9 ? <FontAwesomeIcon icon={faArrowDown} /> : <FontAwesomeIcon icon={faArrowUp} />}
      </button>
    </div>
  );
};

export default ScrollNextButton;
