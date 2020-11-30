const initialState = {
  isLogin: false,
  name: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isLogin: true,
      };
    case "LOGOUT":
      return {
        isLogin: false,
      };
    default:
      return state;
  }
};

export default mainReducer;
