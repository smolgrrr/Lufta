// DotAnimation.tsx

import React from 'react';

const DotAnimation: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <svg width="300" height="200" viewBox="0 0 300 200">
        {/* Arc */}
        <path
          id="arcPath"
          d="M 50 150 A 100 50 0 0 1 250 150"
          fill="none"
          stroke="lightgrey"
          strokeWidth="2"
        />

        {/* Lines under the endpoints */}
        <line x1="40" y1="155" x2="60" y2="155" stroke="black" strokeWidth="2" />
        <line x1="240" y1="155" x2="260" y2="155" stroke="black" strokeWidth="2" />

        {/* Labels A and B */}
        <text x="50" y="175" fontSize="14px" textAnchor="middle">A</text>
        <text x="250" y="175" fontSize="14px" textAnchor="middle">B</text>

        {/* Animated Dot */}
        <circle r="5" fill="black">
          <animateMotion 
            repeatCount="indefinite" 
            dur="5s" 
            keyPoints="0;1;0" 
            keyTimes="0;0.5;1" 
            calcMode="spline"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1">
            <mpath href="#arcPath"/>
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
};

export default DotAnimation;
