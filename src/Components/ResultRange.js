import React from "react";
import { useState, useEffect } from "react";

const ResultRange = ({ score }) => {
  const scoreRanges = [
    {
      minScore: 0,
      maxScore: 19,
      category: "Bad",
      bg: "#d12000",
      feedback: "You might want to brush up on your knowledge a bit more! ",
    },
    {
      minScore: 20,
      maxScore: 39,
      category: "Fair",
      bg: "#ed8d00",
      feedback:
        "You're off to a good start! Keep up the good work and keep learning",
    },
    {
      minScore: 40,
      maxScore: 59,
      category: "Good",
      bg: "#f1bc00",
      feedback: "Well done! You scored between 40-60, which is impressive. ",
    },
    {
      minScore: 60,
      maxScore: 79,
      category: "Very Good",
      bg: "#84c42b",
      feedback: "Amazing job! You scored between 60-80, which is outstanding",
    },
    {
      minScore: 80,
      maxScore: 100,
      category: "Excellent",
      bg: "#53b83a",
      feedback:
        "Wow, you nailed it! You've achieved a top score and are clearly an expert on the subject matter. ",
    },
  ];
  const [category, setCategory] = useState("");
  const [bg, setBg] = useState("#007bff");
  const [scoreResult, setScoreResult] = useState([]);
  useEffect(() => {
    const range = scoreRanges.find(
      (range) => score >= range.minScore && score <= range.maxScore
    );

    if (range) {
      setCategory(range.category);
      setBg(range.bg);
    }

    const index = scoreRanges.findIndex(
      (range) => score >= range.minScore && score <= range.maxScore
    );

    const scoreResults = scoreRanges
      .slice(0, index + 1)
      .reverse()
      .map((i) => {
        return i;
      });
    setScoreResult(scoreResults);
  }, [score]);

  return (
    <div className="score-doughnut-chart">
      <div className="chart-container">
        <svg viewBox="-5 -5 120 120">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#eee"
            strokeWidth="15"
          />

          {scoreResult.map((i, index) => {
            const percen = Math.floor((i.maxScore / 100) * 100);

            const circum = 2 * Math.PI * 45;
            const offseting = circum - (percen / 100) * circum;

            return (
              <circle
                key={Math.random()}
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke={`${i.bg}`}
                strokeWidth="15"
                strokeDasharray={circum}
                strokeDashoffset={offseting}
                transform="rotate(-90,50,50)"
              />
            );
          })}
        </svg>
        <div className="chart-content">
          <div className="chart-score" style={{ color: `${bg}` }}>
            {score}% <br />
            {category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultRange;
