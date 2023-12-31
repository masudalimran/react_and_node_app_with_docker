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
  const [loadingBackend, setLoadingBackend] = useState<boolean>(true);
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
    setLoadingBackend(true);
    connectToBackend();
    setTimeout(() => {
      setLoadingBackend(false);
    }, 3000);
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
      <h2>
        {loadingBackend ? "Connecting To " : "Connected With "}Backend (
        {loadingBackend ? "..." : dataFromBackend.length} data found)
      </h2>
      <div
        style={{
          display: "flex",
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
      {loadingBackend ? (
        <div style={{ height: "500px" }}>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div style={{ height: "500px", overflowY: "scroll" }}>
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
                  <p
                    style={{
                      backgroundColor: "white",
                      borderRadius: ".25rem",
                      padding: ".5rem",
                      color: "black",
                    }}
                  >
                    {data.age}
                  </p>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default App;
