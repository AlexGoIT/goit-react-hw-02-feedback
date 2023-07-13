import React, { Component } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

export class App extends Component {
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
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          onClick={this.onClick}
          feedbackOptions={this.state}
        ></FeedbackOptions>
        <Statistics feedbackOptions={this.state} />
      </Section>
    );
  }
}
