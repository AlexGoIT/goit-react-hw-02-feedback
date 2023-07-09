import PropTypes from 'prop-types';

import { Box } from './Statistics.styled';
import StatisticsLayout from './StatisticsLayout/StatisticsLayout';
import Notification from './Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsLayout title="Statistics">
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Box>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </Box>
      )}
    </StatisticsLayout>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  onCountTotalFeedback: PropTypes.number,
  onCountPositiveFeedbackPercentage: PropTypes.number,
};
