import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryListItems from "./category-list-items";
import { getCategories } from "./services";
import { SELECT_CATEGORY } from "./redux/actionType";
import { useDispatch } from "react-redux";
import { selectCategory } from "./redux/actions";
import { Spin } from "antd";

function App() {
  const [categories, setCategories] = useState([""]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const fetchData = async () => {
    // TODO change to result.data
    // const { data } = getCategories();
    setIsLoading(true);
    setTimeout(() => {
      dispatch({
        type: SELECT_CATEGORY,
        payload: categories,
      });
      setCategories(["Category 1", "Category 2", "Category 3", "Category 4"]);

      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (!categories || isLoading) {
    return (
      <div>
        <Spin />
      </div>
    );
  }
  return <CategoryListItems data={categories} />;
}

export default App;
