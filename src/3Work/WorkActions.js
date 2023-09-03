export const changeSelectedSection = (sectionId) => {
  return (dispatch, getState) => {
    dispatch({ type: "SET_SELECTED_SECTION", payload: sectionId });
  }
}