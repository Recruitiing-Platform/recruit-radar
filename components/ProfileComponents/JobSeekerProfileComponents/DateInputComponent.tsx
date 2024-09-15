import { ChangeEvent } from 'react';

type Props = {
  dateLabel: string;
  className?: string
}

const DateInput = (props: Props) => {
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>): void => {};

  const formatDate = (date: string): string => {
    const [year, month, day] = date.split('-');
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="w-full">
      <label className="block text-recBody mb-2">{props.dateLabel}</label>
      <input
        type="date"
        className={props.className}
        onChange={handleDateChange}
      />
      <div className="mt-2 text-recBody"></div>
    </div>
  );
};

export default DateInput;