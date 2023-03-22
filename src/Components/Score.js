import { useState, useEffect } from "react";
import { useGlobalContext } from "./Context";

const Score = () => {
  const [progress, setProgress] = useState(0);
  const { correct, index } = useGlobalContext();
  useEffect(() => {
    const percentProgress = ((index + 1) / 10) * 100;
    setProgress(percentProgress);
  }, [index]);

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-indicator">
      <svg viewBox="0 0 50 50">
        <circle
          className="progress-indicator-bg"
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="#ccc"
          strokeWidth="4"
        />
        <circle
          className="progress-indicator-progress"
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke=" rgb(21, 104, 58)"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90,25,25)"
        />
        <text
          style={{ fontSize: "18px" }}
          x="40%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {correct}
        </text>
        <text
          x="70%"
          y="60%"
          dominantBaseline="middle"
          textAnchor="middle"
          style={{ opacity: "0.3", fontSize: "8px" }}
        >
          /{10}
        </text>
      </svg>
    </div>
  );
};

export default Score;
