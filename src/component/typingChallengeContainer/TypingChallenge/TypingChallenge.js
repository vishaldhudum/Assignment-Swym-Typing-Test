import React from 'react'
import './TypingChallenge.css';

import { handleKeyPress } from '../../../store/Action'

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const TypingChallenge = (props) => {

  var timer;

  const [state, setState] = React.useState({
    timerStarted: false,
    timeRemaining: 0
  });

  React.useEffect(() => {
    if (props.timeRemaining === 0) {
      props.history.push('./')
    }
    
    setState({
      ...state,
      timeRemaining: props.timeRemaining
    })

  }, []);

  const handleChange = e => {
    if (!state.timerStarted) startTimer();

    if (e.target.value.slice(-1) === " ") {
      props.handleKeyPress(e.target.value);
    }
  }

  const startTimer = () => {
    setState({ ...state, timerStarted: true });
    timer = setInterval(ticker, 1000)
  }

  const ticker = () => {
    setState(prevState => {
      if (prevState.timeRemaining > 0) {
        return {
          ...prevState,
          timeRemaining: (prevState.timeRemaining - 1)
        }
      } else {
        clearInterval(timer);
        setTimeout(() => props.history.push('./results'), 1000);

        return { ...prevState }
      }
    })
  }

  const getTime = () => {
    var time = new Date(state.timeRemaining * 1000).toISOString().substr(14, 8);
    return time.substring(0, time.length - 3);
  }

  return (
    <div className="typing-challenge">
      <div className="timer-container">
        <p className="timer">{getTime()}</p>
        <p className="timer-info">{!state.timerStarted && 'Start typing to start the test'}</p>
        <p className="timer-info">{state.timeRemaining === 0 && 'Times Up!!!'}</p>
      </div>

      <div className="textarea-container">
        <div className="textarea-left ">
          <textarea
            disabled={true}
            className="textarea"
            value={props.selectedParagraph}
          >
          </textarea>
        </div>
        <div className="textarea-right">
          <textarea
            onChange={handleChange}
            className="textarea"
            placeholder="Start typing here"
          ></textarea>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    timeRemaining: state.timeRemaining,
    selectedParagraph: state.selectedParagraph
  };
};

const mapDispatchToProps = dispatch => ({
  handleKeyPress: inputValue => dispatch(handleKeyPress(inputValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TypingChallenge));