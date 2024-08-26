// pages/profile.tsx

import React, { ChangeEvent } from "react";

const DateInput: React.FC = () => {
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>): void => {};

  const formatDate = (date: string): string => {
    const [year, month, day] = date.split("-");
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="w-1/2">
      <label className="block text-recBody mb-2">Date of Birth</label>
      <input
        type="date"
        className="w-full md:w-full p-2 border rounded"
        onChange={handleDateChange}
      />
      <div className="mt-2 text-recBody"></div>
    </div>
  );
};

const MainProfileComponent: React.FC = () => {
  return (
    <div className="ml-5 mr-10 rounded-3xl mt-5 p-5 border border-recSubtle">
      <form className="bg-white p-6 rounded shadow-md">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row">
          {/* Left Column: Text */}
          <div className="md:w-1/3">
            <p className="text-recBody mb-4">
              Tell us about yourself, to let your next employer know about you
            </p>
          </div>

          {/* Right Column: Input Fields */}
          <div className="md:w-2/3">
            <div className="mb-4">
              <label className="block text-recBody mb-2">Your Name</label>
              <input
                type="text"
                className="w-full md:w-2/2 md:ml-auto p-2 border rounded"
                placeholder="Mary Smith"
              />
            </div>

            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block text-recBody mb-2">Title</label>
                <input
                  type="text"
                  className="w-full md:w-full p-2 border rounded"
                  placeholder="Miss"
                />
              </div>
              <div className="w-1/2">
                <DateInput />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-recBody mb-2">Gender Pronouns</label>
              <input
                type="text"
                className="w-full md:w-2/2 md:ml-auto p-2 border rounded"
                placeholder="Male/Female"
              />
            </div>

            <div className="mb-4">
              <label className="block text-recBody mb-2">Location</label>
              <input
                type="text"
                className="w-full md:w-2/2 md:ml-auto p-2 border rounded"
                placeholder="Lagos State, Nigeria"
              />
            </div>

            <div className="mb-4">
              <label className="block text-recBody mb-2">Your Role(s)</label>
              <input
                type="text"
                className="w-full md:w-2/2 md:ml-auto p-2 border rounded"
                placeholder="Software engineer"
              />
            </div>

            <div className="mb-4 relative">
              <label className="block text-recBody mb-2">Experience</label>
              <div className="relative">
                <select className="w-full md:w-2/2 md:ml-auto p-2 border rounded appearance-none">
                  <option value="" disabled hidden>
                    Experience
                  </option>
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} year{i + 1 > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>

                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.67l3.71-3.44a.75.75 0 011.04 1.08l-4 3.75a.75.75 0 01-1.04 0l-4-3.75a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-recBody mb-2">Work Preference</label>
              <input
                type="text"
                className="w-full md:w-2/3 md:ml-auto p-2 border rounded"
                placeholder="Hybrid"
              />
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-4 flex md:flex-row">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <label className="block text-recBody mb-2">Bio</label>
            <textarea
              className="w-full md:w-2/3 md:ml-auto p-2 mb-7 border rounded"
              placeholder="Tell us about yourself, your experience, what you do etc"
              rows={4}
            ></textarea>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 gap-4 mt-4 md:ml-auto md:w-2/3">
          <div>
            <label className="block text-recBody mb-2">Link to Portfolio</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Paste the link to your portfolio here to allow employers to see your works"
            />
          </div>
          <div>
            <label className="block text-recBody mb-2">
              Upload your Resume
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Upload your resume here or paste the link"
              />
              <button className="absolute right-0 top-0 h-full px-3 bg-gray-200 rounded-r text-gray-600">
                <i className="fas fa-upload"></i>
              </button>
            </div>
          </div>
          <div>
            <label className="block text-recBody mb-2">LinkedIn Handle</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Paste the link to your LinkedIn account here"
            />
          </div>
          <div>
            <label className="block text-recBody mb-2">GitHub</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Paste the link to your GitHub account here"
            />
          </div>
          <div>
            <label className="block text-recBody mb-2">Facebook</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Paste the link to your Facebook account here"
            />
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-end mt-4 space-x-4">
          <button
            type="button"
            className="border border-recPrimary text-recPrimary px-4 py-2 rounded"
          >
            Edit
          </button>
          <button
            type="submit"
            className="bg-recPrimary text-recLight px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default MainProfileComponent;
