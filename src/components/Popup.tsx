import React from "react";
import "./Popup.css";

interface PropTypes {
  text: string[];
  setPopupState: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Popup = ({ text, setPopupState }: PropTypes) => {
  return (
    <div className="popup-container">
      <div className="popup-body">
        <div className="hFlex">
          <h1>PROCESS</h1>
          <button className="close-btn" onClick={() => setPopupState(false)}>
            X
          </button>
        </div>
        <ul>
          {text &&
            text.map((t, i) => (
              <li>
                {i + 1}. {t}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
