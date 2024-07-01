import React from 'react';
import { Button } from './ui/button';

type Props = {
  btnText: string;
  iconFill: string;
  className?: string;
};

const ButtonComponent = (props: Props) => {
  return (
    <Button className={`flex items-center justify-center gap-1 ${props.className}`}>
      <span>{props.btnText}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill="none"
      >
        <rect x="0.5" width="7" height="7" rx="2.5" fill={props.iconFill} />
        <rect x="0.5" y="10" width="7" height="7" rx="2.5" fill={props.iconFill} />
        <rect x="10.5" width="7" height="7" rx="2.5" fill={props.iconFill} />
        <rect x="10.5" y="10" width="7" height="7" rx="2.5" fill={props.iconFill} />
      </svg>
    </Button>
  );
};

export default ButtonComponent;
