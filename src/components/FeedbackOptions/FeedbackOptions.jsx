import { OptionsWrapper } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onClick }) => {
  return (
    <OptionsWrapper>
      <button onClick={() => onClick('good')}>Good</button>
      <button onClick={() => onClick('neutral')}>Neutral</button>
      <button onClick={() => onClick('bad')}>Bad</button>
    </OptionsWrapper>
  );
};

export default FeedbackOptions;
