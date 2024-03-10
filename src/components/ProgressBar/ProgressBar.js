import React from "react";
import whaleIcon from "../../assets/images/icons/whaleIcon.png";
import blueWhale from "../../assets/images/icons/blueWhaleIcon.png";
import "react-step-progress-bar/styles.css";
import "./ProgressBar.scss";
import { ProgressBar, Step } from "react-step-progress-bar";

function StepProgressBar({ currentQuestion, totalQuestions }) {
  const stepPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="progress-bar-container">
      <div className="whale-container" style={{ left: `${stepPercentage}%` }}>
        <img className="progress__img" alt="whale" src={currentQuestion % 2 === 0 ? whaleIcon : blueWhale} />
      </div>
      {[...Array(totalQuestions)].map((_, index) => (
        <Step key={index} transition="scale">
          {({ accomplished }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
              style={{ width: `${100 / totalQuestions}%` }}
            ></div>
          )}
        </Step>
      ))}
      <ProgressBar percent={stepPercentage} />
    </div>
  );
}

export default StepProgressBar;
