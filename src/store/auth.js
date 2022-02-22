const authReducer = (state = { auth: false }, action) => {
  switch (action.type) {
    case "log":
      return {
        auth: !state.auth,
      };
      break;

    default:
      return {
        auth: state.auth,
      };
      break;
  }
};

export default authReducer;
