import { useState, useEffect } from "react";
import Canvas from "./components/Canvas";
import Input from "./components/Input";
import { binaryJosepus, josephus } from "./Helper/helper";

function App() {
  const [numberOfPerson, setNumberOfPerson] = useState(10);
  const [deadpool, setDeadpool] = useState<number[]>([]);
  const [answer, setAnswer] = useState<string>("");
  const safeNumberOfPerson = numberOfPerson || 1;
  useEffect(() => {
    const binaryAns = `f(${safeNumberOfPerson})=${binaryJosepus(
      safeNumberOfPerson
    )}`;
    setAnswer(binaryAns);
    console.log(
      "Recursive:",
      safeNumberOfPerson,
      josephus(setDeadpool, 1, safeNumberOfPerson)
    );
    console.log("Binary: ", binaryAns);
  }, [safeNumberOfPerson]);

  return (
    <>
      <Canvas numberOfPerson={safeNumberOfPerson} deadpool={deadpool} />
      <Input
        value={numberOfPerson}
        setValue={setNumberOfPerson}
        answer={answer}
      />
    </>
  );
}

export default App;
