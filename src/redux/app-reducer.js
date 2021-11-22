import {
  SELECT_CATEGORY,
  LOAD_CATEGORY_JOKE,
  REMOVE_FROM_LIKED_LIST,
  ADD_LIKED_JOKE,
} from "./actionType";

const initiaState = {
  selectedCategory: undefined,
  joke: undefined,
  likedJokes: [],
};

export const appReducer = (state = initiaState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: payload,
      };
    case LOAD_CATEGORY_JOKE:
      return {
        ...state,
        joke: payload.joke,
      };
    case ADD_LIKED_JOKE:
      return {
        ...state,
        likedJokes: [...state.likedJokes, payload],
      };
    case REMOVE_FROM_LIKED_LIST:
      return {
        ...state,
        likedJokes: state.likedJokes.filter((a) => a !== action.payload),
      };
    default:
      return state;
  }
};
