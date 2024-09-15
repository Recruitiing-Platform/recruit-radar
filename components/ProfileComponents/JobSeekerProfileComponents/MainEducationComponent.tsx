import { useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {};

const MainEducationComponent: React.FC<Props> = (props: Props) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentlyWorking, setCurrentlyWorking] = useState(false);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  return (
    <div className="mx-5 rounded-3xl mt-5 p-5 border border-recSubtle">
      <form className="bg-white rounded shadow-md">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Left Column: Text */}
          <div className="md:w-1/3">
            <p className="text-recBody mb-4">
              You can show off all the certification you have obtained here
            </p>
          </div>

          {/* Right Column: Input Fields */}
          <div className="md:w-2/3">
            <div className="mb-4">
              <label className="block text-recBody mb-2">
                <strong>School Name</strong>
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="University of Ilorin"
              />
            </div>

            <div className="mb-4">
              <label className="block text-recBody mb-2">
                <strong>Location</strong>
              </label>
              <div className="relative">
                <select
                  className="w-full p-2 border rounded appearance-none pr-8"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Kwara, Nigeria
                  </option>
                  <option value="abia">Abia, Nigeria</option>
                  <option value="adamawa">Adamawa, Nigeria</option>
                  <option value="akwa-ibom">Akwa Ibom, Nigeria</option>
                  <option value="anambra">Anambra, Nigeria</option>
                  <option value="bauchi">Bauchi, Nigeria</option>
                  <option value="bayelsa">Bayelsa, Nigeria</option>
                  <option value="benue">Benue, Nigeria</option>
                  <option value="borno">Borno, Nigeria</option>
                  <option value="cross-river">Cross River, Nigeria</option>
                  <option value="delta">Delta, Nigeria</option>
                  <option value="ebonyi">Ebonyi, Nigeria</option>
                  <option value="edo">Edo, Nigeria</option>
                  <option value="ekiti">Ekiti, Nigeria</option>
                  <option value="enugu">Enugu, Nigeria</option>
                  <option value="gombe">Gombe, Nigeria</option>
                  <option value="imo">Imo, Nigeria</option>
                  <option value="jigawa">Jigawa, Nigeria</option>
                  <option value="kaduna">Kaduna, Nigeria</option>
                  <option value="kano">Kano, Nigeria</option>
                  <option value="katsina">Katsina, Nigeria</option>
                  <option value="kebbi">Kebbi, Nigeria</option>
                  <option value="kogi">Kogi, Nigeria</option>
                  <option value="kwara">Kwara, Nigeria</option>
                  <option value="lagos">Lagos, Nigeria</option>
                  <option value="nasarawa">Nasarawa, Nigeria</option>
                  <option value="niger">Niger, Nigeria</option>
                  <option value="ogun">Ogun, Nigeria</option>
                  <option value="ondo">Ondo, Nigeria</option>
                  <option value="osun">Osun, Nigeria</option>
                  <option value="oyo">Oyo, Nigeria</option>
                  <option value="plateau">Plateau, Nigeria</option>
                  <option value="rivers">Rivers, Nigeria</option>
                  <option value="sokoto">Sokoto, Nigeria</option>
                  <option value="taraba">Taraba, Nigeria</option>
                  <option value="yobe">Yobe, Nigeria</option>
                  <option value="zamfara">Zamfara, Nigeria</option>
                  <option value="fct">
                    Federal Capital Territory, Nigeria
                  </option>
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
                <strong>Degree Type</strong>
              </label>
              <div className="relative">
                <select className="w-full p-2 border rounded appearance-none">
                  <option value="" disabled hidden>
                    LLB
                  </option>
                  <option value="llb">LLB</option>
                  <option value="bsc">BSc</option>
                  <option value="b.eng">B.Eng</option>
                  <option value="ba">BA</option>
                  <option value="msc">MSc</option>
                  <option value="mba">MBA</option>
                  <option value="phd">PhD</option>
                  <option value="nd">ND</option>
                  <option value="hnd">HND</option>
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
                <strong>Major Field</strong>
              </label>
              <div className="relative">
                <select className="w-full p-2 border rounded appearance-none">
                  <option value="" disabled hidden>
                    Common Law
                  </option>
                  <option value="common-law">Common Law</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="engineering">Engineering</option>
                  <option value="medicine">Medicine</option>
                  <option value="business-administration">
                    Business Administration
                  </option>
                  <option value="economics">Economics</option>
                  <option value="psychology">Psychology</option>
                  <option value="architecture">Architecture</option>
                  <option value="art">Art</option>
                  <option value="physics">Physics</option>
                  <option value="mathematics">Mathematics</option>
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
                <strong>Start Date</strong>
              </label>
              <div className="relative">
                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  className="w-full p-2 pr-10 border rounded"
                  placeholderText="09/25/2024"
                />
                <AiOutlineCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-recBody mb-2">
                <strong>End Date</strong>
              </label>
              <div className="relative flex flex-col md:flex-row items-start md:items-center">
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  className="w-full p-2 border rounded"
                  placeholderText="Select end date"
                />
                <AiOutlineCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                {/* Wrap the checkbox and label in a container */}
                <div className="flex items-center mt-2 md:mt-0 md:ml-10">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={currentlyWorking}
                    onChange={e => setCurrentlyWorking(e.target.checked)}
                  />
                  <label className="text-recBody">
                    <strong>Currently schooling here</strong>
                  </label>
                </div>
              </div>
            </div>

            {/* For Laptop View */}
            <div className="hidden md:flex flex-wrap justify-end gap-3">
              <button
                type="button"
                className="border border-recPrimary text-recPrimary px-4 py-2 rounded"
                style={{
                  borderColor: '#FF6347', // recPrimary (example: tomato color)
                  color: '#FF6347', // recPrimary
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-recPrimary text-recLight px-4 py-2 rounded"
                style={{
                  backgroundColor: '#FF6347', // recPrimary
                  color: '#ffffff', // recLight
                }}
              >
                Save
              </button>
              <button
                type="button"
                className="bg-recPrimary text-recLight px-4 py-2 rounded"
                style={{
                  backgroundColor: '#FF6347', // recPrimary
                  color: '#ffffff', // recLight
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
                  borderColor: '#FF6347', // recPrimary
                  color: '#FF6347', // recPrimary
                }}
              >
                Edit
              </button>
              <button
                type="submit"
                className="btn btn-danger px-4 py-2 rounded"
                style={{
                  backgroundColor: '#FF6347', // recPrimary
                  color: '#ffffff', // recLight
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MainEducationComponent;
