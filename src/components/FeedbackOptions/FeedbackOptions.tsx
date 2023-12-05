import { FC } from 'react';
import { Button } from './FeedbackOptions.styled';
import { AppState } from '../App/App';

interface FeedbackOptionsProps {
  options: (keyof AppState)[];
  onLeaveFeedback: (key: keyof AppState) => void;
}

const FeedbackOptions: FC<FeedbackOptionsProps> = ({ options, onLeaveFeedback }: FeedbackOptionsProps) => {
  return options.map(key => (
    <Button key={key} onClick={() => onLeaveFeedback(key)}>
      {key}
    </Button>
  ));
};

export default FeedbackOptions;
