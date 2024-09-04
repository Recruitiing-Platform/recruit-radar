// components/MainCertComponent.tsx

import React from 'react';

type Props = {};

const MainCertComponent: React.FC<Props> = (props: Props) => {
  return (
    <div className="mx-5 rounded-3xl mt-5 p-5 border border-recSubtle">
      <form className="bg-white rounded shadow-md">
        <div className="flex flex-col md:flex-row">
          {/* Left Column: Text */}
          <div className="md:w-1/3">
            <p className="text-recBody mb-4">
              You can show off all the certification you have obtained here
            </p>
          </div>

          {/* Right Column: Input Fields */}
          <div className="md:w-2/3">
            <div className="mb-4">
              <label className="block text-recBody mb-2">Organization</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Coursera"
              />
            </div>

            <div className="mb-4">
              <label className="block text-recBody mb-2">Location</label>
              <div className="relative">
                <select
                  className="w-full p-2 border rounded appearance-none pr-8"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Online
                  </option>
                  <option value="online">Online</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="onsite">Onsite</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-recBody mb-2">
                Name of Certificate
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Foundation of UI/UX Design"
              />
            </div>

            <div className="mb-4">
              <label className="block text-recBody mb-2">
                Certifying Organization
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Google, Meta etc"
              />
            </div>

            <div className="mb-4">
              <label className="block text-recBody mb-2">Date Obtained</label>
              <input type="date" className="w-full p-2 border rounded" />
            </div>

            <div className="mb-4">
              <label className="block text-recBody mb-2">
                Link to Certificate
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Paste the link to your certificate here to allow employers to view your certificate"
              />
            </div>

            <div className="mb-4">
              <label className="block text-recBody mb-2">
                Link to Projects
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Paste the link to your projects"
              />
            </div>

            <div className="mb-4">
              <label className="block text-recBody mb-2">
                Upload Image/PDF of Certificate
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Paste the link to your certificate here"
              />
            </div>

            <div className="flex flex-wrap justify-end mt-4 pb-5 gap-5 md:space-x-4">
              <button
                type="button"
                className="border border-recPrimary text-recPrimary px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-recPrimary text-recLight px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                type="button"
                className="bg-recPrimary text-recLight px-4 py-2 rounded"
              >
                Save and add another
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MainCertComponent;
