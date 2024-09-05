import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full bg-recBody border border-recDark overflow-hidden rounded-full">
      <div
        className={`h-2 bg-recDark transition-transform duration-300 ease-out`}
        style={{
            width: `${progress}%`
        }}
      />
    </div>
  );
};

export default ProgressBar;