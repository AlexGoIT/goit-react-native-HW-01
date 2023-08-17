export const useInputFormReducer = (state, action) => {
  return {
    ...state,
    [action.type]: action.payload,
  };
};
