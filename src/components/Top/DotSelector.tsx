import React, { FunctionComponent } from "react";

const DotSelector: FunctionComponent = function () {
  return (
    <ul className="HomeNavDots-list">
      <li className="HomeNavDots-list-item active" data-page="1">
        <span className="HomeNavDots-circle">01</span>
      </li>
      <li className="HomeNavDots-list-item" data-page="2">
        <span className="HomeNavDots-circle">02</span>
      </li>
      <li className="HomeNavDots-list-item" data-page="3">
        <span className="HomeNavDots-circle">03</span>
      </li>
      <li className="HomeNavDots-list-item" data-page="4">
        <span className="HomeNavDots-circle">04</span>
      </li>
      <li className="HomeNavDots-list-item" data-page="5">
        <span className="HomeNavDots-circle">05</span>
      </li>
      <li className="HomeNavDots-list-item" data-page="6">
        <span className="HomeNavDots-circle">06</span>
      </li>
      <li className="HomeNavDots-list-item" data-page="7">
        <span className="HomeNavDots-circle">07</span>
      </li>
      <li className="HomeNavDots-list-item" data-page="8">
        <span className="HomeNavDots-circle">08</span>
      </li>
      <li className="HomeNavDots-list-item" data-page="9">
        <span className="HomeNavDots-circle">09</span>
      </li>
    </ul>
  );
};

export default DotSelector;
