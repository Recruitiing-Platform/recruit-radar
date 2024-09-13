import React from 'react';

type Props = {};

const TagsComponent = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 pb-8">
      <div className="w-full md:w-[70%]">
        <label
          htmlFor="tags"
          className="text-headerSix font-recMedium pb-1 block"
        >
          Tags
        </label>
        <input
          name="tags"
          type="text"
          className="w-full p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
          placeholder="Job keyword, tags etc."
        />
      </div>
      <div className="w-full md:w-[30%]">
        <label htmlFor="role" className="text-headerSix font-recMedium pb-1">
          Job Role
        </label>
        <select
          name="role"
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
    </div>
  );
};

export default TagsComponent;
