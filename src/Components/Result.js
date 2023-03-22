import React from "react";

import { useGlobalContext } from "./Context";
import { useNavigate } from "react-router-dom";
import { PlayCircleOutlined } from "@ant-design/icons";
import ResultRange from "./ResultRange";
const Result = () => {
  const navigate = useNavigate();
  const { correct, setIsModalOpen, questions, setCorrect, setIndex } =
    useGlobalContext();

  const handleOk = () => {
    setIsModalOpen(false);
    setCorrect(0);
    setIndex(0);
    navigate("/");
  };

  const range = (correct / questions.length) * 100;

  return (
    <>
      <div className="section result_section">
        <div className="container result_container">
          <h1>Your result</h1>
          <div className="results_divide">
            <ResultRange score={range} />
            <div className="left_divide">
              {" "}
              <div className="result_score green">
                {" "}
                <p>
                  {" "}
                  {correct}{" "}
                  <span style={{ opacity: "0.7" }}>Correct Answers</span>
                </p>
              </div>
              <div className="result_score red">
                <p>
                  {" "}
                  {questions.length - correct}{" "}
                  <span style={{ opacity: "0.7" }}>incorrect Answers</span>
                </p>{" "}
              </div>
              <button style={{ marginTop: "50px" }} onClick={handleOk}>
                Start again
                {""} <PlayCircleOutlined />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
