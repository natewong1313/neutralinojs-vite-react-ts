import { useEffect } from "react";
import { filesystem } from "@neutralinojs/lib";

function App() {
  useEffect(() => {
    filesystem
      .readDirectory("./")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Vite + React + Neutralinojs</h1>
    </div>
  );
}

export default App;
