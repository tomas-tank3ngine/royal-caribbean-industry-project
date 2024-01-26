import "./QuizModal.scss";
// import "../../styles/partials/_buttons.scss";
import { useEffect, useState } from "react";
import QuizImages from "../QuizImageHolder/QuizImageHolder";

function QuizModal() {
  const totalQuestions = 4;
  let [currentQuestion, setCurrentQuestion] = useState(1);
  const [optionImages, setOptionImages] = useState({});
  //   const [activeStatus, setActiveStatus] = useState("");

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
        a: QuizImages().seal,
        b: QuizImages().seal,
        c: QuizImages().seal,
        d: QuizImages().seal,
      });
    }
    if (currentQuestion === 3) {
      setOptionImages({
        a: QuizImages().turtle,
        b: QuizImages().turtle,
        c: QuizImages().turtle,
        d: QuizImages().turtle,
      });
    }
    if (currentQuestion === 4) {
      setOptionImages({
        a: QuizImages().whale,
        b: QuizImages().whale,
        c: QuizImages().whale,
        d: QuizImages().whale,
      });
    }
  }, [currentQuestion]);

  const handleOptionSelected = (event) => {
    // Get the clicked button's index
    const buttons = Array.from(event.currentTarget.parentNode.children);
    const index = buttons.indexOf(event.currentTarget);

    // Set all buttons to inactive
    buttons.forEach((button, i) => {
      button.classList.remove("active-option");
      if (i === index) {
        // Set the clicked button to active
        button.classList.add("active-option");
      }
    });
  };

  const handleContinue = (event) => {
    if (currentQuestion <= totalQuestions){
        setCurrentQuestion(currentQuestion + 1)
    }
  };

  return (
    <section className="quiz-modal__wrapper">
      <section className="quiz-modal">
        <section className="close-modal">
          <button className="close-modal__button">X</button>
        </section>
        <section className="progress-bar">
          {/* NO IDEA */}
          PROGRESS BAR
        </section>

        <section className="quiz-text">
          <h2 className="quiz-text__heading">
            What cruise personality are you?
          </h2>
          <h1 className="quiz-text__prompt">Choose your spirit animal</h1>
        </section>

        <section className="quiz-content">
          <section className="quiz-options">
            <button className={`quiz-option`} onClick={handleOptionSelected}>
              <img
                src={optionImages.a}
                alt={`${optionImages.a}`}
                className="quiz-option__image"
              />
            </button>

            <button className={`quiz-option`} onClick={handleOptionSelected}>
              <img
                src={optionImages.b}
                alt={`${optionImages.b}`}
                className="quiz-option__image"
              />
            </button>

            <button className={`quiz-option`} onClick={handleOptionSelected}>
              <img
                src={optionImages.c}
                alt={`${optionImages.c}`}
                className="quiz-option__image"
              />
            </button>

            <button className={`quiz-option`} onClick={handleOptionSelected}>
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
