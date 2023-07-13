import PropTypes from 'prop-types';
import { OptionsWrapper } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onClick, feedbackOptions }) => {
  return (
    <OptionsWrapper>
      {Object.keys(feedbackOptions).map((key, ind) => {
        return (
          <button key={ind} onClick={() => onClick(key)}>
            {key}
          </button>
        );
      })}
    </OptionsWrapper>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  feedbackOptions: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
