const intitialState = {
  loggedIn: false,
  id: null,
  clientId: null,
  clientSecret: null,
};

export const reducer = (state = intitialState, action) => {
  console.log(action)
  switch (action.type) {
    case "LOGGED_IN": {
      const { id, clientId, clientSecret } = action;
      return Object.assign({}, state, { loggedIn: true, id, clientId, clientSecret });
    }
    case "LOGGED_OUT":
      return intitialState;
    default:
      return state;
  }
};
