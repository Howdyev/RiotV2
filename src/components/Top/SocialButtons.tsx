import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialButtons: FunctionComponent = function () {
  return (
    <div className="social_icon">
      <ul>
        <li>
          <a>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialButtons;
