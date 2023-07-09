import { StatisticsWrapper } from './StatisticsLayout.styled';

export const StatisticsLayout = ({ title, children }) => {
  return (
    <StatisticsWrapper>
      <h2>{title}</h2>
      {children}
    </StatisticsWrapper>
  );
};
