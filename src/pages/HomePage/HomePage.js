import { useState, useEffect } from "react";
import "./HomePage.scss";
import homePage from "../../assets/images/homepage.png";
import Modal from "../../components/Modal/Modal";
// import QuizModal from "../../components/QuizModal/QuizModal";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="background">
        <img className="background__image" src={homePage} alt="home-page" />
      </div>
      {showModal && (
        <Modal
          onClosed={() => {
            setShowModal(false);
          }}
        />
      )}
    </>
  );
};

export default HomePage;
