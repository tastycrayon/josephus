interface PropTypes {
  answer: string;
  value: number;

  setPopupState: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const Input: React.FC<PropTypes> = ({
  answer,
  value,
  setValue,
  setPopupState,
}: PropTypes) => {
  return (
    <>
      <div className="inputBox">
        <input
          type="number"
          value={value}
          min={0}
          max={128}
          onChange={(e) => {
            const num = parseInt(e.target.value) || 0;
            if (num < 128) setValue(num);
          }}
        />
        <div className="answer">
          <button className="show-btn" onClick={() => setPopupState(true)}>
            SEE DETAILS
          </button>
        </div>
        <div className="answer">Survivor: {answer}</div>
        <div className="answer">
          <a href="https://youtube.com/watch?v=uCsD3ZGzMgE">
            youtube.com/watch?v=uCsD3ZGzMgE
          </a>
        </div>
      </div>
    </>
  );
};

export default Input;
