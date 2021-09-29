import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './FeedbackOptionsStyled';

const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
        <ButtonContainer>
            <button className="btn" name="good" type="button" onClick={onLeaveFeedback}>Good</button>
            <button className="btn" name="neutral" type="button" onClick={onLeaveFeedback}>Neutral</button>
            <button className="btn" name="bad" type="button" onClick={onLeaveFeedback}>Bad</button>
        </ButtonContainer>
    );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func
};

export default FeedbackOptions;