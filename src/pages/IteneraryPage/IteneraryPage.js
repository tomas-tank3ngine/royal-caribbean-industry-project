import cruiseShip from "../../assets/images/boat-nobg.png";
import "./IteneraryPage.scss";
import { Link } from "react-router-dom";

const IteneraryPage = () => {
  return (
    <>
      <main className="boat">
        <div className="boat__overlay"></div>
        <div className="boat__container">
          <div className="boat__headings--container">
            <Link to="/packages">
              <button className="boat__close-button">X</button>
            </Link>
            <h1 className="boat__heading">Bahamas Cruise</h1>
            <h3 className="boat__nights">3 NIGHTS</h3>
          </div>
          <div className="boat__image--container display-none-tablet">
            <img
              className="boat__image"
              src={cruiseShip}
              alt="cruise ship"
            />
            <p className="boat__image-text">Grandeur of the Seas</p>
          </div>
          <div className="boat__content--container">
            <p className="boat__content">
              <span className="boat__content--span">Roundtrip from: </span>Fort
              Lauderdale, Florida
            </p>
            <p className="boat__content">
              <span className="boat__content--span">Visiting: </span>Fort
              Lauderdale, Florida - Nassau, Bahamas - Fort Lauderdale, Florida
            </p>
          </div>
          <div className="boat__flex--container">
            <div className="boat__booking--container">
              <p className="boat__booking">
                Book in the next 24 hours and get free wi-fi for a day
              </p>
              <button className="boat__booking--button">BOOK NOW</button>
            </div>
            <div className="boat__image--container display-none-mobile">
              <p className="boat__image-text">Grandeur of the Seas</p>
              <img
                className="boat__image"
                src={cruiseShip}
                alt="cruise ship"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default IteneraryPage;
