import './ProgressBar.scss';

type ProgressBarProps = {
  progressPercentage: number;
  height: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progressPercentage, height }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${progressPercentage}%` , height}}
      />
    </div>
  );
}

export default ProgressBar;