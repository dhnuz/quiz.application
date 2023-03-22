import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [warning, setWarning] = useState(false);

  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(true);
    const res = await axios(url).catch((err) => console.log(err));
    if (res) {
      const data = res.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };

  const nextQuestion = (a) => {
    checkAnswer(selected === a);
    if (selected) {
      setSelected("");
      setWarning(false);
      setIndex((prevIndex) => {
        const index = prevIndex + 1;

        if (index >= 10) {
          setIsModalOpen(true);

          return 0;
        } else {
          return index;
        }
      });
    } else {
      setWarning(true);
    }
  };

  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldAnswer) => oldAnswer + 1);
    }
  };

  const closeModal = () => {};

  useEffect(() => {
    fetchQuestions(tempUrl);
  }, []);

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        setIndex,
        correct,
        setCorrect,
        error,
        isModalOpen,
        nextQuestion,
        checkAnswer,
        closeModal,
        setIsModalOpen,
        setWaiting,
        selected,
        setSelected,
        warning,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
