import Constants from "../Constants.json";
const HomeReducer = (state = {
    prevScreen: "",
    currScreen: ""
}, action) => {
    switch (action.type) {
        case "SET_PREVIOUS_SCREEN": return { ...state, prevScreen: action.payload, }
        case "SET_CURRENT_SCREEN": return { ...state, currScreen: action.payload, }
        default:
            return state
    }
}

export default HomeReducer;