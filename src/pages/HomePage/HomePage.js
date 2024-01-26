import "./HomePage.scss";
import homePage from "../../assets/images/homepage.png";

const HomePage = () => {
  return (
    <div className="background">
      <img className="background__image" src={homePage} alt="home-page" />
    </div>
  );
};

export default HomePage;
