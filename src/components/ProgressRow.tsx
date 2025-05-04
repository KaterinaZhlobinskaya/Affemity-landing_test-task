import React from 'react';
import ProgressBar from './common/ProgressBar/ProgressBar';
import '../styles/ProgressRow.scss';

type ProgressRowProps = {
  title: string;
  value: number;
};

const ProgressRow: React.FC<ProgressRowProps> = ({ title, value }) => (
  <div className="progress-row">
    <div className="progress-row__head">
      <span>{title}</span>
      <span className='progress-row__percent'>{Math.round(value)}%</span>
    </div>
    <ProgressBar progressPercentage={value} height={'1.4rem'} />
  </div>
);

export default ProgressRow;