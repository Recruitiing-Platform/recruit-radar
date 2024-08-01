import { texts } from '@/data';
import { useEffect, useState } from 'react';

type Props = {
  fromColor: string;
  toColor: string;
  className: string;
};

const RightSideTextComponent = (props: Props) => {
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${props.className}`}>
      {texts.map((text, index) => (
        <p
          key={index}
          className={`absolute text-center top-[25%] text-headerOne font-[800] text-transparent bg-clip-text transition-opacity duration-1000 ${
            currentTextIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, ${props.fromColor}, ${props.toColor})`,
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            minHeight: '6rem',
            lineHeight: '1.5',
            whiteSpace: 'pre-line',
          }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      ))}
    </div>
  );
};

export default RightSideTextComponent;
