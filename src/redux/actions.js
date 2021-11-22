import {
  SELECT_CATEGORY,
  LOAD_CATEGORY_JOKE,
  REMOVE_FROM_LIKED_LIST,
  ADD_LIKED_JOKE,
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

export const addLikedJoke = (likedJokes) => {
  return {
    type: ADD_LIKED_JOKE,
    payload: likedJokes,
  };
};

export const removeFromLikedList = (dislikeJokes) => {
  return {
    type: REMOVE_FROM_LIKED_LIST,
    payload: dislikeJokes,
  };
};
