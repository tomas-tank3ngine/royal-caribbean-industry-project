import "./QuizModal.scss";
// import "../../styles/partials/_buttons.scss";
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
          <section className="progress-bar">{/* NO IDEA */}
            PROGRESS BAR          
          </section>

            <section className="quiz-text">
                <h2 className="quiz-text__heading">What cruise personality are you?</h2>
                <h1 className="quiz-text__prompt">Choose your spirit animal</h1>
            </section>

          <section className="quiz-content">            
            <section className="quiz-options">

                <section className="quiz-options__container">
                    <button className="quiz-option">
                        <img src="https://via.placeholder.com/40x60/0bf/fff&text=A" alt="" className="quiz-option__image" />
                    </button>

                    <button className="quiz-option">
                        <img src="https://via.placeholder.com/40x60/0bf/fff&text=B" alt="" className="quiz-option__image" />
                    </button>                    
                </section>

                <section className="quiz-options__container">
                    <button className="quiz-option">
                        <img src="https://via.placeholder.com/40x60/0bf/fff&text=C" alt="" className="quiz-option__image" />
                    </button>

                    <button className="quiz-option">
                        <img src="https://via.placeholder.com/40x60/0bf/fff&text=D" alt="" className="quiz-option__image" />
                    </button>
                </section>
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
