import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  componentDidMount() {
    document.title = 'HW-2 Feedback';
  }

  onClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedback = good + neutral + bad;
    const totalFeedbackPercentage =
      totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onClick={this.onClick}></FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={totalFeedbackPercentage}
        />
      </Section>
    );
  }
}
