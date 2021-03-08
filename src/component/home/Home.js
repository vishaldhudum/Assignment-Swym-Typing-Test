import './Home.css'

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import SelectDropdown from '../../containers/SelectDropdown'
import { setTimer } from "../../store/Action";

import { Container, Button } from '../../../node_modules/react-bootstrap'

const timeOptions = [
  { value: 60, label: "1 min" },
  { value: 120, label: "2 min" },
  { value: 180, label: "3 min" },
]

function Home(props) {

  const handleChange = (e) => {
    props.setTimer(e.target.value);
  }

  const handleStart = () => props.history.push('./typingChallenge')

  return (
    <Container>
      <h2 className="sub-heading">Welcome to the Typing speed test</h2>
      <p className="description">Take the challenge and know your speed</p>
      <div className="time-dropdown">
        <SelectDropdown
          name="time"
          options={timeOptions}
          value={props.timerValue}
          onChange={handleChange}
        />
      </div>
      <Button variant="success" onClick={handleStart}>
        Start test
      </Button>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    timerValue: state.timeRemaining,
  };
};

const mapDispatchToProps = dispatch => ({
  setTimer: time => dispatch(setTimer(time)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home));