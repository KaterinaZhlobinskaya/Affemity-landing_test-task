import "../styles/QuizScreen.scss";
import Quiz from "./Quiz";
import logo from '../assets/images/logo.svg';
import backButtom from '../assets/images/back-button.svg';

type QuizScreenProps = {
  goalText: string;
  options: string[][];
  stepIndex: number;
  currentOptions: string[];
  currentOption: string[];
  toggleOption: (option: string) => void;
  handleContinue: () => void;
  handleBack: () => void;
};

const QuizScreen: React.FC<QuizScreenProps> = ({
  goalText,
  options,
  stepIndex,
  currentOptions,
  currentOption,
  toggleOption,
  handleContinue,
  handleBack,
}) => {
  const progressPercentage = ((stepIndex + 1) / options.length) * 100;

  return (
    <div className="quiz-screen">
      <header className="quiz-screen__header">
        <div className="quiz-screen__progress-bar">
          <div
            className="quiz-screen__progress-bar-fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <span className="quiz-screen__nav-bar">
          <button onClick={handleBack} className="quiz-screen__back-btn">
            <img src={backButtom} alt="Back Button" />
          </button>
          <img
            src={logo}
            alt="Affinity logo"
            className="quiz-screen__logo"
          />
          <span className="quiz-screen__progress">
            <span className="quiz-screen__progress-current">
              {stepIndex + 1}
            </span>
            <span className="quiz-screen__progress-separator">/</span>
            <span className="quiz-screen__progress-total">
              {options.length}
            </span>
          </span>
        </span>
        <span className="quiz-screen__texts">
          <h1 className="quiz-screen__title">
            What would you like to learn?
          </h1>
          <p className="quiz-screen__subtitle">{goalText}</p>
        </span>
      </header>

      <main className="quiz-screen__content">
        <div className="quiz-screen__options-list">
          <Quiz
            options={currentOptions}
            selected={currentOption}
            onToggle={toggleOption}
          />
        </div>

        <footer className="quiz-screen__footer">
          <button
            className="quiz-screen__continue-btn"
            onClick={handleContinue}
            disabled={currentOption.length === 0}
          >
            Continue
          </button>
        </footer>
      </main>
    </div>
  );
};

export default QuizScreen;
