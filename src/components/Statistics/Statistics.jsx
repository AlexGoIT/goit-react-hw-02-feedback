import PropTypes from 'prop-types';

import { StatisticsLayout } from './StatisticsLayout/StatisticsLayout';
import { Notification } from './Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsLayout title="Statistics">
      {total() === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total()}</p>
          <p>positive: {positivePercentage()}%</p>
        </>
      )}
    </StatisticsLayout>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  onCountTotalFeedback: PropTypes.func,
  onCountPositiveFeedbackPercentage: PropTypes.func,
};
