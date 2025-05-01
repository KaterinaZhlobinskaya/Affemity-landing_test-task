// import "../styles/SkillsScreen.scss";
import "../styles/Quiz.scss";

type QuizProps = {
  options: string[];
  selected: string[];
  onToggle: (skill: string) => void;
};

const Quiz: React.FC<QuizProps> = ({ options, selected, onToggle }) => {
  return (
    <div className="quiz">
      {options.map((option, index) => {
        const isSelected = selected.includes(option);

        return (
          <button
            key={option}
            className={`quiz__item ${isSelected ? "selected" : ""}`}
            onClick={() => onToggle(option)}
          >
            <span className="quiz__option-image">
              <img src={`/images/emoji${index + 1}.svg`} alt="Skill" />
            </span>
            <span className="quiz__label">{option}</span>
            <span className="quiz__checkbox">
              {isSelected && (
                <img src="/images/selected-icon.svg" alt="choosed" />
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Quiz;
