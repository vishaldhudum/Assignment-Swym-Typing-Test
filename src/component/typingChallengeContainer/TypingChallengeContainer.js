import './TypingChallengeContainer.css';

import ChallengeDetailsCard from '../../containers/ChallengeDetailsCard/ChallengeDetailsCard'
import TypingChallenge from './TypingChallenge/TypingChallenge'

import { connect } from "react-redux";

const TypingChallengeContainer = (props) => {
  return (
    <div className="test-container">
      <div className="details-container">
        <ChallengeDetailsCard
          cardName="Words"
          cardValue={props.words}
        />
        <ChallengeDetailsCard
          cardName="Points"
          cardValue={props.points}
        />
        <ChallengeDetailsCard
          cardName="Mistakes"
          cardValue={props.mistakes}
        />
      </div>
      <TypingChallenge />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    points: state.detailsData.points,
    words: state.detailsData.words,
    mistakes: state.detailsData.mistakes,
  };
};

export default connect(
  mapStateToProps
)(TypingChallengeContainer);