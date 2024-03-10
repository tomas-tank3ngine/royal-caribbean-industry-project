import "./QuizModal.scss";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import QuizImages from "../QuizImageHolder/QuizImageHolder";
import StepProgressBar from "../ProgressBar/ProgressBar";

function QuizModal() {
  const totalQuestions = 4;
  const questions = [
    "Which animal represents your cruise personality?",
    "It's dinner time and you're starving! Which meal looks the tastiest?",
    "What is your favorite color?",
    "It's 9pm, how would you like to spend your evening?",
  ];

  // Keeps track of which question the user is on - starts on the first question
  const [currentQuestion, setCurrentQuestion] = useState(1);

  // Keeps track of the active option
  const [activeOption, setActiveOption] = useState(null);

  const [answerMemory, setAnswerMemory] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
  });

  // Used by JSX to know which images to use depending on the question
  // Images are set in useEffect below
  const [optionImages, setOptionImages] = useState({});

  // Set the desired images depending on the current question
  useEffect(() => {
    if (currentQuestion === 1) {
      setOptionImages({
        a: QuizImages().whale,
        b: QuizImages().seal,
        c: QuizImages().turtle,
        d: QuizImages().dolphin,
      });
    }
    if (currentQuestion === 2) {
      setOptionImages({
        a: QuizImages().pizza,
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
        a: QuizImages().bed,
        b: QuizImages().stargaze,
        c: QuizImages().party,
        d: QuizImages().midnightDip,
      });
    }
  }, [currentQuestion]);

  const handleOptionSelected = (event, imageIdentifier) => {
    // Record the selected answer in answerMemory
    setAnswerMemory((prevAnswerMemory) => ({
      ...prevAnswerMemory,
      [getQuestionKey(currentQuestion)]: imageIdentifier,
    }));

    // Set the active option
    setActiveOption(imageIdentifier);
  };

  const navigate = useNavigate();

  const handleContinue = (event) => {
    // Increment the current question and reset the active option
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setActiveOption(null);
    } else {
      console.log(answerMemory);
      navigate("/Loading");
      setTimeout(() => {
        navigate("/packages");
      }, 4000);
    }
  };

  // Helper function generates key for answerMemory based on currentQuestion
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
          <Link to="/" className="close-modal__button">X</Link>
        </section>
        <section className="progress-bar">
          {/* Use currentQuestion to help with progress bar */}
          <StepProgressBar
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
          />
        </section>

        <section className="quiz-text">
          <h2 className="quiz-text__heading">
            What cruise personality are you?
          </h2>
          <h1 className="quiz-text__prompt">
            {questions[currentQuestion - 1]}
          </h1>
        </section>

        <section className="quiz-content">
          <section className="quiz-options">
            <button
              className={`quiz-option ${
                activeOption === "a" ? "active-option" : ""
              }`}
              onClick={(event) => handleOptionSelected(event, "a")}
            >
              <img
                src={optionImages.a}
                alt={`${optionImages.a}`}
                className="quiz-option__image"
              />
            </button>

            <button
              className={`quiz-option ${
                activeOption === "b" ? "active-option" : ""
              }`}
              onClick={(event) => handleOptionSelected(event, "b")}
            >
              <img
                src={optionImages.b}
                alt={`${optionImages.b}`}
                className="quiz-option__image"
              />
            </button>

            <button
              className={`quiz-option ${
                activeOption === "c" ? "active-option" : ""
              }`}
              onClick={(event) => handleOptionSelected(event, "c")}
            >
              <img
                src={optionImages.c}
                alt={`${optionImages.c}`}
                className="quiz-option__image"
              />
            </button>

            <button
              className={`quiz-option ${
                activeOption === "d" ? "active-option" : ""
              }`}
              onClick={(event) => handleOptionSelected(event, "d")}
            >
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
