const WorkReducer = (state = {
    selectedSection : '1'
}, action) => {
    switch(action.type){
        case "SET_SELECTED_SECTION":
            return {
                ...state,
                selectedSection: action.payload,
            }
            
            default:
            return state
    }
}

export default WorkReducer;