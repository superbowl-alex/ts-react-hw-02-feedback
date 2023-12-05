import { FC } from 'react';
import { StatList, StatItem } from './Statistics.styled';

interface StatisticsProps {
  good: number;
  neutral: number;
  bad: number;
  total: () => number;
  positivePercentage: () => number;
}

const Statistics: FC<StatisticsProps> = ({
   good,
   neutral,
   bad,
   total,
   positivePercentage,
   }: StatisticsProps) => {
  return (
    <StatList>
      <StatItem>Good: {good}</StatItem>
      <StatItem>Neutral: {neutral}</StatItem>
      <StatItem>Bad: {bad}</StatItem>
      <StatItem>Total: {total()}</StatItem>
      <StatItem>Positive feedback: {positivePercentage()}%</StatItem>
    </StatList>
  );
};

export default Statistics;
