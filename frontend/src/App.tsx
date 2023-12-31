import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

type ResponseDataType = {
  name: string;
  age: number;
};

function App() {
  const [dataFromBackend, setDataFromBackend] = useState<ResponseDataType[]>(
    []
  );

  const connectToBackend = () => {
    axios
      .get("http://localhost:3001/")
      .then((response) => setDataFromBackend(response.data))
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    connectToBackend();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Built With Docker</h1>
      <div
        style={{
          display: "flex",
          // border: "1px solid black",
          padding: "1rem 2rem",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <p style={{ fontWeight: 900 }}>Name</p>
        <p style={{ fontWeight: 900 }}>Age</p>
      </div>
      <div style={{ maxHeight: "500px", overflowY: "scroll" }}>
        {dataFromBackend.length > 0 &&
          dataFromBackend.map((data, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                border: "1px solid white",
                padding: "1rem 2rem",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <p>{data.name}</p>
              <p>{data.age}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
