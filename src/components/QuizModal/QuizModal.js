import "./QuizModal.scss";
import { useEffect, useState } from "react";
import QuizImages from "../QuizImageHolder/QuizImageHolder";
import StepProgressBar from "../ProgressBar/ProgressBar";

function QuizModal() {
  const totalQuestions = 4;
  const questions = [
    "Choose your spirit animal",
    "It's dinner time and you're craving food, what do you go with?!",
    "What is your favorite color?",
    "It's 9pm and you're left with these options, what are you choosing?",
  ];
  //Keeps track of which question the user is on - starts on the first question
  let [currentQuestion, setCurrentQuestion] = useState(1);

  const [answerMemory, setAnswerMemory] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
  });

  //used by JSX to know which images to use depending on the question
  //images are set in useEffect below
  const [optionImages, setOptionImages] = useState({});

  //set the desired images depending on the current question
  useEffect(() => {
    if (currentQuestion === 1) {
      setOptionImages({
        //QuizImages(). is a component imported that contains an object with all image refs
        a: QuizImages().whale,
        b: QuizImages().seal,
        c: QuizImages().turtle,
        d: QuizImages().dolphin,
      });
    }
    if (currentQuestion === 2) {
      setOptionImages({
        a: QuizImages().pizza, //replace .seal etc with final images
        b: QuizImages().salad,
        c: QuizImages().soup,
        d: QuizImages().paella,
      });
    }
    if (currentQuestion === 3) {
      setOptionImages({
        a: QuizImages().green,
        b: QuizImages().red,
        c: QuizImages().blue,
        d: QuizImages().purple,
      });
    }
    if (currentQuestion === 4) {
      setOptionImages({
        a: QuizImages().bed, //replace .seal etc with final images
        b: QuizImages().stargaze,
        c: QuizImages().party,
        d: QuizImages().midnightDip,
      });
    }
  }, [currentQuestion]);

  const handleOptionSelected = (event, imageIdentifier) => {    //imageIdentifier comes from the button's onClick, can be a-d
    const buttons = Array.from(event.currentTarget.parentNode.children); // make an array of all 'option' buttons
    const index = buttons.indexOf(event.currentTarget); // Get the clicked button's index

    // Set all buttons to inactive
    buttons.forEach((button, i) => {
      button.classList.remove("active-option");
      if (i === index) {
        // Set the clicked button to active
        button.classList.add("active-option");

        //Record the selected answer in answerMemory
        setAnswerMemory((prevAnswerMemory) => ({
          ...prevAnswerMemory,
          [getQuestionKey(currentQuestion)]: imageIdentifier,
        }));

        
      }
    });
  };

  const handleContinue = (event) => {
  
    // Increment the current question
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log(answerMemory);
    }
  };

  //Helper function generates key for answerMemory based on currentQuestion
  const getQuestionKey = (questionNumber) => {
    return questionNumber === 1
      ? "one"
      : questionNumber === 2
      ? "two"
      : questionNumber === 3
      ? "three"
      : "four";
  };

  return (
    <section className="quiz-modal__wrapper">
      <section className="quiz-modal">
        <section className="close-modal">
          <button className="close-modal__button">X</button>
        </section>
        <section className="progress-bar">
          {/* Use currentQuestion to help with progress bar */}
          <StepProgressBar currentQuestion={currentQuestion} totalQuestions={totalQuestions}/>
          {`${answerMemory.one}`}
        </section>

        <section className="quiz-text">
          <h2 className="quiz-text__heading">
            What cruise personality are you?
          </h2>
          <h1 className="quiz-text__prompt">{questions[currentQuestion - 1]}</h1>
        </section>

        <section className="quiz-content">
          <section className="quiz-options">
            <button className={`quiz-option`} onClick={(event) => handleOptionSelected(event, 'a')}>
              <img
                src={optionImages.a}
                alt={`${optionImages.a}`}
                className="quiz-option__image"
              />
            </button>

            <button className={`quiz-option`} onClick={(event) => handleOptionSelected(event, 'b')}>
              <img
                src={optionImages.b}
                alt={`${optionImages.b}`}
                className="quiz-option__image"
              />
            </button>

            <button className={`quiz-option`} onClick={(event) => handleOptionSelected(event, 'c')}>
              <img
                src={optionImages.c}
                alt={`${optionImages.c}`}
                className="quiz-option__image"
              />
            </button>

            <button className={`quiz-option`} onClick={(event) => handleOptionSelected(event, 'd')}>
              <img
                src={optionImages.d}
                alt={`${optionImages.d}`}
                className="quiz-option__image"
              />
            </button>
          </section>
        </section>

        <div className="continue-quiz">
          <button className="continue-quiz__button" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </section>
    </section>
  );
}

export default QuizModal;
