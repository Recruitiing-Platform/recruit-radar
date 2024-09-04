import React, { useState, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Eye, Link2, Pencil, PencilLine, Share2 } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import ProgressBar from './ProgressBarComponent';
import { Button } from '@/components/ui/button';
import { profileDetailData } from '@/data';
import { ProfileDataInterface } from '@/interfaces/ProfileInterface';
import ProfileDetailComponent from './ProfileDetailComponent';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';

type Props = {};

const NavJobSeekerProfileComponent = (props: Props) => {
  const { rRUser, handleShowProfile, handleCameraClick, handleFileChange, avatarUrl, fileInputRef } =
    useRecruitRadarHook();

  const [progress, setProgress] = useState<number>(10);

  const avatarPicFallback =
    rRUser?.displayName.split(' ')[0][0] +
      rRUser?.displayName.split(' ')[1][0] || 'CN';

  return (
    <div className="dark:bg-[#000611] flex md:hidden px-5">
      <div className="w-full">
        <div className="flex justify-between pt-5 mb-9">
          <div className="w-fit">
            <div className="relative w-36 h-36">
              <div className="relative">
                <Avatar className="w-36 h-36">
                  <AvatarImage
                    src={
                      avatarUrl ||
                      rRUser?.photoURL ||
                      'https://github.com/shadcn.png'
                    }
                  />
                  <AvatarFallback>{avatarPicFallback}</AvatarFallback>
                </Avatar>
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#000]/30 rounded-full"></div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <span
                className="absolute bottom-7 right-7 z-10 block cursor-pointer"
                onClick={handleCameraClick}
              >
                <Camera className="text-recLightGrey" />
              </span>
            </div>
            <div className="pt-3">
              <h1 className="text-headerFour pb-4 font-recSemiBold">
                {rRUser?.displayName}
              </h1>
              <p className="text-sm font-recMedium">
                Your role will appear here
              </p>
              <p className="text-sm font-recMedium">Location</p>
            </div>
          </div>
          <span className="text-recSubtle">
            <PencilLine />
          </span>
        </div>
        <div>
          <div className="flex items-center justify-between gap-1 pb-3">
            <span className="text-[18px] font-recSemiBold">
              Open to work as
            </span>
            <span>
              <Pencil size={20} className="" />
            </span>
          </div>
          <Textarea
            className="rounded-[10px] border-recBody/80 h-32 mb-7 w-full placeholder:text-textSmall"
            placeholder="You can add what you are open to work as here, the other areas where you have experiences. E.g Content writing, Social media manager, etc."
          />
          <div className="flex justify-between mb-9">
            <div className="space-y-3 w-full">
              <ProgressBar progress={progress} />
              <div className="flex items-center gap-2 pb-3">
                <span className="font-recSemiBold">
                  Almost done setting up, complete your profile
                </span>
                <div className="cursor-pointer" onClick={handleShowProfile}>
                  <Pencil
                    size={20}
                    className="text-recLightGrey bg-recDark p-1 rounded-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-16">
            <div className="flex items-center gap-5">
              <div className="border p-2 rounded-lg border-recSubtle/50">
                <h3 className="text-[10px] font-recSemiBold">
                  Applied to{' '}
                  <span className="block text-headerSix font-recBold">
                    0 jobs
                  </span>
                  this week
                </h3>
              </div>
              <div className="border p-2 rounded-lg border-recSubtle/50">
                <h3 className="text-[10px] font-recSemiBold">
                  Posted to{' '}
                  <span className="block text-headerSix font-recBold">
                    0 jobs
                  </span>
                  this week
                </h3>
              </div>
              <div className="border p-2 rounded-lg border-recSubtle/50">
                <h3 className="text-[10px] font-recSemiBold">
                  Searched for{' '}
                  <span className="block text-headerSix font-recBold">
                    0 jobs
                  </span>
                  this week
                </h3>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="p-5 bg-[#D9D9D9] dark:bg-recDark h-fit rounded-[30px] shadow-md">
              <div className="flex flex-wrap pb-8 w-fit">
                <div>
                  <h1 className="text-[18px] font-recBold text-recDark dark:text-recLight">
                    Your public profile
                  </h1>
                  <p className="text-textSmall font-recSemiBold text-[#007AFF]">
                    www.recuitradar.com/in/ mary-smith-3519572a3
                  </p>
                </div>
                <div className="flex gap-3 pt-3">
                  <Eye className="cursor-pointer" />
                  <Link2 className="cursor-pointer" />
                  <Share2 className="cursor-pointer" />
                </div>
              </div>
              <div className="flex flex-wrap">
                <div>
                  <h1 className="text-[18px] font-recBold text-recDark dark:text-recLight">
                    Link to portfolio/resume
                  </h1>
                  <p className="text-textSmall font-recSemiBold text-[#007AFF]">
                    https://linktomyportfolio.com
                  </p>
                </div>
                <div className="flex gap-3 pt-3">
                  <Eye className="cursor-pointer" />
                  <Link2 className="cursor-pointer" />
                  <Share2 className="cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="bg-[#D9D9D9] dark:bg-recDark p-2 mb-10 rounded-[20px] h-96">
              <div className="flex items-center justify-between pb-5">
                <Button>Posts</Button>
                <Button variant="outline">Comments</Button>
                <Button variant="outline">Jobs</Button>
              </div>
              <p className="text-recBody dark:text-recAccent">
                Your posts will appear here...
              </p>
            </div>
          </div>
          <div className="space-y-10 my-10">
            {profileDetailData.map((detail: ProfileDataInterface) => {
              return (
                <ProfileDetailComponent
                  key={detail.header}
                  header={detail.header}
                  subheader={detail.subheader}
                />
              );
            })}
            <Button>Add Section</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavJobSeekerProfileComponent;
