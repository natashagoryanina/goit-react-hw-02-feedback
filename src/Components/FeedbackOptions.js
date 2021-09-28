import React from 'react';

const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
        <>
            <button className="btn" name="good" type="button" onClick={onLeaveFeedback}>Good</button>
            <button className="btn" name="neutral" type="button" onClick={onLeaveFeedback}>Neutral</button>
            <button className="btn" name="bad" type="button" onClick={onLeaveFeedback}>Bad</button>
        </>
    );
}

export default FeedbackOptions;