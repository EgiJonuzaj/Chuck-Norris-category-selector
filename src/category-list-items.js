import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Joke } from "./joke";
import { SELECT_CATEGORY } from "./redux/actionType";
import { selectedCategorySelector } from "./redux/selectors";

const CategoryListItems = ({ data }) => {
  const selectedCategory = useSelector(selectedCategorySelector);
  const dispatch = useDispatch();

  return (
    <>
      {data.map((item) => (
        <Button
          key={item}
          type={item === selectedCategory ? "primary" : "default"}
          onClick={() => dispatch({ type: SELECT_CATEGORY, payload: item })}
        >
          {item}
        </Button>
      ))}
      {selectedCategory && <Joke category={selectedCategory} />}
    </>
  );
};

export default CategoryListItems;
