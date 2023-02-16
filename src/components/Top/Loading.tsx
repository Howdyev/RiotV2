import React, { FunctionComponent, useEffect } from "react";
import anime from "animejs";

const Loading: FunctionComponent = function () {
  useEffect(() => {
    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml2 .ml2letter",
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 1950,
        delay: (el, i) => 130 * i,
      })
      .add({
        targets: ".ml2",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 0,
      });
  }, []);

  return (
    <div className="loader_layer">
      <div className="first_mask">
        <div id="loader"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.88 134.27">
          <g>
            <g>
              <path d="m114.72,16.03c-6.45-18.47-39.06-21.92-72-5.41C25.41,19.3,11.45,32.19.66,46.21c-.49.63.27,1.45.84.91,4.94-4.74,10.49-9.28,16.55-13.44,30.83-21.17,63.18-24.58,72.27-7.62,5.22,9.74,1.62,24.07-8.21,38.52-1.1,1.61.58,3.64,2.12,2.58,22.62-15.59,35.68-36.28,30.5-51.12Z" />
              <path d="m25.86,103.3c-9.23,2.77-18.52,3.72-25.71,2.72-.02,3.76,0,27.8,0,27.8h25.7s-.06-30.71,0-30.52Z" />
              <path d="m24.44,67.34c-1.27,1.66-3.34,2.51-4.96,1.92-1.86-.68-2.43-2.97-1.27-5.13.77-1.45,2.13-2.44,3.49-2.75-.83-.79-1.82-1.42-2.98-1.85-5.75-2.09-13.3,1.62-16.87,8.29-3.57,6.67-1.8,13.77,3.94,15.86s13.3-1.62,16.87-8.29c1.47-2.74,2.02-5.55,1.78-8.06Z" />
              <path d="m31.56,67.05s59.11,7.62,87.32,66.76h-40.21s10.21-37.19-47.11-66.76Z" />
              <path d="m31.56,67.05s47.63,35.21,32.57,67.22l-19.48-.46s24.68-27.59-13.09-66.76Z" />
            </g>
          </g>
        </svg>
      </div>
      <div className="banner_title">
        <h1 className="ml2">
          {"挑戦し続ける会社に".split("").map((v, index) => (
            <span className="ml2letter" key={index}>
              {v}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Loading;
