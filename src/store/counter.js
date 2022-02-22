const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "decrement":
      return {
        counter: state.counter - action.amount,
      };
      break;

    case "incerement":
      return {
        counter: state.counter + action.amount,
      };
      break;

    case "reset":
      {
        return {
          counter: 0,
        };
      }
      break;

    default:
      return {
        counter: state.counter,
      };
      break;
  }
};

    export default counterReducer