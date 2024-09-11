import React, { ChangeEvent } from 'react';

type Props = {};

const OtherInfoComponent = (props: Props) => {
    const handleDateChange = (e: ChangeEvent<HTMLInputElement>): void => {};

  return (
    <>
      <p className="text-headerFive font-recSemiBold pb-5">Other Information</p>
      <div className="flex flex-col md:flex-row items-center gap-6 pb-6 w-full">
        <div className="w-full">
          <label
            htmlFor="education"
            className="text-headerSix font-recMedium pb-1 block"
          >
            Education
          </label>
          <select
            name="education"
            className="w-full p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
          >
            <option value="select" className="text-textSmall">
              Select
            </option>
            <option value="">Engineering</option>
            <option value="">Law</option>
            <option value="">Education</option>
          </select>
        </div>
        <div className="w-full">
          <label
            htmlFor="experience"
            className="text-headerSix font-recMedium pb-1 block"
          >
            Experience
          </label>
          <select
            name="experience"
            className="w-full p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
          >
            <option value="select" className="text-textSmall">
              Select
            </option>
            <option value="">Engineering</option>
            <option value="">Law</option>
            <option value="">Education</option>
          </select>
        </div>
        <div className="w-full">
          <label
            htmlFor="job-type"
            className="text-headerSix font-recMedium pb-1 block"
          >
            Job Type
          </label>
          <select
            name="job-type"
            className="w-full p-[9px] bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
          >
            <option value="select" className="text-textSmall">
              Select
            </option>
            <option value="">Engineering</option>
            <option value="">Law</option>
            <option value="">Education</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 pb-8 w-full">
        <div className="w-full">
          <label
            htmlFor="vacancies"
            className="text-headerSix font-recMedium pb-1 block"
          >
            Vacancies
          </label>
          <select
            name="vacancies"
            className="w-full p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
          >
            <option value="select" className="text-textSmall">
              Select
            </option>
            <option value="">Engineering</option>
            <option value="">Law</option>
            <option value="">Education</option>
          </select>
        </div>
        <div className="w-full">
          <label
            htmlFor="expiration"
            className="text-headerSix font-recMedium pb-1 block"
          >
            Expiration Date
          </label>
          <input
            type="date"
            className="w-full p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
            onChange={handleDateChange}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="job-level"
            className="text-headerSix font-recMedium pb-1 block"
          >
            Job Level
          </label>
          <select
            name="job-level"
            className="w-full p-[9px] bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
          >
            <option value="select" className="text-textSmall">
              Select
            </option>
            <option value="">Engineering</option>
            <option value="">Law</option>
            <option value="">Education</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default OtherInfoComponent;
