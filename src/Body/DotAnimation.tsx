// DotAnimation.tsx

import React from 'react';

const DotAnimation: React.FC = () => {
  return (
    <div className="flex items-center">
      <svg width="600" height="200" viewBox="0 0 600 200">
        {/* Arc */}
        <path
          id="arcPath"
          d="M 50 150 A 100 50 0 0 1 550 150"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />

        {/* Lines under the endpoints */}
        <line x1="40" y1="155" x2="60" y2="155" stroke="black" strokeWidth="2" />
        <line x1="540" y1="155" x2="560" y2="155" stroke="black" strokeWidth="2" />

        {/* Labels A and B */}
        <text x="50" y="175" fontSize="20px" textAnchor="middle">A</text>
        <text x="550" y="175" fontSize="20px" textAnchor="middle">B</text>

        {/* Animated Dot */}
        <circle r="5" fill="black">
          <animateMotion 
            repeatCount="indefinite" 
            dur="8s" 
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
