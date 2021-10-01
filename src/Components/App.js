import React, {Component} from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import Statistics from './statistics/Statistics';
import GlobalStyles from '../styles/globalStyles';


class App extends Component {
    static defaultProps = {
        initialValue: 0,
    };

    state = { 
        good: this.props.initialValue,
        neutral: this.props.initialValue,
        bad: this.props.initialValue,
        //visible: false
    };

    countFeedback = (e) => {
        const name = e.target.name;
        this.setState((prev) => {
            return {
                [name]: prev[name] + 1,
                //visible: true
            }
        });
    };

    countTotalFeedback = () => {
        const {good, neutral, bad} = this.state;
        let total = good + neutral + bad;
        return total;
    };

    countPositiveFeedbackPercentage = () => {
        let total = this.countTotalFeedback();
        if (total === 0) {
            return 0;
        };
        let positivePerc = this.state.good * 100 / total;
        return parseInt(positivePerc);
    }

    render() {
        return (
            <main>
                <GlobalStyles></GlobalStyles>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={this.state} onLeaveFeedback={this.countFeedback}/>
                </Section>
                <Section title="Statistics">
                    {/* {this.state.visible ? (
                        <Statistics good={this.state.good} neutral={this.state.neutral} 
                        bad={this.state.bad} total={this.countTotalFeedback()} 
                        positivePercentage={this.countPositiveFeedbackPercentage()}/>)
                    : (
                        <Notification message="No feedback given"/>
                    )} */}
                    {this.countTotalFeedback() === 0  ? (<Notification message="No feedback given"/>) :
                    (
                        <Statistics good={this.state.good} neutral={this.state.neutral} 
                        bad={this.state.bad} total={this.countTotalFeedback()} 
                        positivePercentage={this.countPositiveFeedbackPercentage()}/>)}

                </Section>
            </main>
        );
    };
};

export default App;
