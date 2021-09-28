import React, {Component} from 'react';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import Statistics from './Statistics';

class App extends Component {
    static defaultProps = {
        initialValue: 0,
    };

    state = { 
        good: this.props.initialValue,
        neutral: this.props.initialValue,
        bad: this.props.initialValue,
        visible: false
    };

    countFeedback = (e) => {
        const name = e.target.name;
        this.setState((prev) => {
            return {
                [name]: prev[name] + 1,
                visible: true
            }
        });
    };

    countTotalFeedback = () => {
        let total = this.state.good + this.state.neutral + this.state.bad;
        return total;
    };

    countPositiveFeedbackPercentage = () => {
        let total = this.state.good + this.state.neutral + this.state.bad;
        if (total === 0) {
            return 0;
        };
        let positivePerc = this.state.good * 100 / total;
        return parseInt(positivePerc);
    }

    render() {
        return (
            <main>
                <Section title="Please leave feedback">
                    <FeedbackOptions onLeaveFeedback={this.countFeedback}/>
                </Section>
                <Section title="Statistics">
                    {this.state.visible ? (
                        <Statistics good={this.state.good} neutral={this.state.neutral} 
                        bad={this.state.bad} total={this.countTotalFeedback()} 
                        positivePercentage={this.countPositiveFeedbackPercentage()}/>)
                    : (
                        <Notification message="No feedback given"/>
                    )}
                </Section>
            </main>
        );
    };
};

export default App;
