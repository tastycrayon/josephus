import { useState, useEffect } from "react";
import Canvas from "./components/Canvas";
import Input from "./components/Input";
import { answer, josephus } from "./Helper/helper";

function App() {
  const [numberOfPerson, setNumberOfPerson] = useState(10);
  const [deadpool, setDeadpool] = useState<number[]>([]);

  const safeNumberOfPerson = numberOfPerson || 1;
  useEffect(() => {
    console.log("answer", answer(safeNumberOfPerson));
    console.log("josephus", josephus(setDeadpool, 1, safeNumberOfPerson));
  }, [safeNumberOfPerson]);

  return (
    <>
      <Canvas numberOfPerson={safeNumberOfPerson} deadpool={deadpool} />
      <Input value={numberOfPerson} setValue={setNumberOfPerson} />
    </>
  );
}

export default App;
