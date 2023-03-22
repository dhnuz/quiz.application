import React from "react";
import { useGlobalContext } from "./Context";
import HomePage from "./HomePage";
import Loading from "./Loading";
import Result from "./Result";
import Score from "./Score";
import { ArrowRightOutlined } from "@ant-design/icons";

const Quiz = () => {
  const {
    selected,
    setSelected,
    waiting,
    loading,
    questions,
    index,
    warning,
    nextQuestion,
    isModalOpen,
  } = useGlobalContext();

  console.log(questions);
  if (waiting) {
    return <HomePage />;
  }
  if (loading) {
    return <Loading />;
  }
  // setQuestions((prev) => [
  //   ...prev,
  //   {
  //     question: "Which year has highest  Employee and Net Sales revenue",
  //     incorrect_answers: ["2017", "2018", ",2019"],
  //     correct_answer: "2020",
  //     image: imageQ,
  //   },
  // ]);

  const { question, incorrect_answers, correct_answer } = questions[index];

  const answers = [...incorrect_answers, correct_answer];

  const optionHandler = (a) => {
    setSelected(a);
  };

  return (
    <>
      {" "}
      {isModalOpen ? (
        <Result />
      ) : (
        <div className="section">
          <div className="container">
            <Score />

            <h2 dangerouslySetInnerHTML={{ __html: question }} />
            {warning ? (
              <span style={{ color: "red" }}> Please select an option </span>
            ) : (
              ""
            )}
            <ul>
              {answers.map((a, i) => (
                <li
                  onClick={() => optionHandler(a)}
                  dangerouslySetInnerHTML={{ __html: a }}
                  key={i}
                  className={`${selected === a ? "active" : ""}`}
                />
              ))}
            </ul>
            <div className="Button">
              {" "}
              <button onClick={() => nextQuestion(correct_answer)}>
                Next <ArrowRightOutlined />{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
