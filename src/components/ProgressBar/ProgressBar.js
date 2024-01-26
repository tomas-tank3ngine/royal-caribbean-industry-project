import React from "react";
import whaleIcon from "../../assets/images/icons/whaleIcon.png"
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

function StepProgressBar({ currentQuestion, totalQuestions }){
  const stepPercentage = (currentQuestion / totalQuestions) * 100;
    return (
      <ProgressBar
        percent={stepPercentage}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished, index }) => (
            <img
                alt="pikachu icon"
              style={{ filter: `grayscale(indexedStep ${accomplished ? "accomplished" : null}}%)` }}
              width="30"
              src={whaleIcon}
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
            alt="pikachu icon"
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
            alt="pikachu icon"
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
            alt="pikachu icon"
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
            />
          )}
        </Step>
      </ProgressBar>
    );
  }

export default StepProgressBar