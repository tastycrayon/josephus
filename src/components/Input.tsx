import React from "react";

interface PropTypes {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const Input: React.FC<PropTypes> = ({ value, setValue }: PropTypes) => {
  return (
    <div className="inputBox">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value) || 1)}
      />
    </div>
  );
};

export default Input;
