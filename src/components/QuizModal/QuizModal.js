import "./QuizModal.scss";
import "../../styles/partials/_buttons.scss";
import { useEffect, useState } from "react";

function QuizModal() {
  const [selectedOption, setSelectedOption] = useState({})

  useEffect(()=>{

  }, [])  
    const handleRadioChange = (event) =>{

  }
  
  
    return (
      <section className="quiz-modal__wrapper">
        <section className="quiz-modal">
          <section className="close-modal">
            <button className="close-modal__button">X</button>
          </section>
          <section className="progress-bar">{/* NO IDEA */}</section>

          <section className="quiz-content">
            <h2 className="quiz-content__heading">
              What cruise personality are you?
            </h2>
            <h1 className="quiz-content__prompt">
              Choose your spirit animal
            </h1>
            <section className="quiz-options">
              <button className="quiz-option">
                <img src="https://via.placeholder.com/40x60/0bf/fff&text=A" alt="" className="quiz-option__image" />
              </button>

              <button className="quiz-option">
                <img src="https://via.placeholder.com/40x60/0bf/fff&text=A" alt="" className="quiz-option__image" />
              </button>

              <button className="quiz-option">
                <img src="https://via.placeholder.com/40x60/0bf/fff&text=A" alt="" className="quiz-option__image" />
              </button>

              <button className="quiz-option">
                <img src="https://via.placeholder.com/40x60/0bf/fff&text=A" alt="" className="quiz-option__image" />
              </button>


            </section>


            {/* <form className="quiz-form">
            <label className="quiz-option">
              <input className="quiz-option__input" type="radio" name="quiz-options" value="A" checked />
              <img
                className="quiz-option__image"
                src="https://via.placeholder.com/40x60/0bf/fff&text=A"
                alt="Option 1"
              />
            </label>

            <label>
              <input type="radio" name="quiz-options" value="B" />
              <img
                src="https://via.placeholder.com/40x60/b0f/fff&text=B"
                alt="Option 2"
              />
            </label>

            <label className="quiz-option">
              <input className="quiz-option__input" type="radio" name="quiz-options" value="C" checked />
              <img
                className="quiz-option__image"
                src="https://via.placeholder.com/40x60/6nf/fff&text=C"
                alt="Option 3"
              />
            </label>

            <label>
              <input type="radio" name="quiz-options" value="D" />
              <img
                src="https://via.placeholder.com/40x60/00f/fff&text=D"
                alt="Option 2"
              />
            </label>
          </form> */}
          </section>

          <div className="continue-quiz">
            <button className="continue-quiz__button">Continue</button>
          </div>
        </section>
      </section>
    );
}

export default QuizModal;
