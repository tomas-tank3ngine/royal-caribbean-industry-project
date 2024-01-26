import "./QuizModal.scss";
// import "../../styles/partials/_buttons.scss";
import { useEffect, useState } from "react";

function QuizModal() {
  const [questionNum, setQuestionNum] = useState(1);
  const [activeStatus, setActiveStatus] = useState("");

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
            
              <button className={`quiz-option ${activeStatus}`} onClick={handleOptionSelected}>
                <img
                  src="https://via.placeholder.com/40x60/0bf/fff&text=A"
                  alt=""
                  className="quiz-option__image"
                />
              </button>

              <button className={`quiz-option ${activeStatus}`} onClick={handleOptionSelected}>
                <img
                  src="https://via.placeholder.com/40x60/0bf/fff&text=B"
                  alt=""
                  className="quiz-option__image"
                />
              </button>
            

            
              <button className={`quiz-option ${activeStatus}`} onClick={handleOptionSelected}>
                <img
                  src="https://via.placeholder.com/40x60/0bf/fff&text=C"
                  alt=""
                  className="quiz-option__image"
                />
              </button>

              <button className={`quiz-option ${activeStatus}`} onClick={handleOptionSelected}>
                <img
                  src="https://via.placeholder.com/40x60/0bf/fff&text=D"
                  alt=""
                  className="quiz-option__image"
                />
              </button>
            
          </section>
        </section>

        <div className="continue-quiz">
          <button className="continue-quiz__button">Continue</button>
        </div>
      </section>
    </section>
  );
}

export default QuizModal;
