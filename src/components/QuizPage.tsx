import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EmailScreen from "./EmailScreen";
import QuizScreen from "./QuizScreen";

type QuizPageProps = {
  goalText: string;
  options: string[][];
};

const QuizPage: React.FC<QuizPageProps> = ({ goalText, options }) => {
  const navigate = useNavigate();
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[][]>(
    Array(options.length)
      .fill([])
      .map(() => [])
  );
  const [showEmailScreen, setShowEmailScreen] = useState(false);
  const currentOptions = options[stepIndex];
  const currentOption = selectedOptions[stepIndex];

  const toggleOption = (option: string) => {
    const updatedGroup = currentOption.includes(option)
      ? currentOption.filter((s) => s !== option)
      : [...currentOption, option];

    const updatedAll = [...selectedOptions];
    updatedAll[stepIndex] = updatedGroup;
    setSelectedOptions(updatedAll);
  };

  const handleContinue = () => {
    if (currentOption.length === 0) return;

    if (stepIndex < options.length - 1) {
      setStepIndex((prev) => prev + 1);
    } else {
      setShowEmailScreen(true);
    }
  };

  const handleBack = () => {
    if (stepIndex === 0) {
      navigate("/");
    } else {
      const updatedAll = [...selectedOptions];
      updatedAll[stepIndex] = [];
      setSelectedOptions(updatedAll);
      setStepIndex((prev) => prev - 1);
    }
  };

  if (showEmailScreen) {
    return <EmailScreen selectedSkills={selectedOptions} />;
  }
  return (
    <QuizScreen
      goalText={goalText}
      options={options}
      stepIndex={stepIndex}
      currentOptions={currentOptions}
      currentOption={currentOption}
      toggleOption={toggleOption}
      handleContinue={handleContinue}
      handleBack={handleBack}
    />
  );
};

export default QuizPage;
