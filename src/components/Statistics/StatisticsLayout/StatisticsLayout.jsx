import PropTypes from 'prop-types';
import { StatisticsWrapper } from './StatisticsLayout.styled';

const StatisticsLayout = ({ title, children }) => {
  return (
    <StatisticsWrapper>
      <h2>{title}</h2>
      {children}
    </StatisticsWrapper>
  );
};

export default StatisticsLayout;

StatisticsLayout.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};
