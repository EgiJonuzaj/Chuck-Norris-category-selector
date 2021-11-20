import axios from "axios";

const defaultHeaders = {
  accept: "application/json",
  "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
  "x-rapidapi-key": "479ecfdeacmsh5c6f8b141455f51p109312jsnb6decb0da1e7",
};

const getUrl = (endpoint) =>
  `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/${endpoint}`;

export const getCategories = () =>
  axios.get(getUrl("jokes/categories"), {
    headers: defaultHeaders,
  });

export const getCategoryRandomJoke = (category) =>
  axios.get(`jokes/random/?category=${category}`, { headers: defaultHeaders });
