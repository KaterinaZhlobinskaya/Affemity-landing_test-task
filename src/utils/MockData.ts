export const goalText1 = "Skills to build a close connection";
export const goalText2 = "Skills to create emotional attraction";

const getQuiz = (index: number) =>
  [...new Array(Math.floor(Math.random() * 5) + 1)].map(
    (_, oIndex) => `Skill1-${oIndex}-goal-${index}`
  );

export const SKILLS1 = [...new Array(5)].map(() => getQuiz(1))
export const SKILLS2 = [...new Array(10)].map(() => getQuiz(2))
