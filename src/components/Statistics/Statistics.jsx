import PropTypes from 'prop-types';

import { Box } from './Statistics.styled';
import StatisticsLayout from './StatisticsLayout';
import Notification from './Notification';

const Statistics = ({ feedbackOptions }) => {
  const { good, neutral, bad } = feedbackOptions;

  const totalFeedback = good + neutral + bad;
  const positivePercentage =
    totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

  return (
    <StatisticsLayout title="Statistics">
      {totalFeedback === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Box>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>
            Positive feedback: {positivePercentage ? positivePercentage : 0}%
          </p>
        </Box>
      )}
    </StatisticsLayout>
  );
};

export default Statistics;

Statistics.propTypes = {
  feedbackOptions: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
