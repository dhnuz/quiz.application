import React from "react";
import { useGlobalContext } from "./Context";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { waiting, setWaiting } = useGlobalContext();
  const navigate = useNavigate();
  const StartHandler = () => {
    setWaiting(false);
    if (!waiting) navigate("/quiz");
  };
  return (
    <>
      {" "}
      <div className="section">
        <div className="container home_container">
          <h1>Quiz</h1>{" "}
          <ul>
            <li>1.Rule</li>
            <li>2.Rule</li>
            <li>3.Rule</li>
            <li>4.Rule</li>
            <li>5.Rule</li>
          </ul>
          <div className="Button">
            {" "}
            <button onClick={StartHandler}>Start</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
