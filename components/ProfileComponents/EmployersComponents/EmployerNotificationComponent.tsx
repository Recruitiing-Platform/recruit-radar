import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Switch } from "@/components/ui/switch";
import { profiles } from "@/data";
import ProfileCardComponent from "./ProfileCardComponent";

const EmployerNotificationComponent = () => {
  return (
    <div className="p-5 md:p-10 lg:pr-20">
      <h1 className="text-headerFive font-recSemiBold pb-3">Notification</h1>
      <div className="flex items-center justify-between p-4 border border-[#808080]/50 rounded-lg mb-8 gap-3 md:gap-0">
        <div className="flex items-center gap-2 py-3">
          <span className="hidden md:flex p-2.5 bg-recSecondary text-recAccent rounded-lg">
            <IoMdNotificationsOutline size={32} />
          </span>
          <div>
            <h3 className="text-headerSix font-recMedium pb-1">
              Push notification
            </h3>
            <p className="text-recBody font-recRegular">
              Automatically receive new notification
            </p>
          </div>
        </div>
        <Switch />
      </div>
      <div className="bg-recLightGrey dark:bg-[#000611] h-fit pb-8 rounded-md">
        <div className="flex justify-between sm:py-4">
          <div className="px-4 ">All Application (64)</div>
          <a href="" className="px-4">
            View all
          </a>
        </div>
        <div className=" lg:my-8 grid md:grid-cols-2 xl:grid-cols-3 grid-col-1 gap-4">
          {profiles.map((t, card) => (
            <div className="" key={card}>
              <ProfileCardComponent profile={t} />
            </div>
          ))}
        </div>
      </div>
      <section>
        <div className="bg-recLightGrey dark:bg-[#000611] shadow-lg  h-fit py-8 rounded-md">
          <div className="flex justify-between">
            <div className="px-4">Shortlisted(12)</div>
            <a href="" className="px-4">
              View all
            </a>
          </div>
          <div className="pt-4 lg:my-8 grid md:grid-cols-2 xl:grid-cols-3 grid-col-1 gap-4">
            {profiles.map((t, card) => (
              <div className="" key={card}>
                <ProfileCardComponent profile={t} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployerNotificationComponent;
