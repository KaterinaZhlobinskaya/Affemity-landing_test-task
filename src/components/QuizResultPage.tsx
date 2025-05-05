import { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import ProgressRow from "./ProgressRow";
import ModalWindow, { openModal } from "./common/ModalWindow/ModalWindow";
import "../styles/QuizResultPage.scss";
import { feedbackData } from '../utils/MockData'
import ReviewCard from "./ReviewCard";

const questions = [
  "Have you tried changing your love life before?",
  "Do you prefer to have expert guidance?",
  "Do you lack consistency?",
  "Are you open to self‑improvement?",
];

const data = [
  { title: "Setting goals", progressPercentage: 70 },
  { title: "Adapting growth areas", progressPercentage: 24 },
  { title: "Picking content", progressPercentage: 98 },
  { title: "Prioritizing challanges", progressPercentage: 5 },
];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const QuizResultPage = () => {
  const [animatedPercentages, setAnimatedPercentages] = useState<number[]>(
    new Array(data.length).fill(0)
  );
  const [activeBarIndex, setActiveBarIndex] = useState(0);

  useEffect(() => {
    (async () => {
      for (let i = 0; i < animatedPercentages.length; i++) {
        setActiveBarIndex(i);
        for (let j = 0; j <= data[i].progressPercentage; j++) {
          await sleep(16);
          setAnimatedPercentages((prev) => {
            const newArr = [...prev];
            newArr[i] = j;
            return newArr;
          });
          if (j === 50) {
            await openModal();
          }
        }
      }
    })();
  }, []);

  return (
    <div className="quiz-result-page">
      <header className="quiz-result-page__header">
        <img
          src={logo}
          alt="Affemity logo"
          className="quiz-result-page__logo"
        />

        <h1 className="quiz-result-page__title">
          We are crafting your personalized plan
        </h1>
      </header>

      <main className="quiz-result-page__content">
        {data.map((value, i) => (
          <ProgressRow
            key={value.title}
            title={value.title}
            value={animatedPercentages[i]}
          />
        ))}

        <ModalWindow question={questions[activeBarIndex]} />
      </main>

      <footer className="quiz-result-page__footer">
        {feedbackData.map((feedback, i) => {
          return (
            <ReviewCard key={i} feedback={feedback} />
          )
        })}
      </footer>
    </div>
  );
};

export default QuizResultPage;
