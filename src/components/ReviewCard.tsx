import "../styles/ReviewCard.scss";
import Star from './Star';

type ReviewCardProps = {
  feedback: {
    name: string;
    text: string;
    rating: number;
  };
};

const ReviewCard: React.FC<ReviewCardProps> = ({ feedback }) => {
  const safe = Math.max(0, Math.min(5, feedback.rating));
  return (
    <article className="review-card">
      <header className="review-card__header">
        <span className="review-card__name">{feedback.name}</span>

        <div className="review-card__stars">
          {Array.from({ length: 5 }, (_, i) => {
            const fill = Math.max(0, Math.min(1, safe - i)) * 100;
            return <Star key={i} fill={fill} />;
          })}
          <span className="review-card__score">{safe.toFixed(1)}</span>
        </div>
      </header>

      <p className="review-card__text">{feedback.text}</p>
    </article>
  );
};

export default ReviewCard;
