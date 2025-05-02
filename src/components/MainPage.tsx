import { useNavigate } from "react-router-dom";
import "../styles/MainPage.scss";
import logo from '../assets/images/logo.svg';
import chart from "../assets/images/chart.svg";

const MainPage = () => {
  const navigate = useNavigate();

  const handleContinueConnection = () => {
    navigate("/quiz/1");
  };

  const handleContinueAttraction = () => {
    navigate("/quiz/2");
  };

  return (
    <div className="main-page">
      <header className="main-page__header">
        <img
          src={logo}
          alt="Affinity logo"
          className="main-page__logo"
        />
        <div className="main-page__texts">
          <h1 className="main-page__title">
            <span>Change your </span>
            <span className="highlight">love life</span>
          </h1>
          <p className="main-page__subtitle">
            with easy-to-use practical tips that you can apply in any situation
          </p>
        </div>
      </header>

      <main className="main-page__content">
        <div className="main-page__chart">
          <img src={chart} alt="Chart" />
        </div>
      </main>

      <footer className="main-page__footer">
        <div className="main-page__goal-section">
          <span className="main-page__question">
            What is your main goal?
          </span>
          <div className="main-page__buttons">
            <button className="option-btn" onClick={handleContinueConnection}>
              Build a close connection
            </button>
            <button className="option-btn" onClick={handleContinueAttraction}>
              Create emotional attraction
            </button>
          </div>
          <button className="main-page__other-btn" disabled>
            Other
          </button>
        </div>

        <span className="main-page__terms">
          By continuing, you agree to our Terms of Service | Privacy Policy
          <br />
          2024 © All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default MainPage;
