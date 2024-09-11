import React from 'react';

type Props = {
  progress: number;
};

const CircleProgressComponent = (props: Props) => {
  const radius = 45;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (props.progress / 100) * circumference;

  return (
    <div className='relative w-[100px] h-[100px]'>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#4db8ff"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.35s ease' }}
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dy=".3em"
          fontSize="16"
          fill="#333"
        >
          {props.progress}%
        </text>
      </svg>
    </div>
  );
};

export default CircleProgressComponent;
