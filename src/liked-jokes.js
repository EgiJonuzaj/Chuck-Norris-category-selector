import { Spin, Button, List, Typography } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FROM_LIKED_LIST, ADD_LIKED_JOKE } from "./redux/actionType";
import { jokeLikedSelector, remove } from "./redux/selectors";

export const LikedJokes = ({ jokeData }) => {
  const likedJokes = useSelector(jokeLikedSelector);
  const removeJoke = useSelector(remove);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const likeJoke = useCallback(() => {
    setTimeout(() => {
      dispatch({
        type: ADD_LIKED_JOKE,
        payload: jokeData,
      });
      setIsLoading(false);
    }, 1000);
  }, [jokeData, dispatch]);

  const dislikeJoke = useCallback(() => {
    setTimeout(() => {
      dispatch({
        type: REMOVE_FROM_LIKED_LIST,
        payload: jokeData,
      });
      setIsLoading(false);
    }, 1000);
  }, [jokeData, dispatch]);


  if (!likedJokes || isLoading) {
    return (
      <div>
        <Spin />
      </div>
    );
  }
  // console.log(likeJoke,"is here")
  return (
    <>
      <Button onClick={likeJoke}>Like</Button>
      <List
        bordered
        dataSource={likedJokes}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
            <Button  style={{ marginLeft: "50px" }} onClick={dislikeJoke}>
              Dislike
            </Button>
          </List.Item>
        )}
      />
    </>
  );
};
