import "./PackageSelections.scss";
import PackageOption from "../../components/PackageOption/PackageOption";
import bahamasParadise from "../../assets/images/nassau-bahamas-paradise-island-lighthouse.webp";
import easternCaribbean from "../../assets/images/easternCaribbean.png";
import { Link } from "react-router-dom";

const PackageSelections = () => {
  const cruises = [
    {
      image: bahamasParadise,
      alt: "small island with lighhouse surrounded by ocean",
      info: "Granduer of the Seas",
      overnights: 3,
      name: "Bahamas Cruise",
      cost: 342,
    },
    {
      image: easternCaribbean,
      alt: "birds eye view of the caribbean beach",
      info: "Independance of the Seas",
      overnights: 4,
      name: "Eastern Caribbean Cruise",
      cost: 342,
    },
  ];
  return (
    <section className="package-sections">
      <section className="package-sections__close">
          <Link to="/" className="close-button">X</Link>
        </section>
      <h2 className="package-sections__title">
        Cruise packages we think you'd like
      </h2>
      <p className="package-sections__copy">
        Based off your selected answers we noticed you might be into these
        cruises
      </p>
      <div className="package-sections__options">
        <ul className="package-sections__cruises">
          {cruises.map((cruise) => (
            <PackageOption cruise={cruise} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PackageSelections;
