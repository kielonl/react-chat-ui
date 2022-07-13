import React, { useEffect, useState } from "react";
import "./LoginFrom.css";
const axios = require("axios");
const Home = () => {
  const [data, setDate] = useState([]);
  //get wyświetla dane użytkowników w divach
  const url = "http://localhost:8080/users";

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        console.log("pobieranie danych", resp.data);
        setDate(resp.data);
      })
      .catch((err) => console.log(err));
  });

  const arr = data.map((data, index) => {
    return (
      <tr>
        <td>
          <th>username</th>
        </td>
        <tr>
          <td>{data.username}</td>
        </tr>
        <td>
          <th>Browser</th>
        </td>
        <tr>
          <td>{data.browser.name}</td>
        </tr>
        <td>
          <th>Url to image</th>
        </td>
        <tr>
          <td>{data.image}</td>
        </tr>
      </tr>
    );
  });

  return (
    <div className="homepage">
      <h1 className="home">Home page</h1>
      <div>
        <table>{arr}</table>
      </div>
    </div>
  );
};
export default Home;
