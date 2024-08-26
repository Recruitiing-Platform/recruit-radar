import { ChangeEvent } from 'react';

const DateInput: React.FC = () => {
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>): void => {};

  const formatDate = (date: string): string => {
    const [year, month, day] = date.split('-');
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

export default DateInput;