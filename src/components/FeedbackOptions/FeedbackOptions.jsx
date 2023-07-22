import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { OptionsWrapper } from './FeedbackOptions.styled';

const theme = createTheme({
  palette: {
    good: {
      main: '#1ca700',
    },
    neutral: {
      main: '#ffbb00',
    },
    bad: {
      main: '#ff3939',
    },
  },
});

const FeedbackOptions = ({ onClick, feedbackOptions }) => {
  return (
    <ThemeProvider theme={theme}>
      <OptionsWrapper>
        {Object.keys(feedbackOptions).map((key, ind) => {
          return (
            <Button
              className="optionButton"
              key={ind}
              onClick={() => onClick(key)}
              color={key}
              size="large"
              variant="contained"
            >
              {key}
            </Button>
          );
        })}
      </OptionsWrapper>
    </ThemeProvider>
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
