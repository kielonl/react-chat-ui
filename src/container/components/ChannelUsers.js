import axios from "axios";
import React, { useState, useEffect } from "react";
import { LAST_API_URL } from "../../setup";
const userURL = LAST_API_URL;
const Users = () => {
  const [data, setDate] = useState([]);
  useEffect(() => {
    axios.get(userURL).then((resp) => {
      setDate(resp.data);
    });
  }, []);
  return (
    <>
      {data.map((element, index) => {
        return (
          <h1 key={index} className="menu-item">
            {element.username}
          </h1>
        );
      })}
    </>
  );
};
export default Users;
