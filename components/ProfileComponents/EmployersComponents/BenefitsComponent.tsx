import React, { useState } from 'react';

interface Props {
  text: string;
}

const BenefitsComponent = (props: Props) => {
  const [activeText, setActiveText] = useState(false);

  const handleClick = () => {
    setActiveText(prevText => !prevText);
  };

  return (
    <div
      className={`px-4 py-3.5 text-textSmall border border-[#AAB0BB] text-[#AAB0BB] rounded-lg cursor-pointer transition-all duration-300
      ${activeText ? "bg-[#FDE9E7] text-recSecondary" : "hover:border-recPrimary hover:text-recPrimary"}`}
      onClick={handleClick}
    >
      {props.text}
    </div>
  );
};

export default BenefitsComponent;
