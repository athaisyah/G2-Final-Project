const initialState = {
    name: '',
    no_account: '',
    no_phone: ''
};
  
const dataReducer = (state = initialState, action) => {
switch (action.type) {
    case "DATA":
    return {
        name: action.name,
        no_account: action.no_account,
        no_phone: action.no_phone,
    };
    default:
    return state;
}
};

export default dataReducer;
  