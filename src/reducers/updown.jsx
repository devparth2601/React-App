const initialState = 0;
const ChangeNumber = (state = initialState, action = ChangeNumber) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default ChangeNumber;
