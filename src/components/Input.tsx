import React from "react";

interface PropTypes {
  answer: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const Input: React.FC<PropTypes> = ({ answer, value, setValue }: PropTypes) => {
  return (
    <div className="inputBox">
      <input
        type="number"
        value={value}
        min={0}
        onChange={(e) => setValue(parseInt(e.target.value) || 0)}
      />
      <div className="answer">{answer}</div>
    </div>
  );
};

export default Input;
