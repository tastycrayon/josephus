import { useState, useEffect } from "react";
import Canvas from "./components/Canvas";
import Input from "./components/Input";
import { binaryJosepus, josephus } from "./Helper/helper";
import { Popup } from "./components/Popup";

function App() {
  const [numberOfPerson, setNumberOfPerson] = useState(10);
  const [deadpool, setDeadpool] = useState<number[]>([]);
  const [answer, setAnswer] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const safeNumberOfPerson =
    numberOfPerson && numberOfPerson > 0 ? numberOfPerson : 1;
  useEffect(() => {
    const binaryAns = binaryJosepus(safeNumberOfPerson);
    // const binaryAns = `f(${safeNumberOfPerson})=${binaryJosepus(
    //   safeNumberOfPerson
    // )}`;
    setAnswer(binaryAns.toString());
    // console.log(
    //   "Recursive:",
    //   safeNumberOfPerson,
    josephus(setDeadpool, setHistory, 1, safeNumberOfPerson);
    // );
  }, [safeNumberOfPerson]);
  console.log(history);
  const [popupState, setPopupState] = useState<boolean>(false);

  return (
    <>
      {popupState && <Popup text={history} setPopupState={setPopupState} />}
      <Canvas numberOfPerson={safeNumberOfPerson} deadpool={deadpool} />
      <Input
        value={numberOfPerson}
        setPopupState={setPopupState}
        setValue={setNumberOfPerson}
        answer={answer}
      />
    </>
  );
}

export default App;
