import _ from "lodash";
let initialState = {
  isLoggedIn: !!localStorage.getItem("apiKey")
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_STATUS_CHECK": {
      let newState = _.cloneDeep(state);
      newState.isLoggedIn = action.payload.status;
      return newState;
    }
    default:
      return state;
  }
};
