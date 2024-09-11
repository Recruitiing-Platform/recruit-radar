import React from 'react';

type Props = {};

const SalaryComponent = (props: Props) => {
  return (
    <>
      <p className="text-headerFive font-recSemiBold pb-5">Salary</p>
      <div className="flex flex-col md:flex-row items-center gap-6 pb-8 w-full">
        <div className="w-full">
          <p className="text-headerSix font-recMedium pb-1">Min. Salary</p>
          <div className="flex items-center">
            <input
              type="text"
              className="w-full p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
              placeholder="Minimum salary"
            />
            <span className="p-2 px-4 inline bg-[#3BA85C] rounded-tr-sm rounded-br-sm">
              NGN
            </span>
          </div>
        </div>
        <div className="w-full">
          <p className="text-headerSix font-recMedium pb-1">Max. Salary</p>
          <div className="flex items-center">
            <input
              type="text"
              className="w-full p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
              placeholder="Maximum salary"
            />
            <span className="p-2 px-4 inline bg-[#3BA85C] rounded-tr-sm rounded-br-sm">
              NGN
            </span>
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="salary"
            className="text-headerSix font-recMedium pb-1 block"
          >
            Salary Type
          </label>
          <select
            name="salary"
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

export default SalaryComponent;
