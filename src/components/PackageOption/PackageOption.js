import "./PackageOption.scss";
import { Link } from "react-router-dom";

import littleShip from "../../assets/images/little-ship.svg";

const PackageOption = ({ cruise }) => {
  return (
    <>
      {cruise && 
        <li className="package-option">
          <img
            src={cruise.image}
            alt={`${cruise.alt}`}
            
            className="package-option__img"
          />
          <div className="package-option__copy">
            <h4 className="package-option__ship-info">
              <img src={littleShip} className="package-option__icon" alt="package option"/>{" "}
              {cruise.info}
            </h4>
            <p className="package-option__overnights">{cruise.overnights} NIGHTS</p>
            <h3 className="package-option__cruise-name">{cruise.name}</h3>
            <h2 className="package-option__cost">${cruise.cost}</h2>
            <button className="package-option__button">
              <Link className="package-option__link" to={"/itenerary"}>
                View Details
              </Link>
            </button>
          </div>
        </li>
      }
    </>
  );
};

export default PackageOption;
