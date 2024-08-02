import React from 'react';

type Props = {};

const SuccessSvgComponent = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 180 180"
      fill="none"
    >
      <g clip-path="url(#clip0_2345_18639)">
        <mask
          id="mask0_2345_18639"
        //   style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="180"
          height="180"
        >
          <path d="M180 0H0V180H180V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_2345_18639)">
          <path
            d="M90 12C133.048 12 168 46.9518 168 90C168 133.048 133.048 168 90 168C46.9518 168 12 133.048 12 90C12 46.9518 46.9518 12 90 12Z"
            fill="#3FC5B3"
          />
          <path
            d="M45 87L70 120C70 120 113.066 82.171 133.491 64.231"
            stroke="white"
            stroke-width="16"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2345_18639">
          <rect width="180" height="180" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SuccessSvgComponent;
