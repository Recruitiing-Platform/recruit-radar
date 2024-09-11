import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useRecruitRadarHook } from "@/hooks/useRecruitRadarHook";
import { Eye, Link2, Pencil, PencilLine, Share2 } from "lucide-react";
import { Camera } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { appliedJobData, profileDetailData } from "@/data";
import ProfileDetailComponent from "./ProfileDetailComponent";
import EmptyJobComponent from "./EmptyJobComponent";
import OccupiedJobComponent from "./OccupiedJobComponent";
const AppliedJobComponent = () => {
  const { handleShowProfile, rRUser } = useRecruitRadarHook();
  const [progress, setProgress] = useState<number>(10);
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current && fileInputRef.current?.click();
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files && event.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const avatarPicFallback =
    rRUser?.displayName.split(" ")[0][0] +
      rRUser?.displayName.split(" ")[1][0] || "CN";

  return (
    <>
      <div className="md:p-5 lg:p-10 flex justify-between gap-4">
        <div className="w-full lg:w-[80%]">
          <div className="flex justify-between border border-recSubtle/20 rounded-3xl px-5 pt-5 pb-14 mb-9">
            <div className="flex gap-5">
              <div className="relative">
                <div className="relative">
                  <Avatar className="w-36 h-36">
                    <AvatarImage
                      src={
                        avatarUrl ||
                        rRUser?.photoURL ||
                        "https://github.com/shadcn.png"
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
                  style={{ display: "none" }}
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
        </div>
        <div className="space-y-20 hidden lg:block">
          <div className="p-5 bg-[#D9D9D9] dark:bg-recDark h-fit rounded-[30px] shadow-md">
            <div className="flex justify-between pb-8">
              <div>
                <h1 className="text-headerSix font-recBold text-recDark dark:text-recLight">
                  Your public profile
                </h1>
                <p className="text-textSmall font-recSemiBold text-[#007AFF]">
                  www.recruitradar.com/in/ mary-smith-3519572a3
                </p>
              </div>
              <div className="flex gap-3 pt-3">
                <Eye className="cursor-pointer" />
                <Link2 className="cursor-pointer" />
                <Share2 className="cursor-pointer" />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="text-headerSix font-recBold text-recDark dark:text-recLight">
                  Your public profile
                </h1>
                <p className="text-textSmall font-recSemiBold text-[#007AFF]">
                  www.recruitradar.com/in/ mary-smith-3519572a3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-recPrimary px-2 w-full lg:w-[94%] mx-auto justify-between">
        <div className="text-[black] font-recBold px-16 flex">
          <Image
            src="/suitcase.svg"
            alt="suitcase icon"
            width={50}
            height={20}
          />
          <div className="py-4">Job Application</div>
        </div>
        <div className="text-[black] font-recRegular px-14 py-4">Status 2</div>
      </div>
      <h1 className="text-center text-[black] mt-10 font-recSemiBold">
        Check Applied jobs
      </h1>
      <div className="border-2 mt-10 rounded-md lg:w-[94%] mx-auto min-h-[50%] mb-60">
        {Array.isArray(appliedJobData) && appliedJobData.length === 0 && (
          <EmptyJobComponent />
        )}
        {Array.isArray(appliedJobData) &&
          appliedJobData.length > 0 &&
          appliedJobData.map((e, i) => (
            <div key={i}>
              <OccupiedJobComponent
                jobTitle={e.jobTitle}
                employerName={e.employerName}
                applicationDate={e.applicationDate}
                salary={e.salary}
                status={e.status}
                datePosted={e.datePosted}
                location={e.location}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default AppliedJobComponent;
