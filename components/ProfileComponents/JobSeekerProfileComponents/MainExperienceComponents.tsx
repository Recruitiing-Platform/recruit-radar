import { useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {};

const MainExperienceComponent: React.FC<Props> = (props: Props) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  // Handle skill selection
  const handleSkillsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value && !skills.includes(value)) {
      setSkills([...skills, value]);
    }
  };

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  return (
    <div className="mx-5 rounded-3xl mt-5 p-5 border border-recSubtle">
      <form className="bg-white rounded shadow-md">
        <div className="flex flex-col md:flex-row">
          {/* Left Column: Text */}
          <div className="hidden md:block md:w-1/3">
  <p className="text-recBody mb-4">
    You can show off all the certifications you have obtained here
  </p>
</div>


          {/* Right Column: Input Fields */}
          <div className="md:w-2/3">
            <div className="mb-4">
              <label className="block text-recBody mb-2"><strong>Organization/Company</strong></label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Microsoft"
              />
            </div>

            <div className="mb-4">
              <label className="block text-recBody mb-2"><strong>Location</strong></label>
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
              <label className="block text-recBody mb-2"><strong>Your Role</strong></label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Senior Software Engineer"
              />
            </div>

            <div className="mb-4">
              <label className="block text-recBody mb-2"><strong>Work type</strong></label>
              <div className="relative">
                <select
                  className="w-full p-2 border rounded appearance-none pr-8"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Full-time
                  </option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="freelance">Freelancing</option>
                  <option value="contract">Contract</option>
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
              <label className="block text-recBody mb-2"><strong>Skills you learnt</strong></label>
              <select
                className="w-full p-2 border rounded appearance-none"
                onChange={handleSkillsChange}
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Select a skill
                </option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="Html">HTML</option>
                <option value="CSS">CSS</option>
                <option value="C++">C++</option>
                <option value="React">React</option>
                <option value="Javascript">JavaScript</option>
                <option value="Typescript">TypeScript</option>
              </select>
              <div className="mt-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full px-2 mb-4">
  <label className="block text-recBody mb-2"><strong>Start Date</strong></label>
  <div className="relative">
    <DatePicker
      selected={startDate}
      onChange={handleStartDateChange}
      className="w-full p-2 pr-10 border rounded"
      placeholderText="Select start date"
    />
    <AiOutlineCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
  </div>
</div>

<div className="w-full px-2 mb-4">
  <label className="block text-recBody mb-2"><strong>End Date</strong></label>
  <div className="relative flex flex-col items-start">
    <DatePicker
      selected={endDate}
      onChange={handleEndDateChange}
      className="w-full p-2 pr-10 border rounded"
      placeholderText="Select end date"
    />
    <AiOutlineCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    <div className="flex items-center mt-2">
      <input
        type="checkbox"
        className="mr-2"
        checked={currentlyWorking}
        onChange={(e) => setCurrentlyWorking(e.target.checked)}
      />
      <label className="text-recBody"><strong>Currently working there</strong></label>
    </div>
  </div>
</div>



            <div className="flex flex-wrap justify-end mt-4 pb-5 gap-3">
  {/* For Laptop View */}
  <div className="hidden md:flex flex-wrap justify-end gap-3">
    <button
      type="button"
      className="border border-recPrimary text-recPrimary px-4 py-2 rounded"
      style={{
        borderColor: "#FF6347", // recPrimary (example: tomato color)
        color: "#FF6347", // recPrimary
      }}
    >
      Cancel
    </button>
    <button
      type="submit"
      className="bg-recPrimary text-recLight px-4 py-2 rounded"
      style={{
        backgroundColor: "#FF6347", // recPrimary
        color: "#ffffff", // recLight
      }}
    >
      Save
    </button>
    <button
      type="button"
      className="bg-recPrimary text-recLight px-4 py-2 rounded"
      style={{
        backgroundColor: "#FF6347", // recPrimary
        color: "#ffffff", // recLight
      }}
    >
      Save and add another
    </button>
  </div>

  {/* For Mobile View */}
  <div className="flex flex-wrap justify-center md:hidden gap-3">
    <button
      type="button"
      className="btn btn-outline-danger px-4 py-2 rounded border border-recPrimary"
      style={{
        borderColor: "#FF6347", // recPrimary
        color: "#FF6347", // recPrimary
      }}
    >
      Edit
    </button>
    <button
      type="submit"
      className="btn btn-danger px-4 py-2 rounded"
      style={{
        backgroundColor: "#FF6347", // recPrimary
        color: "#ffffff", // recLight
      }}
    >
      Save
    </button>
  </div>
</div>
</div>
        </div>
      </form>
    </div>
  );
};

export default MainExperienceComponent;
