export const setTimer = time => ({ type: actionType.setTimer, time: time });
export const handleKeyPress = inputValue => ({ type: actionType.handleKeyPress, inputValue: inputValue });
export const startAgain = () => ({ type: actionType.startAgain });

// Action type
export const actionType = {
  setTimer: "set-timer",
  handleKeyPress: 'handleKeyPress',
  startAgain: 'startAgain'
};
