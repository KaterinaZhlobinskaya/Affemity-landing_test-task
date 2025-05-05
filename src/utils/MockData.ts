export const goalText1 = "Skills to build a close connection";
export const goalText2 = "Skills to create emotional attraction";

const getQuiz = (index: number) =>
  [...new Array(Math.floor(Math.random() * 5) + 1)].map(
    (_, oIndex) => `Skill1-${oIndex}-goal-${index}`
  );

export const SKILLS1 = [...new Array(5)].map(() => getQuiz(1))
export const SKILLS2 = [...new Array(10)].map(() => getQuiz(2))

export const feedbackData = [
  {
    name: 'Clara',
    text: 'I’m totally digging this plan! It’s all about understanding men and their psychology, rather than just guessing what’s going on in their heads. And it’s not just about saying th...',
    rating: 5,
  },
  {
    name: 'Stephanie',
    text: 'Okay, I gotta admit, I’m a bit shy when it comes to guys. But this course breaks things down into easy steps and gives you the confidence to put yourself out there. I even ...',
    rating: 4.8,
  },
  {
    name: 'Rosalee',
    text: 'I gotta say, this course is a game-changer! It’s chock-full of amazing sentences to send or tell to your guy, and the insights into the way men think and act are totally worth the pric...',
    rating: 4.6,
  },
  {
    name: 'Mavka',
    text: 'Your course impressed and inpsire me!',
    rating: 3.9,
  }
]
