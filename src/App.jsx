import { useEffect, useState } from "react";
import "./App.css";
import sound from "/cat-meow-6226.mp3";
import Axios from "axios";
function App() {
  const [catFact, setCatFact] = useState("");

  const generateFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };
  const play = () => {
    new Audio(sound).play();
  };
  // const mergeBothFuncs = generateFact.bind(this, play);
  const mergeBothFuncs = () => {
    generateFact();
    play();
  };
  useEffect(() => {
    generateFact();
  }, []);

  return (
    <>
      <div className="container">
        <button onClick={mergeBothFuncs}>Generate New Fact</button>
        <p>{catFact}</p>
      </div>
    </>
  );
}

export default App;
