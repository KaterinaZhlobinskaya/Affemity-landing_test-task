import "../styles/Quiz.scss";
import choosedIcon from "../assets/images/selected-icon.svg";
import emoji1 from "../assets/images/emoji1.svg";
import emoji2 from "../assets/images/emoji2.svg";
import emoji3 from "../assets/images/emoji3.svg";
import emoji4 from "../assets/images/emoji4.svg";
import emoji5 from "../assets/images/emoji5.svg";

const emojiImages = [emoji1, emoji2, emoji3, emoji4, emoji5];

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
              <img src={emojiImages[index]} alt="EmojiImage" />
            </span>
            <span className="quiz__label">{option}</span>
            <span className="quiz__checkbox">
              {isSelected && (
                <img src={choosedIcon} alt="ChoosedIcon" />
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Quiz;
