import React from 'react';

const AnimatedDash = () => (
  <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <path id="circlePath" d="M 200, 100
        m -75, 0
        a 75,75 0 1,0 150,0
        a 75,75 0 1,0 -150,0" />
    </defs>
    <text fontSize="24" fill="black">
      <textPath href="#circlePath" startOffset="0%">
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </textPath>
    </text>
    <style>{`
      @keyframes dash {
        0% {
          offset-distance: 0%;
        }
        50% {
          offset-distance: 50%;
        }
        100% {
          offset-distance: 100%;
        }
      }

      textPath {
        animation: dash 10s linear infinite;
        offset-path: path("M 200, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0 M 0, 100 H 400");
      }
    `}</style>
  </svg>
);

export default AnimatedDash;
