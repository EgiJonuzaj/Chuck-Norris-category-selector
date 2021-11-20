import {
  SELECT_CATEGORY,
  LOAD_CATEGORY_JOKE,
  REMOVE_FROM_LIKED_LIST,
} from "./actionType";

export const selectCategory = (category) => {
  return {
    type: SELECT_CATEGORY,
    payload: category,
  };
};

export const loadCategoryJokes = ({ joke }) => ({
  type: LOAD_CATEGORY_JOKE,
  payload: { joke },
});

export const removeFromLikedList = (text) => {
  return {
    type: REMOVE_FROM_LIKED_LIST,
    payload: { text },
  };
};
