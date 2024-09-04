import { ArrowRight } from 'lucide-react';
import React from 'react';

type Props = {
  header: string;
  subheader: string;
};

const ProfileDetailComponent = (props: Props) => {
  return (
    <div>
      <h1 className="text-headerFour font-recBold pb-3">{props.header}</h1>
      <div className="border-2 rounded-[10px] border-[#2B3F6C]/50 px-4 py-3 h-40">
        <p className="font-recSemiBold pb-1">{props.subheader}</p>
        <p className="flex items-center gap-2 cursor-pointer hover:gap-3 hover:font-recSemiBold transition-transform duration-300">
          Ready to add?{' '}
          <span className="inline-flex p-1 border-2 border-recSecondary rounded-full">
            <ArrowRight size={16} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProfileDetailComponent;
