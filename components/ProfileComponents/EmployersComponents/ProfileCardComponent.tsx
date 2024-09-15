import React from "react";
import Image from "next/image";
import { EmployerNotification } from "@/interfaces/ProfileInterface";
type Props = {
  profile: EmployerNotification;
};

function ProfileCardComponent({ profile }: Props) {
  return (
    <>
      <div className="bg-recLight dark:bg-recDark shadow-lg rounded-md p-3 h-[250px]">
        <div className="flex gap-4">
          <Image
            src={profile.imageUrl}
            alt="a person profile"
            width={64}
            height={64}
          />
          <div className="">
            <h4 className="font-recBold">{profile.name}</h4>
            <p className="text-textSmall">{profile.title}</p>
          </div>
        </div>
        <hr className="my-4"></hr>
        <div className="lg:text-textSmall text-[12px]">
          <li>{profile.experience}</li>
          <li>Education: {profile.education}</li>
          <li>Applied: {profile.dateApplied}</li>
        </div>
        <div className="flex px-4 mt-4 gap-2">
          <Image src="/redarrow.svg" alt="redarrow" width={10} height={10} />
          <a
            href="/cv.pdf"
            download="My_CV.pdf"
            className="font-recBold text-recPrimary text-textSmall"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}

export default ProfileCardComponent;
