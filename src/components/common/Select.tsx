import React from "react";

interface SelectProps {
  selected: string;
  setSelected: (value: string) => void;
  options: string[];
}
const Select: React.FC<SelectProps> = ({ selected, setSelected, options }) => {
  return (
    <div className="">
      <select
        className="border-2  border-gray h-10 rounded"
        onChange={(e) => setSelected(e.target.value)}
      >
        <option defaultChecked>Select Report Type</option>
        {options.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
