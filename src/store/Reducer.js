// Action
import { actionType } from "./Action";

import { randomElementSelector } from '../helper/randomSelector';
import { testDetailsCalculator } from '../helper/testDetailsCalculator'
import { typingTestData } from '../data/source'

const initialState = {
  timerStarted: false,
  timeRemaining: 0,
  detailsData: {
    points: 0,
    words: 0,
    mistakes: 0,
  },
  selectedParagraph: randomElementSelector(typingTestData)
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.setTimer:
      return {
        ...state,
        timeRemaining: action.time
      };
    case actionType.handleKeyPress:
      const updatedDetails = testDetailsCalculator(state.selectedParagraph, action.inputValue.trim())
      return {
        ...state,
        detailsData: updatedDetails
      }
    case actionType.startAgain:
      return {
        ...initialState
      }
    default:
      return state;
  }
};

export default Reducer;