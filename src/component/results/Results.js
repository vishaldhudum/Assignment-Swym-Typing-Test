
import React from 'react'
import './Results.css';

import { startAgain } from '../../store/Action'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Button } from '../../../node_modules/react-bootstrap'

const Results = (props) => {

  React.useEffect(() => {
    if (props.points === 0) {
      props.history.push('./')
    }
  }, [props.points]);

  const startAgain = () => {
    props.startAgain();
    props.history.push('./')
  }

  return (
    <div className="try-again-container">
      <h1>Test Results</h1>

      <div className="result-container">
        <p><b>Points:</b> {props.points}</p>
      </div>

      <Button onClick={startAgain} className="start-again-btn" variant="success">Start Again</Button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    points: state.detailsData.points,
  };
};

const mapDispatchToProps = dispatch => ({
  startAgain: () => dispatch(startAgain()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Results));
