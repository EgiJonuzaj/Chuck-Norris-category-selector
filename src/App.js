import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [categories, setCategories] = useState([""]);

  const fetchData = async () => {
    const result = await axios.get(
      "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories",
      {
        headers: {
          accept: "application/json",
          "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "479ecfdeacmsh5c6f8b141455f51p109312jsnb6decb0da1e7",
        },
      }
    );
    setCategories(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {categories.map((e) => {
        return <h3>{e}</h3>;
      })}
    </>
  );
}

export default App;
