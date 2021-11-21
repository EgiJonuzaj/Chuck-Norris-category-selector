import { Spin, Button } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LikedJokes } from "./liked-jokes";
import { LOAD_CATEGORY_JOKE } from "./redux/actionType";
import { jokeSelector } from "./redux/selectors";

export const Joke = ({ category }) => {
  const joke = useSelector(jokeSelector);
  console.log(joke);
  
  const dispatch = useDispatch();
  
  const [isLoading, setIsLoading] = useState(false);

  const loadJoke = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const data = { value: `JOKE ${category} ${Math.random()}` };
      dispatch({
        type: LOAD_CATEGORY_JOKE,
        payload: { joke: data },
      });
      setIsLoading(false);
    }, 1000);
  }, [category, dispatch]);

  useEffect(() => {
    loadJoke();
  }, [loadJoke]);
  
  if (!joke || isLoading) {
    return (
      <div>
        <Spin />
      </div>
    );
  }
  return (
    <>
      <div>
        {joke.value} {""}
      </div>
      <Button onClick={loadJoke}>Next</Button>
        <LikedJokes category={category} jokeData={joke.value}/>
    </>
  );
};
